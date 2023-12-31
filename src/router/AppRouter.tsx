import {Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { Navbar } from "../ui"
import { HerosRoutes } from "../heros"

export const AppRouter = () => {
  return (
    <>

      <Navbar/>

      <Routes>
        


          <Route path="login" element={<LoginPage/>}/>
          <Route path="/*" element={<HerosRoutes/>}/>


      </Routes>
    </>
  )
}
