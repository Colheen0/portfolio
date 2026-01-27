import { motion } from 'framer-motion';
import { photoAlbums } from '../OtherData';
import type { PhotoAlbum } from '../OtherTypes';
import type { Variants } from 'framer-motion';

interface Props {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  handleScroll: (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => void;
  setActiveAlbum: (album: PhotoAlbum) => void;
  setCurrentImageIndex: (idx: number) => void;
  containerVariants: Variants;
  itemVariants: Variants;
}

export const PhotographySection = ({ scrollRef, handleScroll, setActiveAlbum, setCurrentImageIndex, containerVariants, itemVariants }: Props) => (
  <div className="mb-20">
    <motion.h3 className="text-sm font-black text-emerald-500 uppercase tracking-[0.2em] mb-8 border-l-4 border-emerald-500 pl-4">
      Photographie (Albums)
    </motion.h3>
    <div className="relative">
      <button onClick={() => handleScroll(scrollRef, 'left')} className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-slate-200 rounded-full hidden md:flex items-center justify-center shadow-lg cursor-pointer transition-all hover:bg-emerald-500 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-emerald-500" aria-label="Défiler à gauche">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
      </button>
      <motion.div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide scroll-smooth outline-none" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
        {photoAlbums.map(album => (
          <motion.button key={album.title} variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} onClick={() => { setActiveAlbum(album); setCurrentImageIndex(0); }} className="min-w-70 bg-slate-50 border border-slate-200 rounded-4xl overflow-hidden snap-center group cursor-pointer hover:border-emerald-500 hover:shadow-lg transition-all text-left outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
            <div className="relative aspect-4/5 bg-slate-200 overflow-hidden">
              <img src={album.cover} alt={album.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold">{album.images.length} photos</div>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-lg tracking-tight group-hover:text-emerald-600 transition-colors">{album.title}</h4>
              <p className="text-[10px] font-black uppercase text-slate-400 mt-2 tracking-widest">{album.category}</p>
            </div>
          </motion.button>
        ))}
      </motion.div>
      <button onClick={() => handleScroll(scrollRef, 'right')} className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-slate-200 rounded-full hidden md:flex items-center justify-center shadow-lg cursor-pointer transition-all hover:bg-emerald-500 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-emerald-500" aria-label="Défiler à droite">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
      </button>
    </div>
  </div>
);