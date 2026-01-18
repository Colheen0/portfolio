import { ScrollReveal } from '../utils/ScrollReveal';

interface Character {
  prenom: string;
  nom: string;
  surnom?: string;
  role?: string;
  description: string;
  image: string;
  color: string; 
  rgb: string;   
}

export const Personnages = () => {
  const characters: Character[] = [
    {
      prenom: "Reïs",
      nom: "MATABI",
      role: "Le Protagoniste",
      description: "Porteur d'un héritage dont il ignore encore la portée, Reïs est le pilier de cette expédition.",
      image: "assets/departure_img/reis_cbt.png",
      color: "bg-blue-500",
      rgb: "59, 130, 246"
    },
    {
      prenom: "Élizabeth",
      nom: "TÉBA",
      surnom: "(Lily)",
      description: "Esprit brillant et analyste de terrain, Lily apporte la logique nécessaire aux situations désespérées.",
      image: "assets/departure_img/lily_cbt.png",
      color: "bg-orange-500",
      rgb: "249, 115, 22"
    },
    {
      prenom: "Léonard",
      nom: "PENDRALAYON",
      surnom: "(Léo)",
      description: "Force tranquille de l'équipe, Léo est celui sur qui tout le monde peut compter.",
      image: "assets/departure_img/leo_cbt.png",
      color: "bg-pink-500",
      rgb: "236, 72, 153"
    },
    {
      prenom: "Vicaramecia",
      nom: "DRAUPNIR",
      surnom: "(Higgs)",
      description: "Expert en technologies oubliées, Higgs possède une vision du monde qui dépasse l'entendement.",
      image: "assets/departure_img/vica_cbt.png",
      color: "bg-purple-500",
      rgb: "168, 85, 247"
    },
    {
      prenom: "Grace",
      nom: "SORA",
      description: "Sa maîtrise de la navigation et son instinct de survie ont sauvé l'équipe plus d'une fois.",
      image: "assets/departure_img/grace.jpg",
      color: "bg-red-500",
      rgb: "239, 68, 68"
    },
    {
      prenom: "Silver",
      nom: "FURNACE",
      description: "Silencieux et observateur, Silver est le garant de la sécurité du groupe.",
      image: "assets/departure_img/silver.jpg",
      color: "bg-amber-400",
      rgb: "251, 191, 36"
    }
  ];

  return (
    <section id="characters" className="relative py-32 bg-slate-900 text-white z-10 overflow-hidden">
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
                className="w-full aspect-video object-cover object-[center_25%] group-hover:scale-105 transition-transform duration-1000"              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent opacity-60" />
            </div>

            <div className="mt-8 space-y-4">
              <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed italic">
                "Unis par une mission commune, ils sont le dernier espoir d'une humanité en quête de réponses."
              </p>

              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                Illustration par l'excellent <a href="https://www.tiktok.com/@mastachef.07?_r=1&_t=ZS-935dGEPpmIz%0A" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-bold underline underline-offset-4 decoration-indigo-500/30">@MastaChef</a>
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 2 LISTE DES PERSONNAGES */}
        <div className="space-y-32 md:space-y-12">
          {characters.map((perso, index) => (
            <ScrollReveal key={perso.nom} delay={0.2}>
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
                
                {/* Texte */}
                <div className="flex-1 space-y-6 z-10">
                  <div>
                    <span className="font-black uppercase tracking-[0.3em] text-[10px]" style={{ color: `rgb(${perso.rgb})` }}>
                    {perso.role || "Membre de l'équipe"}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mt-2">
                      {perso.prenom} <br />
                      <span style={{ color: `rgb(${perso.rgb})` }}>{perso.nom}</span><br/>
                      <span className='text-gray-500'>{perso.surnom}</span>
                    </h3>
                  </div>
                  <p className="text-lg text-slate-400 font-light max-w-md">{perso.description}</p>
                </div>

                {/* Image avec lueur spécifique */}
                <div className="relative w-full md:w-1/2 flex justify-center items-center group">
                  {/* Aura lumineuse spécifique (via perso.color) */}
                  <div className={`absolute w-64 h-64 ${perso.color} opacity-10 blur-[100px] rounded-full group-hover:opacity-20 transition-opacity duration-700`} />
                  
                  <img 
                    src={perso.image} 
                    alt={perso.prenom} 
                    className="relative z-10 w-full max-h-125 object-contain transition-all duration-700 group-hover:scale-110"
                    style={{ 
                      filter: `drop-shadow(0 20px 50px rgba(${perso.rgb}, 0.3))` 
                    }}
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