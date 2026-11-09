import { useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'


const morphs = [
    {
        name: 'Normal',
        description:
            'A coloração selvagem original da Ball Python, com tons marrons, dourados e padrões clássicos.',
        image: 'URL',
    },

    {
        name: 'Mojave',
        description:
            'Morph extremamente famosa pelos contrastes fortes e participação em diversos combos genéticos.',
        image: 'URL',
    },

    {
        name: 'Pastel',
        description:
            'Conhecida pelas cores mais claras e vibrantes, sendo uma das morphs mais populares do hobby.',
        image: 'URL',
    },

    {
        name: 'Banana',
        description:
            'Morph muito querida pelos tons amarelos vivos e manchas arroxeadas suaves.',
        image: 'URL',
    },

    {
        name: 'Clown',
        description:
            'Possui padrões laterais únicos e aparência extremamente limpa e diferenciada.',
        image: 'URL',
    },

    {
        name: 'Pied',
        description:
            'Caracterizada pelas grandes áreas completamente brancas misturadas com padrões normais.',
        image: 'URL',
    },

    {
        name: 'Axanthic',
        description:
            'Morph com redução de pigmentos amarelos, criando aparência cinza e contrastante.',
        image: 'URL',
    },

    {
        name: 'BEL',
        description:
            'Blue Eyed Leucistic: uma das morphs mais famosas do mundo, completamente branca e com olhos azuis.',
        image: 'URL',
    },

    {
        name: 'Desert Ghost',
        description:
            'Conhecida por intensificar cores e reduzir o escurecimento natural com o envelhecimento.',
        image: 'URL',
    },

    {
        name: 'Enchi',
        description:
            'Morph que aumenta saturação, reduz padrões laterais e cria cores extremamente vibrantes.',
        image: 'URL',
    },

    {
        name: 'Lesser',
        description:
            'Muito utilizada em combinações genéticas e famosa por ajudar na criação de BELs.',
        image: 'URL',
    },

    {
        name: 'Cinnamon',
        description:
            'Morph com tons mais escuros e aparência amarronzada intensa.',
        image: 'URL',
    },

    {
        name: 'Spider',
        description:
            'Conhecida pelo padrão fino e extremamente diferente, embora controversa devido a problemas neurológicos associados.',
        image: 'URL',
    },

    {
        name: 'Pinstripe',
        description:
            'Morph caracterizada pelas linhas dorsais contínuas e padrões laterais reduzidos.',
        image: 'URL',
    },
]

export function BallPythonMorphs() {
    const [activeMorph, setActiveMorph] = useState<string | null>(null)

    return (
        <section className="relative overflow-hidden bg-black px-6 py-32">

            {/* Glow */}
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Header */}
                <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

                    <div>

                        <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                            Morphs
                        </span>

                        <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
                            A espécie que revolucionou o mundo dos morphs
                        </h2>

                        <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
                            Ball Pythons possuem uma das maiores variedades
                            genéticas já vistas no hobby de animais exóticos.
                            Ao longo dos anos, criadores desenvolveram centenas
                            de combinações com cores, padrões e características
                            únicas, transformando completamente a aparência da
                            espécie.
                        </p>
                    </div>

                    <div className="rounded-[2rem] border border-primary/10 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 p-8">

                        <p className="text-lg leading-8 text-zinc-400">
                            Hoje existem morphs famosos em répteis como:
                            Albino, Clown, Banana, Piebald e Blue Eyed Lucy,
                            além de milhares de combinações genéticas criadas
                            através de seleção e reprodução responsável.
                        </p>

                        <Link
                            to="/morphs"
                            className="
                                group mt-8 inline-flex items-center gap-3
                                rounded-2xl border border-primary/20
                                bg-primary/10 px-6 py-4
                                text-sm font-bold uppercase
                                tracking-[0.2em] text-primary
                                transition duration-300
                                hover:border-primary
                                hover:bg-primary
                                hover:text-black
                            "
                        >
                            Explorar morphs

                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* Morphs Grid */}
                <div className="mt-24 space-y-6">

                    {morphs.map((morph) => {
                        const isActive = activeMorph === morph.name

                        return (
                            <article
                                key={morph.name}
                                className="
                    overflow-hidden rounded-[2rem]
                    border border-primary/10
                    bg-gradient-to-b
                    from-zinc-950 via-black to-zinc-950
                    transition duration-500
                "
                            >

                                {/* Header */}
                                <button
                                    onClick={() =>
                                        setActiveMorph(
                                            isActive ? null : morph.name,
                                        )
                                    }
                                    className="
                        flex w-full items-center
                        justify-between gap-6
                        p-8 text-left
                    "
                                >

                                    <div>

                                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                                            Ball Python
                                        </p>

                                        <h3 className="mt-3 text-3xl font-black text-white">
                                            {morph.name}
                                        </h3>
                                    </div>

                                    <div
                                        className={`
                            flex h-14 w-14 items-center justify-center
                            rounded-2xl border border-primary/20
                            bg-primary/10 text-primary
                            transition duration-500

                            ${isActive
                                                ? 'rotate-180 border-primary bg-primary text-black'
                                                : ''
                                            }
                        `}
                                    >
                                        <ChevronDown className="h-6 w-6" />
                                    </div>
                                </button>

                                {/* Expand */}
                                <div
                                    className={`
                        grid transition-all duration-700

                        ${isActive
                                            ? 'grid-rows-[1fr] opacity-100'
                                            : 'grid-rows-[0fr] opacity-0'
                                        }
                    `}
                                >
                                    <div className="overflow-hidden">

                                        <div className="grid gap-10 border-t border-primary/10 p-8 lg:grid-cols-[420px_1fr]">

                                            {/* Image */}
                                            <div className="overflow-hidden rounded-[2rem]">

                                                <img
                                                    src={morph.image}
                                                    alt={morph.name}
                                                    className="
                                        h-[320px] w-full object-cover
                                    "
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="flex flex-col justify-center">

                                                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                                                    Características
                                                </span>

                                                <h4 className="mt-5 text-5xl font-black text-white">
                                                    {morph.name}
                                                </h4>

                                                <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-400">
                                                    {morph.description}
                                                </p>

                                                <Link
                                                    to="/morphs"
                                                    className="
                                        group mt-10 inline-flex
                                        items-center gap-3
                                        text-sm font-bold uppercase
                                        tracking-[0.2em]
                                        text-primary
                                        transition hover:text-white
                                    "
                                                >
                                                    Ver morph completa

                                                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}