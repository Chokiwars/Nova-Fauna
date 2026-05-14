import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'

export function MainLayout() {
    return (
        <div className="min-h-screen bg-background text-white">
            <Header />

            <main className="pt-24">
                <Outlet />
            </main>
        </div>
    )
}