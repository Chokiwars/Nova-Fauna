import { ChevronDown } from 'lucide-react'

const taxonomy = [
    {
        label: 'Reino',
        value: 'Animalia',
    },

    {
        label: 'Filo',
        value: 'Chordata',
    },

    {
        label: 'Classe',
        value: 'Reptilia',
    },

    {
        label: 'Ordem',
        value: 'Squamata',
    },

    {
        label: 'Subordem',
        value: 'Serpentes',
    },

    {
        label: 'Família',
        value: 'Pythonidae',
    },

    {
        label: 'Gênero',
        value: 'Python',
    },

    {
        label: 'Espécie',
        value: 'P. regius',
    },
]

export function BallPythonHero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-6">

            {/* Background */}
            <img
                src="https://images.pexels.com/photos/53140/snake-ball-python-python-regius-beauty-53140.jpeg?_gl=1*ij8k6w*_ga*MTE3OTgzNjY5Ni4xNzc5ODg0OTg2*_ga_8JE65Q40S6*czE3Nzk4ODQ5ODYkbzEkZzEkdDE3Nzk4ODUwMTMkajMzJGwwJGgw"
                alt="Ball Python"
                className="absolute inset-0 h-full w-full object-cover opacity-50"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-between gap-16 lg:flex-row lg:items-end">

                {/* Left Content */}
                <div className="max-w-4xl">

                    <h1 className="text-6xl font-black leading-[0.95] text-primary md:text-7xl xl:text-8xl">
                        Ball Python
                    </h1>

                    <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/50">
                        Python regius
                    </p>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl md:leading-9">
                        Uma das serpentes mais populares do mundo entre tutores
                        de pets não convencionais, famosa pelo comportamento
                        calmo, enorme variedade de morphs e facilidade de
                        manejo.
                    </p>

                    {/* Quick Stats */}
                    <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">

                        <div className="rounded-2xl border border-primary/50 bg-black/40 p-5 backdrop-blur-md">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                                Dificuldade
                            </p>

                            <p className="mt-2 text-base font-bold text-white">
                                Iniciante
                            </p>
                        </div>

                        <div className="rounded-2xl border border-primary/50 bg-black/40 p-5 backdrop-blur-md">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                                Expectativa
                            </p>

                            <p className="mt-2 text-base font-bold text-white">
                                20-30 anos
                            </p>
                        </div>

                        <div className="rounded-2xl border border-primary/50 bg-black/40 p-5 backdrop-blur-md">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                                Habitat
                            </p>

                            <p className="mt-2 text-base font-bold text-white">
                                Terrestre
                            </p>
                        </div>

                        <div className="rounded-2xl border border-primary/50 bg-black/40 p-5 backdrop-blur-md">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                                Origem
                            </p>

                            <p className="mt-2 text-base font-bold text-white">
                                África
                            </p>
                        </div>
                    </div>
                </div>

                {/* Taxonomy Card */}
                <div
                    className="
                        w-full max-w-sm rounded-[2rem]
                        border border-primary/50
                        bg-black/50 p-8 backdrop-blur-xl
                    "
                >

                    <h2 className="text-xl font-black text-white">
                        Classificação científica
                    </h2>

                    <div className="mt-8 space-y-4">
                        {taxonomy.map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center justify-between border-b border-zinc-800 pb-3"
                            >
                                <span className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                                    {item.label}
                                </span>

                                <span className="text-sm font-semibold text-white">
                                    {item.value}
                                </span>
                            </div>
                        ))}
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