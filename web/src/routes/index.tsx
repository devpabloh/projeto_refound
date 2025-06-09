import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";
import { EmploeeRoutes } from "./EmploeeRoutes";

export function Routes() {
    return (
        <BrowserRouter>
            <EmploeeRoutes />
        </BrowserRouter>
    )
}