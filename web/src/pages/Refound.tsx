import {CATEGORIES, CATEGORIES_LIST } from "../utils/categories"

import fileSvg from "../assets/file.svg"

import { useState } from "react"
import { useNavigate, useParams } from "react-router"

import { Input } from "../components/Input"
import { Select } from "../components/Select"
import { Upload } from "../components/Upload"
import { Button } from "../components/Button"


export function Refound(){
    const [category, setCategory] = useState("Teste")
    const[name, setName] = useState("34")
    const [ amount, setAmount] = useState("Transport")
    const [isLoading, setIsLoading] = useState(false)
    const [fileName, setFileName] = useState<File | null>(null)

    const navigate = useNavigate()
    const params = useParams<{id: string}>()
    console.log(`Params id: ${params.id}`)

    function onSubmit(e: React.FormEvent){
        e.preventDefault()

        if(params.id){
            return navigate(-1)
        }

        console.log(name, category, amount, fileName)
        navigate("/confirm", {state: {fromSubmit: true}})
    }

    return(
        <form className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px]:" onSubmit={onSubmit}>
            <header>
                <h1 className="text-xl font-bold text-gray-100">Solicitação de reembolso</h1>
                <p className="text-sm text-gray-200 mt-2 mb-4">Dados da despesa para solicitar reembolso.</p>
            </header>
            <Input required legend="Nome da solicitação" value={name} onChange={(e)=> setName(e.target.value)} disabled={!!params.id}/>
            <div className="flex gap-4">
                <Select required legend="Categoria" value={category} onChange={(e)=> setCategory(e.target.value)} disabled={!!params.id}>
                    {
                        CATEGORIES_LIST.map((category=>(
                            <option key={category}>
                                {CATEGORIES[category].name}
                            </option>
                        )))
                    }
                </Select>
                <Input legend="Valor" required value={amount} onChange={(e)=> setAmount(e.target.value)} disabled={!!params.id}/>
            </div>

            {
                params.id ? (
                    <a href="https://devpabloh.github.io/portfolio-dev-pabloh/#contact" target="_blank" rel="noopener" className="text-sm text-green-100 font-semibold flex items-center justify-center gap-2 my-6 hover:opacity-50 transition ease-linear">
                        <img src={fileSvg} alt="Imagem do arquivo" />
                        Abrir Comprovante
                    </a>
                ) : (
                    <Upload fileName={fileName && fileName.name} onChange={(e)=> e.target.files && setFileName(e.target.files[0])} disabled={!!params.id}/>
                )
            }

            
            
            <Button type="submit" isLoading={isLoading}>
                {params.id ? "voltar" : "Enviar"}
            </Button>
        </form>
    )
}