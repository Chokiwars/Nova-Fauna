const topics = [
    {
        title: 'Pythons',
        image:
            'https://images.pexels.com/photos/28184524/pexels-photo-28184524.jpeg?_gl=1*1t2xeyr*_ga*MTg4Nzk0MzMzMy4xNzc4NjczOTg5*_ga_8JE65Q40S6*czE3Nzg2NzkzMDEkbzMkZzEkdDE3Nzg2ODExMzAkajQ1JGwwJGgw',
    },

    {
        title: 'Jiboias',
        image:
            'https://images.pexels.com/photos/31719634/pexels-photo-31719634.jpeg?_gl=1*1fr7ych*_ga*MTg4Nzk0MzMzMy4xNzc4NjczOTg5*_ga_8JE65Q40S6*czE3Nzg2ODM4NDEkbzQkZzEkdDE3Nzg2ODM4NDkkajUyJGwwJGgw',
    },

    {
        title: 'Sucuris',
        image:
            'https://images.pexels.com/photos/2561673/pexels-photo-2561673.jpeg?_gl=1*15mrp2b*_ga*MTg4Nzk0MzMzMy4xNzc4NjczOTg5*_ga_8JE65Q40S6*czE3Nzg2ODM4NDEkbzQkZzEkdDE3Nzg2ODQ5ODUkajQ1JGwwJGgw',
    },

    {
        title: 'King Snake',
        image:
            'https://images.pexels.com/photos/37222700/pexels-photo-37222700.jpeg?_gl=1*18ww72g*_ga*MTg4Nzk0MzMzMy4xNzc4NjczOTg5*_ga_8JE65Q40S6*czE3Nzg2ODM4NDEkbzQkZzEkdDE3Nzg2ODQ1NDUkajQ5JGwwJGgw',
    },

    {
        title: 'Iguanas',
        image:
            'https://images.pexels.com/photos/15084528/pexels-photo-15084528.jpeg?_gl=1*1259gvc*_ga*MTg4Nzk0MzMzMy4xNzc4NjczOTg5*_ga_8JE65Q40S6*czE3Nzg2ODM4NDEkbzQkZzEkdDE3Nzg2ODQ2NDMkajE5JGwwJGgw',
    },

    {
        title: 'Leopard Gecko',
        image:
            'https://images.pexels.com/photos/36083096/pexels-photo-36083096.jpeg?_gl=1*1rlj7n4*_ga*MTg4Nzk0MzMzMy4xNzc4NjczOTg5*_ga_8JE65Q40S6*czE3Nzg2ODM4NDEkbzQkZzEkdDE3Nzg2ODQ3NjgkajU5JGwwJGgw',
    },

    {
        title: 'Pogona',
        image:
            'https://images.pexels.com/photos/30903086/pexels-photo-30903086.jpeg?_gl=1*iyykcn*_ga*MTg4Nzk0MzMzMy4xNzc4NjczOTg5*_ga_8JE65Q40S6*czE3Nzg2ODM4NDEkbzQkZzEkdDE3Nzg2ODQ5NDckajQkbDAkaDA.',
    },

    {
        title: 'Teiú',
        image:
            'https://images.pexels.com/photos/29309473/pexels-photo-29309473.jpeg?_gl=1*dpey1f*_ga*MTg4Nzk0MzMzMy4xNzc4NjczOTg5*_ga_8JE65Q40S6*czE3Nzg2ODM4NDEkbzQkZzEkdDE3Nzg2ODQ2MDMkajU5JGwwJGgw',
    },
]

export function ExploreSection() {
    return (
        <section
            id="explore-section"
            className="bg-black px-6 py-24"
        >
            {/* Header */}
            <div className="mx-auto mb-14 flex max-w-7xl flex-col items-center text-center">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                    Categorias
                </span>

                <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-white md:text-5xl">
                    Explore espécies de pets não convencionais
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                    Navegue entre diferentes categorias de animais
                    fascinantes e descubra informações sobre manejo,
                    habitats, comportamento e posse responsável.
                </p>
            </div>

            {/* Cards */}
            <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
                {topics.map((topic) => (
                    <button
                        key={topic.title}
                        className="group relative h-44 overflow-hidden rounded-3xl border border-zinc-800"
                    >
                        {/* Background */}
                        <img
                            src={topic.image}
                            alt={topic.title}
                            className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
                        />

                        {/* Green Overlay */}
                        <div className="absolute inset-0 bg-green-950/50 mix-blend-multiply transition duration-500 group-hover:bg-transparent" />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/60 transition duration-500 group-hover:bg-black/20" />

                        {/* Title */}
                        <div className="relative z-10 flex h-full items-center justify-center p-4">
                            <h3 className="text-center text-2xl font-black text-white transition duration-500 group-hover:text-primary">
                                {topic.title}
                            </h3>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    )
}