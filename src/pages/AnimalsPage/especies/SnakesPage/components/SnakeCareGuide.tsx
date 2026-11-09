import {
    ShieldCheck,
    Rat,
    Trees,
    Brain,
    Dna,
} from 'lucide-react'

const guides = [
    {
        icon: Rat,
        title: 'Alimentação',
        description:
            'A alimentação das serpentes varia conforme a espécie, idade, metabolismo e hábitos naturais. Algumas espécies possuem comportamento alimentar extremamente ativo, enquanto outras podem passar semanas sem se alimentar. Em cativeiro, a maioria das serpentes mantidas como pets não convencionais consome roedores previamente congelados e descongelados, garantindo maior segurança tanto para o animal quanto para o tutor. Entender frequência alimentar, tamanho ideal da presa e comportamento durante a digestão é essencial para manter a saúde do animal.',
    },

    {
        icon: Trees,
        title: 'Habitat e ambientação',
        description:
            'O terrário é um dos fatores mais importantes no manejo responsável de serpentes. Cada espécie possui necessidades específicas relacionadas à temperatura, umidade, ventilação e espaço disponível. Espécies arborícolas necessitam de galhos e estruturas verticais, enquanto espécies fossoriais preferem substratos profundos para escavação. A ambientação correta reduz estresse, melhora o comportamento natural e proporciona bem-estar físico e mental ao animal.',
    },

    {
        icon: ShieldCheck,
        title: 'Manejo responsável',
        description:
            'O manejo de serpentes exige calma, observação e respeito ao comportamento natural do animal. Diferente de pets domésticos convencionais, serpentes não demonstram afeto da mesma maneira, porém podem se acostumar gradualmente à presença humana quando manipuladas corretamente. Evitar excesso de manuseio, respeitar períodos de digestão e compreender sinais de estresse são pontos fundamentais para uma convivência segura e saudável.',
    },

    {
        icon: Brain,
        title: 'Comportamento',
        description:
            'Serpentes possuem comportamentos extremamente interessantes e muitas vezes incompreendidos. Algumas espécies são tímidas e reservadas, enquanto outras demonstram maior atividade exploratória. Existem serpentes de hábitos noturnos, diurnos, arborícolas, terrestres e semiaquáticos. Compreender o comportamento natural de cada espécie ajuda o tutor a interpretar melhor ações como esconder-se constantemente, recusar alimento ou explorar o terrário durante determinados horários.',
    },

    {
        icon: Dna,
        title: 'Classificação biológica',
        description:
            'As serpentes pertencem à ordem Squamata, sendo classificadas como répteis. Ao longo da evolução, desenvolveram adaptações extremamente eficientes, como corpo alongado, mandíbula flexível e sensores térmicos em algumas espécies. Atualmente existem milhares de espécies distribuídas em diversos continentes, ocupando habitats variados como florestas tropicais, desertos, campos abertos e ambientes aquáticos. Apesar da enorme diversidade, apenas uma pequena parcela apresenta risco significativo para seres humanos.',
    },
]

export function SnakeCareGuide() {
    return (
        <section className="bg-gradient-to-b from-black via-secondbackground to-black px-6 py-32">

            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mx-auto max-w-4xl text-center">

                    <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Guia de cuidados
                    </span>

                    <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
                        Muito além da estética:
                        <span className="text-primary">
                            {' '}entenda as serpentes
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
                        Serpentes são animais fascinantes e extremamente
                        diversos, mas que exigem conhecimento, responsabilidade
                        e respeito às suas necessidades naturais. Conhecer seus
                        hábitos e características é essencial para oferecer uma
                        criação ética e saudável no universo dos pets não
                        convencionais.
                    </p>
                </div>

                {/* Guides */}
                <div className="mt-24 grid gap-8">

                    {guides.map((guide) => {
                        const Icon = guide.icon

                        return (
                            <article
                                key={guide.title}
                                className="
                                    rounded-[2rem]
                                    border border-zinc-800
                                    bg-black/40
                                    p-8 md:p-12
                                    backdrop-blur-sm
                                    transition duration-500
                                    hover:border-primary/30
                                    hover:bg-primary/5
                                "
                            >

                                <div className="flex flex-col gap-8 lg:flex-row">

                                    {/* Icon */}
                                    <div
                                        className="
                                            flex h-20 w-20 shrink-0
                                            items-center justify-center
                                            rounded-3xl
                                            border border-primary/20
                                            bg-primary/10
                                            text-primary
                                        "
                                    >
                                        <Icon className="h-10 w-10" />
                                    </div>

                                    {/* Content */}
                                    <div>

                                        <h3 className="text-3xl font-black text-white">
                                            {guide.title}
                                        </h3>

                                        <p className="mt-6 text-lg leading-9 text-zinc-400">
                                            {guide.description}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>

                {/* Bottom Text */}
                <div
                    className="
                        mt-24 overflow-hidden rounded-[2rem]
                        border border-primary/20
                        bg-primary/5
                        p-10 md:p-14
                    "
                >

                    <h3 className="text-4xl font-black text-white">
                        Criar uma serpente vai muito além de possuir
                        um animal diferente
                    </h3>

                    <p className="mt-8 text-lg leading-9 text-zinc-300">
                        No universo dos pets não convencionais, informação é
                        uma das ferramentas mais importantes para garantir
                        qualidade de vida e bem-estar animal. Cada espécie
                        possui necessidades específicas relacionadas à
                        alimentação, temperatura, espaço, comportamento e
                        rotina. Antes de adquirir qualquer serpente, é
                        fundamental pesquisar profundamente sobre manejo,
                        legislação, origem do animal e estrutura necessária
                        para mantê-lo de forma ética e responsável.
                    </p>
                </div>
            </div>
        </section>
    )
}