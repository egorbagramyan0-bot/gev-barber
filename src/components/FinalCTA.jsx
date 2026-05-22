import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function FinalCTA() {
    const [ref, inView] = useInView(0.2)

    return (
        <section className="py-24 md:py-32 bg-bg relative overflow-hidden" ref={ref}>
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-bronze/10 md:bg-bronze/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="font-display font-900 text-4xl sm:text-5xl md:text-7xl text-cream tracking-tight"
                >
                    Запишитесь в <br className="sm:hidden" />
                    <span className="text-bronze">BARBERSHOP GEV</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 text-base md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
                >
                    Мужская стрижка — 1600 ₽. Рейтинг 5.0 в Яндекс Картах. Работаем каждый день на Фурмановской 109/56.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-10"
                >
                    <a
                        href="https://gev.clients.site"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-bronze hover:bg-bronze-light text-bg font-display font-800 text-lg md:text-xl px-12 py-5 rounded-2xl transition-all duration-300 hover:shadow-[0_8px_40px_rgba(201,169,110,0.3)] hover:-translate-y-1 w-full sm:w-auto"
                    >
                        Записаться онлайн
                    </a>
                </motion.div>

                {/* Small facts */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
                >
                    <span className="text-sm font-medium text-cream flex items-center gap-1">
                        <span className="text-bronze">⭐</span> 5.0 Яндекс
                    </span>
                    <span className="text-sm text-text-muted hidden sm:inline">•</span>
                    <span className="text-sm text-text-secondary">197 оценок</span>
                    <span className="text-sm text-text-muted hidden sm:inline">•</span>
                    <span className="text-sm text-text-secondary">135 отзывов</span>
                    <span className="text-sm text-text-muted hidden sm:inline">•</span>
                    <span className="text-sm text-text-secondary">ежедневно 10:00–21:00</span>
                </motion.div>
            </div>
        </section>
    )
}
