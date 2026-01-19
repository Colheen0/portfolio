import { useState, useRef, useEffect } from 'react'; // Ajout de useEffect
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface PersonalProject {
  title: string;
  category: string;
  videoSrc: string;
  poster: string;
}

interface PhotoAlbum {
  title: string;
  category: string;
  cover: string;
  images: string[];
}

interface Drawing {
  title: string;
  category: string;
  imageSrc: string;
}

export const Other = () => {
  const [activeVideo, setActiveVideo] = useState<PersonalProject | null>(null);
  const [activeAlbum, setActiveAlbum] = useState<PhotoAlbum | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeDrawing, setActiveDrawing] = useState<Drawing | null>(null);

  // 1. Références pour le défilement horizontal
  const aeScrollRef = useRef<HTMLDivElement>(null);
  const photoScrollRef = useRef<HTMLDivElement>(null);
  const drawScrollRef = useRef<HTMLDivElement>(null);

  // Références pour le Focus Trap des 3 modales
  const videoModalRef = useRef<HTMLDivElement>(null);
  const albumModalRef = useRef<HTMLDivElement>(null);
  const drawModalRef = useRef<HTMLDivElement>(null);

  // 2. Bloquer le scroll du body quand une modale est ouverte
  useEffect(() => {
    const isModalOpen = activeVideo || activeAlbum || activeDrawing;
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeVideo, activeAlbum, activeDrawing]);

  // 3. Gestion du Focus Trap (Enfermer la navigation Tab)
  useEffect(() => {
    const activeRef = activeVideo ? videoModalRef : activeAlbum ? albumModalRef : activeDrawing ? drawModalRef : null;
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

      if (e.shiftKey) { // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else { // Tab
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVideo, activeAlbum, activeDrawing]);

  // Fonction de défilement sécurisée pour TypeScript
  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    const element = ref.current;
    if (element) {
      const scrollAmount = 450;
      element.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  const aeProjects: PersonalProject[] = [
    { 
      title: "Effet de disparition de poussière", 
      category: "After Effects", 
      videoSrc: "assets/video/departure snap thanos.MP4",
      poster: "assets/video/poster_thanos.png" 
    },
    { 
      title: "Intro motion Marne et Gondoire", 
      category: "After Effects", 
      videoSrc: "assets/video/MAG.MP4",
      poster: "assets/video/poster_mag.png" 
    },
    { 
      title: "Motion sphère en rotation", 
      category: "After Effects", 
      videoSrc: "assets/video/rotation.MP4",
      poster: "assets/video/poster_rotation.png" 
    }
  ];

  const photoAlbums: PhotoAlbum[] = [
    {
      title: "Potit chat",
      category: "Photographie (Coucou Gaëlle !)",
      cover: "assets/photos/potit_chat/chat.jpg",
      images: [
        "assets/photos/potit_chat/chat.jpg", "assets/photos/potit_chat/chat2.jpg",
        "assets/photos/potit_chat/chat3.jpg", "assets/photos/potit_chat/chat4.jpg",
        "assets/photos/potit_chat/chat5.png", "assets/photos/potit_chat/chat6.jpg",
        "assets/photos/potit_chat/chat7.png", "assets/photos/potit_chat/chat8.png",
      ]
    },
    {
      title: "Ciel",
      category: "Photographie",
      cover: "assets/photos/ciel/avion.jpg",
      images: [
        "assets/photos/ciel/jour.jpg", "assets/photos/ciel/jour1.jpg",
        "assets/photos/ciel/jour2.jpg", "assets/photos/ciel/jour3.jpg",
        "assets/photos/ciel/jour5.jpg", "assets/photos/ciel/avion.jpg",
      ]
    },
    {
      title: "Asie 2024",
      category: "Photographie",
      cover: "assets/photos/asie_2024/asie10.jpg",
      images: [
        "assets/photos/asie_2024/asie.jpg", "assets/photos/asie_2024/asie1.jpg",
        "assets/photos/asie_2024/asie2.jpg", "assets/photos/asie_2024/asie3.jpg",
        "assets/photos/asie_2024/asie4.jpg", "assets/photos/asie_2024/asie5.jpg",
        "assets/photos/asie_2024/asie6.jpg", "assets/photos/asie_2024/asie7.jpg",
        "assets/photos/asie_2024/asie8.jpg", "assets/photos/asie_2024/asie9.jpg",
        "assets/photos/asie_2024/asie10.jpg",
      ]
    },
    {
      title: "Paris 2025",
      category: "Photographie",
      cover: "assets/photos/paris_2025/paris10.png",
      images: [
        "assets/photos/paris_2025/paris.png", "assets/photos/paris_2025/paris1.png",
        "assets/photos/paris_2025/paris2.png", "assets/photos/paris_2025/paris3.png",
        "assets/photos/paris_2025/paris4.png", "assets/photos/paris_2025/paris5.png",
        "assets/photos/paris_2025/paris6.png", "assets/photos/paris_2025/paris7.png",
        "assets/photos/paris_2025/paris8.png", "assets/photos/paris_2025/paris9.png",
        "assets/photos/paris_2025/paris10.png", "assets/photos/paris_2025/paris11.png",
      ]
    }
  ];

  const drawings: Drawing[] = [
    { title: "Pose 1", category: "dessin d'anatomie", imageSrc: "assets/dessins/dessin.jpeg" },
    { title: "Pose 2", category: "dessin d'anatomie", imageSrc: "assets/dessins/dessin1.jpeg" },
    { title: "Pose 3", category: "dessin d'anatomie", imageSrc: "assets/dessins/dessin5.jpeg" },
    { title: "Bras 1", category: "dessin d'anatomie", imageSrc: "assets/dessins/dessin3.jpeg" },
    { title: "Représentation du voyage", category: "illustration imaginative", imageSrc: "assets/dessins/dessin2.jpeg" },
    { title: "Représentation de l'insomnie", category: "illustration imaginative", imageSrc: "assets/dessins/dessin4.jpeg" }
  ];

  const nextImage = () => {
    if (activeAlbum) setCurrentImageIndex((prev) => (prev + 1) % activeAlbum.images.length);
  };

  const prevImage = () => {
    if (activeAlbum) setCurrentImageIndex((prev) => (prev - 1 + activeAlbum.images.length) % activeAlbum.images.length);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="others" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* En-tête */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }} 
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-violet-100 text-violet-600 rounded-full text-[10px] font-black uppercase tracking-widest">
              Laboratoire
            </span>
            <span className="text-slate-400 text-sm font-medium">Tests & Expérimentations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-tight">
            Projets <br /> <span className="text-violet-600">Personnels</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Espace dédié à l'apprentissage autodidacte, aux tests de Motion Design et à la photographie.
          </p>
        </motion.div>
        
        {/* 1. SECTION AFTER EFFECTS */}
        <div className="mb-20">
          <motion.h3 className="text-sm font-black text-indigo-500 uppercase tracking-[0.2em] mb-8 border-l-4 border-indigo-500 pl-4">
            Post-Production (After Effects)
          </motion.h3>
          
          <div className="relative">
            <button 
              onClick={() => handleScroll(aeScrollRef, 'left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-slate-200 rounded-full hidden md:flex items-center justify-center shadow-lg cursor-pointer transition-all hover:bg-violet-600 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              aria-label="Défiler à gauche"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>

            <motion.div 
              ref={aeScrollRef}
              className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide scroll-smooth outline-none"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {aeProjects.map(proj => (
                <motion.button 
                  key={proj.title} 
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setActiveVideo(proj)} 
                  className="min-w-[320px] md:min-w-100 bg-slate-50 border border-slate-200 rounded-4xl overflow-hidden snap-center group cursor-pointer hover:border-violet-500 hover:shadow-lg transition-all text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                >
                  <div className="relative aspect-video bg-slate-900 overflow-hidden">
                    <img src={proj.poster} alt={proj.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                    <div className="absolute inset-0 bg-violet-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-xl">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-1"><path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg tracking-tight group-hover:text-violet-600 transition-colors">{proj.title}</h4>
                    <p className="text-[10px] font-black uppercase text-slate-400 mt-2 tracking-widest">{proj.category}</p>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            <button 
              onClick={() => handleScroll(aeScrollRef, 'right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-slate-200 rounded-full hidden md:flex items-center justify-center shadow-lg cursor-pointer transition-all hover:bg-violet-600 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              aria-label="Défiler à droite"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
          </div>
        </div>

        {/* 2. SECTION PHOTOGRAPHIE */}
        <div className="mb-16">
          <motion.h3 className="text-sm font-black text-emerald-500 uppercase tracking-[0.2em] mb-8 border-l-4 border-emerald-500 pl-4">
            Photographie (Albums)
          </motion.h3>

          <div className="relative">
            <button 
              onClick={() => handleScroll(photoScrollRef, 'left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-slate-200 rounded-full hidden md:flex items-center justify-center shadow-lg cursor-pointer transition-all hover:bg-emerald-500 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label="Défiler à gauche"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>

            <motion.div 
              ref={photoScrollRef}
              className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide scroll-smooth outline-none"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {photoAlbums.map(album => (
                <motion.button 
                  key={album.title} 
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => { setActiveAlbum(album); setCurrentImageIndex(0); }} 
                  className="min-w-70 bg-slate-50 border border-slate-200 rounded-4xl overflow-hidden snap-center group cursor-pointer hover:border-emerald-500 hover:shadow-lg transition-all text-left outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <div className="relative aspect-4/5 bg-slate-200 overflow-hidden">
                    <img src={album.cover} alt={album.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold">
                      {album.images.length} photos
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg tracking-tight group-hover:text-emerald-600 transition-colors">{album.title}</h4>
                    <p className="text-[10px] font-black uppercase text-slate-400 mt-2 tracking-widest">{album.category}</p>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            <button 
              onClick={() => handleScroll(photoScrollRef, 'right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-slate-200 rounded-full hidden md:flex items-center justify-center shadow-lg cursor-pointer transition-all hover:bg-emerald-500 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label="Défiler à droite"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
          </div>
        </div>

        {/* 3. SECTION DESSINS */}
        <div className="mb-20">
          <motion.h3 className="text-sm font-black text-rose-500 uppercase tracking-[0.2em] mb-8 border-l-4 border-rose-500 pl-4">
            Dessins & Illustrations
          </motion.h3>

          <div className="relative">
            <button 
              onClick={() => handleScroll(drawScrollRef, 'left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-slate-200 rounded-full hidden md:flex items-center justify-center shadow-lg cursor-pointer transition-all hover:bg-rose-500 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              aria-label="Défiler à gauche"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>

            <motion.div 
              ref={drawScrollRef}
              className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide scroll-smooth outline-none"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {drawings.map(draw => (
                <motion.button 
                  key={draw.title} 
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setActiveDrawing(draw)} 
                  className="min-w-70 bg-slate-50 border border-slate-200 rounded-4xl overflow-hidden snap-center group cursor-pointer hover:border-rose-500 hover:shadow-lg transition-all text-left outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                >
                  <div className="relative aspect-square bg-slate-200 overflow-hidden">
                    <img src={draw.imageSrc} alt={draw.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-rose-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" /></svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg tracking-tight group-hover:text-rose-600 transition-colors">{draw.title}</h4>
                    <p className="text-[10px] font-black uppercase text-slate-400 mt-2 tracking-widest">{draw.category}</p>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            <button 
              onClick={() => handleScroll(drawScrollRef, 'right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-slate-200 rounded-full hidden md:flex items-center justify-center shadow-lg cursor-pointer transition-all hover:bg-rose-500 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              aria-label="Défiler à droite"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
          </div>
        </div>

        {/* MODALES D'AFFICHAGE */}
        <AnimatePresence>
          {/* Vidéo */}
          {activeVideo && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-md" 
              onClick={() => setActiveVideo(null)}
              role="dialog" aria-modal="true"
            >
              <motion.div ref={videoModalRef} initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="max-w-4xl w-full relative" onClick={e => e.stopPropagation()}>
                <button autoFocus onClick={() => setActiveVideo(null)} className="absolute -top-12 right-0 text-white font-bold text-xl hover:text-indigo-400 outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 p-1">Fermer ✕</button>
                <div className="bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
                  <video controls autoPlay className="w-full h-full" src={activeVideo.videoSrc} poster={activeVideo.poster} />
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Photo */}
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

          {/* Dessin */}
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
        </AnimatePresence>
      </div>
    </section>
  );
};