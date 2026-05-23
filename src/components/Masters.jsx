import React from 'react';
import { motion } from 'framer-motion';

const masters = [
    {
        id: 1,
        name: 'Геворг',
        role: 'Арт-директор / Старший барбер',
        exp: 'Опыт 8 лет',
        imgUrl: '/master gev.png',
        bookLink: 'https://yandex.ru/maps/org/gev/115428588435/?booking%5Bpage%5D=services&booking%5Bpermalink%5D=115428588435&booking%5BresourceId%5D=4376901&ll=39.720798%2C47.271122&utm_source=share&z=16'
    },
    {
        id: 2,
        name: 'Илья',
        role: 'Топ-барбер',
        exp: 'Опыт 5 лет',
        imgUrl: '/master ilya.png',
        bookLink: 'https://yandex.ru/maps/org/gev/115428588435/?booking%5Bpage%5D=services&booking%5Bpermalink%5D=115428588435&booking%5BresourceId%5D=4440797&ll=39.720798%2C47.271122&utm_source=share&z=16'
    },
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

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
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
                                    href={master.bookLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
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
