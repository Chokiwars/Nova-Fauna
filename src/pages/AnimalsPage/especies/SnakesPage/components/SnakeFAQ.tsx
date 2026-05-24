import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const faqs = [
    {
        question: 'Serpentes são agressivas?',
        answer:
            'A grande maioria das serpentes mantidas como pets não convencionais não são naturalmente agressivas. Muitas espécies possuem comportamento defensivo e preferem fugir ao invés de atacar. Quando criadas em ambientes adequados e com manejo correto, costumam se tornar animais tranquilos e previsíveis.',
    },

    {
        question: 'Qual espécie é mais indicada para iniciantes?',
        answer:
            'Espécies como Ball Python, Corn Snake e King Snake são bastante populares entre iniciantes por possuírem manejo relativamente simples, alimentação estável e comportamento geralmente calmo.',
    },

    {
        question: 'Serpentes precisam comer todos os dias?',
        answer:
            'Não. Diferente de muitos mamíferos, serpentes possuem metabolismo mais lento. Dependendo da espécie, idade e tamanho, a alimentação pode ocorrer apenas uma vez por semana ou até em intervalos maiores.',
    },

    {
        question: 'É permitido ter serpentes como pet no Brasil?',
        answer:
            'Sim, desde que a espécie seja legalizada e adquirida através de criadouros autorizados pelos órgãos responsáveis. A posse responsável é essencial para garantir o bem-estar animal e a conservação das espécies.',
    },
]

export function SnakeFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    function handleToggle(index: number) {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="bg-gradient-to-b from-black via-secondbackground to-black px-6 py-32">
            <div className="mx-auto max-w-5xl">

                {/* Header */}
                <div className="text-center">

                    <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        FAQ
                    </span>

                    <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">
                        Perguntas frequentes
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
                        Algumas dúvidas são extremamente comuns entre pessoas
                        que estão começando no universo das serpentes como pets
                        não convencionais.
                    </p>
                </div>

                {/* FAQ Cards */}
                <div className="mt-20 space-y-6">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index

                        return (
                            <article
                                key={faq.question}
                                className={`
                                    overflow-hidden rounded-3xl border
                                    bg-black/40 backdrop-blur-md transition-all duration-300
                                    ${isOpen
                                        ? 'border-primary/40'
                                        : 'border-zinc-800'
                                    }
                                `}
                            >
                                <button
                                    onClick={() => handleToggle(index)}
                                    className="
                                        flex w-full items-center justify-between
                                        gap-6 px-8 py-7 text-left
                                    "
                                >
                                    <h3
                                        className={`
                                            text-xl font-bold transition
                                            md:text-2xl
                                            ${isOpen
                                                ? 'text-primary'
                                                : 'text-white'
                                            }
                                        `}
                                    >
                                        {faq.question}
                                    </h3>

                                    <div
                                        className={`
                                            flex h-11 w-11 items-center justify-center
                                            rounded-full border transition
                                            ${isOpen
                                                ? 'border-primary/40 bg-primary/10 text-primary'
                                                : 'border-zinc-700 text-zinc-400'
                                            }
                                        `}
                                    >
                                        {isOpen ? (
                                            <ChevronUp className="h-5 w-5" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5" />
                                        )}
                                    </div>
                                </button>

                                <div
                                    className={`
                                        grid transition-all duration-500
                                        ${isOpen
                                            ? 'grid-rows-[1fr] opacity-100'
                                            : 'grid-rows-[0fr] opacity-0'
                                        }
                                    `}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-8 pb-8 leading-8 text-zinc-400">
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