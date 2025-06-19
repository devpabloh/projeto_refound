import { useEffect, useMemo, useState, type ReactNode } from "react"
import {createContext} from "react"

import { api } from "../services/api"

type AuthContext = {
    isLoading: boolean
    session: null | UserApiResponse
    save: (data: UserApiResponse) => void
    remove: () => void
}

const LOCAL_STORAGE_KEY = "@REFOUND"

export const AuthContext = createContext({} as AuthContext)

export function AuthProvider({children}:{readonly children: ReactNode}){
    const [session, setSession] = useState<null | UserApiResponse>(null)
    const [isLoading, setIsLoading] = useState(true)

    function save(data: UserApiResponse ){
        localStorage.setItem(`${LOCAL_STORAGE_KEY}:user`, JSON.stringify(data.user))
        localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, data.token)

        api.defaults.headers.common["Authorization"] = `Bearer ${data.token}` // adicionando um cabeçalho de autorização no login do usuário

        setSession(data)
    }

    function remove(){
        setSession(null)
        localStorage.removeItem(`${LOCAL_STORAGE_KEY}:user`)
        localStorage.removeItem(`${LOCAL_STORAGE_KEY}:token`)

        window.location.assign("/") // nevegando para a página raiz da aplicação.
    }

    function loadUser(){
        const user = localStorage.getItem(`${LOCAL_STORAGE_KEY}:user`)
        const token = localStorage.getItem(`${LOCAL_STORAGE_KEY}:token`)

        if(token && user){
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`

            setSession({token, user: JSON.parse(user)})
        }

        setIsLoading(false)
    }

    useEffect(()=>{
        loadUser()
    },[])

    const value = useMemo(()=>({
        session,
        save,
        isLoading,
        remove
    }), [session, isLoading])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}