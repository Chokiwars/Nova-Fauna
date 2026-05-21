import { ChevronDown, PawPrint, ShieldCheck, Sparkles } from 'lucide-react'

const heroImages = [
    'https://images.pexels.com/photos/45246/green-tree-python-python-tree-python-green-45246.jpeg',
    'https://images.pexels.com/photos/751689/pexels-photo-751689.jpeg',
    'https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg',
]

export function AnimalsHero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden border-b border-primary/10 bg-black">

            {/* Background Images */}
            <div className="absolute inset-0">
                <div className="grid h-full grid-cols-3">
                    {heroImages.map((image) => (
                        <div
                            key={image}
                            className="relative overflow-hidden"
                        >
                            <img
                                src={image}
                                alt="Animal"
                                className="h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
                            />

                            <div className="absolute inset-0 bg-black/70" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center">

                <span className="flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary backdrop-blur-md">
                    <Sparkles className="h-4 w-4" />
                    Universo Animal
                </span>

                <h1 className="mt-10 max-w-5xl text-5xl font-black leading-tight text-white md:text-7xl">
                    Descubra o mundo dos
                    <span className="text-primary">
                        {' '}pets não convencionais
                    </span>
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
                    Explore espécies fascinantes, conheça comportamentos,
                    morfologia, alimentação, habitats naturais e curiosidades
                    sobre serpentes, lagartos, aves, aracnídeos e muitos outros
                    animais incríveis.
                </p>

                {/* Features */}
                <div className="mt-14 grid w-full max-w-5xl gap-6 md:grid-cols-3">

                    <div className="rounded-3xl border border-zinc-800 bg-black/40 p-6 backdrop-blur-md">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <PawPrint className="h-7 w-7" />
                        </div>

                        <h3 className="mt-5 text-xl font-bold text-white">
                            Espécies detalhadas
                        </h3>

                        <p className="mt-3 leading-7 text-zinc-400">
                            Informações completas sobre diferentes espécies de
                            pets não convencionais.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-zinc-800 bg-black/40 p-6 backdrop-blur-md">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <ShieldCheck className="h-7 w-7" />
                        </div>

                        <h3 className="mt-5 text-xl font-bold text-white">
                            Posse responsável
                        </h3>

                        <p className="mt-3 leading-7 text-zinc-400">
                            Descubra cuidados essenciais, manejo correto e
                            criação ética.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-zinc-800 bg-black/40 p-6 backdrop-blur-md">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <Sparkles className="h-7 w-7" />
                        </div>

                        <h3 className="mt-5 text-xl font-bold text-white">
                            Curiosidades incríveis
                        </h3>

                        <p className="mt-3 leading-7 text-zinc-400">
                            Explore fatos curiosos e descubra características
                            únicas de cada animal.
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll Down */}
            <button
                onClick={() => {
                    document
                        .getElementById('animals-categories')
                        ?.scrollIntoView({
                            behavior: 'smooth',
                        })
                }}
                className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce rounded-full border border-primary/20 bg-black/40 p-3 text-primary backdrop-blur-md transition hover:border-primary hover:bg-primary/10"
            >
                <ChevronDown className="h-6 w-6" />
            </button>
        </section>
    )
}