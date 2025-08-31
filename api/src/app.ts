import express from "express"
import "express-async-errors"
import cors from "cors"

import { routes } from "./routes"
import { errorHandling } from "./middlewares/error-handling"
import uploadConfig from "@/configs/upload"

const app = express()

// Configuração do CORS para produção
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL || 'https://seu-frontend.vercel.app'
    : 'http://localhost:5173',
  credentials: true
}))

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Serve arquivos estáticos apenas em desenvolvimento
if (process.env.NODE_ENV !== 'production') {
  app.use("/uploads", express.static(uploadConfig.UPLOADS_FOLDER))
}

app.use(routes)
app.use(errorHandling)

export { app }
