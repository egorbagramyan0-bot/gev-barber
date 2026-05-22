import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-[100svh] flex flex-col justify-center pt-[90px] md:pt-[110px] pb-16 overflow-hidden bg-[#050505]">

            {/* Z-INDEX 0: Base background layout using the original hero image containing the environment */}
            <div className="absolute inset-0 bg-[#050505] z-0" />
            <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center lg:bg-center grayscale z-0 opacity-40 sm:opacity-80" />

            {/* Mobile dark overlay to guarantee text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505]/90 sm:hidden z-[1]" />

            {/* Z-INDEX 2: Main Content */}
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 z-[2] relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-start text-left max-w-2xl lg:max-w-4xl pt-20"
                >
                    {/* Yandex Maps Rating Badge */}
                    <motion.a
                        href="https://yandex.ru/profile/115428588435?lang=ru"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Открыть отзывы BARBERSHOP GEV в Яндекс Картах"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group inline-flex flex-col mb-8 bg-[#141414]/65 backdrop-blur-md border border-[#c9a46a]/30 rounded-[20px] px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(201,164,106,0.15)] hover:border-[#c9a46a]/50"
                    >
                        <div className="flex items-center gap-2 mb-1">
                            {/* SVG Star for consistent golden coloring */}
                            <svg className="w-[18px] h-[18px] text-[#F0D28A] shrink-0 drop-shadow-[0_0_4px_rgba(240,210,138,0.4)]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <div className="flex items-baseline gap-1.5">
                                <span className="text-[#F0D28A] font-bold text-[19px] leading-none">5.0</span>
                                <span className="text-slate-300 text-[15px] font-medium leading-none">в Яндекс Картах</span>
                            </div>
                        </div>
                        <div className="text-slate-400/80 text-[13px] font-medium tracking-wide flex items-center gap-1.5 ml-[26px]">
                            197 оценок <span className="text-slate-500">·</span> 135 отзывов
                        </div>
                    </motion.a>

                    {/* Headline */}
                    <h1 className="font-serif text-[clamp(40px,11vw,80px)] text-slate-100 leading-[1.05] mb-4 md:mb-6 uppercase mt-2 max-w-full">
                        <span className="sm:hidden">BARBER<br />SHOP<br /></span>
                        <span className="hidden sm:inline">BARBERSHOP <br /></span>
                        <span className="text-[#d5af63]">GEV</span>
                    </h1>

                    <div className="text-slate-300 font-medium tracking-wide text-[clamp(18px,5vw,28px)] mb-6 md:mb-10">
                        на <span className="text-slate-100 border-b-[2px] border-[#d5af63]/50 pb-1">Фурмановской</span>
                    </div>

                    <div className="mb-10 md:mb-12 inline-flex bg-[#d5af63]/10 border border-[#d5af63]/30 px-5 py-3 rounded-xl text-[#d5af63] font-bold tracking-[0.03em] uppercase text-[clamp(13px,3.5vw,18px)] shadow-lg backdrop-blur-sm text-center">
                        Мужская стрижка — 1600 ₽
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center w-full sm:w-auto">
                        <a
                            href="https://yandex.ru/maps/org/gev/115428588435/?booking%5Bpage%5D=menu&booking%5Bpermalink%5D=115428588435&ll=39.720798%2C47.271122&utm_source=share&z=16"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-gradient-to-br from-[#D5AF63] via-[#F0D28A] to-[#B88935] text-[#050505] px-10 py-4 lg:py-5 rounded-[16px] font-bold tracking-[0.04em] uppercase transition-all duration-300 text-center text-[15px] md:text-base shadow-[0_8px_24px_rgba(213,175,99,0.25)] hover:shadow-[0_12px_36px_rgba(213,175,99,0.4)]"
                        >
                            Записаться онлайн
                        </a>
                        <a
                            href="#services"
                            className="block w-full sm:w-auto bg-[#141414]/90 sm:bg-transparent border border-[#d5af63]/50 hover:border-[#d5af63] text-slate-200 hover:text-[#d5af63] px-10 py-4 lg:py-5 rounded-[16px] font-medium tracking-[0.05em] uppercase transition-all duration-300 text-center text-[15px] md:text-base backdrop-blur-sm"
                        >
                            Услуги и цены
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-6 md:left-12 z-[2] hidden md:flex flex-col items-center gap-3"
            >
                <span className="text-slate-400 text-xs tracking-widest uppercase rotate-90 mb-8">Вниз</span>
                <div className="w-[1px] h-16 bg-[#d5af63]/30 overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 64] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="w-full h-1/2 bg-[#d5af63]"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
