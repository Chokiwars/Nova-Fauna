import {
    AlertTriangle,
    ShieldCheck,
    Thermometer,
    HeartPulse,
} from 'lucide-react'

const careTopics = [
    {
        icon: ShieldCheck,
        title: 'Nível de dificuldade',
        description:
            'Ball Pythons são consideradas excelentes serpentes para iniciantes devido ao comportamento calmo, tamanho controlável e manejo relativamente simples.',
    },

    {
        icon: Thermometer,
        title: 'Controle ambiental',
        description:
            'Grande parte dos problemas em cativeiro acontece devido a temperaturas incorretas, baixa umidade ou falta de gradiente térmico adequado.',
    },

    {
        icon: AlertTriangle,
        title: 'Erros comuns',
        description:
            'Manejo excessivo, terrários muito abertos, ausência de esconderijos e alimentação inadequada são erros frequentes entre iniciantes.',
    },

    {
        icon: HeartPulse,
        title: 'Bem-estar',
        description:
            'Quando mantidas corretamente, Ball Pythons costumam viver décadas em cativeiro apresentando comportamento tranquilo e alimentação consistente.',
    },
]

export function BallPythonCare() {
    return (
        <section className="relative overflow-hidden bg-black px-6 py-32">

            <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl">

                <div className="max-w-4xl">

                    <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Cuidados
                    </span>

                    <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">
                        Uma das melhores serpentes para iniciantes
                    </h2>

                    <p className="mt-8 text-xl leading-9 text-zinc-400">
                        Apesar da fama de espécie “fácil”, Ball Pythons ainda
                        exigem responsabilidade, conhecimento e um ambiente bem
                        estruturado para viverem de forma saudável em cativeiro.
                    </p>
                </div>

                <div className="mt-24 space-y-8">

                    {careTopics.map((topic) => {
                        const Icon = topic.icon

                        return (
                            <article
                                key={topic.title}
                                className="
                                    group rounded-[2rem]
                                    border border-primary/10
                                    bg-gradient-to-r
                                    from-zinc-950 via-black to-zinc-950
                                    p-10 transition duration-500
                                    hover:border-primary/40
                                "
                            >
                                <div className="flex flex-col gap-10 lg:flex-row lg:items-center">

                                    <div
                                        className="
                                            flex h-24 w-24 items-center
                                            justify-center rounded-[2rem]
                                            border border-primary/20
                                            bg-primary/10 text-primary
                                        "
                                    >
                                        <Icon className="h-12 w-12" />
                                    </div>

                                    <div className="flex-1">

                                        <h3 className="text-4xl font-black text-white transition group-hover:text-primary">
                                            {topic.title}
                                        </h3>

                                        <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/30 via-zinc-800 to-transparent" />

                                        <p className="mt-8 max-w-5xl text-lg leading-9 text-zinc-400">
                                            {topic.description}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}