import {
    Drumstick,
    Clock3,
    Bug,
    AlertTriangle,
    Scale,
} from 'lucide-react'

const feedingTopics = [
    {
        icon: Drumstick,
        title: 'Alimentação',
        description:
            'Ball Pythons são serpentes carnívoras que se alimentam principalmente de pequenos mamíferos. Em cativeiro, normalmente recebem camundongos e ratos previamente descongelados, prática considerada muito mais segura do que oferecer alimento vivo. A escolha correta do tamanho da presa é extremamente importante para evitar regurgitação, obesidade ou dificuldades digestivas. O ideal é que o alimento tenha espessura semelhante à parte mais larga do corpo da serpente.',
    },

    {
        icon: Clock3,
        title: 'Frequência',
        description:
            'A frequência alimentar varia bastante conforme idade, metabolismo, temperatura e tamanho do animal. Filhotes costumam comer a cada 5-7 dias devido ao crescimento acelerado, enquanto juvenis podem se alimentar semanalmente. Já adultos normalmente comem em intervalos maiores, variando entre 10 e 21 dias dependendo do porte e da rotina da serpente.',
    },

    {
        icon: Scale,
        title: 'Filhotes & Adultos',
        description:
            'Filhotes possuem metabolismo muito mais acelerado e passam por crescimento constante durante os primeiros anos de vida. Adultos tendem a se tornar mais tranquilos, comer menos frequentemente e apresentar comportamento alimentar mais seletivo. Fêmeas geralmente atingem tamanhos maiores do que machos e podem necessitar de presas maiores ao longo da vida.',
    },

    {
        icon: AlertTriangle,
        title: 'Jejum',
        description:
            'Ball Pythons são extremamente conhecidas pelos jejuns naturais. Alguns indivíduos passam semanas ou até meses recusando alimento sem necessariamente apresentar problemas de saúde. Isso pode acontecer devido a mudanças climáticas, período reprodutivo, estresse ambiental, troca de terrário ou simples comportamento individual da espécie. O mais importante é acompanhar o peso e observar sinais gerais de saúde.',
    },

    {
        icon: Bug,
        title: 'Problemas comuns',
        description:
            'Grande parte dos problemas alimentares em Ball Pythons está relacionada ao manejo incorreto. Temperaturas inadequadas, excesso de manipulação, falta de esconderijos, baixa umidade e ambientes muito abertos podem causar estresse e recusa alimentar. Além disso, oferecer presas muito grandes ou mudar constantemente a rotina do animal também pode afetar negativamente o apetite.',
    },
]

export function BallPythonFeeding() {
    return (
        <section className="relative overflow-hidden bg-black px-6 py-32">

            {/* Glow */}
            <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Header */}
                <div className="max-w-4xl">

                    <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Alimentação
                    </span>

                    <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
                        Uma alimentação simples e previsível
                    </h2>

                    <p className="mt-8 text-xl leading-9 text-zinc-400">
                        A Ball Python é considerada uma espécie relativamente
                        fácil de alimentar em cativeiro, embora alguns
                        indivíduos possam apresentar períodos de jejum natural
                        ao longo da vida.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-20 grid gap-10 lg:grid-cols-2">
                    {feedingTopics.map((topic) => {
                        const Icon = topic.icon

                        return (
                            <article
                                key={topic.title}
                                className="
                                    group relative overflow-hidden rounded-[2.5rem]
                                    border border-primary/10
                                    bg-gradient-to-b from-zinc-950 via-black to-zinc-950
                                    p-10 transition duration-500
                                    hover:-translate-y-2
                                    hover:border-primary/40"
                            >

                                {/* Glow */}
                                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition duration-500 group-hover:bg-primary/10" />

                                <div className="relative z-10">

                                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-primary/20 bg-primary/10 text-primary">
                                        <Icon className="h-10 w-10" />
                                    </div>

                                    <h3
                                        className="
                                            mt-10 text-4xl font-black
                                            text-white transition
                                            group-hover:text-primary"
                                    >
                                        {topic.title}
                                    </h3>

                                    <div className="mt-8 h-px w-full bg-gradient-to-r from-primary/30 via-zinc-800 to-transparent" />

                                    <p className="mt-8 text-lg leading-9 text-zinc-400">
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