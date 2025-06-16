import { useState } from "react"
import { z,ZodError } from "zod"

import { Input } from "../components/Input"
import { Button } from "../components/Button"

const signUpSchema = z.object({
    name: z.string().trim().min(1, {message: "Informe o seu nome"}),
    email: z.string().email({message: "E-mail inválido"}),
    password: z.string().min(6, {message: "A senha deve ter pelo menos 6 caracteres"}),
    confirmPassword: z.string({message: "confirme sua senha"})
}).refine((data)=> data.password === data.confirmPassword, {
    message: "As senhas não são iguais",
    path: ["confirmPassword"] // Definimos o campo que queremos utilizar como referência para o erro
})



export function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    function onSubmit(e: React.FormEvent){
        e.preventDefault()

        try {
            setIsLoading(true)

            const data = signUpSchema.parse({
                name,
                email,
                password,
                confirmPassword
            })


        } catch (error) {
            if(error instanceof ZodError){
                return alert(error.issues[0].message)
            }

            alert("Ocorreu um erro ao cadastrar o usuário. Tente novamente mais tarde.")
        }finally{
            setIsLoading(false)
        }
    }

    return(
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
            <Input required legend="Nome" placeholder="Digite o seu nome" onChange={(e)=> setName(e.target.value)}/>
            <Input required legend="E-mail" type="email" placeholder="Digite o seu e-mail" onChange={(e)=> setEmail(e.target.value)}/>
            <Input required legend="Senha" type="password" placeholder="Digite uma senha" onChange={(e)=> setPassword(e.target.value)}/>
            <Input required legend="Confirmar Senha" type="password" placeholder="Confirmar a senha" onChange={(e)=> setConfirmPassword(e.target.value)}/>

            <Button type="submit" isLoading={isLoading}>Cadastrar</Button>

            <a href="/" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Já tenho uma conta</a>
        </form>
    )
}