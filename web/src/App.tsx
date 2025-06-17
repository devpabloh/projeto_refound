import { AuthProvider } from "./contexts/AuthContext"

import { Routes } from "./routes"

export function App(){
  /* localStorage.setItem("name", "Pablo Henrique")
  localStorage.removeItem("name")
  console.log(localStorage.getItem("name")) */
  return(
    <AuthProvider>
      <Routes/>
    </AuthProvider>
    
  )
}