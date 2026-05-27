import {
    Trees,
    Sun,
    Moon,
    Map,
} from 'lucide-react'

export function BallPythonHabitat() {
    return (
        <section className="relative overflow-hidden bg-black px-6 py-32">

            {/* Glow */}
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Header */}
                <div className="max-w-4xl">

                    <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Habitat natural
                    </span>

                    <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
                        Adaptada às savanas africanas
                    </h2>

                    <p className="mt-8 text-xl leading-9 text-zinc-400">
                        Apesar da enorme popularidade em cativeiro, a Ball
                        Python continua sendo uma espécie extremamente
                        especializada para sobreviver nos ambientes naturais da
                        África Ocidental e Central.
                    </p>
                </div>

                {/* Content */}
                <div className="mt-24 space-y-24">

                    {/* Distribuição */}
                    <article className="grid gap-14 lg:grid-cols-[120px_1fr]">

                        <div className="flex flex-col items-center">

                            <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-primary/20 bg-primary/10 text-primary">
                                <Map className="h-12 w-12" />
                            </div>

                            <div className="mt-4 h-full w-px bg-gradient-to-b from-primary/30 to-transparent" />
                        </div>

                        <div>

                            <h3 className="text-4xl font-black text-white">
                                Distribuição natural
                            </h3>

                            <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/30 via-zinc-800 to-transparent" />

                            <div className="mt-10 space-y-8 text-lg leading-9 text-zinc-400">

                                <p>
                                    A Ball Python (
                                    <span className="italic">
                                        Python regius
                                    </span>
                                    ) é encontrada naturalmente em diversos
                                    países da África Ocidental e Central, como
                                    Gana, Togo, Benin, Nigéria, Camarões e
                                    Uganda. Nessas regiões, o clima tropical
                                    influencia diretamente os ciclos naturais da
                                    espécie, principalmente em relação à
                                    reprodução, atividade noturna e alimentação.
                                </p>

                                <p>
                                    Diferente do que muitas pessoas imaginam,
                                    Ball Pythons não vivem em florestas densas.
                                    A maior parte da população selvagem ocupa
                                    áreas abertas de savana, campos secos,
                                    vegetações baixas e regiões semiáridas,
                                    locais onde conseguem encontrar abrigo com
                                    facilidade e caçar pequenos mamíferos
                                    durante a noite.
                                </p>

                                <p>
                                    Essas regiões normalmente apresentam duas
                                    estações muito bem definidas: períodos secos
                                    extremamente quentes e épocas chuvosas com
                                    aumento significativo da umidade. Essa
                                    alternância climática influencia o
                                    metabolismo da espécie e ajuda a explicar
                                    alguns comportamentos observados em
                                    cativeiro, como jejuns sazonais e mudanças
                                    no nível de atividade.
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Habitat */}
                    <article className="grid gap-14 lg:grid-cols-[1fr_120px]">

                        <div className="text-right">

                            <div className="flex justify-end">
                                <h3 className="text-4xl font-black text-white">
                                    Habitat natural
                                </h3>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <div className="h-px w-full max-w-3xl bg-gradient-to-l from-primary/30 via-zinc-800 to-transparent" />
                            </div>

                            <div className="mt-10 space-y-8 text-lg leading-9 text-zinc-400">

                                <p>
                                    Na natureza, Ball Pythons passam grande
                                    parte do tempo escondidas em locais
                                    protegidos. Cupinzeiros abandonados, tocas
                                    subterrâneas, troncos ocos, rachaduras em
                                    rochas e galerias naturais funcionam como
                                    refúgios contra predadores e contra o calor
                                    intenso presente durante o dia.
                                </p>

                                <p>
                                    Essa necessidade constante de segurança
                                    explica por que a espécie aprecia tanto
                                    esconderijos em cativeiro. Um terrário sem
                                    áreas fechadas costuma gerar estresse,
                                    insegurança e até recusa alimentar. Ball
                                    Pythons preferem ambientes apertados,
                                    escuros e protegidos, comportamento muito
                                    diferente de espécies extremamente ativas ou
                                    arborícolas.
                                </p>

                                <p>
                                    Embora sejam consideradas predominantemente
                                    terrestres, ocasionalmente podem escalar
                                    galhos baixos ou estruturas naturais em
                                    busca de alimento ou proteção. Ainda assim,
                                    seu corpo robusto e musculoso demonstra uma
                                    adaptação muito maior à locomoção pelo solo
                                    do que à vida nas árvores.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">

                            <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-primary/20 bg-primary/10 text-primary">
                                <Trees className="h-12 w-12" />
                            </div>

                            <div className="mt-4 h-full w-px bg-gradient-to-b from-primary/30 to-transparent" />
                        </div>
                    </article>

                    {/* Temperatura */}
                    <article className="grid gap-14 lg:grid-cols-[120px_1fr]">

                        <div className="flex flex-col items-center">

                            <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-primary/20 bg-primary/10 text-primary">
                                <Sun className="h-12 w-12" />
                            </div>

                            <div className="mt-4 h-full w-px bg-gradient-to-b from-primary/30 to-transparent" />
                        </div>

                        <div>

                            <h3 className="text-4xl font-black text-white">
                                Temperatura & umidade
                            </h3>

                            <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/30 via-zinc-800 to-transparent" />

                            <div className="mt-10 space-y-8 text-lg leading-9 text-zinc-400">

                                <p>
                                    As savanas africanas apresentam temperaturas
                                    elevadas durante praticamente todo o ano.
                                    Durante o dia, o calor pode ser bastante
                                    intenso, enquanto as noites tendem a ficar
                                    mais amenas. Ball Pythons utilizam
                                    esconderijos subterrâneos justamente para
                                    manter a temperatura corporal estável e
                                    evitar exposição excessiva ao calor.
                                </p>

                                <p>
                                    A umidade também varia bastante dependendo
                                    da estação. Em períodos chuvosos, o ambiente
                                    se torna mais úmido, favorecendo a troca de
                                    pele e aumentando a atividade da espécie.
                                    Já em épocas secas, os animais costumam se
                                    manter mais escondidos e conservam energia
                                    para evitar desidratação.
                                </p>

                                <p>
                                    Em cativeiro, reproduzir essas condições de
                                    forma equilibrada é fundamental para a saúde
                                    da serpente. Temperaturas inadequadas podem
                                    causar problemas digestivos, queda de
                                    imunidade e estresse, enquanto baixa umidade
                                    frequentemente resulta em mudas incompletas
                                    e dificuldades respiratórias.
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Comportamento */}
                    <article className="grid gap-14 lg:grid-cols-[1fr_120px]">

                        <div className="text-right">

                            <h3 className="text-4xl font-black text-white">
                                Comportamento selvagem
                            </h3>

                            <div className="mt-6 h-px w-full bg-gradient-to-l from-primary/30 via-zinc-800 to-transparent" />

                            <div className="mt-10 space-y-8 text-lg leading-9 text-zinc-400">

                                <p>
                                    Ball Pythons possuem hábitos principalmente
                                    noturnos e crepusculares. Durante o dia,
                                    normalmente permanecem escondidas em abrigos
                                    seguros, saindo apenas quando a temperatura
                                    diminui e o ambiente se torna mais seguro
                                    para caça e exploração.
                                </p>

                                <p>
                                    A espécie utiliza o excelente olfato e os
                                    sensores térmicos presentes na região da
                                    cabeça para localizar presas no escuro.
                                    Pequenos mamíferos representam a maior parte
                                    da dieta na natureza, principalmente
                                    roedores encontrados próximos a plantações,
                                    campos e regiões rurais.
                                </p>

                                <p>
                                    Apesar do tamanho relativamente robusto,
                                    Ball Pythons são animais extremamente
                                    reservados e evitam confrontos sempre que
                                    possível. Quando ameaçadas, preferem fugir
                                    ou se esconder ao invés de atacar. Caso não
                                    encontrem saída, realizam o famoso
                                    comportamento defensivo de enrolar o corpo
                                    formando uma “bola”, protegendo a cabeça no
                                    centro.
                                </p>

                                <p>
                                    Esse comportamento mais tímido e defensivo é
                                    justamente um dos fatores que transformou a
                                    espécie em uma das serpentes mais populares
                                    do mundo no hobby de animais exóticos.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">

                            <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-primary/20 bg-primary/10 text-primary">
                                <Moon className="h-12 w-12" />
                            </div>

                            <div className="mt-4 h-full w-px bg-gradient-to-b from-primary/30 to-transparent" />
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}