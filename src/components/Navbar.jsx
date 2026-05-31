import { useState, useEffect } from 'react';
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
        { name: 'Услуги & Цены', href: '#services' },
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full flex items-center h-[48px] lg:h-[56px] ${scrolled
                ? 'bg-[#050505]/80 backdrop-blur-[14px] border-b border-[#C4A15A]/15'
                : 'bg-transparent border-b border-transparent'
                }`}
        >
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 flex justify-between items-center h-full">

                {/* Logo Section - Left */}
                <div className="flex-1 flex justify-start items-center h-full">
                    <a href="#" className="flex items-center bg-transparent p-0 m-0 cursor-pointer group">
                        <img
                            src="/gev-logo-transparent.png"
                            alt="Barbershop GEV Logo"
                            className="w-auto block object-contain bg-transparent p-0 m-0 h-[36px] lg:h-[44px] transition-all duration-300 drop-shadow-md group-hover:drop-shadow-[0_0_12px_rgba(196,161,90,0.15)]"
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
                            className="relative group text-[rgba(255,255,255,0.78)] hover:text-[#C4A15A] transition-colors duration-300 font-semibold text-[15px] xl:text-[16px] tracking-[0.04em] uppercase py-2"
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-[#C4A15A] transition-all duration-300 group-hover:w-full"></span>
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
                        <span className="text-[13px] text-slate-200 transition-colors font-medium tracking-wide group-hover:text-[#C4A15A]">
                            Фурмановская улица, 109/56
                        </span>
                    </a>

                    {/* Vertical Divider line */}
                    <div className="w-[1px] h-6 bg-[#C4A15A]/20 hidden xl:block"></div>

                    <a
                        href="https://yandex.ru/maps/org/gev/115428588435/?booking%5Bpage%5D=menu&booking%5Bpermalink%5D=115428588435&ll=39.720798%2C47.271122&utm_source=share&z=16"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-br from-[#A88445] via-[#C4A15A] to-[#7A5A2C] hover:from-[#D0AD65] hover:via-[#C4A15A] hover:to-[#8A6A32] text-[#0B0B0B] border border-[rgba(214,181,109,0.35)] px-6 h-[38px] xl:h-[40px] rounded-[8px] text-[13px] xl:text-[14px] font-bold tracking-[0.03em] flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.3),0_0_12px_rgba(196,161,90,0.1)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.35),0_0_15px_rgba(196,161,90,0.15)] transition-all duration-300 transform hover:-translate-y-[1px]"
                    >
                        Записаться
                    </a>
                </div>

                {/* Mobile Menu Toggle - Right */}
                <div className="lg:hidden flex-1 flex justify-end items-center h-full">
                    <button
                        className="text-[rgba(255,255,255,0.78)] hover:text-[#C4A15A] transition-colors duration-300 cursor-pointer p-2 -mr-2"
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
                    className="lg:hidden absolute top-full left-0 w-full max-h-[calc(100vh-48px)] overflow-y-auto bg-[#050505]/98 backdrop-blur-[20px] p-6 flex flex-col gap-3 border-t border-[#C4A15A]/15 shadow-2xl"
                >
                    {/* Centered logo inside mobile menu */}
                    <div className="flex justify-center mb-4 pt-2">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsOpen(false);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="bg-transparent p-0 cursor-pointer group"
                        >
                            <img
                                src="/gev-logo-transparent.png"
                                alt="GEV Logo Icon"
                                className="h-[44px] w-auto object-contain bg-transparent transition-all duration-300 drop-shadow-md group-hover:drop-shadow-[0_0_12px_rgba(196,161,90,0.15)]"
                            />
                        </a>
                    </div>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="text-center text-slate-200 hover:text-[#C4A15A] transition-colors duration-300 font-semibold text-[16px] md:text-[18px] tracking-[0.05em] uppercase py-4 border-b border-white/5 block"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://yandex.ru/maps/org/gev/115428588435/?booking%5Bpage%5D=menu&booking%5Bpermalink%5D=115428588435&ll=39.720798%2C47.271122&utm_source=share&z=16"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="w-full text-center mt-4 bg-gradient-to-br from-[#A88445] via-[#C4A15A] to-[#7A5A2C] text-[#0B0B0B] border border-[rgba(214,181,109,0.35)] h-[54px] rounded-[16px] font-bold text-[16px] tracking-[0.04em] flex items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.35),0_0_18px_rgba(196,161,90,0.12)] transition-transform active:scale-[0.98] uppercase"
                    >
                        Записаться онлайн
                    </a>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Navbar;
