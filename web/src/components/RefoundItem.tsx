

export type RefoundItemProps = {
    id: string
    name: string
    category: string
    value: string
    categoryImg: string
}


type Props = React.ComponentProps<"a"> & {
    data: RefoundItemProps
}

export function RefoundItem({data, ...rest}:Props){
    return(
        <a href="" {...rest} className="flex items-center gap-3 hover:bg-green-100/50 cursor-pointer rounded-md p-2">

            <img src={data.categoryImg} alt="ícone da categoria" className="w-8 h-8" />
            
            <div className="flex flex-col flex-1">
                <strong className="text-sm text-gray-100" >{data.name}</strong>
                <span className=" text-xs text-gray-200">{data.category}</span>
            </div>
            <span className="text-sm text-gray-100 font-semibold">
                <small className="font-small text-gray-200">R$</small>
                {data.value}
            </span>
        </a>
    )
}