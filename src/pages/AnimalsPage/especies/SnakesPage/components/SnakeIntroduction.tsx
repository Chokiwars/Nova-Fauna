import { ChevronDown } from 'lucide-react'

export function SnakeIntroduction() {
    return (
        <section
            id="snake-introduction"
            className="relative overflow-hidden bg-gradient-to-b from-black via-green-900/20 to-black px-6 py-32"
        >

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-6xl">

                {/* Header */}
                <div className="max-w-4xl">

                    <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Sobre as serpentes
                    </span>

                    <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
                        Muito além dos mitos e do{' '}

                        <span className="text-primary">
                            medo
                        </span>
                    </h2>

                    <p className="
                        mt-8 max-w-3xl
                        text-2xl font-light leading-[1.9]
                        text-zinc-300
                    ">
                        As serpentes fazem parte de um dos grupos mais
                        fascinantes do reino animal, carregando milhões de anos
                        de evolução, adaptações impressionantes e comportamentos
                        únicos que despertam curiosidade em pessoas do mundo
                        inteiro.
                    </p>
                </div>

                {/* Content */}
                <div className="mt-20 grid gap-14 lg:grid-cols-2">

                    <div
    className="
        relative rounded-3xl
        border border-green-800
        border-t-0 border-b-0
        p-10
        text-lg leading-9 text-zinc-400
        transition duration-500
        hover:border-primary/50
    "
>

                        <p>
                            Apesar de muitas vezes serem associadas ao perigo,
                            serpentes possuem um papel extremamente importante
                            para o equilíbrio ecológico, ajudando no controle de
                            populações de roedores e outros pequenos animais.
                            Além disso, diversas espécies apresentam padrões,
                            cores e comportamentos considerados verdadeiras
                            obras da natureza.
                        </p>

                        <p>
                            Nos últimos anos, o interesse por pets não
                            convencionais cresceu significativamente, e as
                            serpentes passaram a conquistar espaço entre tutores
                            apaixonados por animais exóticos. Espécies como
                            Ball Python, King Snake e Jiboias, além de outras espécies
                            vêm se tornando cada vez mais populares devido ao manejo
                            relativamente tranquilo e à enorme variedade de
                            morfologias existentes.
                        </p>

                        <p>
                            Diferente do que muitos imaginam, criar uma
                            serpente exige responsabilidade, conhecimento e
                            dedicação. Questões como temperatura, umidade,
                            alimentação, enriquecimento ambiental e manejo
                            correto são fundamentais para garantir o bem-estar
                            do animal em cativeiro.
                        </p>
                    </div>

                    <div
    className="
        relative rounded-3xl
        border border-green-800
        border-t-0 border-b-0
        p-10
        text-lg leading-9 text-zinc-400
        transition duration-500
        hover:border-primary/50
    "
>

                        <p>
                            Na Nova Fauna, o objetivo é apresentar conteúdos
                            educativos e acessíveis para pessoas interessadas no
                            universo dos pets não convencionais, aproximando o
                            público de espécies frequentemente incompreendidas.
                            Aqui você encontrará informações sobre habitats,
                            comportamento, alimentação, cuidados básicos,
                            curiosidades e diversas espécies criadas legalmente
                            no Brasil.
                        </p>

                        <p>
                            Além da parte educativa, a plataforma também busca
                            incentivar a posse responsável e o respeito aos
                            animais silvestres, reforçando sempre a importância
                            da criação legalizada e do combate ao tráfico de
                            fauna.
                        </p>

                        <p>
                            Cada espécie possui características próprias, níveis
                            diferentes de manejo e necessidades específicas.
                            Por isso, conhecer profundamente esses animais é o
                            primeiro passo para construir uma relação saudável,
                            segura e responsável com o universo fascinante das
                            serpentes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll Down */}
            <button
                onClick={() => {
                    document
                        .getElementById('snake-species')
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