import { ArrowLeft, Construction } from 'lucide-react'
import { Link } from 'react-router-dom'

interface MaintenancePageProps {
    title?: string
    description?: string
}

export function MaintenancePage({
    title = 'Página em desenvolvimento',
    description = 'Estamos preparando este conteúdo para você. Em breve, esta página estará disponível com todas as informações.',
}: MaintenancePageProps) {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

            {/* Background gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]" />

            <div className="relative z-10 mx-auto w-full max-w-3xl text-center">

                {/* Icon */}
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] border border-primary/20 bg-primary/10 text-primary">
                    <Construction className="h-12 w-12" />
                </div>

                {/* Label */}
                <span className="mt-10 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                    Em construção
                </span>

                {/* Title */}
                <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
                    {title}
                </h1>

                {/* Description */}
                <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-zinc-400 md:text-xl">
                    {description}
                </p>

                {/* Divider */}
                <div className="mx-auto mt-12 h-px w-full max-w-md bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                {/* Back button */}
                <Link
                    to="/"
                    className="
                        group mt-10 inline-flex items-center gap-3
                        rounded-2xl border border-primary/20
                        bg-primary/10 px-6 py-4
                        text-sm font-bold uppercase
                        tracking-[0.2em] text-primary
                        transition duration-300
                        hover:border-primary
                        hover:bg-primary
                        hover:text-black
                    "
                >
                    <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />

                    Voltar para o início
                </Link>
            </div>
        </main>
    )
}