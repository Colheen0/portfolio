import { motion } from "framer-motion";
import type { Variants } from "framer-motion"; // Import type obligatoire pour ta configuration
import { NavHashLink } from 'react-router-hash-link';

export const Departure = () => {
  // Variantes pour le contenu interne (texte et bouton)
  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Easing fluide
      },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Effet de cascade interne
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section id="departure" className="py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Conteneur principal avec apparition au scroll */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl"
        >
          {/* Animation du contenu interne */}
          <motion.div 
            className="relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={contentVariants} className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-indigo-500 rounded-full text-[10px] font-bold uppercase tracking-wider">
                Projet Passion
              </span>
              <span className="text-slate-400 text-xs font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                En développement
              </span>
            </motion.div>
            
            <motion.h2 
              variants={contentVariants}
              className="text-5xl md:text-8xl font-black mb-6 tracking-tighter italic"
            >
              DEPARTURE
            </motion.h2>
            
            <motion.p 
              variants={contentVariants}
              className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed"
            >
              Un univers narratif où la fiction rencontre l'interactivité. Né d'une plume passionnée, 
              illustré en collaboration et propulsé par un Visual Novel sous <strong>Ren'Py</strong>. 
            </motion.p>
            
            <motion.div variants={contentVariants} className="flex flex-wrap gap-6 items-center">
              <NavHashLink 
                smooth
                to="/departure#home" 
                className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-indigo-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg shadow-indigo-500/20 text-center"
              >
                Explorer l'univers
              </NavHashLink>

              <div className="text-sm text-slate-400 font-medium border-l border-slate-700 pl-6">
                Concept, Écriture <br />& Visual Novel
              </div>
            </motion.div>
          </motion.div>
          
          {/* Décoration en arrière-plan avec animation de flottement */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -right-20 -bottom-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};