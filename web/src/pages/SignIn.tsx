import { Input } from "../components/Input"

export function SignIn(){
    return(
        <form className="w-full flex flex-col gap-4">
            <Input required legend="E-mail" type="email" placeholder="seuemail@email.com"/>
            <Input required legend="senha" type="password" placeholder="Digite sua senha..."/>
        </form>
    )
}