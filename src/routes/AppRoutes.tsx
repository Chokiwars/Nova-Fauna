import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { MainLayout } from '@/layouts/MainLayout'

import { HomePage } from '@/pages/HomePage/index'
import { AnimalsPage } from '@/pages/AnimalsPage/index'
import { SnakesPage } from "@/pages/AnimalsPage/especies/SnakesPage/index"
import { SnakeSpeciesPage } from '@/pages/AnimalsPage/especies/SnakesPage/species-list'
import { BallPythonIntroduction } from '@/pages/AnimalsPage/especies/SnakesPage/species/BallPython/components/BallPythonIntroduction'
// import { Habitats } from '@/pages/Habitats'
// import { Breeders } from '@/pages/Breeders'
// import { NotFound } from '@/pages/NotFound'

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/animais" element={<AnimalsPage />} />
                    <Route path="/animais/serpentes" element={<SnakesPage />} />
                    <Route path="/animais/serpentes/especies" element={<SnakeSpeciesPage />} />
                    <Route path="/animais/serpentes/ball-python" element={<BallPythonIntroduction />} />

                    {/* <Route path="habitats" element={<Habitats />} />
                    <Route path="breeders" element={<Breeders />} /> */}
                </Route>

                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </BrowserRouter>
    )
}