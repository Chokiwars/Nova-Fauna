import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { MainLayout } from '@/layouts/MainLayout'

import { HomePage } from '@/pages/HomePage/index'
import { AnimalsPage } from '@/pages/AnimalsPage/index'
import { SnakesPage } from "@/pages/AnimalsPage/especies/SnakesPage/index"
import { SnakeSpeciesPage } from '@/pages/AnimalsPage/especies/SnakesPage/species-list'
import { BallPythonPage } from '@/pages/AnimalsPage/especies/SnakesPage/species/BallPython/index'
import { BCCPage } from '@/pages/AnimalsPage/especies/SnakesPage/species/BoaConstrictorConstrictor/index'
import { MaintenancePage } from '@/pages/MaintenancePage'
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
                    <Route path="/animais/serpentes/python-regius" element={<BallPythonPage />} />
                    <Route path="/animais/serpentes/boa-constrictor-constrictor" element={<BCCPage />} />

                    {/* <Route path="habitats" element={<Habitats />} />
                    <Route path="breeders" element={<Breeders />} /> */}
                </Route>

                {/* <Route path="*" element={<NotFound />} /> */}

                <Route
                    path="/animais/serpentes/boa-constrictor-constrictor"
                    element={
                        <MaintenancePage
                            title="Boa Constrictor"
                            description="A página desta espécie está sendo preparada. Em breve você poderá conhecer mais sobre sua biologia, comportamento, habitat e cuidados."
                        />
                    }
                />
                <Route
                    path="/animais/lagartos"
                    element={
                        <MaintenancePage
                            title="Lagartos"
                            description="A página destas espécies está sendo preparada. Em breve você poderá conhecer mais sobre sua biologia, comportamento, habitat e cuidados."
                        />
                    }
                />
                <Route
                    path="/animais/anfibios"
                    element={
                        <MaintenancePage
                            title="Anfibios"
                            description="A página destas espécies está sendo preparada. Em breve você poderá conhecer mais sobre sua biologia, comportamento, habitat e cuidados."
                        />
                    }
                />
                <Route
                    path="/animais/aracnideos"
                    element={
                        <MaintenancePage
                            title="Aracnídeos"
                            description="A página destas espécies está sendo preparada. Em breve você poderá conhecer mais sobre sua biologia, comportamento, habitat e cuidados."
                        />
                    }
                />
                <Route
                    path="/animais/aves"
                    element={
                        <MaintenancePage
                            title="Aves"
                            description="A página destas espécies está sendo preparada. Em breve você poderá conhecer mais sobre sua biologia, comportamento, habitat e cuidados."
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}