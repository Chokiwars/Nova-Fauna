import {
    Sparkles,
    Eye,
    Dna,
    Flame,
    MoonStar,
    Shield,
    ArrowRight,
} from 'lucide-react'

const facts = [
    {
        icon: Flame,
        title: 'Sensores de calor',
        description:
            'Algumas serpentes, especialmente pítons e jiboias, possuem estruturas capazes de detectar calor corporal. Esses sensores ajudam na localização de presas mesmo em ambientes extremamente escuros.',
    },

    {
        icon: Dna,
        title: 'Morphs e genética',
        description:
            'No universo dos pets não convencionais, os morphs são variações genéticas que alteram cores, padrões e características visuais das serpentes. Atualmente existem centenas de combinações desenvolvidas por criadores especializados.',
    },

    {
        icon: Eye,
        title: 'Troca de pele',
        description:
            'As serpentes realizam o processo de ecdise, conhecido popularmente como troca de pele. Esse processo acompanha o crescimento do animal e também ajuda na renovação da camada externa do corpo.',
    },

    {
        icon: MoonStar,
        title: 'Hábitos noturnos',
        description:
            'Grande parte das espécies mantidas em cativeiro apresenta maior atividade durante a noite, explorando o ambiente e buscando alimento quando há menos movimentação.',
    },

    {
        icon: Shield,
        title: 'Comportamento defensivo',
        description:
            'Muitas serpentes utilizam comportamentos defensivos ao invés de ataques reais. Sons, movimentos bruscos, vibração da cauda e posturas intimidatórias são formas naturais de proteção.',
    },

    {
        icon: Sparkles,
        title: 'Escamas iridescentes',
        description:
            'Espécies como a Rainbow Boa possuem escamas que refletem luz de maneira única, criando um efeito iridescente extremamente valorizado entre apaixonados por serpentes.',
    },
]

export function SnakeFacts() {
    return (
        <section className="bg-black px-6 py-32">

            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mx-auto max-w-4xl text-center">

                    <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Curiosidades e morphs
                    </span>

                    <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
                        O lado mais fascinante das
                        <span className="text-primary">
                            {' '}serpentes
                        </span>
                    </h2>

                    <p className="mt-8 text-lg leading-8 text-zinc-400">
                        Muito além da aparência exótica, serpentes possuem
                        adaptações biológicas impressionantes, comportamentos
                        únicos e uma diversidade genética gigantesca que encanta
                        criadores e apaixonados por pets não convencionais.
                    </p>
                </div>

                {/* Facts Grid */}
                <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {facts.map((fact) => {
                        const Icon = fact.icon

                        return (
                            <article
                                key={fact.title}
                                className="
                                    group overflow-hidden rounded-[2rem]
                                    border border-zinc-800
                                    bg-secondbackground
                                    p-8
                                    transition duration-500
                                    hover:-translate-y-2
                                    hover:border-primary/30
                                    hover:bg-primary/5
                                "
                            >

                                {/* Icon */}
                                <div
                                    className="
                                        flex h-16 w-16 items-center
                                        justify-center rounded-2xl
                                        border border-primary/20
                                        bg-primary/10 text-primary
                                        transition duration-500
                                        group-hover:scale-110
                                    "
                                >
                                    <Icon className="h-8 w-8" />
                                </div>

                                {/* Content */}
                                <div className="mt-8">

                                    <h3 className="text-2xl font-black text-white transition group-hover:text-primary">
                                        {fact.title}
                                    </h3>

                                    <p className="mt-5 leading-8 text-zinc-400">
                                        {fact.description}
                                    </p>
                                </div>
                            </article>
                        )
                    })}
                </div>

                {/* Morph Highlight */}
                <div
                    className="
                        relative mt-24 overflow-hidden rounded-[2rem]
                        border border-primary/20
                        bg-gradient-to-br from-primary/10 via-black to-black
                        p-10 md:p-14
                    "
                >

                    <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

                    <div className="relative z-10 max-w-4xl">

                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                            Universo dos morphs
                        </span>

                        <h3 className="mt-6 text-4xl font-black leading-tight text-white">
                            Cada serpente pode possuir um visual completamente único
                        </h3>

                        <p className="mt-8 text-lg leading-9 text-zinc-300">
                            O mundo dos morphs revolucionou a criação de
                            serpentes em cativeiro. Através da genética,
                            criadores desenvolveram combinações incríveis de
                            cores, padrões e características visuais,
                            transformando espécies já fascinantes em animais
                            ainda mais impressionantes visualmente.
                        </p>

                        <p className="mt-8 text-lg leading-9 text-zinc-400">
                            Existem morphs albinos, axânticos, piebald,
                            hypomelanistic, lavender e centenas de outras
                            combinações. Algumas se tornaram extremamente
                            populares entre tutores de pets não convencionais,
                            enquanto outras são consideradas raras e altamente
                            valorizadas.
                        </p>
                        <button
                            className="
        group mt-10 flex items-center gap-3
        rounded-2xl border border-primary/20
        bg-primary/10 px-6 py-4
        text-sm font-semibold uppercase
        tracking-[0.2em] text-primary
        transition duration-300
        hover:border-primary
        hover:bg-primary/20
        hover:text-white
    "
                        >
                            Explorar morphs

                            <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}