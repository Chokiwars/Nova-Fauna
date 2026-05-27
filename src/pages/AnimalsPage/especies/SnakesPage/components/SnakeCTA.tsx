import { Link } from 'react-router-dom'

export function SnakeCTA() {
    return (
        <section className="relative overflow-hidden bg-black">

            <img
                src="https://images.pexels.com/photos/45246/green-tree-python-python-tree-python-green-45246.jpeg"
                alt="Snake"
                className="h-[800px] w-full object-cover object-center opacity-40"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

            <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="max-w-4xl text-center">

                    <h2 className="text-5xl font-black leading-tight text-white md:text-7xl">
                        Explore o mundo das{' '}

                        <span className="text-primary">
                            serpentes
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
                        Descubra espécies incríveis, curiosidades e conteúdos
                        completos sobre manejo responsável.
                    </p>

                    {/* Button */}
                    <button
                        onClick={() => window.location.href = '/animais/serpentes/especies'}
                        className="
                            mt-12 rounded-full border border-primary/40
                            bg-primary/10 px-8 py-4
                            text-sm font-bold uppercase tracking-[0.2em]
                            text-primary backdrop-blur-md
                            transition duration-300
                            hover:scale-105
                            hover:bg-primary
                            hover:text-black
                        "
                    >
                        Explorar espécies
                    </button>

                    {/* Species Links */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm uppercase tracking-[0.3em] text-zinc-500">

                        <Link
                            to="/animais/serpentes/python-regius"
                            className="transition hover:text-primary"
                        >
                            Ball Python
                        </Link>

                        <span>•</span>

                        <Link
                            to="/animais/serpentes/rainbow-boa"
                            className="transition hover:text-primary"
                        >
                            Rainbow Boa
                        </Link>

                        <span>•</span>

                        <Link
                            to="/animais/serpentes/periquitamboia"
                            className="transition hover:text-primary"
                        >
                            Periquitamboia
                        </Link>

                        <span>•</span>

                        <Link
                            to="/animais/serpentes/king-snake"
                            className="transition hover:text-primary"
                        >
                            King Snake
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}