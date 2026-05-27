import {
    ShieldCheck,
    TimerReset,
    Ruler,
    MoonStar,
    ArrowRight,
} from 'lucide-react'

const infos = [
    {
        icon: ShieldCheck,
        title: 'Temperamento',
        description:
            'Conhecida pelo comportamento extremamente calmo e tolerante ao manejo.',
        id: 'ball-python-temperament',
    },

    {
        icon: TimerReset,
        title: 'Longevidade',
        description:
            'Pode viver mais de 25 anos quando mantida corretamente em cativeiro.',
        id: 'ball-python-longevity',
    },

    {
        icon: Ruler,
        title: 'Tamanho',
        description:
            'Adultos costumam atingir entre 1,2m e 1,8m dependendo do sexo e genética.',
        id: 'ball-python-size',
    },

    {
        icon: MoonStar,
        title: 'Hábitos',
        description:
            'Espécie predominantemente noturna e terrestre.',
        id: 'ball-python-habits',
    },
]

export function BCCQuickInfo() {
    return (
        <section
            id="ball-python-info"
            className="bg-gradient-to-b from-black via-secondbackground to-black px-6 py-28"
        >
            <div className="mx-auto max-w-7xl">

                {/* Header */}
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

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {infos.map((info) => {
                        const Icon = info.icon

                        return (
                            <button
                                key={info.title}
                                onClick={() => {
                                    document
                                        .getElementById(info.id)
                                        ?.scrollIntoView({
                                            behavior: 'smooth',
                                        })
                                }}
                                className="
                                    group rounded-[2rem] border border-zinc-800
                                    bg-black/40 p-8 text-left
                                    transition duration-300
                                    hover:-translate-y-2
                                    hover:border-primary/40
                                "
                            >

                                {/* Icon */}
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <Icon className="h-7 w-7" />
                                </div>

                                {/* Title */}
                                <h3 className="mt-8 text-2xl font-black text-white transition group-hover:text-primary">
                                    {info.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-5 leading-8 text-zinc-400">
                                    {info.description}
                                </p>
                            </button>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}