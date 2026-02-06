import { useState, useRef, useEffect } from 'react'; // Ajout de useEffect
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null); // Référence pour le focus trap

  // 1. Bloquer le scroll du body quand la modale est ouverte
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  // 2. Gestion du Focus Trap (Navigation Tab restreinte à la modale)
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (!modalRef.current) return;

      // Liste des éléments focusables à l'intérieur de la modale
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) { // Shift + Tab (Navigation arrière)
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else { // Tab (Navigation avant)
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  // Fonction de défilement sécurisée
  const scroll = (direction: 'left' | 'right') => {
    const element = scrollRef.current;
    if (element) {
      const scrollAmount = 450;
      element.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  const projects: Project[] = [
    {
      title: "Site de réservation : RésaKingdom",
      description: "Projet de fin de première année.",
      fullContent: "Une plateforme complète de réservation développée pour apprendre la gestion de base de données et les interactions utilisateurs complexes (réalisé en première année).",
      tags: ['Javascript', 'CSS', 'HTML'],
      image: "assets/img/resakingdom.jpg",
      link: "https://nkodiadiabate.butmmi.o2switch.site/resaweb/index.php"
    },
    {
      title: "Portrait Chinois",
      description: "Expérience interactive en JS.",
      fullContent: "Une expérience interactive qui révèle ma personnalité à travers des animations fluides et un code créatif en JS (réalisé en première année).",
      tags: ['Javascript', 'CSS Anim'],
      image: "assets/img/portrait-chinois.jpg",
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
      description: "Cadrage et montage.",
      fullContent: "Réalisation d'un tournage en groupe où chacun avait un rôle différent moi j'était le cadreur puis j'ai fait le montage (réalisé en première année).",
      tags: ['Premiere pro', 'cadrage'],
      image: "assets/img/interview.jpg",
      link: "https://youtu.be/dVMXyTlskA8"
    },
    {
      title: "Blog PHP",
      description: "Développement d'un blog en PHP.",
      fullContent: "Un blog simple, avec une base de données MySQL et un système d'authentification (réalisé en deuxième année).",
      tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
      image: "assets/img/blog.png",
      link: "https://blog.nkodiadiabate.butmmi.o2switch.site/blog/login.php"
    },
    {
      title: "PersonaBattle jeu de combat en php",
      description: "Jeu de combat développé en PHP.",
      fullContent: "Un jeu de combat en PHP avec une base de données MySQL (réalisé en deuxième année).",
      tags: ['PHP', 'MySQL'],
      image: "assets/img/personabattle.png",
      link: "https://personabattle.nkodiadiabate.butmmi.o2switch.site/PersonaBattle/interface/index.php?action=accueil"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="scholar" className="py-24 px-6 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* En-tête */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} 
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-[10px] font-black uppercase tracking-widest">
              Formation MMI
            </span>
            <span className="text-slate-400 text-sm font-medium">Projets Académiques</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-tight">
            Travaux <br /> <span className="text-sky-500">Scolaires</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Sélection de projets réalisés durant mon cursus en Métiers du Multimédia et de l'Internet.
          </p>
        </motion.div>

        {/* Liste avec défilement */}
        <div className="relative">
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-slate-200 rounded-full hidden md:flex items-center justify-center shadow-lg cursor-pointer transition-all hover:bg-sky-500 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label="Défiler à gauche"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>

          <motion.div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide outline-none scroll-smooth"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((p) => (
              <motion.button 
                key={p.title}
                variants={itemVariants}
                onClick={() => setSelectedProject(p)}
                whileHover={{ y: -8, scale: 1.02 }}
                className="min-w-[320px] md:min-w-112.5 snap-center group cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-3xl"
                aria-label={`Voir les détails de ${p.title}`}
              >
                <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 transition-all group-hover:shadow-xl group-hover:border-sky-500">
                  <div className="aspect-video bg-slate-200 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg group-hover:text-sky-600 transition-colors">{p.title}</h4>
                    <p className="text-sm text-slate-500 mt-2">{p.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-slate-200 rounded-full hidden md:flex items-center justify-center shadow-lg cursor-pointer transition-all hover:bg-sky-500 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label="Défiler à droite"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </div>

        {/* Modale avec Focus Trap et Scroll Lock */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/80 backdrop-blur-sm" 
              onClick={() => setSelectedProject(null)}
              role="dialog" aria-modal="true"
            >
              <motion.div 
                ref={modalRef} // Attachement de la ref pour le focus trap
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-[2.5rem] max-w-2xl w-full p-10 relative shadow-2xl" 
                onClick={e => e.stopPropagation()}
              >
                <button 
                  autoFocus 
                  onClick={() => setSelectedProject(null)} 
                  className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 font-bold text-2xl transition-colors outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1"
                  aria-label="Fermer la fenêtre"
                >
                  ✕
                </button>
                
                <h3 className="text-4xl font-black mb-6 tracking-tighter">{selectedProject.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">{selectedProject.fullContent}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase rounded-full">{tag}</span>
                  ))}
                </div>

                <a 
                  href={selectedProject.link} target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-sky-600 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
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