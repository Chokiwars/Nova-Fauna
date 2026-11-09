import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
    {
        question: 'Ball Python é venenosa?',
        answer:
            'Não. Ball Pythons são serpentes constritoras e não possuem veneno.',
    },

    {
        question: 'É uma boa espécie para iniciantes?',
        answer:
            'Sim. O comportamento calmo e o manejo relativamente simples tornam a espécie extremamente popular entre iniciantes.',
    },

    {
        question: 'Quanto tempo vive uma Ball Python?',
        answer:
            'Quando mantidas corretamente, podem viver entre 20 e 30 anos, existindo registros ainda maiores.',
    },

    {
        question: 'Ball Python pode parar de comer?',
        answer:
            'Sim. A espécie é conhecida por realizar períodos naturais de jejum, principalmente durante mudanças ambientais ou épocas reprodutivas.',
    },

    {
        question: 'Precisa de iluminação UVB?',
        answer:
            'Embora não seja obrigatório em todos os setups, muitos criadores utilizam UVB de baixa intensidade para enriquecimento ambiental.',
    },
]

export function BallPythonFAQ() {
    const [activeFaq, setActiveFaq] = useState<number | null>(0)

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-black via-secondbackground to-black px-6 py-32">

            <div className="relative z-10 mx-auto max-w-5xl">

                <div className="text-center">

                    <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        FAQ
                    </span>

                    <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">
                        Dúvidas frequentes
                    </h2>
                </div>

                <div className="mt-20 space-y-6">

                    {faqs.map((faq, index) => {
                        const isActive = activeFaq === index

                        return (
                            <article
                                key={faq.question}
                                className="
                                    overflow-hidden rounded-[2rem]
                                    border border-primary/10
                                    bg-black/40
                                "
                            >

                                <button
                                    onClick={() =>
                                        setActiveFaq(
                                            isActive ? null : index,
                                        )
                                    }
                                    className="
                                        flex w-full items-center
                                        justify-between gap-6 p-8 text-left
                                    "
                                >

                                    <h3 className="text-2xl font-bold text-white">
                                        {faq.question}
                                    </h3>

                                    <div
                                        className={`
                                            flex h-12 w-12 items-center justify-center
                                            rounded-2xl border border-primary/20
                                            bg-primary/10 text-primary
                                            transition duration-500

                                            ${isActive
                                                ? 'rotate-180 border-primary bg-primary text-black'
                                                : ''
                                            }
                                        `}
                                    >
                                        <ChevronDown className="h-5 w-5" />
                                    </div>
                                </button>

                                <div
                                    className={`
                                        grid transition-all duration-500

                                        ${isActive
                                            ? 'grid-rows-[1fr] opacity-100'
                                            : 'grid-rows-[0fr] opacity-0'
                                        }
                                    `}
                                >
                                    <div className="overflow-hidden">

                                        <p className="border-t border-primary/10 p-8 text-lg leading-9 text-zinc-400">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}