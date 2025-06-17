import { useState, type ReactNode } from "react"
import {createContext} from "react"

type AuthContext = {
    session?: null | UserApiResponse
}

export const AuthContext = createContext({
    
} as AuthContext)

export function AuthProvider({children}:{children: ReactNode}){
    const [session, setSession] = useState<null | UserApiResponse>(null)
    return (
        <AuthContext.Provider value={{session}}>
            {children}
        </AuthContext.Provider>
    )
}