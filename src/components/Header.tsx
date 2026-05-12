import { Link } from 'react-router-dom'

import logo from '../assets/NovaFauna-logo.png'

export function Header() {
    return (
        <header className="w-full border-b border-zinc-800 bg-background">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="Nova Fauna"
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* Navegação */}
                <nav className="flex items-center gap-8 text-sm font-medium text-zinc-300">
                    <button className="transition hover:text-primary">
                        Animais
                    </button>

                    <button className="transition hover:text-primary">
                        Criadouros
                    </button>

                    <button className="transition hover:text-primary">
                        Habitats
                    </button>
                </nav>
            </div>
        </header>
    )
}