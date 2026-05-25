import {
    Bird,
    Bug,
    Fish,
    Rat,
    Shell,
    Waves,
} from 'lucide-react'

import { Link } from 'react-router-dom'

const categories = [
    {
        title: 'Serpentes',
        description:
            'Pythons, jiboias, king snakes, milk snakes e outras espécies fascinantes.',
        icon: Shell,
        image:
            'https://images.pexels.com/photos/45246/green-tree-python-python-tree-python-green-45246.jpeg',
        path: '/animals/serpentes',
    },

    {
        title: 'Lagartos',
        description:
            'Geckos, pogonas, iguanas e diversos répteis incríveis.',
        icon: Rat,
        image:
            'https://images.pexels.com/photos/751689/pexels-photo-751689.jpeg',
        path: '/animals/lagardos',
    },

    {
        title: 'Aracnídeos',
        description:
            'Tarântulas exóticas, escorpiões e curiosidades sobre aracnídeos.',
        icon: Bug,
        image:
            'https://images.pexels.com/photos/17907408/pexels-photo-17907408.jpeg',
        path: '/animals/aracnideos',
    },

    {
        title: 'Aves',
        description:
            'Ring necks, calopsitas, cacatuas e aves não convencionais.',
        icon: Bird,
        image:
            'https://images.pexels.com/photos/4727714/pexels-photo-4727714.jpeg',
        path: '/animals/aves',
    },

    {
        title: 'Anfíbios',
        description:
            'Milk frogs, salamandras e espécies fascinantes de ambientes úmidos.',
        icon: Waves,
        image:
            'https://images.pexels.com/photos/753249/pexels-photo-753249.jpeg',
        path: '/animals/anfibios',
    },

    {
        title: 'Aquáticos',
        description:
            'Peixes ornamentais, aquários naturais e espécies exóticas.',
        icon: Fish,
        image:
            'https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg',
        path: '/animals/aquaticos',
    },
]

export function AnimalCategories() {
    return (
        <section
            id="animals-categories"
            className="relative overflow-hidden bg-gradient-to-b from-black via-secondbackground to-black px-6 py-28"
        >

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-16 text-center">

                    <span className="rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Categorias
                    </span>

                    <h2 className="mt-8 text-4xl font-black text-white md:text-6xl">
                        Explore diferentes espécies
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                        Descubra categorias completas de pets não convencionais,
                        com conteúdos educativos, curiosidades, manejo,
                        alimentação e muito mais.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {categories.map((category) => {
                        const Icon = category.icon

                        return (
                            <Link
                                key={category.title}
                                to={category.path}
                                className="group relative overflow-hidden rounded-[2rem] border border-zinc-800"
                            >

                                {/* Image */}
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="h-[420px] w-full object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8">

                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary backdrop-blur-md">
                                        <Icon className="h-7 w-7" />
                                    </div>

                                    <h3 className="text-3xl font-black text-white transition duration-300 group-hover:text-primary">
                                        {category.title}
                                    </h3>

                                    <p className="mt-4 line-clamp-3 leading-7 text-zinc-300">
                                        {category.description}
                                    </p>

                                    <span className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                                        Explorar categoria →
                                    </span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}