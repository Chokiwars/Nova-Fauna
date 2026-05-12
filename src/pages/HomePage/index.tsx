import { AboutSection } from './components/AboutSection'
import { CTASection } from './components/CTASection'
import { ExploreSection } from './components/ExploreSection'
import { FeaturedAnimals } from './components/FeaturedAnimals'
import { HeroSection } from './components/HeroSection'

export function HomePage() {
    return (
        <div className="space-y-32 pb-24">
            <HeroSection />

            <FeaturedAnimals />

            <AboutSection />

            <ExploreSection />

            <CTASection />
        </div>
    )
}