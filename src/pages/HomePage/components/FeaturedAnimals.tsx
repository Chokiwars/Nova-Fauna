const animals = [
    {
        name: 'Jiboia Arco-Íris',
        origin: 'América do Sul',
        type: 'Serpentes',
        image:
            'https://images.pexels.com/photos/29378250/pexels-photo-29378250.jpeg?_gl=1*6xk26e*_ga*MTg4Nzk0MzMzMy4xNzc4NjczOTg5*_ga_8JE65Q40S6*czE3Nzg2NzM5ODgkbzEkZzEkdDE3Nzg2NzQxNjAkajI0JGwwJGgw',
    },

    {
        name: 'Gecko Leopardo',
        origin: 'Ásia',
        type: 'Lagartos',
        image:
            'https://images.pexels.com/photos/35681922/pexels-photo-35681922.jpeg?_gl=1*2e2yuc*_ga*MTg4Nzk0MzMzMy4xNzc4NjczOTg5*_ga_8JE65Q40S6*czE3Nzg2NzM5ODgkbzEkZzEkdDE3Nzg2NzQzMzkkajI0JGwwJGgw',
    },

    {
        name: 'Pogona',
        origin: 'Austrália',
        type: 'Lagartos',
        image:
            'https://images.pexels.com/photos/35037783/pexels-photo-35037783.jpeg?_gl=1*1rpe5m4*_ga*MTg4Nzk0MzMzMy4xNzc4NjczOTg5*_ga_8JE65Q40S6*czE3Nzg2NzM5ODgkbzEkZzEkdDE3Nzg2NzQ0MTkkajQxJGwwJGgw',
    },

    {
        name: 'Milk Frog',
        origin: 'América do Sul',
        type: 'Anfíbios',
        image:
            'https://images.pexels.com/photos/753249/pexels-photo-753249.jpeg?_gl=1*spvkda*_ga*MTg4Nzk0MzMzMy4xNzc4NjczOTg5*_ga_8JE65Q40S6*czE3Nzg2NzM5ODgkbzEkZzEkdDE3Nzg2NzQ0OTgkajQ5JGwwJGgw',
    },

    {
        name: 'Cacatua',
        origin: 'Oceania',
        type: 'Aves',
        image:
            'https://images.pexels.com/photos/16214395/pexels-photo-16214395.jpeg?_gl=1*1q6hqcb*_ga*MTg4Nzk0MzMzMy4xNzc4NjczOTg5*_ga_8JE65Q40S6*czE3Nzg2NzM5ODgkbzEkZzEkdDE3Nzg2NzQ4MDMkajU1JGwwJGgw',
    },

    {
        name: 'Ring Neck',
        origin: 'Ásia',
        type: 'Aves',
        image:
            'https://images.pexels.com/photos/4727714/pexels-photo-4727714.jpeg?_gl=1*3tk9n2*_ga*MTg4Nzk0MzMzMy4xNzc4NjczOTg5*_ga_8JE65Q40S6*czE3Nzg2NzM5ODgkbzEkZzEkdDE3Nzg2NzQ2OTMkajEyJGwwJGgw',
    },

    {
        name: 'Tarântula golias',
        origin: 'América do Sul',
        type: 'Aracnídeos',
        image:
            'https://images.pexels.com/photos/17907408/pexels-photo-17907408.jpeg?_gl=1*1y0k3qy*_ga*MTg4Nzk0MzMzMy4xNzc4NjczOTg5*_ga_8JE65Q40S6*czE3Nzg2NzM5ODgkbzEkZzEkdDE3Nzg2NzUwNjMkajExJGwwJGgw',
    },

    {
        name: 'Ouriço-pigmeu',
        origin: 'África',
        type: 'Mamíferos',
        image:
            'https://images.pexels.com/photos/7090368/pexels-photo-7090368.jpeg?_gl=1*6nxbx9*_ga*MTg4Nzk0MzMzMy4xNzc4NjczOTg5*_ga_8JE65Q40S6*czE3Nzg2NzM5ODgkbzEkZzEkdDE3Nzg2NzQ5NzgkajMzJGwwJGgw',
    },
]

export function FeaturedAnimals() {
    return (
        <section
            id="featured-animals"
            className="mx-auto w-full max-w-7xl px-6 py-24 border border-green-800 border-t-0 border-b-0 rounded-3xl bg-gradient-to-b from-black via-green-900/50 to-black"
        >
            {/* Header */}
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Destaques da fauna
                    </span>

                    <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight text-white md:text-5xl">
                        Espécies fascinantes do universo exótico
                    </h2>
                </div>

                <div className="max-w-xl rounded-2xl border border-primary/10 bg-primary/5 p-5 backdrop-blur-sm">
                    <p className="text-base leading-7 text-zinc-300">
                        Descubra espécies exóticas permitidas no Brasil,
                        conhecendo suas origens, habitats naturais,
                        comportamentos e curiosidades fascinantes.
                    </p>
                </div>
            </div>

            {/* Cards */}
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                {animals.map((animal) => (
                    <article
                        key={animal.name}
                        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-surface transition duration-300 hover:-translate-y-2 hover:border-primary"
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden">
                            <img
                                src={animal.image}
                                alt={animal.name}
                                className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />

                            {/* Type Badge */}
                            <span className="absolute left-4 top-4 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-md">
                                {animal.type}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="flex flex-1 flex-col p-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white">
                                    {animal.name}
                                </h3>

                                <span className="mt-3 inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-md">
                                    {animal.origin}
                                </span>
                            </div>

                            <p className="mt-4 line-clamp-3 leading-7 text-zinc-400">
                                Explore características, comportamento,
                                habitat natural e curiosidades dessa espécie.
                            </p>

                            {/* Footer */}
                            <button className="mt-auto pt-6 text-left text-sm font-semibold text-primary transition hover:text-white">
                                Explorar espécie →
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}