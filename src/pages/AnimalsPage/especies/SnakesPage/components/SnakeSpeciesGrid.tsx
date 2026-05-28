import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const snakes = [
    {
        name: 'Ball Python',
        scientificName: 'Python regius',
        path: '/animais/serpentes/python-regius',

        description:
            'Conhecida pelo comportamento calmo e pela enorme variedade de morfologias, a Ball Python é uma das serpentes mais populares entre tutores iniciantes.',

        image:
            'https://images.pexels.com/photos/36585274/pexels-photo-36585274.jpeg?_gl=1*1ufyhjc*_ga*NDUxMTg5MDUwLjE3Nzk1ODEzODk.*_ga_8JE65Q40S6*czE3Nzk1ODM0NzckbzIkZzEkdDE3Nzk1ODM4MzAkajEkbDAkaDA.',
    },

    {
        name: 'Boa C. Constrictor',
        scientificName: 'Boa constrictor constrictor',
        path: '/animais/serpentes/boa-constrictor-constrictor',

        description:
            'A Boa Constrictor Constrictor é uma das serpentes mais icônicas entre os pets não convencionais, admirada pelo porte impressionante, comportamento tranquilo e padrões naturais exuberantes.',

        image:
            'https://images.pexels.com/photos/19270195/pexels-photo-19270195.jpeg?_gl=1*122uwn1*_ga*NDUxMTg5MDUwLjE3Nzk1ODEzODk.*_ga_8JE65Q40S6*czE3Nzk1ODM0NzckbzIkZzEkdDE3Nzk1ODM3NzIkajU5JGwwJGgw',
    },

    {
        name: 'Rainbow Boa',
        scientificName: 'Epicrates cenchria',
        path: '/animais/serpentes/epicrates-cenchria',

        description:
            'Famosa pelo brilho iridescente das escamas, a Rainbow Boa impressiona pela beleza e pelo visual exótico.',

        image:
            'https://images.pexels.com/photos/34426/snake-rainbow-boa-reptile-scale.jpg',
    },

    {
        name: 'King Snake',
        scientificName: 'Lampropeltis getula',
        path: '/animais/serpentes/lampropeltis-getula',

        description:
            'Espécie resistente, ativa e extremamente curiosa, muito apreciada por criadores devido à facilidade de manejo.',

        image:
            'https://images.pexels.com/photos/13574639/pexels-photo-13574639.jpeg?_gl=1*10wc9ol*_ga*NDUxMTg5MDUwLjE3Nzk1ODEzODk.*_ga_8JE65Q40S6*czE3Nzk1ODM0NzckbzIkZzEkdDE3Nzk1ODM5MzIkajIzJGwwJGgw',
    },

    {
        name: 'Milk Snake',
        scientificName: 'Lampropeltis triangulum',
        path: '/animais/serpentes/lampropeltis-triangulum',

        description:
            'Reconhecida pelos padrões coloridos impressionantes, a Milk Snake combina beleza, atividade e comportamento interessante.',

        image:
            'https://images.pexels.com/photos/14465865/pexels-photo-14465865.jpeg?_gl=1*15yzitq*_ga*NDUxMTg5MDUwLjE3Nzk1ODEzODk.*_ga_8JE65Q40S6*czE3Nzk1ODM0NzckbzIkZzEkdDE3Nzk1ODM5ODMkajQxJGwwJGgw',
    },

    {
        name: 'Periquitamboia',
        scientificName: 'Corallus caninus',
        path: '/animais/serpentes/corallus-caninus',

        description:
            'Conhecida pela coloração vibrante em tons de verde, a Periquitamboia chama atenção pelo visual exótico e pelos hábitos arborícolas fascinantes.',

        image:
            'https://images.pexels.com/photos/15542641/pexels-photo-15542641.jpeg?_gl=1*jpceel*_ga*NDUxMTg5MDUwLjE3Nzk1ODEzODk.*_ga_8JE65Q40S6*czE3Nzk1ODM0NzckbzIkZzEkdDE3Nzk1ODQwNzIkajE0JGwwJGgw',
    },
]

export function SnakeSpeciesGrid() {
    return (
        <section
            id="snake-species"
            className="bg-black px-6 py-32"
        >
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-20 max-w-3xl">

                    <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Espécies populares
                    </span>

                    <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
                        Conheça algumas das serpentes mais fascinantes
                    </h2>

                    <p className="mt-8 text-lg leading-8 text-zinc-400">
                        Explore espécies populares entre tutores de pets não
                        convencionais e descubra características, curiosidades
                        e comportamentos únicos de cada serpente.
                    </p>
                </div>

                {/* Grid */}
                <div className="flex flex-col gap-10">
                    {snakes.map((snake, index) => (
                        <article
                            key={snake.name}
                            className={`
                group overflow-hidden rounded-[2rem]
                border border-zinc-800 bg-secondbackground
                transition duration-500
                hover:border-primary/40
                hover:-translate-y-1

                flex min-h-[420px] flex-col lg:h-[420px]
                ${index % 2 === 0
                                    ? 'lg:flex-row'
                                    : 'lg:flex-row-reverse'
                                }
            `}
                        >

                            {/* Image */}
                            <div className="relative lg:w-1/2 overflow-hidden">

                                <img
                                    src={snake.image}
                                    alt={snake.name}
                                    className="
                        h-[320px] w-full object-cover object-center grayscale lg:h-full
                        transition duration-700
                        group-hover:scale-105
                        group-hover:grayscale-0
                        lg:h-full
                    "
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col justify-center p-10 lg:p-14">

                                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                                    Espécie
                                </span>

                                <h3 className="mt-5 text-4xl font-black text-white transition group-hover:text-primary">
                                    {snake.name}
                                </h3>

                                <p className="text-sm italic tracking-wide text-white/50">
                                    {snake.scientificName}
                                </p>

                                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                                    {snake.description}
                                </p>

                                {/* Button */}
                                <Link
                                    to={snake.path}
                                    className="
                                        mt-10 flex items-center gap-3
                                        text-sm font-semibold uppercase
                                        tracking-[0.2em] text-primary
                                        transition hover:text-white"
                                >
                                    Conheça melhor

                                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}