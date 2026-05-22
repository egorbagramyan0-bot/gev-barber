import React from 'react';
import { motion } from 'framer-motion';

const masters = [
    { id: 1, name: 'Геворг', role: 'Арт-директор / Старший барбер', exp: 'Опыт 8 лет', imgUrl: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2692&auto=format&fit=crop' },
    { id: 2, name: 'Давид', role: 'Топ-барбер', exp: 'Опыт 5 лет', imgUrl: 'https://images.unsplash.com/photo-1618306079930-fcc6bc1e1f7a?q=80&w=2574&auto=format&fit=crop' },
    { id: 3, name: 'Артем', role: 'Барбер', exp: 'Опыт 3 года', imgUrl: 'https://images.unsplash.com/photo-1582233479966-246eb8fee024?q=80&w=2670&auto=format&fit=crop' },
];

const Masters = () => {
    return (
        <section id="masters" className="py-24 bg-slate-900/20 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-amber-500 font-semibold tracking-widest uppercase text-xs mb-3">Знатоки дела</h2>
                        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-slate-100 mb-4">Наши Мастера</h3>
                        <p className="text-slate-400 max-w-2xl mx-auto font-light">
                            Те, кто делает ваш стиль идеальным. Тщательный отбор, безупречные навыки, регулярные курсы повышения квалификации.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {masters.map((master, index) => (
                        <motion.div
                            key={master.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-6">
                                {/* Decorative border matching Pro Max UI style */}
                                <div className="absolute inset-0 border border-slate-700/50 group-hover:border-amber-500/50 rounded-xl z-20 transition-colors duration-500 pointer-events-none" />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />

                                <img
                                    src={master.imgUrl}
                                    alt={master.name}
                                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%]"
                                />

                                <div className="absolute bottom-6 left-6 z-20">
                                    <span className="bg-amber-500 text-slate-950 text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider mb-3 inline-block">
                                        {master.exp}
                                    </span>
                                    <h4 className="text-2xl font-serif text-slate-100">{master.name}</h4>
                                    <p className="text-amber-400 font-light mt-1">{master.role}</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href="#book"
                                    className="flex-1 bg-slate-800 hover:bg-amber-500 text-slate-100 hover:text-slate-950 text-center py-3 rounded font-medium transition-colors duration-300"
                                >
                                    К мастеру
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Masters;
