import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export const Moi = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], 
      },
    },
  };

  return (
    <section id="a-propos" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        
        {/* Colonne Photo - Animation latérale avec effet de zoom doux */}
        <motion.div 
          className="md:col-span-4"
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-2 border-slate-100 max-w-sm mx-auto group">
            <img 
              src="./assets/img/moi2.jpeg" // Correction du chemin relatif standard
              alt="Portrait Couleur"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
        
        {/* Colonne Identité & Parcours */}
        <motion.div 
          className="md:col-span-8 grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Bloc Identité */}
          <motion.div variants={itemVariants}>
            <h2 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.3em] mb-4 text-center md:text-left">Mon Profil</h2>
            <p className="text-3xl font-black text-slate-900 tracking-tighter leading-tight text-center md:text-left">
              COLHEEN <br /> NKODIA-DIABATÉ 
            </p>
            <div className="mt-6 space-y-3">
              <p className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <span className="text-lg">📍</span> Basé en Île-de-France
              </p>
              <p className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <span className="text-lg">🎂</span> 20 ans (2005)
              </p>
              <p className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <span className="text-lg">🌍</span> Bi-national Français & Ivoirien
              </p>
            </div>
          </motion.div>

          {/* Bloc Bio & Parcours */}
          <motion.div variants={itemVariants}>
             <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium italic border-l-2 border-indigo-100 pl-4">
               Moi c'est Colheen je suis actuellement en 3ème année de BUT <strong>MMI</strong> (Metiers du multimédia et de l'internet) j'aime tout ce qui touche à la création notamment <strong>audiovisuel</strong> et <strong>l'écriture</strong>. 
               Je cherche un emploie dans l'audiovisuel.
            </p>
            
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-8">Mon Parcours</h3>
            
            <div className="space-y-8 border-l border-slate-100 pl-8 relative">
              {/* Élément de parcours 1 */}
              <div className="relative group">
                <div className="absolute -left-9.25 top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white shadow-sm group-hover:scale-125 transition-transform"></div>
                <span className="text-xs font-bold text-indigo-600">2023 - Présent</span>
                <h4 className="text-lg font-bold text-slate-900">BUT MMI</h4>
                <p className="text-sm text-slate-500 mt-1 italic">Métiers du Multimédia et de l'Internet.</p>
              </div>

              {/* Élément de parcours 2 */}
              <div className="relative group">
                <div className="absolute -left-9.25 top-1 w-4 h-4 rounded-full bg-slate-200 border-4 border-white group-hover:bg-indigo-200 transition-colors"></div>
                <span className="text-xs font-bold text-slate-400">2023</span>
                <h4 className="text-lg font-bold text-slate-900">Baccalauréat STMG</h4>
                <p className="text-sm text-slate-500 mt-1 italic">Spécialité Gestion Finance.</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};