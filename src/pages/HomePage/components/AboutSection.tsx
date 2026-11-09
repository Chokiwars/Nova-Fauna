import { BookOpen, ShieldCheck, Star, Trees, ChevronDown } from 'lucide-react'

const features = [
    {
        icon: BookOpen,
        title: 'Conteúdo educativo',
        description:
            'Descubra informações detalhadas sobre pets não convencionais, comportamentos e cuidados.',
    },

    {
        icon: ShieldCheck,
        title: 'Posse responsável',
        description:
            'Aprenda sobre criação legalizada, manejo correto e bem-estar animal.',
    },

    {
        icon: Trees,
        title: 'Habitats naturais',
        description:
            'Explore ambientes, origens e características ecológicas das espécies.',
    },

    {
        icon: Star,
        title: 'Criadouros legalizados',
        description:
            'Encontre criadouros confiáveis, com práticas éticas e foco no bem-estar animal.',
    },
]

export function AboutSection() {
    return (
        <section id="about-section" className="relative overflow-hidden bg-gradient-to-b from-black via-secondbackground to-black px-6 py-24">

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 grid gap-16 lg:grid-cols-2 lg:items-center">

                {/* Left Content */}
                <div>
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                        Sobre a plataforma
                    </span>

                    <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl">
                        Uma experiência criada para amantes de animais
                    </h2>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                        A Nova Fauna conecta informação, curiosidades e paixão
                        pelo universo dos animais silvestres e exóticos,
                        oferecendo uma experiência moderna para quem deseja
                        conhecer espécies fascinantes e que podem ser adquiridas
                        de forma responsável.
                    </p>

                    {/* Features */}
                    <div className="mt-12 grid gap-5 sm:grid-cols-2">
                        {features.map((feature) => {
                            const Icon = feature.icon

                            return (
                                <div
                                    key={feature.title}
                                    className="rounded-2xl border border-zinc-800 bg-black/30 p-5 backdrop-blur-sm transition hover:border-primary/30 hover:bg-primary/5"
                                >
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="text-lg font-semibold text-white">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                                        {feature.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                    <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" />

                    <div className="relative overflow-hidden rounded-[2rem] border border-primary/20">
                        <img
                            src="https://images.pexels.com/photos/34664974/pexels-photo-34664974.jpeg?_gl=1*2yhowe*_ga*MTg4Nzk0MzMzMy4xNzc4NjczOTg5*_ga_8JE65Q40S6*czE3Nzg2Nzc0NDAkbzIkZzEkdDE3Nzg2Nzc0NDgkajUyJGwwJGgw"
                            alt="Exotic reptile"
                            className="h-[700px] w-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                        {/* Floating Card */}
                        <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
                            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                                Nova Fauna
                            </span>

                            <h3 className="mt-3 text-2xl font-bold text-white">
                                Explore o extraordinário
                            </h3>

                            <p className="mt-3 leading-7 text-zinc-300">
                                Descubra espécies incríveis e mergulhe no
                                universo fascinante dos pets não convencionais.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Down */}
            <button
                onClick={() => {
                    document
                        .getElementById('explore-section')
                        ?.scrollIntoView({
                            behavior: 'smooth',
                        })
                }}
                className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce rounded-full border border-green-400/10 bg-black/30 p-3 text-green-400 backdrop-blur-md transition hover:border-primary/50 hover:text-primary"
            >
                <ChevronDown className="h-6 w-6" />
            </button>
        </section>
    )
}