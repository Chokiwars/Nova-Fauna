import { SnakesHero } from './components/SnakesHero'
import { SnakeIntroduction } from './components/SnakeIntroduction'
import { SnakeSpeciesGrid } from './components/SnakeSpeciesGrid'
import { SnakeCareGuide } from './components/SnakeCareGuide'
import { SnakeFacts } from './components/SnakeFacts'
import { SnakeFAQ } from './components/SnakeFAQ'
import { SnakeCTA } from './components/SnakeCTA'

export function SnakesPage() {
    return (
        <div className="bg-black text-white">
            <SnakesHero />
            <SnakeIntroduction />
            <SnakeSpeciesGrid />
            <SnakeCareGuide />
            <SnakeFacts />
            <SnakeFAQ />
            <SnakeCTA />
        </div>
    )
}