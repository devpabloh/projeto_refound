import {CATEGORIES, CATEGORIES_LIST } from "../utils/categories"

import { useState } from "react"
import { useNavigate } from "react-router"

import { Input } from "../components/Input"
import { Select } from "../components/Select"
import { Upload } from "../components/Upload"
import { Button } from "../components/Button"


export function Refound(){
    const [category, setCategory] = useState("")
    const[name, setName] = useState("")
    const [ amount, setAmount] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [fileName, setFileName] = useState<File | null>(null)

    const navigate = useNavigate()

    function onSubmit(e: React.FormEvent){
        e.preventDefault()

        console.log(name, category, amount, fileName)
        navigate("/confirm", {state: {fromSubmit: true}})
    }

    return(
        <form className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px]:" onSubmit={onSubmit}>
            <header>
                <h1 className="text-xl font-bold text-gray-100">Solicitação de reembolso</h1>
                <p className="text-sm text-gray-200 mt-2 mb-4">Dados da despesa para solicitar reembolso.</p>
            </header>
            <Input required legend="Nome da solicitação" value={name} onChange={(e)=> setName(e.target.value)}/>
            <div className="flex gap-4">
                <Select required legend="Categoria" value={category} onChange={(e)=> setCategory(e.target.value)}>
                    {
                        CATEGORIES_LIST.map((category=>(
                            <option>
                                {CATEGORIES[category].name}
                            </option>
                        )))
                    }
                </Select>
                <Input legend="Valor" required value={amount} onChange={(e)=> setAmount(e.target.value)}/>
            </div>
            <Upload fileName={fileName && fileName.name} onChange={(e)=> e.target.files && setFileName(e.target.files[0])}/>
            
            <Button type="submit" isLoading={isLoading}>Enviar</Button>
        </form>
    )
}