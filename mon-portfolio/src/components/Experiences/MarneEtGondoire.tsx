interface VideoVignetteProps {
  title: string;
  videoUrl: string;
}

// Fonction pour extraire l'ID YouTube d'une URL
const getYoutubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const VideoVignette = ({ title, videoUrl }: VideoVignetteProps) => {
  const videoId = getYoutubeId(videoUrl);
  // URL de la miniature en haute qualité
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <a 
      href={videoUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl bg-slate-100 aspect-video shadow-sm hover:shadow-xl transition-all border border-slate-200 min-w-75 md:min-w-112.5 snap-center"
    >
      {/* Image de fond (Miniature YouTube automatique) */}
      <img 
        src={thumbnailUrl} 
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        // Si la version "maxres" n'existe pas, on charge la version standard
        onError={(e) => {
          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }}
      />
      
      {/* Overlay au survol */}
      <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
        <p className="text-white text-xs font-bold uppercase tracking-wider">{title}</p>
      </div>

      {/* Icône Play au centre */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
        </div>
      </div>
    </a>
  );
};

export const MarneEtGondoire = () => {
  return (
    <section id="marne-et-gondoire" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
      <div className="max-w-5xl mx-auto">
        {/* En-tête de la section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest">
              Expérience Pro
            </span>
            <span className="text-slate-400 text-sm font-medium">Stage • 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-tight">
            Communication <br /> 
            <span className="text-indigo-600">Marne et Gondoire</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Au sein du service communication de la Communauté d'Agglomération, j'ai produit des contenus audiovisuels pour valoriser le territoire. Mon rôle couvrait la captation et le montage adapté aux réseaux sociaux.
          </p>
        </div>

        {/* Zone de défilement horizontal */}
        <div className="relative group">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth outline-none">
            <VideoVignette 
              title="Soiré IA teaser" 
              videoUrl="https://www.youtube.com/watch?v=Q_shsKeG7js" 
            />
            <VideoVignette 
              title="Événementiel : La Nuit de l'IA #2" 
              videoUrl="https://www.youtube.com/watch?v=e-fd5LzKrrg" 
            />
            <VideoVignette 
              title="Lagny Play the game 2025" 
              videoUrl="https://www.youtube.com/watch?v=SaPEHtDpG9g" 
            />
            <VideoVignette 
              title="Lagny Les Floréales 2025" 
              videoUrl="https://www.youtube.com/watch?v=NquNrii3tLo" 
            />
            <VideoVignette 
              title="Lagny La chasse aux œufs 2025" 
              videoUrl="https://www.youtube.com/watch?v=gxWj5dfYKM8" 
            />
            <VideoVignette 
              title="Cérémonie du 8 Mai 1945" 
              videoUrl="https://www.youtube.com/watch?v=JGuxagu_408" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};