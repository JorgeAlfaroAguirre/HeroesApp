import { DCPage, MarvelPage, HeroPage, SearchPage } from ".."
import {Route, Routes, Navigate } from "react-router-dom"

export const HerosRoutes = () => {
  return (
    <>

        <Routes>
            <Route path="marvel" element={<MarvelPage/>}/>
            <Route path="dc" element={<DCPage/>}/>
            <Route path="hero/:id" element={<HeroPage/>}/>
            <Route path="search" element={<SearchPage/>}/>
            

            <Route path="/" element={<Navigate to="/Marvel"/>}/>
        </Routes>

    </>
  )
}
