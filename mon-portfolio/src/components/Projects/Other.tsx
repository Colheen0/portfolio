import { useState } from 'react';

interface PersonalProject {
  title: string;
  category: string;
  icon: string;
  videoSrc: string; 
}

export const Other = () => {
  const [activeVideo, setActiveVideo] = useState<PersonalProject | null>(null);

  const aeProjects = [
    { title: "Motion Logo 2026", category: "After Effects", icon: "🎬", videoSrc: "/video/motion-logo.mp4" },
    { title: "VFX Explosion", category: "After Effects", icon: "✨", videoSrc: "/video/vfx.mp4" }
  ];

  const audioProjects = [
    { title: "Sound Design Epic", category: "Audacity", icon: "🔊", videoSrc: "/video/sound-design.mp4" }
  ];

  return (
    <section id="others" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-violet-100 text-violet-600 rounded-full text-[10px] font-black uppercase tracking-widest">
            Laboratoire
            </span>
            <span className="text-slate-400 text-sm font-medium">Tests & Expérimentations</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-tight">
            Projets <br /> 
            <span className="text-violet-600">Personnels</span>
        </h2>
        
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Espace dédié à l'apprentissage autodidacte, aux tests de Motion Design et aux créations libres réalisées sur mon temps personnel.
        </p>
        </div>
        {/* Section After Effects */}
        <div className="mb-16">
          <h3 className="text-sm font-black text-indigo-500 uppercase tracking-[0.2em] mb-8 border-l-4 border-indigo-500 pl-4">Post-Production (After Effects)</h3>
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x scrollbar-hide">
            {aeProjects.map(proj => (
              <div key={proj.title} onClick={() => setActiveVideo(proj)} className="min-w-70 bg-slate-50 border border-slate-200 p-6 rounded-2xl snap-center group cursor-pointer hover:border-indigo-500 transition-all">
                <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform">{proj.icon}</span>
                <h4 className="font-bold">{proj.title}</h4>
                <p className="text-[10px] font-black uppercase text-slate-400 mt-2">Cliquez pour lire</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Audio */}
        <div className="mb-16">
          <h3 className="text-sm font-black text-amber-500 uppercase tracking-[0.2em] mb-8 border-l-4 border-amber-500 pl-4">Audio (Audacity)</h3>
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x scrollbar-hide">
            {audioProjects.map(proj => (
              <div key={proj.title} onClick={() => setActiveVideo(proj)} className="min-w-70 bg-slate-50 border border-slate-200 p-6 rounded-2xl snap-center group cursor-pointer hover:border-amber-500">
                <span className="text-3xl mb-4 block group-hover:scale-110">{proj.icon}</span>
                <h4 className="font-bold">{proj.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Modale Vidéo Player */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-md" onClick={() => setActiveVideo(null)}>
            <div className="max-w-4xl w-full relative" onClick={e => e.stopPropagation()}>
              <button onClick={() => setActiveVideo(null)} className="absolute -top-12 right-0 text-white font-bold text-xl hover:text-indigo-400 transition-colors">Fermer ✕</button>
              
              <div className="bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <video 
                  controls 
                  autoPlay 
                  className="w-full h-full"
                  src={activeVideo.videoSrc}
                >
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
              
              <div className="mt-6 text-white text-center">
                <h3 className="text-2xl font-black tracking-tight">{activeVideo.title}</h3>
                <p className="text-slate-400 text-sm uppercase font-bold mt-1 tracking-widest">{activeVideo.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};