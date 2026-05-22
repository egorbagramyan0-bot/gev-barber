import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function GiftCard() {
    const [ref, inView] = useInView(0.2)

    return (
        <section className="py-12 md:py-16 bg-bg" ref={ref}>
            <div className="max-w-4xl mx-auto px-5 md:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="bg-bg-card border border-bronze/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden"
                >
                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-bronze/10 rounded-full blur-[80px] pointer-events-none" />

                    <div className="relative z-10 flex-1 text-center md:text-left">
                        <h2 className="font-display font-800 text-3xl text-cream mb-4">Подарочный сертификат GEV</h2>
                        <p className="text-base text-text-secondary leading-relaxed">
                            Подарите не просто стрижку, а нормальный мужской сервис: барбер, кофе, атмосфера и результат, с которым хочется выйти из кресла.
                        </p>
                    </div>

                    <div className="relative z-10 shrink-0 object-center">
                        <a
                            href="https://wa.me/79889972205" // Assuming WA link for certificates
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full md:w-auto items-center justify-center bg-[#141414] border border-bronze hover:bg-bronze hover:text-bg text-bronze font-display font-600 text-base px-8 py-4 rounded-xl transition-all duration-300"
                        >
                            Узнать про сертификат
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
