import { useState } from 'react';

interface InspirationItem {
  name: string;
  image: string;
  summary: string;
  link?: string; // Nouveau : lien spécifique par item
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

  const passions: Passion[] = [
    {
      title: "Lecture",
      emoji: "📚",
      desc: "Les récits qui ont forgé mon imaginaire et mon goût pour l'aventure.",
      items: ["Percy Jackson", "Les Héros de l'Olympe", "Contes de Fées"],
      details: [
        { 
          name: "Percy Jackson & les Olympiens", 
          image: "/assets/passions/percy_jackson.webp",
          summary: "Une relecture moderne et pleine d'humour de la mythologie grecque."
        },
        { 
          name: "Les Héros de l'Olympe", 
          image: "/assets/passions/les-heros-de-lolympe.webp",
          summary: "Une suite épique qui approfondit l'univers avec de nouveaux personnages."
        },
        { 
          name: "Contes de Fées (Stephen King)", 
          image: "/assets/passions/king-stephen-conte-de-fees.webp",
          summary: "Un voyage sombre et fascinant dans un monde parallèle immersif."
        }
      ],
      anecdote: "Rick Riordan est sans doute celui qui m'a donné l'envie de créer des univers étendus. J'adore la façon dont il modernise la mythologie, c'est une grande source d'inspiration pour le lore de Departure.",
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
          image: "/assets/passions/AJR.webp",
          summary: "Un mélange unique de pop, d'électro et de thèmes très humains.",
          link: "https://open.spotify.com/intl-fr/track/2wPL8Vh6lZ0DLaAw1N7Caj?si=c94977f3f7a345fb" 
        },
        { 
          name: "Megatera Zero", 
          image: "/assets/passions/Mega.webp",
          summary: "Des covers puissantes avec une voix et une énergie incomparables.",
          link: "https://open.spotify.com/intl-fr/track/1G9soUsxMgaOLeKAriEsbd?si=d9b952f5d0da437a"
        },
        { 
          name: "Lord Huron", 
          image: "/assets/passions/Lord_Huron.webp",
          summary: "Une ambiance indie-folk cinématographique qui transporte ailleurs.",
          link: "https://open.spotify.com/intl-fr/track/54hj06Z7sm7DaHSrGGMAZG?si=478f8cb18ce64520"
        }
      ],
      anecdote: "La créativité de AJR dans leur production sonore me fascine, tandis que Lord Huron m'aide énormément à visualiser des ambiances pour mes montages vidéo grâce à leur côté narratif.",
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
          image: "/assets/passions/hook.webp",
          summary: "Le film culte qui explore ce qu'il se passe quand Peter Pan grandit." 
        },
        { 
          name: "New Girl", 
          image: "/assets/passions/New_girl.webp",
          summary: "Une sitcom pétillante avec des personnages attachants et un humour percutant." 
        },
        { 
          name: "The Flash", 
          image: "/assets/passions/flash.webp",
          summary: "Une aventure de super-héros mêlant voyages temporels et enjeux familiaux." 
        }
      ],
      anecdote: "Hook est mon film de chevet pour tout ce qui touche au merveilleux. À l'opposé, l'écriture de New Girl m'inspire pour créer des dialogues dynamiques et attachants dans mes projets de fiction.",
      color: "text-rose-600"
    }
  ];

  return (
    <section id="passions" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
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
            Découvrez les œuvres et les artistes qui nourrissent ma créativité au quotidien.
          </p>
        </div>        

        <div className="grid md:grid-cols-3 gap-8">
          {passions.map((p) => (
            <div 
              key={p.title} 
              onClick={() => setSelectedPassion(p)}
              className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 cursor-pointer hover:border-emerald-500 hover:bg-white hover:shadow-xl transition-all"
            >
              <span className="text-4xl mb-6 block group-hover:scale-110 transition-transform">{p.emoji}</span>
              <h3 className="text-2xl font-black mb-4 tracking-tight">{p.title}</h3>
              <ul className="mb-6 space-y-2">
                {p.items.map(item => (
                  <li key={item} className="text-sm font-bold text-slate-400 group-hover:text-slate-600">• {item}</li>
                ))}
              </ul>
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest">Cliquez pour explorer →</p>
            </div>
          ))}
        </div>

        {selectedPassion && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md"
            onClick={() => setSelectedPassion(null)}
          >
            <div 
              className="bg-white rounded-[3rem] max-w-5xl w-full max-h-[95vh] p-8 md:p-10 relative shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedPassion(null)}
                className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 font-bold text-2xl z-30"
              >✕</button>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">{selectedPassion.emoji}</span>
                <h3 className="text-4xl font-black tracking-tighter italic uppercase">{selectedPassion.title}</h3>
              </div>

              {/* Galerie des items - Espacement réduit */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                {selectedPassion.details.map((detail) => (
                  <div key={detail.name} className="space-y-2 text-center">
                    <div className="relative aspect-3/4 rounded-2xl bg-slate-100 overflow-hidden shadow-md group/img">
                      <img 
                        src={detail.image} 
                        alt={detail.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110" 
                      />
                      {/* Overlay Texte + Bouton au survol */}
                      <div className="absolute inset-0 bg-slate-900/90 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                        <p className="text-[10px] md:text-[11px] text-white leading-relaxed font-medium mb-4">
                          {detail.summary}
                        </p>
                        {detail.link && (
                          <a 
                            href={detail.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-white text-slate-900 rounded-full text-[10px] font-black uppercase tracking-tighter hover:bg-emerald-500 hover:text-white transition-colors"
                          >
                            Écouter 🎧
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-[11px] font-black text-slate-900 leading-tight uppercase tracking-tighter">{detail.name}</p>
                  </div>
                ))}
              </div>

              {/* Section Anecdote compacte */}
              <div className="bg-slate-50 p-6 rounded-4x1 border border-slate-100 mt-auto">
                <h4 className="text-[9px] font-black uppercase tracking-widest text-emerald-600 mb-2">L'Anecdote</h4>
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  "{selectedPassion.anecdote}"
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};