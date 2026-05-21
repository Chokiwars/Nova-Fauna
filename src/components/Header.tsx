import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import logo from '../assets/NovaFauna-logo.png'

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header
            className={`
                fixed left-0 top-0 z-50 w-full border-b border-white/10
                transition-all duration-500
                ${isScrolled
                    ? 'bg-black/40 backdrop-blur-xl'
                    : 'bg-black'
                }
            `}
        >
            <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

                {/* Logo + Title */}
                <Link
                    to="/"
                    className="group flex items-center gap-4"
                >
                    <div className="overflow-hidden rounded-2xl border border-primary/20 bg-primary/10 p-2 backdrop-blur-md transition duration-300 group-hover:border-primary/40 group-hover:bg-primary/20">
                        <img
                            src={logo}
                            alt="Nova Fauna"
                            className="h-14 w-14 object-contain transition duration-500 group-hover:scale-110"
                        />
                    </div>

                    <div className="flex flex-col">
                        <span className="text-4xl font-black tracking-wide text-white transition duration-300 group-hover:text-primary">
                            Nova Fauna
                        </span>

                        <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                            Pets não convencionais
                        </span>
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="hidden items-center gap-8 lg:flex">

                    {/* Animais */}
                    <div className="group relative">
                        <Link
                            to="/animais"
                            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300 transition hover:text-primary"
                        >
                            Animais

                            <ChevronDown className="h-4 w-4 transition duration-300 group-hover:rotate-180" />
                        </Link>

                        <div
                            className="
                                invisible absolute left-0 top-10 z-50 w-64
                                translate-y-2 opacity-0
                                transition-all duration-300
                                group-hover:visible
                                group-hover:translate-y-0
                                group-hover:opacity-100
                            "
                        >
                            <div className="overflow-hidden rounded-2xl border border-primary/20 bg-black/70 p-3 shadow-2xl backdrop-blur-xl">

                                <Link
                                    to="/animais/serpentes"
                                    className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-primary/10 hover:text-primary"
                                >
                                    Serpentes
                                </Link>

                                <Link
                                    to="/animais/lagartos"
                                    className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-primary/10 hover:text-primary"
                                >
                                    Lagartos
                                </Link>

                                <Link
                                    to="/animais/anfibios"
                                    className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-primary/10 hover:text-primary"
                                >
                                    Anfíbios
                                </Link>

                                <Link
                                    to="/animais/aracnideos"
                                    className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-primary/10 hover:text-primary"
                                >
                                    Aracnídeos
                                </Link>

                                <Link
                                    to="/animais/aves"
                                    className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-primary/10 hover:text-primary"
                                >
                                    Aves
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Criadouros */}
                    <div className="group relative">
                        <Link
                            to="/criadouros"
                            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300 transition hover:text-primary"
                        >
                            Criadouros

                            <ChevronDown className="h-4 w-4 transition duration-300 group-hover:rotate-180" />
                        </Link>

                        <div
                            className="
                                invisible absolute left-0 top-10 z-50 w-64
                                translate-y-2 opacity-0
                                transition-all duration-300
                                group-hover:visible
                                group-hover:translate-y-0
                                group-hover:opacity-100
                            "
                        >
                            <div className="overflow-hidden rounded-2xl border border-primary/20 bg-black/70 p-3 shadow-2xl backdrop-blur-xl">

                                <Link
                                    to="/criadouros/legalizados"
                                    className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-primary/10 hover:text-primary"
                                >
                                    Legalizados
                                </Link>

                                <Link
                                    to="/criadouros/parceiros"
                                    className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-primary/10 hover:text-primary"
                                >
                                    Parceiros
                                </Link>

                                <Link
                                    to="/criadouros/bem-estar-animal"
                                    className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-primary/10 hover:text-primary"
                                >
                                    Bem-estar animal
                                </Link>

                                <Link
                                    to="/criadouros/compra-responsavel"
                                    className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-primary/10 hover:text-primary"
                                >
                                    Compra responsável
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Habitats */}
                    <div className="group relative">
                        <Link
                            to="/habitats"
                            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300 transition hover:text-primary"
                        >
                            Habitats

                            <ChevronDown className="h-4 w-4 transition duration-300 group-hover:rotate-180" />
                        </Link>

                        <div
                            className="
                                invisible absolute left-0 top-10 z-50 w-64
                                translate-y-2 opacity-0
                                transition-all duration-300
                                group-hover:visible
                                group-hover:translate-y-0
                                group-hover:opacity-100
                            "
                        >
                            <div className="overflow-hidden rounded-2xl border border-primary/20 bg-black/70 p-3 shadow-2xl backdrop-blur-xl">

                                <Link
                                    to="/habitats/terrarios"
                                    className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-primary/10 hover:text-primary"
                                >
                                    Terrários
                                </Link>

                                <Link
                                    to="/habitats/aquaterrarios"
                                    className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-primary/10 hover:text-primary"
                                >
                                    Aquaterrários
                                </Link>

                                <Link
                                    to="/habitats/aquarios"
                                    className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-primary/10 hover:text-primary"
                                >
                                    Aquários
                                </Link>

                                <Link
                                    to="/habitats/ambientacao-natural"
                                    className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-primary/10 hover:text-primary"
                                >
                                    Ambientação natural
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Guias */}
                    <div className="group relative">
                        <Link
                            to="/guias"
                            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300 transition hover:text-primary"
                        >
                            Guias

                            <ChevronDown className="h-4 w-4 transition duration-300 group-hover:rotate-180" />
                        </Link>

                        <div
                            className="
                                invisible absolute left-0 top-10 z-50 w-64
                                translate-y-2 opacity-0
                                transition-all duration-300
                                group-hover:visible
                                group-hover:translate-y-0
                                group-hover:opacity-100
                            "
                        >
                            <div className="overflow-hidden rounded-2xl border border-primary/20 bg-black/70 p-3 shadow-2xl backdrop-blur-xl">

                                <Link
                                    to="/guias/alimentacao"
                                    className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-primary/10 hover:text-primary"
                                >
                                    Alimentação
                                </Link>

                                <Link
                                    to="/guias/cuidados-basicos"
                                    className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-primary/10 hover:text-primary"
                                >
                                    Cuidados básicos
                                </Link>

                                <Link
                                    to="/guias/manejo"
                                    className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-primary/10 hover:text-primary"
                                >
                                    Manejo
                                </Link>

                                <Link
                                    to="/guias/curiosidades"
                                    className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-primary/10 hover:text-primary"
                                >
                                    Curiosidades
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}