import { Navigate, useLocation } from "react-router"
import okSvg from "../assets/ok.svg";

export function Confirm(){
    const location = useLocation();

    if(!location.state?.fromSubmit){
        return <Navigate to="/"/>
    }

    return(
        <div className= "bg-gray-500 lg:w-[512px]">
            <h1>Solicitação enviada! </h1>
            <img src={okSvg} alt="ícone de ok" className="w-28"/>
            <p> Agora é apenas aguardar! Sua solicitação será analisada e, em breve, o setor financeiro irá entrar em contato com você.</p>

            <a href="/">Nova solicitação </a>
        </div>
    )
}