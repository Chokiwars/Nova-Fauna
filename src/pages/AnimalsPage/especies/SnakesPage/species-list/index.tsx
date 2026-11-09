import { useState } from 'react'

import { SnakeSpeciesHero } from './components/SnakeSpeciesHero'
import { SnakeSpeciesFilters } from './components/SnakeSpeciesFilters'
import { SnakeSpeciesCatalog } from './components/SnakeSpeciesCatalog'

export function SnakeSpeciesPage() {
    const [activeFilter, setActiveFilter] = useState('Todas')

    return (
        <div className="bg-black text-white">
            <SnakeSpeciesHero />

            <SnakeSpeciesFilters
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />

            <SnakeSpeciesCatalog
                activeFilter={activeFilter}
            />
        </div>
    )
}