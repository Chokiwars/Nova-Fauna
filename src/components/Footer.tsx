import {
    ArrowUp,
    Mail,
    Heart,
    Leaf,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { BsGithub } from 'react-icons/bs'


export function Footer() {
    const navigate = useNavigate()

    return (
        <footer
            id="footer"
            className="relative overflow-hidden border-t border-primary/10 bg-gradient-to-b from-black via-secondbackground to-black px-6 py-20"
        >

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Top Content */}
                <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="text-center lg:col-span-2 lg:text-left">
                        <div className="flex items-center justify-center gap-5 lg:justify-start">

                            <div>
                                <h2 className="text-4xl font-black tracking-wide text-primary sm:text-5xl">
                                    Nova Fauna
                                </h2>

                                <p className="mt-2 uppercase tracking-[0.3em] text-zinc-500">
                                    Pets não convencionais
                                </p>
                            </div>
                        </div>

                        <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8 lg:mx-0">
                            Uma plataforma criada para apaixonados por
                            animais silvestres e pets não convencionais,
                            conectando informação, responsabilidade e
                            curiosidade em uma experiência moderna e visual.
                        </p>

                        {/* Contact */}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">

                            <a
                                href="mailto:beatrizandreosbezerra1@gmail.com"
                                className="flex items-center gap-2 rounded-2xl border border-zinc-800 bg-black/40 px-4 py-2 text-sm text-zinc-300 backdrop-blur-md transition hover:border-primary hover:text-primary"
                            >
                                <Mail className="h-5 w-5" />

                                beatrizandreosbezerra1@gmail.com
                            </a>

                            <a
                                href="https://github.com/Chokiwars"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 rounded-2xl border border-zinc-800 bg-black/40 px-4 py-2 text-sm text-zinc-300 backdrop-blur-md transition hover:border-primary hover:text-primary"
                            >
                                <BsGithub className="h-5 w-5" />

                                Chokiwars
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-10 md:contents">

                        {/* Navigation */}
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-bold text-white">
                                Navegação
                            </h3>

                            <div className="mt-6 flex flex-col items-center gap-4 md:items-start">
                                <button
                                    onClick={() => {
                                        navigate('/animais')
                                    }}
                                    className="text-left text-zinc-400 transition hover:text-primary">
                                    Animais
                                </button>

                                <button
                                    onClick={() => {
                                        navigate('/habitats')
                                    }}
                                    className="text-left text-zinc-400 transition hover:text-primary">
                                    Habitats
                                </button>

                                <button
                                    onClick={() => {
                                        navigate('/guias')
                                    }}
                                    className="text-left text-zinc-400 transition hover:text-primary">
                                    Guias
                                </button>

                                <button
                                    onClick={() => {
                                        navigate('/criadouros')
                                    }}
                                    className="text-left text-zinc-400 transition hover:text-primary">
                                    Criadouros
                                </button>
                            </div>
                        </div>

                        {/* Extra */}
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-bold text-white">
                                Plataforma
                            </h3>

                            <div className="mt-6 flex flex-col items-center gap-4 md:items-start">
                                <button
                                    onClick={() => {
                                        navigate('/posse-responsavel')
                                    }}
                                    className="flex items-center gap-2 text-left text-zinc-400 transition hover:text-primary">
                                    <Leaf className="h-4 w-4" />
                                    Posse responsável
                                </button>

                                <button
                                    onClick={() => {
                                        navigate('/bem-estar-animal')
                                    }}
                                    className="flex items-center gap-2 text-left text-zinc-400 transition hover:text-primary">
                                    <Heart className="h-4 w-4" />
                                    Bem-estar animal
                                </button>

                                <button
                                    onClick={() => {
                                        navigate('/politica-de-privacidade')
                                    }}
                                    className="text-left text-zinc-400 transition hover:text-primary">
                                    Política de privacidade
                                </button>

                                <button
                                    onClick={() => {
                                        navigate('/termos-de-uso')
                                    }}
                                    className="text-left text-zinc-400 transition hover:text-primary">
                                    Termos de uso
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                {/* Bottom */}
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

                    <p className="text-center text-sm leading-7 text-zinc-500 md:text-left">
                        © 2026 Nova Fauna. Todos os direitos reservados.
                        <br />
                        Desenvolvido por <span className='text-green-500/50'>Beatriz Andreos.</span>
                    </p>

                    {/* Scroll Top */}
                    <button
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            })
                        }}
                        className="group flex items-center gap-3 rounded-full border border-primary/20 bg-black/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur-md transition hover:border-primary hover:bg-primary/10"
                    >
                        <ArrowUp className="h-5 w-5 transition duration-300 group-hover:-translate-y-1" />

                        Voltar ao topo
                    </button>
                </div>
            </div>
        </footer>
    )
}