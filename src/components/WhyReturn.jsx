import { motion } from 'framer-motion'
import { useInView } from './useInView'

const REASONS = [
    { icon: '👂', title: 'Слушают пожелания', text: 'Перед стрижкой уточняют, что именно нужно, и предлагают варианты под форму лица и особенности волос.' },
    { icon: '✂️', title: 'Аккуратная работа', text: 'Клиенты отмечают ровную форму, чистый контур и стрижки, которые хорошо держатся после визита.' },
    { icon: '☕', title: 'Атмосфера без суеты', text: 'Стильный интерьер, приятная музыка, кофе и спокойная обстановка — сюда приходят не только подстричься, но и выдохнуть.' },
    { icon: '🎮', title: 'Комфорт во время ожидания', text: 'Если пришли раньше, можно выпить кофе или поиграть в PS5.' },
    { icon: '💈', title: 'Качественная косметика', text: 'В работе используют уходовые средства, которые заметны по ощущению и результату.' },
    { icon: '💰', title: 'Понятные цены', text: 'Цены открыты заранее: мужская стрижка — 1\u00A0600 ₽, оформление бороды — 1\u00A0100 ₽.' },
]

export default function WhyReturn() {
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
                    <h2 className="font-display font-800 text-3xl md:text-5xl text-cream">Почему сюда возвращаются</h2>
                    <p className="mt-3 text-base md:text-lg text-text-secondary max-w-2xl">
                        Клиенты чаще всего отмечают не только результат, но и отношение к деталям.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {REASONS.map((r, i) => (
                        <motion.div
                            key={r.title}
                            initial={{ opacity: 0, y: 25 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="bg-bg-card border border-border rounded-2xl p-6 md:p-7 transition-all duration-400 hover:border-border-hover hover:bg-bg-card-hover"
                        >
                            <span className="text-2xl mb-4 block">{r.icon}</span>
                            <h3 className="font-display font-700 text-lg text-cream mb-2">{r.title}</h3>
                            <p className="text-sm text-text-secondary leading-relaxed">{r.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
