import {
    ShieldCheck,
    TimerReset,
    Ruler,
    MoonStar,
} from 'lucide-react'

const infos = [
    {
        icon: ShieldCheck,
        title: 'Temperamento',
        description:
            'Conhecida pelo comportamento extremamente calmo e tolerante ao manejo.',
    },

    {
        icon: TimerReset,
        title: 'Longevidade',
        description:
            'Pode viver mais de 25 anos quando mantida corretamente em cativeiro.',
    },

    {
        icon: Ruler,
        title: 'Tamanho',
        description:
            'Adultos costumam atingir entre 1,2m e 1,8m dependendo do sexo e genética.',
    },

    {
        icon: MoonStar,
        title: 'Hábitos',
        description:
            'Espécie predominantemente noturna e terrestre.',
    },
]

export function BallPythonQuickInfo() {
    return (
        <section
            id="ball-python-info"
            className="bg-gradient-to-b from-black via-secondbackground to-black px-6 py-28"
        >
            <div className="mx-auto max-w-7xl">

                <div className="mb-16 max-w-3xl">

                    <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Informações rápidas
                    </span>

                    <h2 className="mt-8 text-5xl font-black text-white">
                        Uma serpente perfeita para iniciantes
                    </h2>

                    <p className="mt-8 text-lg leading-9 text-zinc-400">
                        A Ball Python conquistou espaço no hobby mundial devido
                        ao manejo simples, comportamento tranquilo e enorme
                        diversidade genética disponível atualmente.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {infos.map((info) => {
                        const Icon = info.icon

                        return (
                            <article
                                key={info.title}
                                className="
                                    rounded-[2rem] border border-zinc-800
                                    bg-black/40 p-8 transition duration-300
                                    hover:-translate-y-2
                                    hover:border-primary/40
                                "
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <Icon className="h-7 w-7" />
                                </div>

                                <h3 className="mt-8 text-2xl font-black text-white">
                                    {info.title}
                                </h3>

                                <p className="mt-5 leading-8 text-zinc-400">
                                    {info.description}
                                </p>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}