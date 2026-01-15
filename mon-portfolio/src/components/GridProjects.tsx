import { ProjectCard } from "./CardProject";

export const ProjectsGrid = () => {
  return (
    <section id="projets" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-black mb-16 uppercase tracking-tighter">Mes Travaux</h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Pôle Code */}
          <div className="space-y-10">
            <h3 className="text-sm font-black text-indigo-500 uppercase tracking-[0.2em] border-b pb-2">Logiciel & Web</h3>
            <ProjectCard 
              title="Site de réservation : RésaKingdom" 
              description="Projet de fin de la première année." 
              tags={['Javascript', 'CSS', 'HTML']} 
            />
            <ProjectCard 
              title="Portrait Chinois" 
              description="Premier projet réalisé en cours via HTML, CSS et JAVASCRIPT." 
              tags={['Javascript', 'CSS', 'HTML']} 
            />
          </div>

          {/* Pôle Audiovisuel */}
          <div className="space-y-10">
            <h3 className="text-sm font-black text-indigo-500 uppercase tracking-[0.2em] border-b pb-2">Audio & Montage</h3>
            <ProjectCard 
              title="Podcast : Les joueurs de cartes" 
              description="Écriture et montage de la version anglaise d'un podcast." 
              tags={['Audio', 'Storytelling']} 
            />
            <ProjectCard 
              title="Interview : Nicolas JEUNOT" 
              description="Cadrage et montage de l'interview d'un photographe." 
              tags={['Premiere Pro', 'Cadrage']} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};