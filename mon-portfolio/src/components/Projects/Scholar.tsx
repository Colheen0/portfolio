import { useState } from 'react';
import { ProjectCard } from "../CardProject"; // Vérifie bien le chemin vers ta card

interface Project {
  title: string;
  description: string;
  fullContent: string;
  tags: string[];
  link?: string;
}

export const Scholar = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Site de réservation : RésaKingdom",
      description: "Projet de fin de première année.",
      fullContent: "Une plateforme complète de réservation développée pour apprendre la gestion de base de données et les interactions utilisateurs complexes.",
      tags: ['Javascript', 'CSS', 'HTML'],
      link: "https://github.com/ton-lien"
    },
    {
      title: "Portrait Chinois",
      description: "Premier projet réalisé en cours.",
      fullContent: "Une expérience interactive qui révèle ma personnalité à travers des animations fluides et un code créatif en JS.",
      tags: ['Javascript', 'CSS Anim'],
      link: "https://ton-lien-vers-site"
    }
  ];

  return (
    <section id="scholar" className="py-24 px-6 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-black mb-16 uppercase tracking-tighter italic">Travaux Scolaires</h2>
        
        {/* Scroll Horizontal style CMJ */}
        <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide outline-none">
          {projects.map((p) => (
            <div 
              key={p.title}
              onClick={() => setSelectedProject(p)}
              className="min-w-[320px] md:min-w-125 snap-center cursor-pointer transform transition-transform hover:scale-[1.02]"
            >
              <ProjectCard title={p.title} description={p.description} tags={p.tags} />
            </div>
          ))}
        </div>

        {/* La Modale */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/80 backdrop-blur-sm">
            <div className="bg-white rounded-[2.5rem] max-w-2xl w-full p-10 relative shadow-2xl animate-in fade-in zoom-in duration-300">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 font-bold text-2xl"
              >✕</button>
              
              <span className="text-indigo-600 font-black uppercase text-[10px] tracking-widest">Projet Étudiant</span>
              <h3 className="text-4xl font-black mt-4 mb-6 tracking-tighter">{selectedProject.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">{selectedProject.fullContent}</p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {selectedProject.tags.map(t => (
                  <span key={t} className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold uppercase">{t}</span>
                ))}
              </div>

              {selectedProject.link && (
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  className="inline-block bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-600 transition-colors"
                >
                  Voir le projet en direct
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};