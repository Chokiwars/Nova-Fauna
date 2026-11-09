import { AnimalsHero } from '@/pages/AnimalsPage/components/AnimalsHero'
import { AnimalCategories } from '@/pages/AnimalsPage/components/AnimalCategories'
import { FeaturedSpecies } from '@/pages/AnimalsPage/components/FeaturedSpecies'
import { AnimalCareGuide } from './components/AnimalCareGuide'
import { AnimalFacts } from './components/AnimalFacts'
import { AnimalCTA } from './components/AnimalCTA'

export function AnimalsPage() {
    return (
        <div className="bg-black text-white">
            <AnimalsHero />
            <AnimalCategories />
            <FeaturedSpecies />
            <AnimalCareGuide />
            <AnimalFacts />
            <AnimalCTA />
        </div>
    )
}