import { useState } from 'react';

interface PersonalProject {
  title: string;
  category: string;
  videoSrc: string;
  poster: string;
}

export const Other = () => {
  const [activeVideo, setActiveVideo] = useState<PersonalProject | null>(null);

  const aeProjects: PersonalProject[] = [
    { 
      title: "Effet de disparition de poussière", 
      category: "After Effects", 
      videoSrc: "assets/video/departure snap thanos.MP4",
      poster: "assets/video/poster_thanos.png" 
    },
    { 
      title: "Intro motion Marne et Gondoire", 
      category: "After Effects", 
      videoSrc: "/assets/video/MAG.MP4",
      poster: "/assets/video/poster_mag.png" 
    },
    { 
      title: "Motion sphère en rotation", 
      category: "After Effects", 
      videoSrc: "/assets/video/rotation.MP4",
      poster: "/assets/video/poster_rotation.png" 
    }
  ];

  return (
    <section id="others" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* En-tête de la section */}
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
        
        {/* Section After Effects - Grid des Cards */}
        <div className="mb-16">
          <h3 className="text-sm font-black text-indigo-500 uppercase tracking-[0.2em] mb-8 border-l-4 border-indigo-500 pl-4">Post-Production (After Effects)</h3>
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide">
            {aeProjects.map(proj => (
              <div 
                key={proj.title} 
                onClick={() => setActiveVideo(proj)} 
                className="min-w-[320px] md:min-w-100 bg-slate-50 border border-slate-200 rounded-4x1 overflow-hidden snap-center group cursor-pointer hover:border-violet-500 hover:shadow-lg transition-all"
              >
                <div className="relative aspect-video bg-slate-900">
                  <img 
                    src={proj.poster} 
                    alt={proj.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-violet-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white ml-1">
                          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="font-bold text-lg tracking-tight">{proj.title}</h4>
                  <p className="text-[10px] font-black uppercase text-slate-400 mt-2 tracking-widest">{proj.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modale Vidéo Player avec limitation de temps */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-md" onClick={() => setActiveVideo(null)}>
            <div className="max-w-4xl w-full relative" onClick={e => e.stopPropagation()}>
              <button onClick={() => setActiveVideo(null)} className="absolute -top-12 right-0 text-white font-bold text-xl hover:text-indigo-400 transition-colors">Fermer ✕</button>
              
              <div className="bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
                <video 
                  controls 
                  autoPlay 
                  className="w-full h-full"
                  src={activeVideo.videoSrc}
                  poster={activeVideo.poster}
                  onTimeUpdate={(e) => {
                    const video = e.currentTarget;
                    // Logique spécifique pour la vidéo Thanos (limitée à 6s)
                    if (activeVideo.title === "Effet de disparition de poussière" && video.currentTime >= 6) {
                      video.pause();
                      video.currentTime = 0;
                    }
                  }}
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