import {
    ShieldCheck,
    Leaf,
    Thermometer,
    Utensils,
    Droplets,
    Sparkles,
} from 'lucide-react'

const guides = [
    {
        icon: ShieldCheck,
        title: 'Posse responsável',
        description:
            'Aprenda sobre documentação, manejo correto e responsabilidade ao adquirir pets não convencionais.',
    },

    {
        icon: Thermometer,
        title: 'Temperatura ideal',
        description:
            'Entenda como controlar aquecimento, iluminação UVB e umidade para diferentes espécies.',
    },

    {
        icon: Utensils,
        title: 'Alimentação',
        description:
            'Descubra dietas específicas, suplementação e frequência alimentar adequada para cada animal.',
    },

    {
        icon: Droplets,
        title: 'Umidade e hidratação',
        description:
            'Saiba como manter ambientes equilibrados e garantir hidratação saudável aos animais.',
    },

    {
        icon: Leaf,
        title: 'Ambientação natural',
        description:
            'Monte habitats enriquecidos com substratos, plantas e esconderijos inspirados na natureza.',
    },

    {
        icon: Sparkles,
        title: 'Bem-estar animal',
        description:
            'Conheça práticas que reduzem estresse e melhoram a qualidade de vida dos pets.',
    },
]

export function AnimalCareGuide() {
    return (
        <section
            id="animal-care-guide"
            className="relative overflow-hidden bg-gradient-to-b from-black via-secondbackground to-black px-6 py-28"
        >
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Header */}
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Guia de cuidados
                    </span>

                    <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl">
                        Tudo que você precisa saber antes de ter um pet não convencional
                    </h2>

                    <p className="mt-8 text-lg leading-8 text-zinc-400">
                        Explore conteúdos essenciais sobre manejo, alimentação,
                        ambientação e bem-estar para proporcionar uma vida
                        saudável e segura aos animais.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {guides.map((guide) => {
                        const Icon = guide.icon

                        return (
                            <article
                                key={guide.title}
                                className="
                                    group relative overflow-hidden rounded-3xl
                                    border border-zinc-800 bg-black/40 p-8
                                    backdrop-blur-sm transition duration-500
                                    hover:-translate-y-2 hover:border-primary/40
                                    hover:bg-primary/5
                                "
                            >
                                {/* Glow Hover */}
                                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                                    <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
                                </div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition duration-300 group-hover:scale-110 group-hover:border-primary/40">
                                        <Icon className="h-8 w-8" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="mt-8 text-2xl font-bold text-white transition group-hover:text-primary">
                                        {guide.title}
                                    </h3>

                                    <p className="mt-5 leading-8 text-zinc-400">
                                        {guide.description}
                                    </p>

                                    {/* Button */}
                                    <button className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-primary transition hover:text-white">
                                        Explorar guia →
                                    </button>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}