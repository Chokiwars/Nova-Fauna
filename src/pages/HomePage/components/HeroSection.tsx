import { ChevronDown, Shell } from 'lucide-react'
import { useEffect, useState } from 'react'

const heroImages = [
    {
        src: 'https://images.unsplash.com/photo-1628083370258-8530df9f5558?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Ringneck bird',
    },

    {
        src: 'https://images.unsplash.com/photo-1568431477192-52bb13a55088?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Ouriço-pigmeu',
    },

    {
        src: 'https://images.unsplash.com/photo-1622460040878-ca8a9efec5b4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Gecko',
    },

    {
        src: 'https://images.unsplash.com/photo-1609531084358-f09af256ffcb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Tarantula',
    },

    {
        src: 'https://images.unsplash.com/photo-1528158222524-d4d912d2e208?q=80&w=1140&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Green snake',
    },
]

export function HeroSection() {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) =>
                prev === heroImages.length - 1 ? 0 : prev + 1,
            )
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden rounded-b-3xl">

            {/* Background Images */}
            {heroImages.map((image, index) => (
                <img
                    key={image.alt}
                    src={image.src}
                    alt={image.alt}
                    className={`
                        absolute inset-0 h-full w-full object-cover
                        transition-opacity duration-1000
                        ${currentImage === index ? 'opacity-100' : 'opacity-0'}
                    `}
                />
            ))}

            {/* Overlay escuro */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Glow verde */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

            {/* Conteúdo */}
            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-6">

                <span className="mb-6 flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-medium text-primary backdrop-blur-md">
                    <Shell className="h-4 w-4" />
                    Explore o universo dos pets não convencionais
                </span>

                <h1 className="max-w-4xl text-left text-5xl font-black leading-tight text-white md:text-7xl">
                    Descubra espécies fora 
                    <span className="text-primary drop-shadow-[0_0_25px_rgba(34,197,94,0.45)]">
                        {' '}do comum{' '}
                    </span>
                    que são ótimos companheiros.
                </h1>

                <p className="mt-8 max-w-2xl text-left text-lg leading-8 text-zinc-300">
                    Informações sobre serpentes, lagartos, habitats naturais,
                    criadouros responsáveis e curiosidades fascinantes sobre
                    o mundo dos animais não convencionais.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <button className="rounded-2xl bg-primary px-8 py-4 text-lg font-semibold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.35)]">
                        Explorar espécies
                    </button>

                    <button className="rounded-2xl border border-zinc-700 bg-black/40 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition hover:border-primary hover:bg-primary/10">
                        Conhecer habitats
                    </button>
                </div>

                {/* Stats */}
                <div className="mt-16 flex flex-wrap gap-10">
                    <div>
                        <h2 className="text-4xl font-black text-primary">
                            120+
                        </h2>

                        <p className="mt-2 text-zinc-400">
                            Espécies catalogadas
                        </p>
                    </div>

                    <div>
                        <h2 className="text-4xl font-black text-primary">
                            45+
                        </h2>

                        <p className="mt-2 text-zinc-400">
                            Habitats documentados
                        </p>
                    </div>

                    <div>
                        <h2 className="text-4xl font-black text-primary">
                            30+
                        </h2>

                        <p className="mt-2 text-zinc-400">
                            Criadouros parceiros
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll Down */}
            <button
                onClick={() => {
                    document
                        .getElementById('featured-animals')
                        ?.scrollIntoView({
                            behavior: 'smooth',
                        })
                }}
                className="absolute bottom-8 left-1/2 z-50 -translate-x-1/2 animate-bounce rounded-full border border-green-400/10 bg-black/30 p-3 text-green-400 backdrop-blur-md transition hover:border-primary/50 hover:text-primary"
            >
                <ChevronDown className="h-6 w-6" />
            </button>
        </section>
    )
}