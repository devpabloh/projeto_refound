
import { BrowserRouter } from "react-router";

import { useAuth } from "../hooks/useAuth";

import { AuthRoutes } from "./AuthRoutes";
import { EmploeeRoutes } from "./EmploeeRoutes";
import { ManagerRoutes } from "./ManegerRoutes";

import { Loading } from "../components/Loading";

export function Routes() {
    const {session, isLoading} = useAuth()
    

    function Route(){
        switch (session?.user.role) {
            case "employee":
                return <EmploeeRoutes />;
            case "manager":
                return <ManagerRoutes />;
            default: 
                return <AuthRoutes />;
        }
    }

    if(isLoading){
        return (
            <Loading/>
        )
    }

    return (
        <BrowserRouter>
            <Route />
        </BrowserRouter>
    )
}