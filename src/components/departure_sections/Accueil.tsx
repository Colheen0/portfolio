import { ScrollReveal } from '../utils/ScrollReveal';

export const Accueil = () => {
  const personnages = [
    {
      nom: "Nom du Héros",
      role: "Protagoniste",
      description: "Une brève description de son caractère et de son importance dans l'histoire.",
      image: "/assets/img/characters/hero.jpg"
    },
    {
      nom: "Nom du Rival",
      role: "Antagoniste",
      description: "Ce qui le pousse à s'opposer au héros dans cet univers.",
      image: "/assets/img/characters/rival.jpg"
    }
  ];

  return (
    <main id='home' className="pt-32 pb-24 bg-slate-900 text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Titre & Synopsis */}
        <ScrollReveal>
          <div className="mb-24">
            <span className="text-indigo-400 font-black uppercase tracking-[0.3em] text-xs">L'Univers</span>
            <h1 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter italic uppercase">
              Departure
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <p className="text-2xl text-slate-300 leading-relaxed font-light italic border-l-4 border-indigo-500 pl-8">
                "Ici, tu mets une phrase d'accroche forte qui définit l'ambiance de Departure."
              </p>
              <div className="space-y-6 text-slate-400 leading-relaxed">
                <p>
                  **Synopsis :** C'est ici que tu racontes l'histoire globale. Explique les enjeux, le monde, et pourquoi ce projet te tient à cœur. 
                </p>
                <p>
                  Décris les thèmes principaux (voyage, technologie, mystère...) pour que le lecteur plonge immédiatement dans ton imagination.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Section Personnages */}
        <section>
          <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter border-b border-white/10 pb-4">
            Personnages <span className="text-indigo-500">clés</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {personnages.map((perso, index) => (
              <ScrollReveal key={perso.nom} delay={index * 0.2}>
                <div className="group bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-center p-4 gap-8 hover:bg-white/10 transition-all">
                  <div className="w-48 h-48 shrink-0 rounded-4x1 overflow-hidden border-2 border-white/10">
                    <img src={perso.image} alt={perso.nom} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="py-4">
                    <h3 className="text-2xl font-black tracking-tight mb-1">{perso.nom}</h3>
                    <p className="text-indigo-400 text-xs font-black uppercase tracking-widest mb-4">{perso.role}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {perso.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};