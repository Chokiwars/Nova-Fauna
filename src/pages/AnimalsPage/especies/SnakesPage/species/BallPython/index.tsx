import { BallPythonHero } from './components/BallPythonHero'
import { BallPythonQuickInfo } from './components/BallPythonQuickInfo'
import { BallPythonIntroduction } from './components/BallPythonIntroduction'
import { BallPythonFeeding } from './components/BallPythonFeeding'
import { BallPythonTerrarium } from './components/BallPythonTerrarium'
import { BallPythonHabitat } from './components/BallPythonHabitat'
import { BallPythonBehavior } from './components/BallPythonBehavior'
import { BallPythonMorphs } from './components/BallPythonMorphs'
import { BallPythonCare } from './components/BallPythonCare'
import { BallPythonFAQ } from './components/BallPythonFAQ'
import { BallPythonCTA } from './components/BallPythonCTA'

export function BallPythonPage() {
    return (
        <main className="bg-black text-white">
            <BallPythonHero />
            <BallPythonQuickInfo />
            <BallPythonIntroduction />
            <BallPythonFeeding />
            <BallPythonTerrarium />
            <BallPythonHabitat />
            <BallPythonBehavior />
            <BallPythonMorphs />
            <BallPythonCare />
            <BallPythonFAQ />
            <BallPythonCTA />
        </main>
    )
}