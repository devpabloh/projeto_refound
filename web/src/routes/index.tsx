import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";
import { EmploeeRoutes } from "./EmploeeRoutes";
import { ManagerRoutes } from "./ManegerRoutes";

import { Loading } from "../components/Loading";

const isLoading = false; // simulando o carregamento

export function Routes() {

    if(isLoading){
        return (
            <Loading/>
        )
    }

    return (
        <BrowserRouter>
            <ManagerRoutes />
        </BrowserRouter>
    )
}