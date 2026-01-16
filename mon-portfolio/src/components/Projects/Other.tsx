import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion'; // Respect de la règle verbatimModuleSyntax

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

export const Other = () => {
  const [activeVideo, setActiveVideo] = useState<PersonalProject | null>(null);
  const [activeAlbum, setActiveAlbum] = useState<PhotoAlbum | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      videoSrc: "/assets/video/MAG.MP4",
      poster: "/assets/video/poster_mag.png" 
    },
    { 
      title: "Motion sphère en rotation", 
      category: "After Effects", 
      videoSrc: "/assets/video/rotation.MP4",
      poster: "/assets/video/poster_rotation.png" 
    }
  ];

  const photoAlbums: PhotoAlbum[] = [
    {
      title: "Potit chat",
      category: "Photographie (Coucou Gaëlle !)",
      cover: "/assets/photos/potit_chat/chat.jpg",
      images: [
        "/assets/photos/potit_chat/chat.jpg",
        "/assets/photos/potit_chat/chat2.jpg",
        "/assets/photos/potit_chat/chat3.jpg",
        "/assets/photos/potit_chat/chat4.JPG",
        "/assets/photos/potit_chat/chat5.png",
        "/assets/photos/potit_chat/chat6.JPG",
        "/assets/photos/potit_chat/chat7.png",
        "/assets/photos/potit_chat/chat8.png",
      ]
    },
    {
      title: "Ciel",
      category: "Photographie",
      cover: "/assets/photos/ciel/avion.jpg",
      images: [
        "/assets/photos/ciel/jour.jpg",
        "/assets/photos/ciel/jour1.jpg",
        "/assets/photos/ciel/jour2.jpg",
        "/assets/photos/ciel/jour3.jpg",
        "/assets/photos/ciel/jour5.jpg",
        "/assets/photos/ciel/avion.jpg",
      ]
    },
    {
      title: "Asie 2024",
      category: "Photographie",
      cover: "/assets/photos/asie_2024/asie10.jpg",
      images: [
        "/assets/photos/asie_2024/asie.jpg",
        "/assets/photos/asie_2024/asie1.jpg",
        "/assets/photos/asie_2024/asie2.jpg",
        "/assets/photos/asie_2024/asie3.jpg",
        "/assets/photos/asie_2024/asie4.jpg",
        "/assets/photos/asie_2024/asie5.jpg",
        "/assets/photos/asie_2024/asie6.jpg",
        "/assets/photos/asie_2024/asie7.jpg",
        "/assets/photos/asie_2024/asie8.jpg",
        "/assets/photos/asie_2024/asie9.jpg",
        "/assets/photos/asie_2024/asie10.jpg",
      ]
    },
    {
      title: "Paris 2025",
      category: "Photographie",
      cover: "/assets/photos/paris_2025/paris10.png",
      images: [
        "/assets/photos/paris_2025/paris.png",
        "/assets/photos/paris_2025/paris1.png",
        "/assets/photos/paris_2025/paris2.png",
        "/assets/photos/paris_2025/paris3.png",
        "/assets/photos/paris_2025/paris4.png",
        "/assets/photos/paris_2025/paris5.png",
        "/assets/photos/paris_2025/paris6.png",
        "/assets/photos/paris_2025/paris7.png",
        "/assets/photos/paris_2025/paris8.png",
        "/assets/photos/paris_2025/paris9.png",
        "/assets/photos/paris_2025/paris10.png",
        "/assets/photos/paris_2025/paris11.png",
      ]
    }
  ];

  const nextImage = () => {
    if (activeAlbum) setCurrentImageIndex((prev) => (prev + 1) % activeAlbum.images.length);
  };

  const prevImage = () => {
    if (activeAlbum) setCurrentImageIndex((prev) => (prev - 1 + activeAlbum.images.length) % activeAlbum.images.length);
  };

  // Variantes d'animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="others" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* En-tête avec apparition au scroll */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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
        
        {/* Section After Effects animée */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-black text-indigo-500 uppercase tracking-[0.2em] mb-8 border-l-4 border-indigo-500 pl-4"
          >
            Post-Production (After Effects)
          </motion.h3>
          <motion.div 
            className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {aeProjects.map(proj => (
              <motion.div 
                key={proj.title} 
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setActiveVideo(proj)} 
                className="min-w-[320px] md:min-w-100 bg-slate-50 border border-slate-200 rounded-4xl overflow-hidden snap-center group cursor-pointer hover:border-violet-500 hover:shadow-lg transition-all"
              >
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  <img src={proj.poster} alt={proj.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-violet-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform text-white shadow-xl">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-1"><path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" /></svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg tracking-tight group-hover:text-violet-600 transition-colors">{proj.title}</h4>
                  <p className="text-[10px] font-black uppercase text-slate-400 mt-2 tracking-widest">{proj.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Section Photographie animée */}
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-black text-emerald-500 uppercase tracking-[0.2em] mb-8 border-l-4 border-emerald-500 pl-4"
          >
            Photographie (Albums)
          </motion.h3>
          <motion.div 
            className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {photoAlbums.map(album => (
              <motion.div 
                key={album.title} 
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => { setActiveAlbum(album); setCurrentImageIndex(0); }} 
                className="min-w-70 bg-slate-50 border border-slate-200 rounded-4xl overflow-hidden snap-center group cursor-pointer hover:border-emerald-500 hover:shadow-lg transition-all"
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
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Modales avec AnimatePresence */}
        <AnimatePresence>
          {/* Modale Vidéo */}
          {activeVideo && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-md" 
              onClick={() => setActiveVideo(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                className="max-w-4xl w-full relative" onClick={e => e.stopPropagation()}
              >
                <button onClick={() => setActiveVideo(null)} className="absolute -top-12 right-0 text-white font-bold text-xl hover:text-indigo-400 transition-colors">Fermer ✕</button>
                <div className="bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
                  <video controls autoPlay className="w-full h-full" src={activeVideo.videoSrc} poster={activeVideo.poster}
                    onTimeUpdate={(e) => {
                      const video = e.currentTarget;
                      if (activeVideo.title === "Effet de disparition de poussière" && video.currentTime >= 6) {
                        video.pause(); video.currentTime = 0;
                      }
                    }}
                  />
                </div>
                <div className="mt-6 text-white text-center">
                  <h3 className="text-2xl font-black tracking-tight">{activeVideo.title}</h3>
                  <p className="text-slate-400 text-sm uppercase font-bold mt-1 tracking-widest">{activeVideo.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Modale Lecteur Photo */}
          {activeAlbum && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-md" 
              onClick={() => setActiveAlbum(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                className="max-w-4xl w-full h-[80vh] flex flex-col relative" onClick={e => e.stopPropagation()}
              >
                <button onClick={() => setActiveAlbum(null)} className="absolute -top-12 right-0 text-white font-bold text-xl hover:text-emerald-400 transition-colors">Fermer ✕</button>
                
                <div className="flex-1 bg-black/20 rounded-3xl overflow-hidden relative group/nav shadow-2xl border border-white/10">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      src={activeAlbum.images[currentImageIndex]} 
                      alt={`Photo ${currentImageIndex + 1}`} 
                      className="w-full h-full object-contain"
                    />
                  </AnimatePresence>
                  
                  <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover/nav:opacity-100">←</button>
                  <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover/nav:opacity-100">→</button>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold">
                    {currentImageIndex + 1} / {activeAlbum.images.length}
                  </div>
                </div>

                <div className="mt-6 text-white text-center">
                  <h3 className="text-2xl font-black tracking-tight">{activeAlbum.title}</h3>
                  <p className="text-slate-400 text-sm uppercase font-bold mt-1 tracking-widest">{activeAlbum.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};