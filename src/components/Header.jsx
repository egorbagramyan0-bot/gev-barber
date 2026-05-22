import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV = [
    { label: 'Услуги', href: '#services' },
    { label: 'Цены', href: '#services' },
    { label: 'Атмосфера', href: '#atmosphere' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'Адрес', href: '#contacts' },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    return (
        <header
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled
                ? 'bg-[#141414]/90 backdrop-blur-md border-b border-[#2a2a2a]/60'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-[1320px] mx-auto px-6 md:px-12 xl:px-16 flex items-center justify-between h-20">
                {/* Logo */}
                <a href="#" className="font-display font-800 text-xl tracking-wider text-cream shrink-0">
                    BARBERSHOP <span className="text-bronze">GEV</span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center justify-center gap-10 flex-1 px-8">
                    {NAV.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-[15px] text-text-secondary hover:text-cream transition-colors duration-300 font-medium"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:flex shrink-0">
                    <a
                        href="https://gev.clients.site"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-bronze hover:bg-bronze-light text-bg font-display font-700 text-sm px-7 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_24px_rgba(201,169,110,0.25)]"
                    >
                        Записаться
                    </a>
                </div>

                {/* Burger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[6px] z-[110]"
                    aria-label="Меню"
                >
                    <span className={`block w-6 h-[2px] bg-cream transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
                    <span className={`block w-6 h-[2px] bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-[2px] bg-cream transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-[#141414] z-[100] flex flex-col items-center justify-center gap-8 lg:hidden"
                    >
                        {NAV.map((item, i) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.07, duration: 0.3 }}
                                className="font-display font-700 text-3xl text-cream hover:text-bronze transition-colors"
                            >
                                {item.label}
                            </motion.a>
                        ))}
                        <motion.a
                            href="https://gev.clients.site"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                            className="mt-6 bg-bronze text-bg font-display font-700 text-xl px-12 py-5 rounded-2xl w-[80%] max-w-sm text-center"
                        >
                            Записаться
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
