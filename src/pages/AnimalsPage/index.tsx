import { AnimalsHero } from '@/pages/AnimalsPage/components/AnimalsHero'
import { AnimalCategories } from '@/pages/AnimalsPage/components/AnimalCategories'
import { FeaturedSpecies } from '@/pages/AnimalsPage/components/FeaturedSpecies'

export function AnimalsPage() {
    return (
        <div className="bg-black text-white">
            <AnimalsHero />
            <AnimalCategories />
            <FeaturedSpecies />
        </div>
    )
}