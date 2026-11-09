import { ArrowRight, Sparkles } from 'lucide-react'

export function AnimalCTA() {
    return (
        <section
            id="animal-cta"
            className="relative overflow-hidden bg-black"
        >
            {/* Background Image */}
            <div className="sticky top-0 h-screen w-full">
                <img
                    src="https://images.pexels.com/photos/751689/pexels-photo-751689.jpeg"
                    alt="Exotic animal"
                    className="h-full w-full object-cover grayscale transition duration-1000 hover:grayscale-0"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
            </div>

            {/* Floating Content */}
            <div className="relative z-10 -mt-[70vh] flex min-h-screen items-center justify-center px-6 pb-32">
                <div
                    className="
                        max-w-4xl rounded-[2.5rem]
                        border border-primary/20
                        bg-black/50 p-10
                        text-center backdrop-blur-xl
                        md:p-16
                    "
                >
                    {/* Badge */}
                    <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                        <Sparkles className="h-4 w-4" />
                        Explore mais espécies
                    </div>

                    {/* Title */}
                    <h2 className="mt-10 text-4xl font-black leading-tight text-white md:text-6xl">
                        Descubra o universo dos pets não convencionais
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
                        Explore espécies fascinantes, aprenda sobre cuidados,
                        manejo, alimentação e encontre conteúdos completos sobre
                        os animais mais incríveis do mundo.
                    </p>

                    {/* Buttons */}
                    <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
                        <button
                            className="
                                group flex items-center gap-3 rounded-full
                                bg-primary px-8 py-4 text-sm font-bold
                                uppercase tracking-[0.2em] text-black
                                transition duration-300 hover:scale-105
                            "
                        >
                            Explorar espécies

                            <ArrowRight className="h-5 w-5 transition duration-300 group-hover:translate-x-1" />
                        </button>

                        <button
                            className="
                                rounded-full border border-white/10
                                bg-white/5 px-8 py-4 text-sm font-bold
                                uppercase tracking-[0.2em] text-white
                                backdrop-blur-md transition duration-300
                                hover:border-primary/40 hover:bg-primary/10
                                hover:text-primary
                            "
                        >
                            Guias de cuidados
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}