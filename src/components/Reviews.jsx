import { motion } from 'framer-motion'
import { useInView } from './useInView'

const REVIEWS = [
    'Геворг всегда выслушает пожелания, предложит варианты и подчеркнет стиль.',
    'Сервис на уровне: встретили хорошо, голову помыли, аккуратно уложили.',
    'Пока ждал — играл на PS5 и пил отличный кофе.',
    'Стрижка получилась аккуратной, стильной и комфортной в носке.',
    'Учтены все пожелания, форма держится долго.',
    'Уютный барбершоп, знают толк в качественной бороде.',
]

export default function Reviews() {
    const [ref, inView] = useInView(0.1)

    return (
        <section id="reviews" className="py-20 md:py-28 bg-bg" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
                    {/* Left: Overall rating */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-start"
                    >
                        <h2 className="font-display font-800 text-5xl md:text-7xl text-cream flex items-center gap-3">
                            5.0
                            <span className="text-bronze text-4xl md:text-5xl">★</span>
                        </h2>
                        <p className="mt-2 font-display font-700 text-xl text-cream">Яндекс Карты</p>
                        <p className="mt-2 text-text-secondary">197 оценок · 135 отзывов</p>

                        <a
                            href="https://yandex.ru/maps/org/gev/115428588435/reviews/?ll=39.717975%2C47.271518&tab=reviews&z=17.47"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 flex w-full md:inline-flex md:w-auto items-center justify-center border border-[#2a2a2a] hover:border-bronze text-cream font-medium px-6 py-3 rounded-xl transition-colors duration-300"
                        >
                            Смотреть отзывы в Яндекс Картах
                        </a>
                    </motion.div>

                    {/* Right: Review cards */}
                    <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 gap-4 pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
                        {REVIEWS.map((text, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="bg-bg-card border border-border p-5 md:p-6 rounded-2xl flex flex-col gap-4 w-[85vw] sm:w-auto shrink-0 snap-center"
                            >
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <span key={star} className="text-bronze text-sm">★</span>
                                    ))}
                                </div>
                                <p className="text-sm md:text-base text-cream/90 leading-relaxed italic">
                                    «{text}»
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
