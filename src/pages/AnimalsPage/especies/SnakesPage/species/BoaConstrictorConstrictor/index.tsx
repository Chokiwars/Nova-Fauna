import { BCCHero } from './components/BCCHero'
import { BCCQuickInfo } from './components/BCCQuickInfo'
// import { BCCIntroduction } from './components/BCCIntroduction'
// import { BCCFeeding } from './components/BCCFeeding'
// import { BCCTerrarium } from './components/BCCTerrarium'
// import { BCCHabitat } from './components/BCCHabitat'
// import { BCCBehavior } from './components/BCCBehavior'
// import { BCCMorphs } from './components/BCCMorphs'
// import { BCCCare } from './components/BCCCare'
// import { BCCFAQ } from './components/BCCFAQ'
// import { BCCCTA } from './components/BCCCTA'

export function BCCPage() {
    return (
        <main className="bg-black text-white">
            <BCCHero />
            <BCCQuickInfo />
            {/* <BCCIntroduction />
            <BCCFeeding />
            <BCCTerrarium />
            <BCCHabitat />
            <BCCBehavior />
            <BCCMorphs />
            <BCCCare />
            <BCCFAQ />
            <BCCCTA /> */}
        </main>
    )
}