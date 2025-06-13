import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { useState } from "react"

import searchSvg from "../assets/search.svg"
import { RefoundItem } from "../components/RefoundItem"
import { CATEGORIES } from "../utils/categories"

import { formatCurrency } from "../utils/formatCurrency"
import { Pagination } from "../components/Pagination"

const REFOUND_EXAMPLE = {
    id: "1",
    name: "João da Silva",
    category: "Alimentação",
    value: formatCurrency(34.5),
    categoryImg: CATEGORIES["transport"].icon
}

export function Dashboard(){
    const [ name, setName] = useState("")
    const [ page, setPage] = useState(1)
    const [ totalOfPage, setTotalOfPage] = useState(10)

    function fetchRefound(e: React.FormEvent){
        e.preventDefault()
        console.log("Fetching refound for:", name)
        // Aqui você pode adicionar a lógica para buscar as solicitações de reembolso
        // usando o nome fornecido.
    }

    function handlePagination(action: "next" | "prev"){
        setPage((prevPage)=>{
            if(action === "next" && prevPage < totalOfPage){
                return prevPage + 1
            }

            if(action === "prev" && prevPage > 1){
                return prevPage - 1
            }

            return prevPage
        })
    }

    return(
        <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
            <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>
            <form className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 mf:flex-row gap-2 mt-6" onSubmit={fetchRefound}>
                <Input placeholder="Pesquisar pelo nome" onChange={(e) => setName(e.target.value)}/>
                <Button type="submit" variant="icon" >
                    <img src={searchSvg} alt="Botão de pesquisa" className="w-5"/>
                </Button>
            </form>

            <div className="mt-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll" >
                <RefoundItem data={REFOUND_EXAMPLE}/>
            </div>

            <Pagination
                current={page}
                total={totalOfPage} onNext={() => handlePagination("next")} onPrev={() => handlePagination("prev")}
            />
        </div>
    )
}