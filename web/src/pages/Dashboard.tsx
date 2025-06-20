import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { useState, useEffect } from "react"

import searchSvg from "../assets/search.svg"
import { RefoundItem } from "../components/RefoundItem"
import type { RefoundItemProps } from "../components/RefoundItem"
import { CATEGORIES } from "../utils/categories"

import { formatCurrency } from "../utils/formatCurrency"
import { Pagination } from "../components/Pagination"
import { api } from "../services/api"
import { AxiosError } from "axios"

const PER_PAGE = 5

export function Dashboard(){
    const [ name, setName] = useState("")
    const [ page, setPage] = useState(1)
    const [ totalOfPage, setTotalOfPage] = useState(0)
    const [refunds, setRefunds] = useState<RefoundItemProps[]>([])

    async function fetchRefound(){
        try {
            const response = await api.get<RefundsPaginationApiResponse>(`/refunds?name=${name.trim()}&page=${page}&perPage=${PER_PAGE}`)

            setRefunds(
                response.data.refunds.map((refound)=>({
                    id: refound.id,
                    name: refound.user.name,
                    category: refound.name,
                    value: formatCurrency(refound.amount),
                    categoryImg: CATEGORIES[refound.category].icon
                }))
            )
        } catch (error) {
            console.log(error)

            if(error instanceof AxiosError){
                return alert(error.response?.data.message)
            }

            alert("Não foi possível carregar")
        }
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

    useEffect(()=>{
        fetchRefound()
    },[])

    return(
        <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
            <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>
            <form className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 mf:flex-row gap-2 mt-6" onSubmit={fetchRefound}>
                <Input placeholder="Pesquisar pelo nome" onChange={(e) => setName(e.target.value)}/>
                <Button type="submit" variant="icon" >
                    <img src={searchSvg} alt="Botão de pesquisa" className="w-5"/>
                </Button>
            </form>

            <div className="my-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll" >
                {refunds.map((item)=>(
                    <RefoundItem key={item.id} data={item} href={`/refund/${item.id}`}/>
                ))}
                
            </div>

            <Pagination
                current={page}
                total={totalOfPage} onNext={() => handlePagination("next")} onPrev={() => handlePagination("prev")}
            />
        </div>
    )
}