import { useState, useRef, useEffect } from 'react'; // Ajout de useRef et useEffect
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface InspirationItem {
  name: string;
  image: string;
  summary: string;
  link?: string;
}

interface Passion {
  title: string;
  emoji: string;
  desc: string;
  items: string[]; 
  details: InspirationItem[]; 
  anecdote: string;
  color: string;
}

export const Passions = () => {
  const [selectedPassion, setSelectedPassion] = useState<Passion | null>(null);
  const modalRef = useRef<HTMLDivElement>(null); // Ref pour le Focus Trap

  // 1. Bloquer le scroll en arrière-plan
  useEffect(() => {
    if (selectedPassion) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedPassion]);

  // 2. Gestion du Focus Trap (Navigation Tab enfermée)
  useEffect(() => {
    if (!selectedPassion) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (!modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) { // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else { // Tab
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPassion]);

  const passions: Passion[] = [
    {
      title: "Lecture",
      emoji: "📚",
      desc: "Les récits qui ont forgé mon imaginaire et mon goût pour l'aventure.",
      items: ["Percy Jackson", "Les Héros de l'Olympe", "Contes de Fées"],
      details: [
        { 
          name: "Percy Jackson & les Olympiens", 
          image: "./assets/passions/percy_jackson.webp",
          summary: "Je suis un amoureux de la mythologie grecque ! Alors une série de livre qui l'adapte de nos jours ? C'était fait pour moi ! J'ai vraiment adoré cette série dans son intégralité même si je l'ai découvert à l'âge adulte j'ai replongé en enfance et j'y ai trouvé des choses qui m'ont profondément marqué."
        },
        { 
          name: "Les Héros de l'Olympe", 
          image: "./assets/passions/les-heros-de-lolympe.webp",
          summary: "Plus de personnage, plus de lore, plus de mythologie, c'est une super suite que j'ai lu directement après avoir finis les tomes de percy jackson et ça à super bien marché sur moi j'ai retrouvé des personnages et j'en ai découvert des nouveaux, vraiment merci Rick Riordan."
        },
        { 
          name: "Contes de Fées (Stephen King)", 
          image: "./assets/passions/king-stephen-conte-de-fees.webp",
          summary: "Mon tout premier livre du maitre Stephen King. C'est son titre qui m'a intrigué, Stephen King le maître de l'horreur qui écrit un conte de fée ? C'était bizarre et honnêtement le voyage ne m'a pas du tout décu j'ai adoré, c'est très touchant comme récit et ça sort un peu de l'horreur cosmique des classiques de King et c'est pas plus mal."
        }
      ],
      anecdote: "Je me suis mis à lire des livres très tardivement en grande partie pour m'aider dans l'écriture de Departure et je ne m'attendais pas du tout à ce que j'ai trouvé, c'était comme découvrir un nouveau monde et ça m'a encore plus motiver à écrire Departure.",
      color: "text-emerald-600"
    },
    {
      title: "Musique",
      emoji: "🎵",
      desc: "Ma bande-son quotidienne, essentielle pour me concentrer et créer.",
      items: ["AJR", "Megatera Zero", "Lord Huron"],
      details: [
        { 
          name: "AJR", 
          image: "./assets/passions/AJR.webp",
          summary: "Je les ai découvert avec le film Soul de disney ils avaient fait une musique pour la bande annonce et la musique autant que le film m'ont marquer et depuis je les écoutes très régulièrement. Ils parlent de sujets qui touchent pas mal de gens dont moi et ça m'inspire beaucoup.",
          link: "https://spotify.com" 
        },
        { 
          name: "Megatera Zero", 
          image: "./assets/passions/Mega.webp",
          summary: "J'adore le japon et la musique en général et les groupes japonais sont vraiment à part : ça crie, ça hurle, ça parle de sujet simple mais avec tellement de puissance que ça en devient inspirant ça donne envie de chanter avec eux et Megatera Zero en est un parfait exemple.",
          link: "https://spotify.com"
        },
        { 
          name: "Lord Huron", 
          image: "./assets/passions/Lord_Huron.webp",
          summary: "Un peu comme AJR, Lord Huron c'est un artiste que j'ai découvert via une série (90% de mon spotify vient de série ou de tik tok) et là j'ai aussi été faciné comme pour AJR mais d'une manière différente : Lord Huron raconte des histoires dans ses musiques notamment l'album 'Lonesome dream' qui raconte une histoire d'amour et c'est super inspirant pour moi ça m'a montrer à quel points il y avait des manières différentes de raconter une histoire.",
          link: "https://spotify.com"
        }
      ],
      anecdote: "C'est par la musique que j'ai commencé à créer Departure, je réfléchie constamment et la musique ça fait exploser mon imagination et les différentes scènes de Departure me sont venues grace à ça.",
      color: "text-blue-600"
    },
    {
      title: "Films & Séries",
      emoji: "🎬",
      desc: "Des oeuvres qui m'ont marqué par leur mise en scène ou leur écriture.",
      items: ["Hook", "New Girl", "The Flash"],
      details: [
        { 
          name: "Hook", 
          image: "./assets/passions/hook.webp",
          summary: "C'est un film TYPIQUE de mon enfance, à l'époque où tout était simple et beau je me rappelle de la musique et des visuels qui sont juste époustouflants. je l'ai regardé il n'y a pas très longtemps par nostalgie et quelle claque ! Il y a une scène qui m'a rappeler mon enfance c'est le moment où Peter retourne au pays imaginaire et là c'était comme une explosion dans ma tête, mon imagination qui bouillionais comme avant, ça m'a fait chaud au coeur." 
        },
        { 
          name: "New Girl", 
          image: "./assets/passions/New_girl.webp",
          summary: "C'est ce genre de série qui ont fait le pont entre mon enfance et adolescence, quand j'était petit les blagues me faisait rire mais je ne comprenais pas, à l'adolescence ma vision à changé et j'ai pu vraiment comprendre et apprécier les dialogues et l'histoire, c'était pas seulement des situations comiques c'était des histoires sur des jeunes gens qui font face à la vie."
        },
        { 
          name: "The Flash", 
          image: "./assets/passions/flash.webp",
          summary: "Flash est mon super-héro préféré et c'est en grande partie grâce à cette série c'est par elle que mon amour pour le lore et les univers complexes est né, c'est sur cette série que j'ai fait mes premières histoires et que je me suis rendu compte que j'adorais écrire." 
        }
      ],
      anecdote: "Les contenue audiovisuel ont une place irremplacable dans ma vie notamment les films et les séries, créer des histoires aussi riches et créatives c'est vraiment un de mes buts dans la vie",
      color: "text-rose-600"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="passions" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest">
              Univers Créatif
            </span>
            <span className="text-slate-400 text-sm font-medium">Inspirations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-tight">
            Mes <br /> 
            <span className="text-emerald-600">Passions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Ici je vous partages les œuvres et les artistes qui nourrissent ma créativité au quotidien.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {passions.map((p) => (
            <motion.button // Changé en button pour le focus
              key={p.title} 
              variants={cardVariants}
              onClick={() => setSelectedPassion(p)}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 cursor-pointer hover:border-emerald-500 hover:bg-white hover:shadow-xl transition-all duration-300 text-left outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <span className="text-4xl mb-6 block group-hover:rotate-12 transition-transform">{p.emoji}</span>
              <h3 className="text-2xl font-black mb-4 tracking-tight">{p.title}</h3>
              <ul className="mb-6 space-y-2">
                {p.items.map(item => (
                  <li key={item} className="text-sm font-bold text-slate-400 group-hover:text-slate-600">• {item}</li>
                ))}
              </ul>
              <p className="text-emerald-500 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Explorer l'univers →
              </p>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedPassion && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md"
              onClick={() => setSelectedPassion(null)}
              role="dialog"
              aria-modal="true"
            >
              <motion.div 
                ref={modalRef} // Ajout de la ref
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-[3rem] max-w-4xl w-full max-h-[90vh] p-6 md:p-8 relative shadow-2xl flex flex-col overflow-y-auto scrollbar-hide"
                onClick={e => e.stopPropagation()}
              >
                <button 
                  autoFocus // Ajout de l'autofocus
                  onClick={() => setSelectedPassion(null)}
                  className="absolute top-6 right-8 text-slate-400 hover:text-slate-900 font-bold text-2xl z-30 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
                  aria-label="Fermer la fenêtre"
                >✕</button>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{selectedPassion.emoji}</span>
                  <h3 className="text-3xl font-black tracking-tighter italic uppercase">{selectedPassion.title}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {selectedPassion.details.map((detail, idx) => (
                    <motion.div 
                      key={detail.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="space-y-2 text-center"
                    >
                      <div className="relative aspect-4/5 rounded-2xl bg-slate-100 overflow-hidden shadow-md group/img">
                        <img 
                          src={detail.image} 
                          alt={detail.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110" 
                        />
                        <div className="absolute inset-0 bg-slate-900/90 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                          <p className="text-[10px] text-white leading-relaxed font-medium mb-3">{detail.summary}</p>
                          {detail.link && (
                            <a href={detail.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white text-slate-900 rounded-full text-[9px] font-black uppercase hover:bg-emerald-500 hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white">
                              Écouter 🎧
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">{detail.name}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-slate-50 p-5 rounded-3xl border border-slate-100"
                >
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-emerald-600 mb-2">L'Anecdote</h4>
                  <p className="text-slate-600 text-xs leading-relaxed italic">"{selectedPassion.anecdote}"</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};