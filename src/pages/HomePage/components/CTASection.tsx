import { ChevronDown } from "lucide-react"

export function CTASection() {
    return (
        <section id="cta-section" className="rounded-3xl bg-primary px-10 py-20 text-center text-black">
            <h2 className="text-5xl font-black">
                Explore a Nova Fauna
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg">
                Descubra espécies incríveis e mergulhe no universo dos animais
                silvestres.
            </p>

            <button className="mt-10 rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:scale-105">
                Começar exploração
            </button>

            {/* Scroll Down */}
            <button
                onClick={() => {
                    document
                        .getElementById('footer')
                        ?.scrollIntoView({
                            behavior: 'smooth',
                        })
                }}
                className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce rounded-full border border-green-400/10 bg-black/30 p-3 text-green-400 backdrop-blur-md transition hover:border-primary/50 hover:text-primary"
            >
                <ChevronDown className="h-6 w-6" />
            </button>
        </section>
    )
}