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
        <h2 className="text-3xl font-black mb-16 uppercase tracking-tighter">Mes Passions</h2>
        
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