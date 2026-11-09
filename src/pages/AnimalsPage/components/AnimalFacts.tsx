import {
    Brain,
    Eye,
    Globe,
    Moon,
    Zap,
    Bone,
} from 'lucide-react'

const facts = [
    {
        icon: Brain,
        title: 'Cobras reconhecem rotinas',
        fact: 'Algumas serpentes conseguem associar horários e padrões de alimentação ao comportamento do tutor.',
    },

    {
        icon: Eye,
        title: 'Geckos enxergam no escuro',
        fact: 'Leopard Geckos possuem visão noturna extremamente avançada comparada à maioria dos répteis.',
    },

    {
        icon: Globe,
        title: 'Pogonas usam linguagem corporal',
        fact: 'O famoso “head bobbing” é utilizado para comunicação territorial e social.',
    },

    {
        icon: Moon,
        title: 'Muitos pets são noturnos',
        fact: 'Espécies exóticas costumam apresentar maior atividade durante a noite ou ao amanhecer.',
    },

    {
        icon: Zap,
        title: 'Anfíbios absorvem pela pele',
        fact: 'Rãs e salamandras conseguem absorver água e substâncias diretamente pela pele.',
    },

    {
        icon: Bone,
        title: 'Teiús podem reconhecer pessoas',
        fact: 'Com manejo frequente, alguns lagartos demonstram reconhecimento visual do tutor.',
    },
]

export function AnimalFacts() {
    return (
        <section
            id="animal-facts"
            className="relative overflow-hidden bg-black px-6 py-28"
        >
            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Header */}
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Curiosidades incríveis
                    </span>

                    <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl">
                        O universo dos pets não convencionais é mais fascinante do que parece
                    </h2>

                    <p className="mt-8 text-lg leading-8 text-zinc-400">
                        Descubra comportamentos curiosos, adaptações naturais
                        e fatos surpreendentes sobre espécies fascinantes.
                    </p>
                </div>

                {/* Facts Grid */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {facts.map((item) => {
                        const Icon = item.icon

                        return (
                            <article
                                key={item.title}
                                className="
                                    group relative overflow-hidden rounded-3xl
                                    border border-zinc-800 bg-secondbackground/40
                                    p-8 backdrop-blur-sm transition duration-500
                                    hover:-translate-y-2 hover:border-primary/40
                                    hover:bg-primary/5
                                "
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                                    <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
                                </div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition duration-300 group-hover:scale-110 group-hover:border-primary/40">
                                        <Icon className="h-8 w-8" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="mt-8 text-2xl font-bold text-white transition group-hover:text-primary">
                                        {item.title}
                                    </h3>

                                    <p className="mt-5 leading-8 text-zinc-400">
                                        {item.fact}
                                    </p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}