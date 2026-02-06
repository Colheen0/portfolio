import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const RenPy = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const gameInfo = {
    title: "Departure : The Visual Novel",
    description: "Une adaptation interactive de l'univers de Departure. Plongez dans une expérience narrative où chaque choix fragmente ou répare la réalité. Utilisant la puissance du moteur Ren'Py, j'ai pu traduire mes écrits en un système de jeu complexe mêlant embranchements scénaristiques et ambiance visuelle travaillée.",
    heroImage: "assets/renpy/visual_novel.png",
    screenshots: [
      "assets/renpy/screen1.png",
      "assets/renpy/screen2.png",
      "assets/renpy/screen3.png",
      "assets/renpy/screen4.png",
      "assets/renpy/screen5.png",
      "assets/renpy/screen6.png",
    ]
  };

  // 1. Navigation & Scroll Lock
  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeImageIndex]);

  // Utilisation de useCallback pour stabiliser les fonctions (supprime l'erreur de dépendances)
  const handleNext = useCallback(() => {
    setActiveImageIndex((prev) => 
      prev === null ? null : (prev + 1) % gameInfo.screenshots.length
    );
  }, [gameInfo.screenshots.length]);

  const handlePrev = useCallback(() => {
    setActiveImageIndex((prev) => 
      prev === null ? null : (prev - 1 + gameInfo.screenshots.length) % gameInfo.screenshots.length
    );
  }, [gameInfo.screenshots.length]);

  // 2. Clavier (Flèches, Echap et Focus Trap)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;

      // Navigation simple
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setActiveImageIndex(null);

      // Focus Trap (Navigation Tabulée)
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, handleNext, handlePrev]);

  return (
    <section id="renpy" className="py-24 px-6 bg-slate-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* EN-TÊTE ET DESCRIPTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
                Visual Novel
              </span>
              <span className="text-slate-500 text-sm font-medium italic">Ren'Py Engine</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
              {gameInfo.title}
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              {gameInfo.description}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group rounded-4xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/10"
          >
            <img 
              src={gameInfo.heroImage} 
              alt="Hero Game" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
          </motion.div>
        </div>

        {/* GRILLE DE CAPTURES (VIGNETTES) */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]">Captures d'écran</h3>
            <div className="h-px bg-white/10 flex-1 ml-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gameInfo.screenshots.map((src, index) => (
              <motion.button
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveImageIndex(index)}
                className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-slate-900 group"
              >
                <img src={src} alt={`Screenshot ${index}`} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-600/20 backdrop-blur-[2px]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" /></svg>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* LIGHTBOX PLEIN ÉCRAN */}
        <AnimatePresence>
          {activeImageIndex !== null && (
            <motion.div
              ref={modalRef} // Référence attachée ici pour le Focus Trap
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 md:p-12"
              onClick={() => setActiveImageIndex(null)}
              role="dialog"
              aria-modal="true"
            >
              <button 
                autoFocus
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-60"
                onClick={() => setActiveImageIndex(null)}
                aria-label="Fermer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              {/* Bouton Précédent */}
              <button 
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white transition-all z-60"
                aria-label="Précédent"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
              </button>

              {/* Image active */}
              <motion.div
                key={activeImageIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative max-w-7xl w-full h-full flex items-center justify-center pointer-events-none"
              >
                <img 
                  src={gameInfo.screenshots[activeImageIndex]} 
                  alt="Fullscreen" 
                  className="max-w-full max-h-full rounded-2xl shadow-2xl border border-white/10 object-contain"
                />
              </motion.div>

              {/* Bouton Suivant */}
              <button 
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white transition-all z-60"
                aria-label="Suivant"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
              </button>

              {/* Compteur */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/5 rounded-full text-xs font-bold text-slate-400">
                {activeImageIndex + 1} / {gameInfo.screenshots.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};