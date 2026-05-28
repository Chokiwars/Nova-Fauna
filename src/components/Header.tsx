import { ChevronDown, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import logo from '../assets/NovaFauna-logo.png'

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isMenuOpen])

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
            <div className="mx-auto flex h-24 max-w-7xl items-center justify-between">

                {/* Logo + Title */}
                <Link
                    to="/"
                    className="group flex items-center gap-4"
                >
                    <img
                        src={logo}
                        alt="Nova Fauna"
                        className="h-40 w-40 object-contain transition duration-500 group-hover:scale-110"
                    />

                    <div className="flex flex-col">
                        <span className="text-2xl font-black tracking-wide text-white transition duration-300 group-hover:text-primary sm:text-3xl lg:text-4xl">
                            Nova Fauna
                        </span>

                        <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                            Pets não convencionais
                        </span>
                    </div>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="
                        flex items-center justify-center
                        rounded-xl border border-white/10
                        bg-white/5 p-3 text-white
                        backdrop-blur-md transition
                        hover:border-primary/40
                        hover:bg-primary/10
                        lg:hidden"
                >
                    <Menu className="h-6 w-6" />
                </button>

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

                {/* Mobile Menu */}
                <div
                    className={`
                        fixed inset-0 z-[100] lg:hidden
                        transition-all duration-500
                        ${isMenuOpen
                            ? 'visible opacity-100'
                            : 'invisible opacity-0'
                        }
                    `}
                >
                    {/* Overlay */}
                    <div
                        onClick={() => setIsMenuOpen(false)}
                        className="
                            absolute inset-0
                            bg-black/70 backdrop-blur-sm"
                    />

                    {/* Sidebar */}
                    <div
                        className={`
                            absolute right-0 top-0
                            flex h-full w-[85%] max-w-sm
                            flex-col overflow-y-auto
                            border-l border-white/10
                            bg-black/95 p-6
                            shadow-2xl backdrop-blur-2xl
                            transition-transform duration-500
                            ${isMenuOpen
                                ? 'translate-x-0'
                                : 'translate-x-full'
                            }
                        `}
                    >
                        {/* Header */}
                        <div className="mb-8 flex items-center justify-between">
                            <span className="text-2xl font-black text-white">
                                Menu
                            </span>

                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="
                                    rounded-xl border border-white/10
                                    p-2 text-white transition
                                    hover:border-primary/40
                                    hover:bg-primary/10"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Navigation */}
                        <div className="flex flex-col gap-3">

                            {/* Animais */}
                            <div>
                                <button
                                    onClick={() =>
                                        setOpenDropdown(
                                            openDropdown === 'animais'
                                                ? null
                                                : 'animais'
                                        )
                                    }
                                    className="
                                        flex w-full items-center
                                        justify-between rounded-xl
                                        px-4 py-4 text-left
                                        text-sm font-semibold
                                        uppercase tracking-[0.2em]
                                        text-zinc-200 transition
                                        hover:bg-primary/10
                                        hover:text-primary"
                                >
                                    Animais

                                    <ChevronDown
                                        className={`
                                            h-5 w-5 transition duration-300
                                            ${openDropdown === 'animais'
                                                ? 'rotate-180'
                                                : ''
                                            }
                                        `}
                                    />
                                </button>

                                <div
                                    className={`
                        overflow-hidden transition-all duration-300
                        ${openDropdown === 'animais'
                                            ? 'max-h-96 opacity-100'
                                            : 'max-h-0 opacity-0'
                                        }
                    `}
                                >
                                    <div className="mt-2 flex flex-col gap-2 pl-4">

                                        <Link
                                            to="/animais/serpentes"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-primary/10 hover:text-primary"
                                        >
                                            Serpentes
                                        </Link>

                                        <Link
                                            to="/animais/lagartos"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-primary/10 hover:text-primary"
                                        >
                                            Lagartos
                                        </Link>

                                        <Link
                                            to="/animais/anfibios"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-primary/10 hover:text-primary"
                                        >
                                            Anfíbios
                                        </Link>

                                    </div>
                                </div>
                            </div>

                            {/* Criadouros */}
                            <div>
                                <button
                                    onClick={() =>
                                        setOpenDropdown(
                                            openDropdown === 'criadouros'
                                                ? null
                                                : 'criadouros'
                                        )
                                    }
                                    className="
            flex w-full items-center
            justify-between rounded-xl
            px-4 py-4 text-left
            text-sm font-semibold
            uppercase tracking-[0.2em]
            text-zinc-200 transition
            hover:bg-primary/10
            hover:text-primary"
                                >
                                    Criadouros

                                    <ChevronDown
                                        className={`
                h-5 w-5 transition duration-300
                ${openDropdown === 'criadouros'
                                                ? 'rotate-180'
                                                : ''
                                            }
            `}
                                    />
                                </button>

                                <div
                                    className={`
            overflow-hidden transition-all duration-300
            ${openDropdown === 'criadouros'
                                            ? 'max-h-96 opacity-100'
                                            : 'max-h-0 opacity-0'
                                        }
        `}
                                >
                                    <div className="mt-2 flex flex-col gap-2 pl-4">

                                        <Link
                                            to="/criadouros/legalizados"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-primary/10 hover:text-primary"
                                        >
                                            Legalizados
                                        </Link>

                                        <Link
                                            to="/criadouros/parceiros"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-primary/10 hover:text-primary"
                                        >
                                            Parceiros
                                        </Link>

                                        <Link
                                            to="/criadouros/bem-estar-animal"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-primary/10 hover:text-primary"
                                        >
                                            Bem-estar animal
                                        </Link>

                                        <Link
                                            to="/criadouros/compra-responsavel"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-primary/10 hover:text-primary"
                                        >
                                            Compra responsável
                                        </Link>

                                    </div>
                                </div>
                            </div>

                            {/* Habitats */}
                            <div>
                                <button
                                    onClick={() =>
                                        setOpenDropdown(
                                            openDropdown === 'habitats'
                                                ? null
                                                : 'habitats'
                                        )
                                    }
                                    className="
            flex w-full items-center
            justify-between rounded-xl
            px-4 py-4 text-left
            text-sm font-semibold
            uppercase tracking-[0.2em]
            text-zinc-200 transition
            hover:bg-primary/10
            hover:text-primary"
                                >
                                    Habitats

                                    <ChevronDown
                                        className={`
                h-5 w-5 transition duration-300
                ${openDropdown === 'habitats'
                                                ? 'rotate-180'
                                                : ''
                                            }
            `}
                                    />
                                </button>

                                <div
                                    className={`
            overflow-hidden transition-all duration-300
            ${openDropdown === 'habitats'
                                            ? 'max-h-96 opacity-100'
                                            : 'max-h-0 opacity-0'
                                        }
        `}
                                >
                                    <div className="mt-2 flex flex-col gap-2 pl-4">

                                        <Link
                                            to="/habitats/terrarios"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-primary/10 hover:text-primary"
                                        >
                                            Terrários
                                        </Link>

                                        <Link
                                            to="/habitats/aquaterrarios"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-primary/10 hover:text-primary"
                                        >
                                            Aquaterrários
                                        </Link>

                                        <Link
                                            to="/habitats/aquarios"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-primary/10 hover:text-primary"
                                        >
                                            Aquários
                                        </Link>

                                        <Link
                                            to="/habitats/ambientacao-natural"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-primary/10 hover:text-primary"
                                        >
                                            Ambientação natural
                                        </Link>

                                    </div>
                                </div>
                            </div>

                            {/* Guias */}
                            <div>
                                <button
                                    onClick={() =>
                                        setOpenDropdown(
                                            openDropdown === 'guias'
                                                ? null
                                                : 'guias'
                                        )
                                    }
                                    className="
                        flex w-full items-center
                        justify-between rounded-xl
                        px-4 py-4 text-left
                        text-sm font-semibold
                        uppercase tracking-[0.2em]
                        text-zinc-200 transition
                        hover:bg-primary/10
                        hover:text-primary
                    "
                                >
                                    Guias

                                    <ChevronDown
                                        className={`
                            h-5 w-5 transition duration-300
                            ${openDropdown === 'guias'
                                                ? 'rotate-180'
                                                : ''
                                            }
                        `}
                                    />
                                </button>

                                <div
                                    className={`
                        overflow-hidden transition-all duration-300
                        ${openDropdown === 'guias'
                                            ? 'max-h-96 opacity-100'
                                            : 'max-h-0 opacity-0'
                                        }
                    `}
                                >
                                    <div className="mt-2 flex flex-col gap-2 pl-4">

                                        <Link
                                            to="/guias/alimentacao"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-primary/10 hover:text-primary"
                                        >
                                            Alimentação
                                        </Link>

                                        <Link
                                            to="/guias/manejo"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-primary/10 hover:text-primary"
                                        >
                                            Manejo
                                        </Link>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}