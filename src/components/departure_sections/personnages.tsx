import { ScrollReveal } from '../utils/ScrollReveal';

interface Character {
  prenom: string;
  nom: string;
  role?: string;
  description: string;
  image: string;
}

export const Personnages = () => {
  const characters: Character[] = [
    {
      prenom: "Reïs",
      nom: "MATABI",
      role: "Le Protagoniste",
      description: "Porteur d'un héritage dont il ignore encore la portée, Reïs est le pilier de cette expédition. Sa détermination cache une faille liée à son passé.",
      image: "assets/departure_img/reis.jpg"
    },
    {
      prenom: "Élizabeth",
      nom: "TÉBA (Lily)",
      description: "Esprit brillant et analyste de terrain, Lily apporte la logique nécessaire aux situations les plus désespérées.",
      image: "assets/departure_img/lily.jpg"
    },
    {
      prenom: "Léonard",
      nom: "PENDRALAYON (Léo)",
      description: "Force tranquille de l'équipe, Léo est celui sur qui tout le monde peut compter quand la tension monte.",
      image: "assets/departure_img/leo.jpg"
    },
    {
      prenom: "Vicaramecia",
      nom: "DRAUPNIR (Higgs)",
      description: "Expert en technologies oubliées, Higgs possède une vision du monde qui dépasse souvent l'entendement de ses pairs.",
      image: "assets/departure_img/higgs.jpg"
    },
    {
      prenom: "Grace",
      nom: "SORA",
      description: "Sa maîtrise de la navigation et son instinct de survie ont sauvé l'équipe plus d'une fois dans les zones les plus hostiles.",
      image: "assets/departure_img/grace.jpg"
    },
    {
      prenom: "Silver",
      nom: "FURNACE",
      description: "Silencieux et observateur, Silver est le garant de la sécurité du groupe, agissant souvent dans l'ombre.",
      image: "assets/departure_img/silver.jpg"
    }
  ];

  return (
    <section id="characters" className="relative py-32 bg-slate-900 text-white z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* 1. PRÉSENTATION DE L'ÉQUIPE (Image de base) */}
        <ScrollReveal>
          <div className="mb-32 text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12 italic">
              L'Équipe d'<span className="text-indigo-500">Exploration</span>
            </h2>
            <div className="relative group rounded-4xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="assets/departure_img/departure_bg.jpg" 
                alt="Équipe complète" 
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent opacity-60" />
            </div>
            
            <div className="mt-8 space-y-4">
              <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed italic">
                "Unis par une mission commune, ils sont le dernier espoir d'une humanité en quête de réponses."
              </p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                Illustration par l'excellent <a href="https://votre-lien-vers-mastachef.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-bold underline underline-offset-4 decoration-indigo-500/30">@MastaChef</a>
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. LISTE DES PERSONNAGES */}
        <div className="space-y-40">
          {characters.map((perso, index) => (
            <ScrollReveal key={perso.nom} delay={0.2}>
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
                
                {/* Texte du personnage */}
                <div className="flex-1 space-y-6">
                  <div>
                    <span className="text-indigo-500 font-black uppercase tracking-[0.3em] text-[10px]">
                      {perso.role || "Membre de l'équipe"}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic mt-2">
                      {perso.prenom} <br />
                      <span className="text-slate-500">{perso.nom}</span>
                    </h3>
                  </div>
                  <p className="text-lg text-slate-400 leading-relaxed font-light">
                    {perso.description}
                  </p>
                  <div className="w-12 h-0.5 bg-indigo-500/30" />
                </div>

                {/* Image du personnage */}
                <div className="w-full md:w-2/5 aspect-4/5 rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 group shadow-2xl">
                  <img 
                    src={perso.image} 
                    alt={`${perso.prenom} ${perso.nom}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};