export function BallPythonIntroduction() {
    return (
        <section className="relative overflow-hidden bg-black px-6 py-32">

            {/* Glow */}
            <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Header */}
                <div className="max-w-4xl">

                    <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Sobre a espécie
                    </span>

                    <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
                        A serpente que conquistou o hobby mundial
                    </h2>

                    <p className="mt-8 max-w-3xl text-2xl font-light leading-[1.9] text-zinc-300">
                        A Ball Python se tornou uma das espécies mais populares
                        entre tutores de pets não convencionais graças ao
                        comportamento extremamente dócil, facilidade de manejo e
                        enorme variedade de morphs disponíveis atualmente.
                    </p>
                </div>

                {/* Content */}
                <div className="mt-20 grid gap-14 lg:grid-cols-2">

                    {/* Left Card */}
                    <div
                        className="
                            relative rounded-3xl
                            border border-green-800
                            border-b-0 border-t-0
                            bg-gradient-to-b from-black via-primary/5 to-black
                            p-10
                            transition duration-500
                            hover:border-primary/50
                        "
                    >

                        <div className="space-y-8 text-lg leading-9 text-zinc-400">

                            <p>
                                Originária de regiões da África Ocidental e
                                Central, a Ball Python habita áreas de savana,
                                campos e regiões semiáridas, utilizando tocas e
                                esconderijos naturais para se proteger do calor
                                intenso e de predadores.
                            </p>

                            <p>
                                Seu nome popular vem do comportamento defensivo
                                característico da espécie. Quando ameaçada, ela
                                costuma enrolar o próprio corpo formando uma
                                “bola”, protegendo a cabeça no centro ao invés
                                de atacar.
                            </p>

                            <p>
                                Esse comportamento mais reservado e tranquilo
                                tornou a Ball Python extremamente popular entre
                                iniciantes no hobby de serpentes.
                            </p>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div
                        className="
                            relative rounded-3xl
                            border border-green-800
                            border-b-0 border-t-0
                            bg-gradient-to-b from-black via-primary/5 to-black
                            p-10
                            transition duration-500
                            hover:border-primary/50
                        "
                    >

                        <div className="space-y-8 text-lg leading-9 text-zinc-400">

                            <p>
                                Outro fator que impulsionou a popularidade da
                                espécie foi a enorme quantidade de morphs
                                desenvolvidos ao longo dos anos. Atualmente
                                existem centenas de combinações genéticas com
                                padrões, cores e características únicas.
                            </p>

                            <p>
                                Morphs como Albino, Banana, Clown, Mojave,
                                Piebald e Blue Eyed Lucy se tornaram
                                extremamente famosos dentro do hobby mundial.
                            </p>

                            <p>
                                Hoje, a Ball Python é considerada uma das
                                melhores espécies para pessoas interessadas em
                                ingressar no universo dos pets não
                                convencionais.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}