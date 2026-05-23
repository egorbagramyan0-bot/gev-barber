import React from 'react';
import { motion } from 'framer-motion';

const servicesList = [
    { id: '01', title: 'Мужская стрижка', price: 'от 1600 ₽', desc: 'Индивидуальный подбор формы, мытье головы, укладка премиальной косметикой.', time: '1 час' },
    { id: '02', title: 'Оформление бороды', price: 'от 1000 ₽', desc: 'Придание формы бороде и усам, распаривание, королевское бритье опасной бритвой.', time: '45 мин' },
    { id: '03', title: 'Детская стрижка', price: 'от 1600 ₽', desc: 'Стильная стрижка для юных джентльменов (до 12 лет) с бережным подходом.', time: '45 мин' },
    { id: '04', title: 'Комплекс (Стрижка + Борода)', price: 'от 2400 ₽', desc: 'Полный комплекс услуг для создания безупречного образа. Скидка на комплекс.', time: '1.5 часа' },
    { id: '05', title: 'Королевское бритьё', price: 'от 1200 ₽', desc: 'Традиционное влажное бритье с горячим полотенцем и массажем лица.', time: '1 час' },
    { id: '06', title: 'Укладка', price: '500 ₽', desc: 'Стильная укладка с использованием профессиональной мужской косметики.', time: '20 мин' },
    { id: '07', title: 'Восковое удаление волос', price: '400 ₽', desc: 'Быстрое и аккуратное удаление нежелательных волос воском (нос, уши, брови).', time: '15 мин' },
    { id: '08', title: 'Black маска', price: '500 ₽', desc: 'Очищающая угольная маска. Эффективно избавляет от черных точек и освежает лицо.', time: '20 мин' },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-slate-950 relative border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="mb-16 md:flex justify-between items-end">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 md:mb-0"
                    >
                        <h2 className="text-amber-500 font-semibold tracking-widest uppercase text-xs mb-3">Наш арсенал</h2>
                        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-slate-100">Услуги & Цены</h3>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-slate-400 max-w-md font-light"
                    >
                        Никаких случайных решений: обсуждаем форму, длину и детали перед началом. Стрижём, бреем и доводим образ до чистого результата.
                    </motion.p>
                </div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.05
                            }
                        }
                    }}
                >
                    {servicesList.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={{
                                hidden: { opacity: 0, y: 18 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }
                            }}
                            className="bg-[#141414] md:bg-slate-900/60 md:backdrop-blur-md border border-slate-800 lg:hover:bg-slate-900/90 lg:hover:border-amber-500/40 transition-colors duration-300 p-5 md:p-8 rounded-xl flex flex-col group relative overflow-hidden"
                            style={{
                                willChange: 'transform, opacity',
                                WebkitBackfaceVisibility: 'hidden',
                                backfaceVisibility: 'hidden',
                                transform: 'translateZ(0)'
                            }}
                        >
                            {/* Abstract decorative number matching UI UX Pro Max 'elegant luxury' */}
                            <span className="absolute -top-4 -right-4 text-7xl font-serif text-slate-800/20 lg:group-hover:text-amber-500/10 transition-colors font-bold">
                                {service.id}
                            </span>

                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <h4 className="text-xl font-medium text-slate-100 max-w-[70%]">{service.title}</h4>
                                <span className="text-amber-400 font-serif text-lg font-semibold whitespace-nowrap">{service.price}</span>
                            </div>

                            <p className="text-slate-400 text-sm mb-6 flex-grow relative z-10 font-light leading-relaxed">
                                {service.desc}
                            </p>

                            <div className="flex justify-between items-center relative z-10 mt-auto pt-4 border-t border-slate-800">
                                <span className="text-xs text-slate-500 uppercase tracking-widest flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    {service.time}
                                </span>
                                <a href="https://yandex.ru/maps/org/gev/115428588435/?booking%5Bpage%5D=menu&booking%5Bpermalink%5D=115428588435&ll=39.720798%2C47.271122&utm_source=share&z=16" target="_blank" rel="noopener noreferrer" className="text-amber-500 text-sm font-medium hover:text-amber-400 flex items-center gap-1 transition-colors">
                                    Записаться <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
