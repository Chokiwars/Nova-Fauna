import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const snakes = [
    {
        name: 'Ball Python',
        category: 'Python',
        image:
            'https://images.pexels.com/photos/36585274/pexels-photo-36585274.jpeg',
        description:
            'Uma das serpentes mais populares do mundo entre tutores iniciantes.',
        path: '/animais/serpentes/especies/ball-python',
    },

    {
        name: 'Boa C. Constrictor',
        category: 'Jiboia',
        image:
            'https://images.pexels.com/photos/19270195/pexels-photo-19270195.jpeg',
        description:
            'Espécie robusta, tranquila e extremamente popular no Brasil.',
        path: '/animais/serpentes/especies/boa-constrictor',
    },

    {
        name: 'Rainbow Boa',
        category: 'Jiboia',
        image:
            'https://images.pexels.com/photos/34426/snake-rainbow-boa-reptile-scale.jpg',
        description:
            'Conhecida pelo brilho iridescente impressionante das escamas.',
        path: '/animais/serpentes/especies/rainbow-boa',
    },

    {
        name: 'King Snake',
        category: 'Colubrídeo',
        image:
            'https://images.pexels.com/photos/13574639/pexels-photo-13574639.jpeg',
        description:
            'Espécie ativa, resistente e excelente para manejo.',
        path: '/animais/serpentes/especies/king-snake',
    },

    {
        name: 'Periquitamboia',
        category: 'Arborícola',
        image:
            'https://images.pexels.com/photos/15542641/pexels-photo-15542641.jpeg',
        description:
            'Serpente arborícola famosa pela coloração verde intensa.',
        path: '/animais/serpentes/especies/periquitamboia',
    },
]

export function SnakeSpeciesCatalog() {
    return (
        <section className="bg-black px-6 py-20">
            <div className="mx-auto max-w-7xl">

                <div className="space-y-8">
                    {snakes.map((snake, index) => (
                        <article
                            key={snake.name}
                            className={`
                                group grid overflow-hidden rounded-3xl
                                border border-zinc-800 bg-secondbackground
                                transition duration-500 hover:border-primary/40
                                lg:grid-cols-2
                            `}
                        >

                            {/* Image */}
                            <div
                                className={`
                                    relative h-[350px] overflow-hidden
                                    ${index % 2 !== 0 ? 'lg:order-2' : ''}
                                `}
                            >
                                <img
                                    src={snake.image}
                                    alt={snake.name}
                                    className="
                                        h-full w-full object-cover grayscale
                                        transition duration-700
                                        group-hover:scale-105
                                        group-hover:grayscale-0
                                    "
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-center p-10">

                                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                                    {snake.category}
                                </span>

                                <h2 className="mt-5 text-5xl font-black text-white transition group-hover:text-primary">
                                    {snake.name}
                                </h2>

                                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                                    {snake.description}
                                </p>

                                <Link
                                    to={snake.path}
                                    className="
                                        mt-10 flex items-center gap-3
                                        text-sm font-bold uppercase
                                        tracking-[0.2em] text-primary
                                        transition hover:text-white
                                    "
                                >
                                    Explorar espécie

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