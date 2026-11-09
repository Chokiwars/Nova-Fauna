import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function BallPythonCTA() {
    return (
        <section className="relative overflow-hidden bg-black px-6 py-40">

            {/* Background */}
            <img
                src="https://images.pexels.com/photos/53140/snake-ball-python-python-regius-beauty-53140.jpeg"
                alt="Ball Python"
                className="absolute inset-0 h-full w-full object-cover opacity-20"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">

                <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                    Continue explorando
                </span>

                <h2 className="mt-10 text-5xl font-black leading-tight text-white md:text-7xl">
                    O universo das serpentes está apenas começando
                </h2>

                <p className="mt-10 max-w-3xl text-xl leading-9 text-zinc-400">
                    Descubra outras espécies, morphs incríveis, curiosidades e
                    conteúdos educativos sobre o fascinante mundo dos pets não
                    convencionais.
                </p>

                <div className="mt-14 flex flex-wrap justify-center gap-6">

                    <Link
                        to="/animais/serpentes"
                        className="
                            group inline-flex items-center gap-3
                            rounded-2xl bg-primary px-8 py-5
                            text-sm font-bold uppercase
                            tracking-[0.2em] text-black
                            transition duration-300
                            hover:scale-105
                        "
                    >
                        Explorar serpentes

                        <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                    </Link>

                    <Link
                        to="/morphs"
                        className="
                            rounded-2xl border border-primary/20
                            bg-black/40 px-8 py-5
                            text-sm font-bold uppercase
                            tracking-[0.2em] text-primary
                            transition duration-300
                            hover:border-primary
                            hover:bg-primary/10
                            hover:text-white
                        "
                    >
                        Ver morphs
                    </Link>
                </div>
            </div>
        </section>
    )
}