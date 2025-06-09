import { useState } from "react"

import { Input } from "../components/Input"
import { Button } from "../components/Button"



export function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function onSubmit(e: React.FormEvent){
        e.preventDefault()

        console.log(name, email, password, confirmPassword)
    }

    return(
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
            <Input required legend="Nome" placeholder="Digite o seu nome" onChange={(e)=> setName(e.target.value)}/>
            <Input required legend="E-mail" type="email" placeholder="Digite o seu e-mail" onChange={(e)=> setEmail(e.target.value)}/>
            <Input required legend="Senha" type="password" placeholder="Digite uma senha" onChange={(e)=> setPassword(e.target.value)}/>
            <Input required legend="Confirmar Senha" type="password" placeholder="Confirmar a senha" onChange={(e)=> setConfirmPassword(e.target.value)}/>

            <Button type="submit">Cadastrar</Button>
            <a href="/" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Já tenho uma conta</a>
        </form>
    )
}