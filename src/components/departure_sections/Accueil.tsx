import { ScrollReveal } from '../utils/ScrollReveal'; // Chemin mis à jour selon ton archi
import { motion } from 'framer-motion';

export const Accueil = () => {
  return (
    <section id='home' className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* 1. L'IMAGE DE FOND ET OVERLAY CORRIGÉS */}
      <div className="absolute inset-0 z-0">
        <img 
        src="assets/departure_img/departure_bg.jpg" 
        alt="Ambiance Departure" 
        className="w-full h-full object-cover object-[center_23%] opacity-50" 
        />
        {/* Overlay ajusté pour plus de clarté en haut */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent" />
      </div>

      {/* 2. CONTENU TEXTUEL CENTRAL */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="flex flex-col items-center">
            {/* Badge supérieur */}
            <span className="px-4 py-1.5 bg-indigo-500/20 backdrop-blur-md border border-white/10 text-indigo-300 font-black uppercase tracking-[0.4em] text-[10px] rounded-full mb-8">
              L'Univers Original
            </span>

            {/* Titre Giga */}
            <h1 className="text-7xl md:text-[10rem] font-black text-white mb-8 tracking-tighter italic uppercase leading-none drop-shadow-2xl">
              Departure
            </h1>
            
            {/* Phrase d'accroche */}
            <div className="max-w-2xl">
              <p className="text-xl md:text-3xl text-slate-200 leading-relaxed font-light italic border-x-2 border-indigo-500/50 px-12">
                "Ici, tu mets une phrase d'accroche forte qui définit l'ambiance de Departure."
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* 3. APPEL AU SCROLL CLIQUABLE */}
      <motion.a 
        href="/portfolio/#/departure#synopsis" 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        whileHover={{ scale: 1.1 }} 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 cursor-pointer group"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-indigo-400 transition-colors opacity-60 group-hover:opacity-100">
            Explorer le projet
          </span>
          
          {/* Ligne animée (Rebond) */}
          <motion.div 
            animate={{ y: [0, 12, 0] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-16 bg-linear-to-b from-indigo-500 via-indigo-500/50 to-transparent" 
          />
        </div>
      </motion.a>

    </section>
  );
};