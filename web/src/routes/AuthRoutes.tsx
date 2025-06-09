import { Routes, Route } from "react-router";

/* Componentes */
import { AuthLayout } from "../components/AuthLayout";

/* Pages */
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/signUp";
import { NotFound } from "../pages/NotFound";

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AuthLayout/>}>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}