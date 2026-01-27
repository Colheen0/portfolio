import { motion } from 'framer-motion';
import { poems } from '../OtherData';
import type { Poem } from '../OtherTypes';
import type { Variants } from 'framer-motion';

interface Props {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  handleScroll: (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => void;
  setActivePoem: (poem: Poem) => void;
  containerVariants: Variants;
  itemVariants: Variants;
}

export const PoemsSection = ({ scrollRef, handleScroll, setActivePoem, containerVariants, itemVariants }: Props) => (
  <div className="mb-20">
    <motion.h3 className="text-sm font-black text-amber-500 uppercase tracking-[0.2em] mb-4 border-l-4 border-amber-500 pl-4">
      Plume & Poésie
    </motion.h3>
    <p className="text-slate-500 text-sm mb-8 max-w-2xl leading-relaxed">
      Parce que la création ne s'arrête pas aux images, cette section regroupe mes écrits personnels. 
      C'est ici que je laisse les mots prendre vie pour explorer des émotions plus abstraites.
    </p>
    <div className="relative">
      <button onClick={() => handleScroll(scrollRef, 'left')} className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-slate-200 rounded-full hidden md:flex items-center justify-center shadow-lg cursor-pointer transition-all hover:bg-amber-500 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-amber-500" aria-label="Défiler à gauche">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
      </button>
      <motion.div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide scroll-smooth outline-none" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
        {poems.map(poem => (
          <motion.button key={poem.title} variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} onClick={() => setActivePoem(poem)} className="min-w-70 bg-amber-50/30 border border-amber-100 rounded-4xl p-8 snap-center group cursor-pointer hover:border-amber-500 hover:bg-amber-50 hover:shadow-lg transition-all text-left outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
            <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mb-6 text-amber-600 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
            </div>
            <h4 className="font-bold text-lg tracking-tight group-hover:text-amber-600 transition-colors">{poem.title}</h4>
            <p className="text-[10px] font-black uppercase text-amber-400 mt-2 tracking-widest">{poem.category}</p>
          </motion.button>
        ))}
      </motion.div>
      <button onClick={() => handleScroll(scrollRef, 'right')} className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-slate-200 rounded-full hidden md:flex items-center justify-center shadow-lg cursor-pointer transition-all hover:bg-amber-500 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-amber-500" aria-label="Défiler à droite">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
      </button>
    </div>
  </div>
);