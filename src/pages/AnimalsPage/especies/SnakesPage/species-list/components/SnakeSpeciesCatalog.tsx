import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const snakes = [
    // =========================
    // JIBOIAS BRASILEIRAS
    // =========================
    {
        name: 'BCC',
        scientificName: 'Boa constrictor constrictor',
        category: 'Jiboia brasileira',
        description:
            'A famosa jiboia de cauda vermelha, conhecida pelo porte robusto, comportamento tranquilo e coloração marcante.',
        image:
            'https://images.pexels.com/photos/19270195/pexels-photo-19270195.jpeg',
        path: '/animais/serpentes/especies/bcc',
    },

    {
        name: 'BCA',
        scientificName: 'Boa constrictor amarali',
        category: 'Jiboia brasileira',
        description:
            'Subespécie brasileira muito apreciada por apresentar tamanho moderado e excelente manejo.',
        image:
            'https://images.pexels.com/photos/80474/snake-rainbow-boa-reptile-scale-80474.jpeg',
        path: '/animais/serpentes/especies/bca',
    },

    {
        name: 'BCO',
        scientificName: 'Boa constrictor occidentalis',
        category: 'Jiboia exótica',
        description:
            'Conhecida pela coloração escura e contrastes impressionantes, sendo extremamente admirada no hobby.',
        image:
            'https://images.pexels.com/photos/751689/pexels-photo-751689.jpeg',
        path: '/animais/serpentes/especies/bco',
    },

    {
        name: 'BCI',
        scientificName: 'Boa imperator',
        category: 'Jiboia exótica',
        description:
            'Uma das jiboias mais populares do mundo, muito presente entre criadores devido ao comportamento dócil.',
        image:
            'https://images.pexels.com/photos/34426/snake-rainbow-boa-reptile-scale.jpg',
        path: '/animais/serpentes/especies/bci',
    },

    // =========================
    // EPICRATES
    // =========================
    {
        name: 'Rainbow Boa Amazônica',
        scientificName: 'Epicrates cenchria cenchria',
        category: 'Epicrates',
        description:
            'Famosa pelo brilho iridescente das escamas e aparência extremamente exótica.',
        image:
            'https://images.pexels.com/photos/34426/snake-rainbow-boa-reptile-scale.jpg',
        path: '/animais/serpentes/especies/rainbow-boa-amazonica',
    },

    {
        name: 'Rainbow Boa da Caatinga',
        scientificName: 'Epicrates assisi',
        category: 'Epicrates',
        description:
            'Espécie brasileira adaptada ao clima semiárido, muito apreciada pela beleza e rusticidade.',
        image:
            'https://images.pexels.com/photos/2062316/pexels-photo-2062316.jpeg',
        path: '/animais/serpentes/especies/epicrates-assisi',
    },

    {
        name: 'Rainbow Boa da Mata Atlântica',
        scientificName: 'Epicrates crassus',
        category: 'Epicrates',
        description:
            'Espécie robusta e muito admirada por apresentar padrões únicos e comportamento tranquilo.',
        image:
            'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg',
        path: '/animais/serpentes/especies/epicrates-crassus',
    },

    // =========================
    // SUCURIS
    // =========================
    {
        name: 'Sucuri-verde',
        scientificName: 'Eunectes murinus',
        category: 'Sucuri',
        description:
            'A maior serpente das Américas, conhecida pelo tamanho impressionante e hábitos semi-aquáticos.',
        image:
            'https://images.pexels.com/photos/45246/green-tree-python-python-tree-python-green-45246.jpeg',
        path: '/animais/serpentes/especies/sucuri-verde',
    },

    {
        name: 'Sucuri-amarela',
        scientificName: 'Eunectes notaeus',
        category: 'Sucuri',
        description:
            'Menor que a sucuri-verde, mas extremamente bela e popular entre admiradores de grandes serpentes.',
        image:
            'https://images.pexels.com/photos/13574639/pexels-photo-13574639.jpeg',
        path: '/animais/serpentes/especies/sucuri-amarela',
    },

    // =========================
    // COLUBRÍDEOS
    // =========================
    {
        name: 'Caninana',
        scientificName: 'Spilotes pullatus',
        category: 'Colubrídeo',
        description:
            'Espécie extremamente ativa, inteligente e conhecida pela coloração preta e amarela.',
        image:
            'https://images.pexels.com/photos/15542641/pexels-photo-15542641.jpeg',
        path: '/animais/serpentes/especies/caninana',
    },

    {
        name: 'Muçurana',
        scientificName: 'Clelia clelia',
        category: 'Colubrídeo',
        description:
            'Predadora de outras serpentes e extremamente importante para o equilíbrio ecológico.',
        image:
            'https://images.pexels.com/photos/14465865/pexels-photo-14465865.jpeg',
        path: '/animais/serpentes/especies/mucurana',
    },

    {
        name: 'Periquitamboia',
        scientificName: 'Corallus caninus',
        category: 'Arborícola',
        description:
            'Serpente arborícola famosa pela coloração verde vibrante e postura elegante.',
        image:
            'https://images.pexels.com/photos/15542641/pexels-photo-15542641.jpeg',
        path: '/animais/serpentes/especies/periquitamboia',
    },

    // =========================
    // EXÓTICAS
    // =========================
    {
        name: 'Ball Python',
        scientificName: 'Python regius',
        category: 'Python',
        description:
            'Uma das espécies mais populares do mundo devido ao comportamento calmo e enorme variedade de morphs.',
        image:
            'https://images.pexels.com/photos/36585274/pexels-photo-36585274.jpeg',
        path: '/animais/serpentes/especies/ball-python',
    },

    {
        name: 'California Kingsnake',
        scientificName: 'Lampropeltis californiae',
        category: 'Kingsnake',
        description:
            'Espécie extremamente resistente e muito procurada por iniciantes no hobby.',
        image:
            'https://images.pexels.com/photos/13574639/pexels-photo-13574639.jpeg',
        path: '/animais/serpentes/especies/california-kingsnake',
    },

    {
        name: 'Mexican Black Kingsnake',
        scientificName: 'Lampropeltis getula nigrita',
        category: 'Kingsnake',
        description:
            'Kingsnake completamente negra e muito valorizada pela aparência elegante.',
        image:
            'https://images.pexels.com/photos/751689/pexels-photo-751689.jpeg',
        path: '/animais/serpentes/especies/mexican-black-kingsnake',
    },

    {
        name: 'Western Hognose',
        scientificName: 'Heterodon nasicus',
        category: 'Hognose',
        description:
            'Pequena, curiosa e conhecida pelo focinho arrebitado e comportamento dramático.',
        image:
            'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg',
        path: '/animais/serpentes/especies/western-hognose',
    },

    {
        name: 'Bullsnake',
        scientificName: 'Pituophis catenifer sayi',
        category: 'Gopher Snake',
        description:
            'Espécie grande, extremamente ativa e conhecida pelo comportamento defensivo marcante.',
        image:
            'https://images.pexels.com/photos/2062316/pexels-photo-2062316.jpeg',
        path: '/animais/serpentes/especies/bullsnake',
    },

    {
        name: 'Burmese Python',
        scientificName: 'Python bivittatus',
        category: 'Python',
        description:
            'Uma das maiores serpentes mantidas em cativeiro, famosa pelo tamanho impressionante.',
        image:
            'https://images.pexels.com/photos/45246/green-tree-python-python-tree-python-green-45246.jpeg',
        path: '/animais/serpentes/especies/burmese-python',
    },

    {
        name: 'Kenyan Sand Boa',
        scientificName: 'Eryx colubrinus',
        category: 'Boa exótica',
        description:
            'Espécie fossorial muito querida pelo visual único e manejo simples.',
        image:
            'https://images.pexels.com/photos/2062316/pexels-photo-2062316.jpeg',
        path: '/animais/serpentes/especies/kenyan-sand-boa',
    },
]

export function SnakeSpeciesCatalog() {
    return (
        <section className="bg-black px-6 py-20">
            <div className="mx-auto max-w-7xl">

                <div className="space-y-10">
                    {snakes.map((snake, index) => (
                        <article
                            key={snake.name}
                            className="
                                group grid overflow-hidden rounded-[2rem]
                                border border-zinc-800 bg-secondbackground
                                transition duration-500 hover:border-primary/40
                                lg:grid-cols-2
                            "
                        >

                            {/* Image */}
                            <div
                                className={`
                                    relative h-[380px] overflow-hidden
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
                            <div className="flex flex-col justify-center p-10 md:p-14">

                                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                                    {snake.category}
                                </span>

                                <h2 className="mt-5 text-4xl font-black text-white transition group-hover:text-primary md:text-5xl">
                                    {snake.name}
                                </h2>

                                <p className="mt-3 text-lg italic text-zinc-500">
                                    {snake.scientificName}
                                </p>

                                <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
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