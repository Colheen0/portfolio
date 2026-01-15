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
        <h2 className="text-3xl font-black mb-16 uppercase tracking-tighter">Compétences Techniques</h2>
        
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
              {/* Lien vers projets futurs */}
              {skill.category === "Post-Production" && (
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <a href="#projets" className="text-xs font-bold text-indigo-600 hover:underline">Voir les projets associés →</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};