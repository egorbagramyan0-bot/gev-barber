import React from 'react';
import { motion } from 'framer-motion';

const AboutLocation = () => {
    return (
        <section id="contacts" className="py-24 bg-slate-950 relative border-t border-slate-900 border-b">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Info Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-amber-500 font-semibold tracking-widest uppercase text-xs mb-3">Визит к нам</h2>
                        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-slate-100 mb-8">Контакты & Локация</h3>
                        <p className="text-slate-400 font-light mb-12 max-w-lg leading-relaxed">
                            Барбершоп расположен в престижном районе с удобной парковкой.
                            Вас всегда ждет горячий кофе, крепкие напитки и отличная атмосфера.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-slate-900 p-3 rounded-full text-amber-500 border border-slate-800">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-slate-100 font-medium mb-1">Адрес</h4>
                                    <p className="text-slate-400 font-light">Фурмановская 109/56<br />Ростов-на-Дону, Россия</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-slate-900 p-3 rounded-full text-amber-500 border border-slate-800">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-slate-100 font-medium mb-1">Время работы</h4>
                                    <p className="text-slate-400 font-light">Каждый день: 10:00 — 21:00<br />Без выходных</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-slate-900 p-3 rounded-full text-amber-500 border border-slate-800">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-slate-100 font-medium mb-1">Связь</h4>
                                    <a href="tel:+70000000000" className="text-slate-400 hover:text-amber-500 transition-colors font-light block">+7 (000) 000-00-00</a>
                                    <a href="mailto:info@gevbarbershop.ru" className="text-slate-400 hover:text-amber-500 transition-colors font-light block mt-1">info@gevbarbershop.ru</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map/Image Block */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full relative h-[400px] lg:h-[500px]"
                    >
                        <div className="absolute inset-0 bg-slate-900/40 rounded-2xl glass-panel border border-slate-800/50 flex flex-col items-center justify-center text-center p-8 overflow-hidden group">
                            {/* Optional background overlay effect */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 filter grayscale group-hover:grayscale-[50%] group-hover:opacity-20 transition-all duration-700" />

                            <div className="relative z-10">
                                <svg className="w-12 h-12 text-amber-500 mb-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                                <h4 className="text-xl font-medium text-slate-200 mb-2">Найти нас на карте</h4>
                                <p className="text-slate-400 font-light text-sm mb-6">Интеграция с Яндекс.Картами</p>
                                <a href="https://yandex.ru/maps/-/CDu~mXYZ" target="_blank" rel="noopener noreferrer" className="inline-block bg-transparent border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-950 px-6 py-2.5 rounded font-medium transition-all duration-300">
                                    Открыть Карты
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutLocation;
