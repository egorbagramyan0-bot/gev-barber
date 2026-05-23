import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Услуги', href: '#services' },
        { name: 'Цены', href: '#services' },
        { name: 'Мастера', href: '#masters' },
        { name: 'Отзывы', href: '#reviews' },
        { name: 'Адрес', href: '#contacts' },
    ];

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full flex items-center h-[72px] md:h-[82px] lg:h-[96px] xl:h-[110px] ${scrolled
                ? 'bg-[#050505]/80 backdrop-blur-[14px] border-b border-[#d4af69]/15'
                : 'bg-transparent border-b border-transparent'
                }`}
        >
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 flex justify-between items-center h-full">

                {/* Logo Section - Left */}
                <div className="flex-1 flex justify-start items-center h-full">
                    <a href="#" className="flex items-center bg-transparent p-0 m-0 cursor-pointer group">
                        <img
                            src="/gev_logo_transparent_clean.png"
                            alt="Barbershop GEV Logo"
                            className="w-auto block object-contain bg-transparent p-0 m-0 h-[48px] md:h-[56px] lg:h-[64px] xl:h-[76px] transition-all duration-300 drop-shadow-md group-hover:drop-shadow-[0_0_12px_rgba(213,175,99,0.15)]"
                        />
                    </a>
                </div>

                {/* Desktop Navigation - Center */}
                <nav className="hidden lg:flex flex-[2] justify-center items-center gap-10 xl:gap-14 h-full">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="relative group text-[rgba(255,255,255,0.78)] hover:text-[#D5AF63] transition-colors duration-300 font-semibold text-[15px] xl:text-[16px] tracking-[0.04em] uppercase py-2"
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-[#D5AF63] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Desktop Actions - Right */}
                <div className="hidden lg:flex flex-[1.5] justify-end items-center h-full gap-5 xl:gap-6">

                    {/* Location Info */}
                    <a
                        href="https://yandex.ru/maps/-/CPwkbZ6W"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden xl:flex flex-col text-right group"
                    >
                        <span className="text-[10px] text-slate-400 tracking-[0.15em] uppercase mb-[2px] transition-colors group-hover:text-slate-300">Ростов-на-Дону</span>
                        <span className="text-[13px] text-slate-200 transition-colors font-medium tracking-wide group-hover:text-[#d5af63]">
                            Фурмановская улица, 109/56
                        </span>
                    </a>

                    {/* Vertical Divider line */}
                    <div className="w-[1px] h-10 bg-[#d5af63]/20 hidden xl:block"></div>

                    <a
                        href="https://yandex.ru/maps/org/gev/115428588435/?booking%5Bpage%5D=menu&booking%5Bpermalink%5D=115428588435&ll=39.720798%2C47.271122&utm_source=share&z=16"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-br from-[#D5AF63] via-[#F0D28A] to-[#B88935] text-[#050505] px-[30px] xl:px-[36px] h-[48px] xl:h-[54px] rounded-[10px] xl:rounded-[14px] text-[15px] xl:text-[16px] font-bold tracking-[0.03em] flex items-center justify-center shadow-[0_8px_28px_rgba(213,175,99,0.22)] hover:shadow-[0_12px_36px_rgba(213,175,99,0.4)] transition-all duration-300 transform hover:-translate-y-[2px]"
                    >
                        Записаться
                    </a>
                </div>

                {/* Mobile Menu Toggle - Right */}
                <div className="lg:hidden flex-1 flex justify-end items-center h-full">
                    <button
                        className="text-[rgba(255,255,255,0.78)] hover:text-[#D5AF63] transition-colors duration-300 cursor-pointer p-2 -mr-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        <div className="w-7 flex flex-col items-end gap-[6px]">
                            <span className={`block h-[2px] bg-current transition-all duration-300 ${isOpen ? 'w-full rotate-45 translate-y-[8px]' : 'w-full'}`}></span>
                            <span className={`block h-[2px] bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-5'}`}></span>
                            <span className={`block h-[2px] bg-current transition-all duration-300 ${isOpen ? 'w-full -rotate-45 -translate-y-[8px]' : 'w-6'}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:hidden absolute top-full left-0 w-full max-h-[calc(100vh-72px)] overflow-y-auto bg-[#050505]/98 backdrop-blur-[20px] p-6 flex flex-col gap-3 border-t border-[#d4af69]/15 shadow-2xl"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="text-center text-slate-200 hover:text-[#D5AF63] transition-colors duration-300 font-semibold text-[16px] md:text-[18px] tracking-[0.05em] uppercase py-4 border-b border-white/5 block"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://yandex.ru/maps/org/gev/115428588435/?booking%5Bpage%5D=menu&booking%5Bpermalink%5D=115428588435&ll=39.720798%2C47.271122&utm_source=share&z=16"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="w-full text-center mt-4 bg-gradient-to-br from-[#D5AF63] via-[#F0D28A] to-[#B88935] text-[#050505] h-[54px] rounded-[16px] font-bold text-[16px] tracking-[0.04em] flex items-center justify-center shadow-[0_8px_28px_rgba(213,175,99,0.22)] transition-transform active:scale-[0.98] uppercase"
                    >
                        Записаться онлайн
                    </a>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Navbar;
