import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";
import { EmploeeRoutes } from "./EmploeeRoutes";
import { ManagerRoutes } from "./ManegerRoutes";

import { Loading } from "../components/Loading";

const isLoading = false; // simulando o carregamento

/* const session = undefined; */


const session = {
    user: {
        role: ""
    }
}

export function Routes() {

    function Route(){
        switch (session?.user.role) {
            case "employee":
                return <EmploeeRoutes />;
                break;
        case "manager":
                return <ManagerRoutes />;
                break
            default: 
                return <AuthRoutes />;
                break;
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