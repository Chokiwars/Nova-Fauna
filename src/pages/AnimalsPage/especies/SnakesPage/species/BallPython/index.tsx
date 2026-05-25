import { BallPythonHero } from './components/BallPythonHero'
import { BallPythonQuickInfo } from './components/BallPythonQuickInfo'
import { BallPythonIntroduction } from './components/BallPythonIntroduction'

export function BallPythonPage() {
    return (
        <main className="bg-black text-white">
            <BallPythonHero />
            <BallPythonQuickInfo />
            <BallPythonIntroduction />
        </main>
    )
}