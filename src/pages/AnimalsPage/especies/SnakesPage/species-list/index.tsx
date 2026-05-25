import { SnakeSpeciesHero } from "./components/SnakeSpeciesHero"
import { SnakeSpeciesFilters } from "./components/SnakeSpeciesFilters"
import { SnakeSpeciesCatalog } from "./components/SnakeSpeciesCatalog"

export function SnakeSpeciesPage() {
    return (
        <div className="bg-black text-white">
            <SnakeSpeciesHero />
            <SnakeSpeciesFilters />
            <SnakeSpeciesCatalog />
        </div>
    )
}