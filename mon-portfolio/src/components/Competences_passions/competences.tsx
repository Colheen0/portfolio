import { motion } from "framer-motion";
import type { Variants } from "framer-motion"; // Respect de la règle type-only import

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

  // Variantes pour l'apparition des cartes en cascade
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Délai entre chaque carte
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Easing fluide professionnel
      },
    },
  };

  return (
    <section id="competences" className="py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* En-tête de section animé */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
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
        </motion.div>

        {/* Grille de compétences avec animation Stagger */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }} // Déclenchement dès que la grille apparaît
        >
          {skills.map((skill) => (
            <motion.div 
              key={skill.category} 
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }} // Petit effet interactif au survol
              className={`bg-white p-8 rounded-3xl border-t-4 ${skill.color} shadow-sm hover:shadow-xl transition-shadow duration-300`}
            >
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">
                {skill.category}
              </h3>
              <ul className="space-y-6">
                {skill.items.map((item) => (
                  <li key={item.name}>
                    <p className="font-bold text-slate-900 leading-tight">{item.name}</p>
                    <p className="text-sm text-slate-500 mt-1 leading-snug">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};