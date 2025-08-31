import { NextFunction, Request, Response } from "express"
import z, { ZodError } from "zod"

import uploadConfig from "@/configs/upload"
import { DiskStorage } from "@/providers/disk-storage"
import { AppError } from "@/utils/AppError"

class UploadsController {
  async create(request: Request, response: Response, next: NextFunction) {
    const diskStorage = new DiskStorage()

    try {
      const fileSchema = z
        .object({
          filename: z.string().min(1, "Arquivo é obrigatório"),
          mimetype: z
            .string()
            .refine(
              (type) => uploadConfig.ACCEPTED_IMAGE_TYPES.includes(type),
              "Formato de arquivo inválido. Apenas JPEG, PNG e PDF são permitidos."
            ),
          size: z
            .number()
            .positive()
            .refine(
              (size) => size <= uploadConfig.MAX_FILE_SIZE,
              "Arquivo excede o tamanho máximo de 1MB."
            ),
        })
        .passthrough() // Permite propriedades adicionais que o multer adiciona ao arquivo

      const file = fileSchema.parse(request.file)
      
      let filename: string
      
      if (process.env.NODE_ENV === 'production') {
        // Em produção, o Cloudinary já retorna a URL
        filename = (request.file as any).url || (request.file as any).secure_url
      } else {
        // Em desenvolvimento, usa o storage local
        filename = await diskStorage.saveFile(file.filename)
      }

      response.status(201).json({ filename })
    } catch (error) {
      if (error instanceof ZodError) {
        if (request.file && process.env.NODE_ENV !== 'production') {
          await diskStorage.deleteFile(request.file.filename, "tmp")
        }

        throw new AppError(error.issues[0].message)
      }

      throw error
    }
  }
}

export { UploadsController }
