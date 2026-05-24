import { ChevronDown } from 'lucide-react'

export function SnakesHero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-black">

            {/* Background Image */}
            <img
                src="https://images.pexels.com/photos/35854398/pexels-photo-35854398.jpeg?_gl=1*7r3fv1*_ga*NDUxMTg5MDUwLjE3Nzk1ODEzODk.*_ga_8JE65Q40S6*czE3Nzk1ODEzODkkbzEkZzEkdDE3Nzk1ODE0MTckajMyJGwwJGgw"
                alt="Serpente"
                className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />

            {/* Glow */}
            <div className="absolute left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6">

                <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                    Serpentes
                </span>

                <h1 className="mt-8 max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl xl:text-8xl">
                    Explore o universo das{' '}
                    <span className="text-primary">
                        serpentes
                    </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
                    Descubra espécies fascinantes, habitats naturais,
                    curiosidades, manejo responsável e comportamentos únicos
                    das serpentes mais incríveis do mundo.
                </p>

                {/* Stats */}
                <div className="mt-12 flex flex-wrap gap-6">

                    <div className="rounded-2xl border border-white/10 bg-black/30 px-6 py-4 backdrop-blur-md">
                        <h3 className="text-3xl font-black text-primary">
                            +3.000
                        </h3>

                        <p className="mt-1 text-sm text-zinc-400">
                            espécies conhecidas
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/30 px-6 py-4 backdrop-blur-md">
                        <h3 className="text-3xl font-black text-primary">
                            100%
                        </h3>

                        <p className="mt-1 text-sm text-zinc-400">
                            foco educativo
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll Down */}
            <button
                onClick={() => {
                    document
                        .getElementById('snake-introduction')
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