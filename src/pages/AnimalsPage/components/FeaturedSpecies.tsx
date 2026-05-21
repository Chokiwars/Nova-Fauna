import { ArrowUpRight, Sparkles } from 'lucide-react'

import { Link } from 'react-router-dom'

const species = [
    {
        name: 'Python Real',
        scientificName: 'Python regius',
        category: 'Serpente',
        image:
            'https://images.pexels.com/photos/45246/green-tree-python-python-tree-python-green-45246.jpeg',
        path: '/animals/snakes/python-regius',
    },

    {
        name: 'Leopard Gecko',
        scientificName: 'Eublepharis macularius',
        category: 'Lagarto',
        image:
            'https://images.pexels.com/photos/751689/pexels-photo-751689.jpeg',
        path: '/animals/lizards/leopard-gecko',
    },

    {
        name: 'Pogona',
        scientificName: 'Pogona vitticeps',
        category: 'Lagarto',
        image:
            'https://images.pexels.com/photos/35037783/pexels-photo-35037783.jpeg',
        path: '/animals/lizards/pogona',
    },

    {
        name: 'Milk Frog',
        scientificName: 'Trachycephalus resinifictrix',
        category: 'Anfíbio',
        image:
            'https://images.pexels.com/photos/753249/pexels-photo-753249.jpeg',
        path: '/animals/amphibians/milk-frog',
    },
]

export function FeaturedSpecies() {
    return (
        <section className="relative overflow-hidden bg-black px-6 py-28">

            {/* Glow */}
            <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                            <Sparkles className="h-4 w-4" />
                            Espécies em destaque
                        </span>

                        <h2 className="mt-8 max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl">
                            Algumas das espécies mais fascinantes da plataforma
                        </h2>
                    </div>

                    <p className="max-w-2xl text-lg leading-8 text-zinc-400">
                        Explore páginas detalhadas sobre espécies populares
                        entre amantes de pets não convencionais, com informações
                        sobre manejo, alimentação, comportamento e curiosidades.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {species.map((animal) => (
                        <Link
                            key={animal.name}
                            to={animal.path}
                            className="group overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950 transition duration-500 hover:-translate-y-2 hover:border-primary"
                        >

                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={animal.image}
                                    alt={animal.name}
                                    className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                {/* Category */}
                                <span className="absolute left-5 top-5 rounded-full border border-primary/20 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur-md">
                                    {animal.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col p-6">

                                <div>
                                    <h3 className="text-2xl font-black text-white transition duration-300 group-hover:text-primary">
                                        {animal.name}
                                    </h3>

                                    <p className="mt-2 text-sm italic text-zinc-500">
                                        {animal.scientificName}
                                    </p>
                                </div>

                                <p className="mt-5 line-clamp-3 leading-7 text-zinc-400">
                                    Descubra informações completas sobre essa
                                    espécie, incluindo comportamento, habitat,
                                    alimentação, terrário ideal e curiosidades.
                                </p>

                                {/* Footer */}
                                <div className="mt-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                                    Ver espécie

                                    <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}