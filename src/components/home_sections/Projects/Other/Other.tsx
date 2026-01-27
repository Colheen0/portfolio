import { useState, useRef, useEffect } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { PersonalProject, PhotoAlbum, Drawing, Poem } from './OtherTypes';
import { AfterEffectsSection } from './sections/AfSection';
import { PhotographySection } from './sections/PhotoSection';
import { DrawingsSection } from './sections/DrawSection';
import { PoemsSection } from './sections/PoemSection';

export const Other = () => {
  const [activeVideo, setActiveVideo] = useState<PersonalProject | null>(null);
  const [activeAlbum, setActiveAlbum] = useState<PhotoAlbum | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeDrawing, setActiveDrawing] = useState<Drawing | null>(null);
  const [activePoem, setActivePoem] = useState<Poem | null>(null);

  const aeScrollRef = useRef<HTMLDivElement>(null);
  const photoScrollRef = useRef<HTMLDivElement>(null);
  const drawScrollRef = useRef<HTMLDivElement>(null);
  const poemScrollRef = useRef<HTMLDivElement>(null);

  const videoModalRef = useRef<HTMLDivElement>(null);
  const albumModalRef = useRef<HTMLDivElement>(null);
  const drawModalRef = useRef<HTMLDivElement>(null);
  const poemModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isModalOpen = activeVideo || activeAlbum || activeDrawing || activePoem;
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeVideo, activeAlbum, activeDrawing, activePoem]);

  useEffect(() => {
    const activeRef = activeVideo ? videoModalRef : activeAlbum ? albumModalRef : activeDrawing ? drawModalRef : activePoem ? poemModalRef : null;
    if (!activeRef) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const currentModal = activeRef.current;
      if (!currentModal) return;

      const focusableElements = currentModal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVideo, activeAlbum, activeDrawing, activePoem]);

  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    const element = ref.current;
    if (element) {
      const scrollAmount = 450;
      element.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const nextImage = () => {
    if (activeAlbum) setCurrentImageIndex((prev) => (prev + 1) % activeAlbum.images.length);
  };

  const prevImage = () => {
    if (activeAlbum) setCurrentImageIndex((prev) => (prev - 1 + activeAlbum.images.length) % activeAlbum.images.length);
  };

  return (
    <section id="others" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-violet-100 text-violet-600 rounded-full text-[10px] font-black uppercase tracking-widest">Laboratoire</span>
            <span className="text-slate-400 text-sm font-medium">Tests & Expérimentations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-tight">Projets <br /> <span className="text-violet-600">Personnels</span></h2>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">Espace dédié à l'apprentissage autodidacte, aux tests de Motion Design à la photographie et autres.</p>
        </motion.div>
        
        <AfterEffectsSection scrollRef={aeScrollRef} handleScroll={handleScroll} setActiveVideo={setActiveVideo} containerVariants={containerVariants} itemVariants={itemVariants} />
        
        <PhotographySection scrollRef={photoScrollRef} handleScroll={handleScroll} setActiveAlbum={setActiveAlbum} setCurrentImageIndex={setCurrentImageIndex} containerVariants={containerVariants} itemVariants={itemVariants} />
        
        <DrawingsSection scrollRef={drawScrollRef} handleScroll={handleScroll} setActiveDrawing={setActiveDrawing} containerVariants={containerVariants} itemVariants={itemVariants} />
        
        <PoemsSection scrollRef={poemScrollRef} handleScroll={handleScroll} setActivePoem={setActivePoem} containerVariants={containerVariants} itemVariants={itemVariants} />

        <AnimatePresence>
          {activeVideo && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-md" onClick={() => setActiveVideo(null)} role="dialog" aria-modal="true">
              <motion.div ref={videoModalRef} initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="max-w-4xl w-full relative" onClick={e => e.stopPropagation()}>
                <button autoFocus onClick={() => setActiveVideo(null)} className="absolute -top-12 right-0 text-white font-bold text-xl hover:text-indigo-400 outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 p-1">Fermer ✕</button>
                <div className="bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
                  <video controls autoPlay className="w-full h-full" src={activeVideo.videoSrc} poster={activeVideo.poster} />
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeAlbum && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-md" onClick={() => setActiveAlbum(null)} role="dialog" aria-modal="true">
              <motion.div ref={albumModalRef} initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="max-w-4xl w-full h-[80vh] flex flex-col relative" onClick={e => e.stopPropagation()}>
                <button autoFocus onClick={() => setActiveAlbum(null)} className="absolute -top-12 right-0 text-white font-bold text-xl hover:text-emerald-400 outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 p-1">Fermer ✕</button>
                <div className="flex-1 bg-black/20 rounded-3xl overflow-hidden relative shadow-2xl border border-white/10">
                  <AnimatePresence mode="wait">
                    <motion.img key={currentImageIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} src={activeAlbum.images[currentImageIndex]} className="w-full h-full object-contain" />
                  </AnimatePresence>
                  <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">←</button>
                  <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">→</button>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold">{currentImageIndex + 1} / {activeAlbum.images.length}</div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeDrawing && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-md" onClick={() => setActiveDrawing(null)} role="dialog" aria-modal="true">
              <motion.div ref={drawModalRef} initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="max-w-4xl w-full flex flex-col relative" onClick={e => e.stopPropagation()}>
                <button autoFocus onClick={() => setActiveDrawing(null)} className="absolute -top-12 right-0 text-white font-bold text-xl hover:text-rose-400 outline-none focus-visible:ring-2 focus-visible:ring-rose-400 p-1">Fermer ✕</button>
                <div className="bg-black/20 rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-square md:aspect-auto md:h-[80vh]">
                  <img src={activeDrawing.imageSrc} alt={activeDrawing.title} className="w-full h-full object-contain" />
                </div>
              </motion.div>
            </motion.div>
          )}

          {activePoem && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-md" onClick={() => setActivePoem(null)} role="dialog" aria-modal="true">
              <motion.div ref={poemModalRef} initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="max-w-3xl w-full max-h-[90vh] flex flex-col relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-y-auto scrollbar-hide" onClick={e => e.stopPropagation()}>
                <button autoFocus onClick={() => setActivePoem(null)} className="absolute top-6 right-6 text-slate-400 hover:text-amber-500 outline-none focus-visible:ring-2 focus-visible:ring-amber-400 p-1 text-2xl">✕</button>
                <div className="text-center">
                  <h3 className="text-3xl font-black text-slate-900 mb-2">{activePoem.title}</h3>
                  <p className="text-[10px] font-black uppercase text-amber-500 tracking-widest mb-8">{activePoem.category}</p>
                  <div className="w-12 h-1 bg-amber-100 mx-auto mb-8 rounded-full" />
                  <p className="text-slate-600 leading-relaxed whitespace-pre-wrap font-serif italic text-lg md:text-xl text-left md:text-center">{activePoem.content}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};