import logoSvg from "../assets/logo.svg"
import logoutSvg from "../assets/logout.svg"

export function Header(){
    return(
        <header className="w-full flex justify-between">
            <img src={logoSvg} alt="Logo Refound" />
            <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-200">Olá, Pablo</span>
                <img src={logoutSvg} alt="ícone de sair" className="cursor-pointer my-8 hover:opacity-75 transition ease-linear"/>
            </div>
        </header>
    )
}