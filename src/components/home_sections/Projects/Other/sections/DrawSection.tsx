import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { drawings } from '../OtherData';
import type { Drawing } from '../OtherTypes';

interface Props {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  handleScroll: (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => void;
  setActiveDrawing: (draw: Drawing) => void;
  containerVariants: Variants;
  itemVariants: Variants;
}

export const DrawingsSection = ({ scrollRef, handleScroll, setActiveDrawing, containerVariants, itemVariants }: Props) => (
  <div className="mb-20">
    <motion.h3 className="text-sm font-black text-rose-500 uppercase tracking-[0.2em] mb-8 border-l-4 border-rose-500 pl-4">
      Dessins & Illustrations
    </motion.h3>
    <p className="text-slate-500 text-sm mb-8 max-w-2xl leading-relaxed">
     Je teste pleins de chose et le dessins en fait partie. J'aimerais transcrire ce que j'imagine sur papier mais c'est assez compliqué. Donc pour l'instant je reproduis ce que je vois, voici quelques croquis.
    </p>
    <div className="relative">
      <button onClick={() => handleScroll(scrollRef, 'left')} className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-slate-200 rounded-full hidden md:flex items-center justify-center shadow-lg cursor-pointer transition-all hover:bg-rose-500 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-rose-500" aria-label="Défiler à gauche">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
      </button>
      <motion.div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide scroll-smooth outline-none" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
        {drawings.map(draw => (
          <motion.button key={draw.title} variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} onClick={() => setActiveDrawing(draw)} className="min-w-70 bg-slate-50 border border-slate-200 rounded-4xl overflow-hidden snap-center group cursor-pointer hover:border-rose-500 hover:shadow-lg transition-all text-left outline-none focus-visible:ring-2 focus-visible:ring-rose-500">
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
      <button onClick={() => handleScroll(scrollRef, 'right')} className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-slate-200 rounded-full hidden md:flex items-center justify-center shadow-lg cursor-pointer transition-all hover:bg-rose-500 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-rose-500" aria-label="Défiler à droite">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
      </button>
    </div>
  </div>
);