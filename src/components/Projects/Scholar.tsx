import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion'; // Respect de la règle verbatimModuleSyntax

interface Project {
  title: string;
  description: string;
  fullContent: string;
  tags: string[];
  image: string; 
  link?: string;
}

export const Scholar = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Site de réservation : RésaKingdom",
      description: "Projet de fin de première année.",
      fullContent: "Une plateforme complète de réservation développée pour apprendre la gestion de base de données et les interactions utilisateurs complexes.",
      tags: ['Javascript', 'CSS', 'HTML'],
      image: "assets/img/resakingdom.png",
      link: "https://nkodiadiabate.butmmi.o2switch.site/resaweb/index.php"
    },
    {
      title: "Portrait Chinois",
      description: "Expérience interactive en JS.",
      fullContent: "Une expérience interactive qui révèle ma personnalité à travers des animations fluides et un code créatif en JS.",
      tags: ['Javascript', 'CSS Anim'],
      image: "assets/img/portrait-chinois.png",
      link: "https://colheen0.github.io/Sae-105-Portrait-Chinois/"
    },
    {
      title: "Les joueurs de cartes de Paul Cézannes",
      description: "Création audio",
      fullContent: "Écriture et montage de la version anglaise d'une petite histoire humoristique sur un tableau (réalisé en 2ème année).",
      tags: ['Premiere pro', 'Adobe Audition'],
      image: "assets/img/les_joueur_de_cartes.jpeg",
      link: "https://open.spotify.com/episode/13d453maolPWGeXy5QIn8c?si=KKpgfY9ORHmJBPbuMVk-Vw&t=0&pi=Gu6AQzNYSHySB"
    },
    {
      title: "Interview : Nicolas JEUNOT", 
      description: "Maquettage UI/UX.",
      fullContent: "Conception de l'interface utilisateur pour une application de gestion de tâches créatives.",
      tags: ['Premiere pro', 'cadrage'],
      image: "assets/img/interview.png",
      link: "https://youtu.be/dVMXyTlskA8"
    }
  ];

  // Variantes pour la cascade des cartes
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Easing fluide professionnel
      },
    },
  };

  return (
    <section id="scholar" className="py-24 px-6 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* En-tête de section animé */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-[10px] font-black uppercase tracking-widest">
              Formation MMI
            </span>
            <span className="text-slate-400 text-sm font-medium">Projets Académiques</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-tight">
            Travaux <br /> 
            <span className="text-sky-500">Scolaires</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Sélection de projets réalisés durant mon cursus en Métiers du Multimédia et de l'Internet, mettant en pratique le développement web et le design.
          </p>
        </motion.div>

        {/* Liste horizontale animée */}
        <motion.div 
          className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide outline-none"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((p) => (
            <motion.div 
              key={p.title}
              variants={itemVariants}
              onClick={() => setSelectedProject(p)}
              whileHover={{ y: -8, scale: 1.02 }} // Interaction au survol
              className="min-w-[320px] md:min-w-112.5 snap-center cursor-pointer group"
            >
              <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 transition-all group-hover:shadow-xl group-hover:border-indigo-500">
                <div className="aspect-video bg-slate-200 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg group-hover:text-indigo-600 transition-colors">{p.title}</h4>
                  <p className="text-sm text-slate-500 mt-2">{p.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modale Scholar avec AnimatePresence */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/80 backdrop-blur-sm" 
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-[2.5rem] max-w-2xl w-full p-10 relative shadow-2xl" 
                onClick={e => e.stopPropagation()}
              >
                <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 font-bold text-2xl transition-colors">✕</button>
                <h3 className="text-4xl font-black mb-6 tracking-tighter">{selectedProject.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">{selectedProject.fullContent}</p>
                
                {/* Badge tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-600 transition-colors"
                >
                  Voir le projet
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};