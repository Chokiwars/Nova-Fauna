import {
    Compass,
    Leaf,
    Mountain,
    Trees,
    Sparkles,
    ShieldCheck,
    Waves,
} from 'lucide-react'

const filters = [
    {
        label: 'Todas',
        icon: Compass,
    },

    {
        label: 'Iniciantes',
        icon: ShieldCheck,
    },

    {
        label: 'Jiboias',
        icon: Trees,
    },

    {
        label: 'Pythons',
        icon: Sparkles,
    },

    {
        label: 'Colubrídeos',
        icon: Leaf,
    },

    {
        label: 'Arborícolas',
        icon: Trees,
    },

    {
        label: 'Terrestres',
        icon: Mountain,
    },

    {
        label: 'Semi-aquáticas',
        icon: Waves,
    },
]

type SnakeSpeciesFiltersProps = {
    activeFilter: string
    setActiveFilter: (filter: string) => void
}

export function SnakeSpeciesFilters({
    activeFilter,
    setActiveFilter,
}: SnakeSpeciesFiltersProps) {

    return (
        <section className="bg-black px-6">

            <div
                className="
                    relative mx-auto max-w-10xl overflow-hidden rounded-[2rem]
                    bg-gradient-to-b from-zinc-950 via-black to-zinc-950
                "
            >

                {/* Glow */}
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative z-10">
                    <div className="flex flex-wrap gap-4">
                        {filters.map((filter) => {
                            const Icon = filter.icon

                            const isActive =
                                activeFilter === filter.label

                            return (
                                <button
                                    key={filter.label}
                                    onClick={() =>
                                        setActiveFilter(filter.label)
                                    }
                                    className={`
                                        group flex items-center gap-3
                                        rounded-2xl border px-4 py-4
                                        text-sm font-bold uppercase
                                        tracking-[0.2em]
                                        transition duration-300
                                        hover:scale-105

                                        ${isActive
                                            ? `
                                                    border-primary
                                                    bg-primary
                                                    text-black
                                                  `
                                            : `
                                                    border-zinc-800
                                                    bg-black/40
                                                    text-zinc-300
                                                    hover:border-primary/40
                                                    hover:bg-primary/10
                                                    hover:text-primary
                                                  `
                                        }
                                    `}
                                >
                                    <Icon className="h-4 w-4" />

                                    {filter.label}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}