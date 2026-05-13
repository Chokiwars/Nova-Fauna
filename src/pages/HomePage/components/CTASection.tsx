import { ArrowRight, ShieldCheck } from 'lucide-react'

export function CTASection() {
    return (
        <section
            id="cta-section"
            className="relative flex min-h-screen items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage:
                        'url(https://images.pexels.com/photos/27816103/pexels-photo-27816103.jpeg?_gl=1*d9arnt*_ga*MTg4Nzk0MzMzMy4xNzc4NjczOTg5*_ga_8JE65Q40S6*czE3Nzg3MDM0MzYkbzUkZzEkdDE3Nzg3MDM0ODUkajExJGwwJGgw)',
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/75" />

            {/* Green Glow */}
            <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">

                {/* Badge */}
                <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur-md">
                    <ShieldCheck className="h-4 w-4" />
                    Posse responsável
                </div>

                {/* Title */}
                <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
                    O universo dos
                    <span className="text-primary">
                        {' '}pets não convencionais
                    </span>
                    {' '}espera por você
                </h2>

                {/* Description */}
                <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
                    Descubra espécies fascinantes, aprenda sobre manejo,
                    habitats e criação responsável em uma experiência visual
                    moderna e imersiva.
                </p>

                {/* Buttons */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
                    <button className="group flex items-center gap-3 rounded-2xl bg-primary px-8 py-4 text-lg font-semibold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(34,197,94,0.35)]">
                        Explorar espécies

                        <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                    </button>

                    <button className="rounded-2xl border border-zinc-700 bg-black/40 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition hover:border-primary hover:bg-primary/10">
                        Conhecer criadouros
                    </button>
                </div>

                {/* Stats */}
                <div className="mt-20 grid w-full max-w-4xl gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
                    <div>
                        <h3 className="text-4xl font-black text-primary">
                            120+
                        </h3>

                        <p className="mt-2 text-zinc-400">
                            Espécies catalogadas
                        </p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-black text-primary">
                            30+
                        </h3>

                        <p className="mt-2 text-zinc-400">
                            Criadouros parceiros
                        </p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-black text-primary">
                            100%
                        </h3>

                        <p className="mt-2 text-zinc-400">
                            Foco em bem-estar animal
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}