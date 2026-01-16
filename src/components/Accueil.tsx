import { motion } from "framer-motion";
import type { Variants } from "framer-motion"; // Importation de type obligatoire

export const Accueil = () => {
  // Définition explicite des types Variants pour corriger l'erreur d'incompatibilité
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Délai entre l'apparition de chaque ligne de texte
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Effet de lissage professionnel
      },
    },
  };

  return (
    <section id="accueil" className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Colonne Texte animée en cascade */}
        <motion.div 
          className="order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] md:text-xs font-bold mb-8"
          >
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            Disponible pour de nouveaux défis
          </motion.div>

          {/* Titre */}
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-slate-900 leading-[0.9]"
          >
            CRÉER. <br />
            RACONTER. <br />
            CODER.
          </motion.h1>

          {/* Paragraphe */}
          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-xl text-slate-500 max-w-md leading-relaxed"
          >
            Créatif hybride spécialisé dans le <strong>montage</strong> et le <strong>storytelling</strong>. Auteur de l'univers <em>Departure</em>.
          </motion.p>
        </motion.div>

        {/* Colonne Image - Apparition latérale douce */}
        <motion.div 
          className="order-1 md:order-2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            {/* Halo lumineux en fond */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-slate-100 rounded-full blur-3xl -z-10"></div>
            
            {/* Conteneur de l'image */}
            <div className="relative rounded-[2.5rem] overflow-hidden rotate-2 border-4 border-white shadow-2xl w-64 md:w-[320px] lg:w-96 aspect-3/4">
              <img 
                src="assets/img/moi1.jpeg" 
                alt="Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};