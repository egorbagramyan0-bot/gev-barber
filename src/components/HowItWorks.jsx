import { motion } from 'framer-motion'
import { useInView } from './useInView'

const STEPS = [
    { num: '01', title: 'Записываетесь', text: 'Онлайн, по телефону или через WhatsApp.' },
    { num: '02', title: 'Обсуждаете образ', text: 'Барбер уточняет пожелания, форму, длину и привычки укладки.' },
    { num: '03', title: 'Стрижка или бритьё', text: 'Аккуратная работа с волосами, бородой, контуром и деталями.' },
    { num: '04', title: 'Финальная укладка', text: 'В конце — укладка и рекомендации, как поддерживать форму дома.' },
]

export default function HowItWorks() {
    const [ref, inView] = useInView(0.1)

    return (
        <section className="py-20 md:py-28 bg-[#111111]" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    <h2 className="font-display font-800 text-3xl md:text-5xl text-cream">Как всё проходит</h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {STEPS.map((step, i) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative"
                        >
                            {/* Line connector (desktop only) */}
                            {i < STEPS.length - 1 && (
                                <div className="hidden lg:block absolute top-6 flex-1 w-full left-[60%] border-t border-dashed border-[#2a2a2a] z-0" />
                            )}

                            <div className="relative z-10">
                                <span className="font-display font-900 text-4xl text-bronze/20 block mb-4">
                                    {step.num}
                                </span>
                                <h3 className="font-display font-700 text-xl text-cream mb-2">{step.title}</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">{step.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
