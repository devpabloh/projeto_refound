import { Input } from "../components/Input"
import { useState } from "react"

export function Dashboard(){
    const [ name, setName] = useState("")

    function fetchRefound(e: React.FormEvent){
        e.preventDefault()
        console.log("Fetching refound for:", name)
        // Aqui você pode adicionar a lógica para buscar as solicitações de reembolso
        // usando o nome fornecido.
    }

    return(
        <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
            <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>
            <form className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 mf:flex-row gap-2 mt-6" onSubmit={fetchRefound}>
                <Input placeholder="Pesquisar pelo nome" onChange={(e) => setName(e.target.value)}/>
            </form>
        </div>
    )
}