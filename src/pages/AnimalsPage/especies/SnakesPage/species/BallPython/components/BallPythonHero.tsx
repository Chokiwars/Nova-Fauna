import { ChevronDown } from 'lucide-react'

export function BallPythonHero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-6">

            {/* Background */}
            <img
                src="https://images.pexels.com/photos/36585274/pexels-photo-36585274.jpeg"
                alt="Ball Python"
                className="absolute inset-0 h-full w-full object-cover opacity-30"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start">

                <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                    Python Regius
                </span>

                <h1 className="mt-8 max-w-5xl text-6xl font-black leading-tight text-white md:text-8xl">
                    Ball{' '}

                    <span className="text-primary">
                        Python
                    </span>
                </h1>

                <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-300">
                    Uma das serpentes mais populares do mundo entre tutores de
                    pets não convencionais, famosa pelo comportamento calmo,
                    enorme variedade de morphs e facilidade de manejo.
                </p>

                {/* Quick Stats */}
                <div className="mt-14 flex flex-wrap gap-4">

                    <div className="rounded-2xl border border-zinc-800 bg-black/40 px-6 py-4 backdrop-blur-md">
                        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                            Dificuldade
                        </p>

                        <p className="mt-2 text-lg font-bold text-white">
                            Iniciante
                        </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-800 bg-black/40 px-6 py-4 backdrop-blur-md">
                        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                            Expectativa de vida
                        </p>

                        <p className="mt-2 text-lg font-bold text-white">
                            20-30 anos
                        </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-800 bg-black/40 px-6 py-4 backdrop-blur-md">
                        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                            Habitat
                        </p>

                        <p className="mt-2 text-lg font-bold text-white">
                            Terrestre
                        </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-800 bg-black/40 px-6 py-4 backdrop-blur-md">
                        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                            Origem
                        </p>

                        <p className="mt-2 text-lg font-bold text-white">
                            África
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll Down */}
            <button
                onClick={() => {
                    document
                        .getElementById('ball-python-info')
                        ?.scrollIntoView({
                            behavior: 'smooth',
                        })
                }}
                className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce rounded-full border border-primary/20 bg-black/30 p-3 text-primary backdrop-blur-md transition hover:border-primary hover:bg-primary/10 hover:text-white"
            >
                <ChevronDown className="h-6 w-6" />
            </button>
        </section>
    )
}