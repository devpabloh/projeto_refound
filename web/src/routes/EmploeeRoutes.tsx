import {Routes, Route} from "react-router"

import { AppLayout } from "../components/AppLayout"
import { Refound } from "../pages/Refound"
import { NotFound } from "../pages/NotFound"
import { Confirm } from "../pages/Confirm"

export function EmploeeRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route path="/" element={<Refound/>}/>
                <Route path="/confirm" element={<Confirm/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}