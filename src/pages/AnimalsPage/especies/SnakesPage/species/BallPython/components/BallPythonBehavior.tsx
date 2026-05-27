import {
    Shield,
    MoonStar,
    Hand,
    Sparkles,
} from 'lucide-react'

export function BallPythonBehavior() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-black via-secondbackground to-black px-6 py-32">

            {/* Glow */}
            <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Header */}
                <div className="max-w-4xl">

                    <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Comportamento
                    </span>

                    <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
                        Calma, tímida e extremamente previsível
                    </h2>

                    <p className="mt-8 text-xl leading-9 text-zinc-400">
                        A personalidade tranquila da Ball Python é um dos
                        fatores que transformaram a espécie em uma verdadeira
                        referência no hobby de serpentes. Diferente de espécies
                        mais agitadas, defensivas ou extremamente exploradoras,
                        Ball Pythons costumam apresentar um comportamento muito
                        mais reservado e previsível.
                    </p>
                </div>

                {/* Timeline */}
                <div className="mt-24 space-y-28">

                    {/* Defensivo */}
                    <article className="grid gap-14 lg:grid-cols-[120px_1fr]">

                        <div className="flex flex-col items-center">

                            <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-primary/20 bg-primary/10 text-primary">
                                <Shield className="h-12 w-12" />
                            </div>

                            <div className="mt-6 h-full w-px bg-gradient-to-b from-primary/40 via-zinc-800 to-transparent" />
                        </div>

                        <div>

                            <h3 className="text-4xl font-black text-white">
                                Comportamento defensivo
                            </h3>

                            <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/30 via-zinc-800 to-transparent" />

                            <div className="mt-10 space-y-8 text-lg leading-9 text-zinc-400">

                                <p>
                                    Diferente de muitas outras serpentes
                                    mantidas em cativeiro, Ball Pythons raramente
                                    utilizam mordidas como primeira resposta
                                    diante de situações estressantes. A espécie
                                    possui um comportamento naturalmente mais
                                    tímido, reservado e defensivo, priorizando
                                    esconderijos e fuga sempre que possível.
                                </p>

                                <p>
                                    Esse comportamento provavelmente surgiu como
                                    adaptação evolutiva aos ambientes abertos da
                                    savana africana. Em regiões onde há pouca
                                    vegetação densa para proteção, evitar
                                    confrontos diretos acaba sendo uma estratégia
                                    extremamente eficiente para sobrevivência.
                                </p>

                                <p>
                                    Quando se sentem ameaçadas, muitas Ball
                                    Pythons permanecem completamente imóveis,
                                    tentando passar despercebidas ao invés de
                                    atacar. Esse perfil comportamental ajuda a
                                    explicar por que a espécie é considerada uma
                                    das serpentes mais seguras e previsíveis para
                                    manejo em cativeiro.
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Bolinha */}
                    <article className="grid gap-14 lg:grid-cols-[1fr_120px]">

                        <div className="text-right">

                            <div className="flex justify-end">
                                <h3 className="text-4xl font-black text-white">
                                    O famoso “virar bolinha”
                                </h3>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <div className="h-px w-full max-w-3xl bg-gradient-to-l from-primary/30 via-zinc-800 to-transparent" />
                            </div>

                            <div className="mt-10 space-y-8 text-lg leading-9 text-zinc-400">

                                <p>
                                    O comportamento mais famoso da espécie é o
                                    responsável pelo nome “Ball Python”. Quando
                                    extremamente assustada, a serpente enrola o
                                    próprio corpo formando uma bola compacta,
                                    protegendo totalmente a cabeça no centro das
                                    espiras.
                                </p>

                                <p>
                                    Esse mecanismo defensivo é extremamente
                                    eficiente contra predadores naturais, já que
                                    reduz drasticamente áreas vulneráveis do
                                    corpo. Ao invés de desperdiçar energia em
                                    ataques constantes, a espécie aposta em
                                    proteção passiva e resistência.
                                </p>

                                <p>
                                    Em cativeiro, esse comportamento também pode
                                    surgir durante momentos de estresse intenso,
                                    excesso de manipulação, ambientes muito
                                    abertos ou mudanças repentinas no terrário.
                                    Por isso, compreender a linguagem corporal da
                                    serpente é fundamental para evitar situações
                                    desconfortáveis.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">

                            <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-primary/20 bg-primary/10 text-primary">
                                <Sparkles className="h-12 w-12" />
                            </div>

                            <div className="mt-6 h-full w-px bg-gradient-to-b from-primary/40 via-zinc-800 to-transparent" />
                        </div>
                    </article>

                    {/* Manejo */}
                    <article className="grid gap-14 lg:grid-cols-[120px_1fr]">

                        <div className="flex flex-col items-center">

                            <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-primary/20 bg-primary/10 text-primary">
                                <Hand className="h-12 w-12" />
                            </div>

                            <div className="mt-6 h-full w-px bg-gradient-to-b from-primary/40 via-zinc-800 to-transparent" />
                        </div>

                        <div>

                            <h3 className="text-4xl font-black text-white">
                                Manejo e interação
                            </h3>

                            <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/30 via-zinc-800 to-transparent" />

                            <div className="mt-10 space-y-8 text-lg leading-9 text-zinc-400">

                                <p>
                                    O manejo tranquilo é um dos maiores atrativos
                                    da Ball Python para iniciantes. Muitos
                                    indivíduos toleram muito bem interações
                                    frequentes quando criados corretamente desde
                                    filhotes e mantidos em ambientes adequados.
                                </p>

                                <p>
                                    Ainda assim, é importante lembrar que
                                    serpentes não são animais domesticados como
                                    cães ou gatos. Mesmo indivíduos extremamente
                                    dóceis podem demonstrar desconforto caso o
                                    manejo seja excessivo, brusco ou realizado em
                                    momentos inadequados, como durante digestão
                                    ou troca de pele.
                                </p>

                                <p>
                                    Quando acostumadas ao tutor e manipuladas com
                                    calma, Ball Pythons costumam explorar as mãos
                                    lentamente e apresentar um comportamento
                                    bastante previsível. Essa característica faz
                                    com que a espécie seja amplamente utilizada
                                    como “porta de entrada” para pessoas
                                    interessadas no universo das serpentes.
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Noturna */}
                    <article className="grid gap-14 lg:grid-cols-[1fr_120px]">

                        <div className="text-right">

                            <div className="flex justify-end">
                                <h3 className="text-4xl font-black text-white">
                                    Atividade noturna
                                </h3>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <div className="h-px w-full max-w-3xl bg-gradient-to-l from-primary/30 via-zinc-800 to-transparent" />
                            </div>

                            <div className="mt-10 space-y-8 text-lg leading-9 text-zinc-400">

                                <p>
                                    Ball Pythons possuem hábitos principalmente
                                    noturnos e crepusculares. Durante o dia,
                                    normalmente permanecem escondidas em tocas,
                                    caixas úmidas ou outros locais protegidos,
                                    saindo apenas quando o ambiente se torna mais
                                    seguro e a temperatura diminui.
                                </p>

                                <p>
                                    Durante a noite, o comportamento muda
                                    completamente. Muitas começam a explorar o
                                    terrário, investigar odores, escalar objetos
                                    baixos e procurar alimento. Esse aumento de
                                    atividade costuma surpreender tutores que
                                    acreditam que a espécie é “parada” o tempo
                                    inteiro.
                                </p>

                                <p>
                                    Seus sensores térmicos extremamente
                                    eficientes permitem localizar presas mesmo em
                                    ambientes escuros. Associado ao excelente
                                    olfato, isso transforma a Ball Python em uma
                                    caçadora silenciosa e altamente adaptada à
                                    vida noturna nas savanas africanas.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">

                            <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-primary/20 bg-primary/10 text-primary">
                                <MoonStar className="h-12 w-12" />
                            </div>

                            <div className="mt-6 h-full w-px bg-gradient-to-b from-primary/40 via-zinc-800 to-transparent" />
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}