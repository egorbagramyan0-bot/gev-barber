import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileBookBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const mastersSection = document.getElementById('masters');
            if (mastersSection) {
                const rect = mastersSection.getBoundingClientRect();
                // Show when the masters section scrolls into view
                if (rect.top <= window.innerHeight) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            } else {
                // Fallback if masters section is missing
                setIsVisible(window.scrollY > window.innerHeight * 0.8);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check on load
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, pointerEvents: 'none' }}
                    animate={{ opacity: 1, y: 0, pointerEvents: 'auto' }}
                    exit={{ opacity: 0, y: 50, pointerEvents: 'none' }}
                    transition={{ duration: 0.4 }}
                    className="md:hidden fixed z-[60] left-4 right-4"
                    style={{ bottom: 'calc(12px + env(safe-area-inset-bottom))' }}
                >
                    <a
                        href="https://yandex.ru/maps/org/gev/115428588435/?booking%5Bpage%5D=menu&booking%5Bpermalink%5D=115428588435&ll=39.720798%2C47.271122&utm_source=share&z=16"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-[54px] bg-gradient-to-br from-[#D5AF63] via-[#F0D28A] to-[#B88935] text-[#050505] rounded-[16px] font-bold text-[16px] tracking-[0.03em] uppercase shadow-[0_8px_24px_rgba(213,175,99,0.3)] transition-transform active:scale-[0.98]"
                    >
                        Записаться
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileBookBtn;
