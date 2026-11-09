export function SnakeSpeciesHero() {
    return (
        <section className="relative overflow-hidden bg-black px-6 py-40">

            {/* Animated Glow */}
            <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

            {/* Floating Orbs */}
            <div className="absolute left-20 top-20 h-72 w-72 animate-pulse rounded-full bg-green-500/10 blur-3xl" />

            <div className="absolute bottom-10 right-10 h-96 w-96 animate-pulse rounded-full bg-primary/10 blur-3xl" />

            <div className="absolute left-1/3 top-1/2 h-40 w-40 animate-bounce rounded-full bg-primary/5 blur-2xl" />

            {/* Grid Effect */}
            <div
                className="
                    absolute inset-0 opacity-[0.04]
                    [background-image:linear-gradient(to_right,#22c55e_1px,transparent_1px),linear-gradient(to_bottom,#22c55e_1px,transparent_1px)]
                    [background-size:80px_80px]
                "
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-6xl text-center">

                <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                    Espécies legalizadas
                </span>

                <h1 className="mt-8 text-6xl font-black leading-tight text-white md:text-8xl">
                    Catálogo de{' '}

                    <span className="text-primary">
                        serpentes
                    </span>
                </h1>

                <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
                    Explore espécies criadas legalmente no Brasil e descubra
                    informações sobre manejo, comportamento, morfologia,
                    alimentação, habitat e curiosidades de cada serpente.
                </p>

                {/* Bottom Glow Line */}
                <div className="mx-auto mt-16 h-px w-64 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
        </section>
    )
}