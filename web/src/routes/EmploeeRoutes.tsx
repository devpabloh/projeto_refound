import {Routes, Route} from "react-router"

import { AppLayout } from "../components/AppLayout"
import { Refound } from "../pages/Refound"
import { NotFound } from "../pages/NotFound"

export function EmploeeRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route path="/" element={<Refound/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}