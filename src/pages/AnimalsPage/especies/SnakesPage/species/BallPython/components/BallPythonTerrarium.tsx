import {
    Thermometer,
    Droplets,
    Trees,
    LampDesk,
    Mountain,
    Home,
} from 'lucide-react'

const terrariumTopics = [
    {
        icon: Thermometer,
        title: 'Temperatura',
        description:
            'A espécie necessita de gradiente térmico adequado para digestão, metabolismo e bem-estar geral.',
    },

    {
        icon: LampDesk,
        title: 'Lado quente',
        description:
            'A região quente do terrário normalmente fica entre 31°C e 33°C.',
    },

    {
        icon: Mountain,
        title: 'Lado frio',
        description:
            'O lado frio deve permanecer entre 25°C e 27°C para permitir termorregulação.',
    },

    {
        icon: Trees,
        title: 'Substrato',
        description:
            'Fibra de coco, casca de pinus tratada e chips de coco estão entre os substratos mais utilizados.',
    },

    {
        icon: Home,
        title: 'Esconderijos',
        description:
            'Ball Pythons precisam de esconderijos seguros nos dois lados do terrário para reduzir estresse.',
    },

    {
        icon: Droplets,
        title: 'Umidade',
        description:
            'A umidade ideal costuma variar entre 60% e 80%, especialmente durante a troca de pele.',
    },
]

export function BallPythonTerrarium() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-black via-secondbackground to-black px-6 py-32">

            {/* Glow */}
            <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Header */}
                <div className="max-w-4xl">

                    <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Terrário
                    </span>

                    <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
                        Um ambiente confortável faz toda diferença
                    </h2>

                    <p className="mt-8 text-xl leading-9 text-zinc-400">
                        Apesar de serem resistentes, Ball Pythons dependem de
                        temperatura, umidade e esconderijos adequados para se
                        manterem saudáveis em cativeiro.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {terrariumTopics.map((topic) => {
                        const Icon = topic.icon

                        return (
                            <article
                                key={topic.title}
                                className="
                                    group relative overflow-hidden rounded-[2rem]
                                    border border-primary/10
                                    bg-black/40 p-8 backdrop-blur-md
                                    transition duration-500
                                    hover:-translate-y-2
                                    hover:border-primary/40
                                "
                            >

                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-primary/0 transition duration-500 group-hover:bg-primary/[0.03]" />

                                <div className="relative z-10">

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                                        <Icon className="h-8 w-8" />
                                    </div>

                                    <h3 className="mt-8 text-3xl font-black text-white transition group-hover:text-primary">
                                        {topic.title}
                                    </h3>

                                    <p className="mt-6 leading-8 text-zinc-400">
                                        {topic.description}
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