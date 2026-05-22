import { motion } from 'framer-motion'
import { useInView } from './useInView'

const AMENITIES = [
    'Парковка', 'Оплата картой', 'Wi-Fi',
    'Можно с собакой до 35 см', 'Пандус', 'Автоматическая дверь'
]

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
                        className="flex flex-col gap-8 bg-bg-card border border-border rounded-3xl p-6 md:p-10"
                    >
                        <div className="space-y-4 text-cream font-medium">
                            <a
                                href="https://yandex.ru/maps/-/CPwkbZ6W"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-xl md:text-2xl hover:text-bronze transition-colors duration-300"
                            >
                                Ростов-на-Дону,<br />Фурмановская улица, 109/56
                            </a>
                            <p className="text-text-secondary text-lg">Ежедневно 10:00–21:00</p>
                            <p className="text-2xl md:text-3xl font-display font-700 text-bronze pt-2">+7 (988) 997-22-05</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="https://yandex.ru/maps/-/CPwkbZ6W"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center bg-cream hover:bg-cream/90 text-[#141414] font-display font-700 text-base px-6 py-4 rounded-xl transition-colors duration-300"
                            >
                                Построить маршрут
                            </a>
                            <a
                                href="tel:+79889972205"
                                className="flex-1 text-center border border-[#2a2a2a] hover:border-cream text-cream font-display font-600 text-base px-6 py-4 rounded-xl transition-colors duration-300"
                            >
                                Позвонить
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="https://wa.me/79889972205"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center border border-[#2a2a2a] hover:border-[#25D366] hover:text-[#25D366] text-cream font-display font-600 text-base px-6 py-4 rounded-xl transition-colors duration-300"
                            >
                                Написать в WhatsApp
                            </a>
                            <a
                                href="https://gev.clients.site"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center bg-bronze hover:bg-bronze-light text-bg font-display font-700 text-base px-6 py-4 rounded-xl transition-colors duration-300"
                            >
                                Записаться онлайн
                            </a>
                        </div>

                        <div className="pt-4 mt-auto">
                            <div className="flex flex-wrap gap-2">
                                {AMENITIES.map((item) => (
                                    <span key={item} className="text-xs text-text-secondary bg-[#141414] border border-border px-3 py-1.5 rounded-full">
                                        {item}
                                    </span>
                                ))}
                            </div>
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
