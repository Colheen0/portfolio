import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { PersonalProject } from '../OtherTypes';
import { aeProjects } from '../OtherData';



interface Props {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  handleScroll: (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => void;
  setActiveVideo: (proj: PersonalProject) => void;
  containerVariants: Variants;
  itemVariants: Variants;
}

export const AfterEffectsSection = ({ scrollRef, handleScroll, setActiveVideo, containerVariants, itemVariants }: Props) => (
  <div className="mb-20">
    <motion.h3 className="text-sm font-black text-indigo-500 uppercase tracking-[0.2em] mb-8 border-l-4 border-indigo-500 pl-4">
      Post-Production (After Effects)
    </motion.h3>
    <div className="relative">
      <button onClick={() => handleScroll(scrollRef, 'left')} className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-slate-200 rounded-full hidden md:flex items-center justify-center shadow-lg cursor-pointer transition-all hover:bg-violet-600 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-violet-500" aria-label="Défiler à gauche">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
      </button>
      <motion.div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide scroll-smooth outline-none" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
        {aeProjects.map(proj => (
          <motion.button key={proj.title} variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} onClick={() => setActiveVideo(proj)} className="min-w-[320px] md:min-w-100 bg-slate-50 border border-slate-200 rounded-4xl overflow-hidden snap-center group cursor-pointer hover:border-violet-500 hover:shadow-lg transition-all text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500">
            <div className="relative aspect-video bg-slate-900 overflow-hidden">
              <img src={proj.poster} alt={proj.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-violet-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-1"><path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" /></svg>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-lg tracking-tight group-hover:text-violet-600 transition-colors">{proj.title}</h4>
              <p className="text-[10px] font-black uppercase text-slate-400 mt-2 tracking-widest">{proj.category}</p>
            </div>
          </motion.button>
        ))}
      </motion.div>
      <button onClick={() => handleScroll(scrollRef, 'right')} className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-slate-200 rounded-full hidden md:flex items-center justify-center shadow-lg cursor-pointer transition-all hover:bg-violet-600 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-violet-500" aria-label="Défiler à droite">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
      </button>
    </div>
  </div>
);