import logoSvg from "../assets/logo.svg"
import logoutSvg from "../assets/logout.svg"

export function Header(){
    return(
        <header>
            <img src={logoSvg} alt="Logo Refound" />
            <div>
                <span>Olá, Pablo</span>
                <img src={logoutSvg} alt="ícone de sair" />
            </div>
        </header>
    )
}