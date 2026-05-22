import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from './useInView'

const GALLERY = [
    { src: '/salon1.webp', alt: 'Рабочее место', title: 'Рабочее место' },
    { src: '/salon2.webp', alt: 'Кресло', title: 'Комфорт' },
    { src: '/salon3.webp', alt: 'Детали инструментов', title: 'Инструменты' },
    { src: '/salon4.webp', alt: 'Кофе', title: 'Атмосфера' },
]

export default function Atmosphere() {
    const [ref, inView] = useInView(0.1)
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <section id="atmosphere" className="py-20 md:py-28 bg-[#111111]" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    <h2 className="font-display font-800 text-3xl md:text-5xl text-cream">Больше, чем стрижка</h2>
                    <p className="mt-3 text-base md:text-lg text-text-secondary max-w-xl">
                        Кофе, PS5, музыка, чистый зал и спокойная мужская атмосфера.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
                    {GALLERY.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group cursor-pointer relative aspect-[4/5] sm:aspect-square w-[75vw] sm:w-auto shrink-0 snap-center rounded-2xl overflow-hidden bg-bg-card border border-border"
                            onClick={() => setSelectedImage(item)}
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="font-display font-600 text-cream text-lg tracking-wide">{item.title}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-cream bg-black/50 hover:bg-black border border-white/10 rounded-full w-12 h-12 flex items-center justify-center transition-colors z-[60]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
