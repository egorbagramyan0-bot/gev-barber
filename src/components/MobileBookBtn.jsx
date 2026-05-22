import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileBookBtn = () => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="md:hidden fixed bottom-3 left-4 right-4 z-[60]"
            >
                <a
                    href="#book"
                    className="flex items-center justify-center w-full h-[54px] bg-gradient-to-br from-[#D5AF63] via-[#F0D28A] to-[#B88935] text-[#050505] rounded-[16px] font-bold text-[16px] tracking-[0.03em] uppercase shadow-[0_8px_24px_rgba(213,175,99,0.3)] transition-transform active:scale-[0.98]"
                >
                    Записаться
                </a>
            </motion.div>
        </AnimatePresence>
    );
};

export default MobileBookBtn;
