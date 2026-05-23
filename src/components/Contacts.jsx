import { motion } from 'framer-motion'
import { useInView } from './useInView'


export default function Contacts() {
    const [ref, inView] = useInView(0.1)

    return (
        <section id="contacts" className="py-20 md:py-28 bg-[#111111]" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    <h2 className="font-display font-800 text-3xl md:text-5xl text-cream">Мы на Фурмановской</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Left: Info & Buttons */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col w-full max-w-[640px] bg-[#171717] border border-white/5 rounded-[24px] md:rounded-[28px] p-[24px] md:p-[40px] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                    >
                        {/* Upper part: Info */}
                        <div className="space-y-3 mb-8">
                            <a
                                href="https://yandex.ru/maps/-/CPwkbZ6W"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-2xl md:text-3xl font-display font-800 text-cream hover:text-bronze transition-colors duration-300 leading-tight"
                            >
                                Ростов-на-Дону,<br />Фурмановская улица, 109/56
                            </a>
                            <p className="text-[#a0a0a0] text-lg font-medium">Ежедневно 10:00–21:00</p>
                            <a
                                href="tel:+79889972205"
                                className="inline-block text-3xl md:text-4xl font-display font-800 text-bronze hover:text-bronze-light transition-colors pt-1"
                            >
                                +7 (988) 997-22-05
                            </a>
                        </div>

                        {/* Middle part: Quick actions 2x2 grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] md:gap-3 mb-6">
                            <a
                                href="https://yandex.ru/maps/-/CPwkbZ6W"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-full h-[52px] border border-white/10 hover:border-white hover:text-white hover:bg-white/5 rounded-[14px] text-cream font-medium text-[15px] transition-all duration-300"
                            >
                                Построить маршрут
                            </a>
                            <a
                                href="tel:+79889972205"
                                className="flex items-center justify-center w-full h-[52px] border border-white/10 hover:border-white hover:text-white hover:bg-white/5 rounded-[14px] text-cream font-medium text-[15px] transition-all duration-300"
                            >
                                Позвонить
                            </a>
                            <a
                                href="https://wa.me/79889972205"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-full h-[52px] border border-white/10 hover:border-[#25D366] hover:text-[#25D366] hover:bg-[#25D366]/5 rounded-[14px] text-cream font-medium text-[15px] transition-all duration-300"
                            >
                                Написать в WhatsApp
                            </a>
                            <a
                                href="https://t.me/gev_barbers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-full h-[52px] border border-white/10 hover:border-[#2AABEE] hover:text-[#2AABEE] hover:bg-[#2AABEE]/5 rounded-[14px] text-cream font-medium text-[15px] transition-all duration-300"
                            >
                                Написать в Telegram
                            </a>
                        </div>

                        {/* Lower part: Main CTA */}
                        <div className="mt-auto">
                            <a
                                href="https://yandex.ru/maps/org/gev/115428588435/?booking%5Bpage%5D=menu&booking%5Bpermalink%5D=115428588435&ll=39.720798%2C47.271122&utm_source=share&z=16"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center h-[60px] rounded-[16px] bg-gradient-to-br from-[#A88445] via-[#C4A15A] to-[#7A5A2C] hover:from-[#D0AD65] hover:via-[#C4A15A] hover:to-[#8A6A32] border border-[rgba(214,181,109,0.35)] text-[#0B0B0B] font-display font-800 text-[16px] md:text-[18px] uppercase tracking-wide shadow-[0_12px_30px_rgba(0,0,0,0.35),0_0_18px_rgba(196,161,90,0.12)] hover:shadow-[0_14px_35px_rgba(0,0,0,0.4),0_0_20px_rgba(196,161,90,0.2)] transition-all duration-300 hover:-translate-y-[1px]"
                            >
                                Записаться онлайн
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="w-full h-[300px] md:h-[400px] lg:h-auto rounded-3xl overflow-hidden bg-border relative"
                    >
                        {/* Real Yandex Map iframe */}
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?ll=39.721200%2C47.265500&mode=search&oid=165842188439&ol=biz&z=16.89"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen={true}
                            title="Yandex Map"
                            className="absolute inset-0 grayscale contrast-125 invert opacity-80 mix-blend-screen"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
