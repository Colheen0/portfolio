export const Competences = () => {
  const skills = [
    {
      category: "Post-Production",
      items: [
        { name: "Adobe Premiere Pro", detail: "Montage complexe & rythme" },
        { name: "After Effects", detail: "Motion design & effets" }
      ],
      color: "border-indigo-500"
    },
    {
      category: "Production Terrain",
      items: [
        { name: "Cadrage & Lumière", detail: "Utilisation Sony FX30" },
        { name: "Installation Matériel", detail: "Setups vidéo complets" }
      ],
      color: "border-amber-500"
    },
    {
      category: "Design & Création",
      items: [
        { name: "Figma", detail: "Maquettage d'interfaces" },
        { name: "Canva", detail: "Visuels réseaux sociaux" }
      ],
      color: "border-emerald-500"
    }
  ];

  return (
    <section id="competences" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-[10px] font-black uppercase tracking-widest">
              Expertise
            </span>
            <span className="text-slate-400 text-sm font-medium">Techniques & Outils</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-tight">
            Compétences <br /> 
            <span className="text-red-600">Techniques</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Maîtrise de la chaîne de production audiovisuelle, de la prise de vue réelle au montage complexe sur Premiere Pro et After Effects, complétée par des bases solides en design d'interface.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className={`bg-white p-8 rounded-3xl border-t-4 ${skill.color} shadow-sm`}>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">{skill.category}</h3>
              <ul className="space-y-6">
                {skill.items.map((item) => (
                  <li key={item.name}>
                    <p className="font-bold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};