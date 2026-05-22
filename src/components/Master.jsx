import { motion } from 'framer-motion'
import { useInView } from './useInView'

const ACCENTS = [
    'Подбор формы под клиента',
    'Аккуратная борода и контур',
    'Рекомендации по уходу и укладке',
]

export default function Master() {
    const [ref, inView] = useInView(0.15)

    return (
        <section className="py-20 md:py-28 bg-bg" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-bg-card">
                            <img
                                src="/barber.png"
                                alt="Геворг — мастер BARBERSHOP GEV"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-bg-card border border-border rounded-xl px-5 py-3">
                            <span className="text-base">⭐</span>
                            <span className="font-display font-800 text-xl text-bronze ml-1">5.0</span>
                            <span className="text-sm text-text-secondary ml-2">в Яндекс Картах</span>
                        </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="font-display font-800 text-3xl md:text-5xl text-cream leading-tight">
                            Геворг — мастер,<br />к которому возвращаются
                        </h2>
                        <p className="mt-5 text-base md:text-lg text-text-secondary leading-relaxed max-w-lg">
                            Клиенты отмечают, что Геворг внимательно выслушивает пожелания, предлагает варианты стрижки и подбирает форму под особенности волос и лица. Здесь не делают «как получится» — здесь работают с образом и деталями.
                        </p>

                        {/* Accents */}
                        <div className="mt-8 flex flex-col gap-3">
                            {ACCENTS.map((a, i) => (
                                <motion.div
                                    key={a}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <span className="w-2 h-2 rounded-full bg-bronze shrink-0" />
                                    <span className="text-base text-cream font-medium">{a}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.a
                            href="https://yandex.ru/maps/org/gev/115428588435/?booking%5Bpage%5D=menu&booking%5Bpermalink%5D=115428588435&ll=39.720798%2C47.271122&utm_source=share&z=16"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="mt-10 flex w-full md:w-auto justify-center md:inline-flex items-center gap-2 bg-bronze hover:bg-bronze-light text-bg font-display font-700 text-base px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_4px_32px_rgba(201,169,110,0.3)] hover:-translate-y-0.5"
                        >
                            Записаться к мастеру
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
