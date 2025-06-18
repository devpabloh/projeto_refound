import { useState, type ReactNode } from "react"
import {createContext} from "react"

type AuthContext = {
    session: null | UserApiResponse
    save: (data: UserApiResponse) => void
}

const LOCAL_STORAGE_KEY = "@REFOUND"

export const AuthContext = createContext({} as AuthContext)

export function AuthProvider({children}:{children: ReactNode}){
    const [session, setSession] = useState<null | UserApiResponse>(null)

    function save(data: UserApiResponse ){
        localStorage.setItem(`${LOCAL_STORAGE_KEY}:user`, JSON.stringify(data.user))
        localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, JSON.stringify(data.token))
        setSession(data)
    }

    return (
        <AuthContext.Provider value={{session, save}}>
            {children}
        </AuthContext.Provider>
    )
}