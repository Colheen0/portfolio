export const Passions = () => {
  const passions = [
    {
      title: "Écriture & Storytelling",
      desc: "Création d'univers narratifs profonds, de la conception du lore aux dialogues interactifs.",
      emoji: "✍️"
    },
    {
      title: "Production Musicale",
      desc: "Exploration sonore et composition (en cours d'apprentissage).",
      emoji: "🎵",
      status: "In Progress"
    },
    {
      title: "Création audiovisuelle",
      desc: "Montage vidéo, cadrage.",
      emoji: "💻"
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
          Au-delà de la technique, l'exploration de mondes imaginaires à travers l'écriture narrative et la recherche sonore.
        </p>
      </div>        
        <div className="grid md:grid-cols-3 gap-12">
          {passions.map((p) => (
            <div key={p.title} className="group">
              <span className="text-4xl mb-6 block group-hover:scale-110 transition-transform">{p.emoji}</span>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                {p.title}
                {p.status && <span className="text-[8px] bg-slate-100 px-2 py-1 rounded-full uppercase tracking-tighter">WIP</span>}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};