interface CMJVignetteProps {
  title: string;
  thumbnail: string;
  videoSrc: string;
  isComingSoon?: boolean; // Nouvelle ligne
}

//videoSrc à rajouter dans les props si besoin d'une vidéo

const CMJVignette = ({ title, thumbnail, isComingSoon }: CMJVignetteProps) => (
  <div className={`relative block overflow-hidden rounded-2xl bg-slate-100 aspect-video border border-slate-200 min-w-75 md:min-w-112.5 snap-center ${isComingSoon ? 'cursor-not-allowed' : 'group'}`}>
    {/* Image de miniature */}
    <img 
      src={thumbnail} 
      alt={title}
      className={`h-full w-full object-cover transition-transform duration-500 ${isComingSoon ? 'grayscale opacity-50' : 'group-hover:scale-110 opacity-90 group-hover:opacity-100'}`}
    />
    
    {/* Badge Coming Soon */}
    {isComingSoon && (
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <span className="px-4 py-2 bg-slate-900/80 backdrop-blur-md text-white text-xs font-black uppercase tracking-[0.2em] rounded-full border border-white/20">
          Coming Soon
        </span>
      </div>
    )}

    {/* Overlay titre (toujours visible) */}
    <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-4">
      <p className="text-white text-xs font-bold uppercase tracking-wider">{title}</p>
    </div>
  </div>
);

export const CMJ = () => {
  return (
    <section id="cmj" className="py-24 px-6 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto">
        {/* En-tête */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] font-black uppercase tracking-widest">
              Engagement Local
            </span>
            <span className="text-slate-400 text-sm font-medium">CMJ Governes</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-tight">
            Conseil Municipal <br /> 
            <span className="text-amber-600">des Jeunes</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Collaboration avec la municipalité de Governes pour la création de contenus mettant en valeur l'histoire du village et la préservation de son patrimoine.
          </p>
        </div>

        {/* Scroll horizontal */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth outline-none">
            <CMJVignette 
                title="Histoire de Gouvernes et ses habitants" 
                thumbnail="assets/img/CMJ.JPEG" 
                videoSrc="#" 
                isComingSoon={true} 
            />
            <CMJVignette 
                title="Restauration : Salle de Cathéchèse" 
                thumbnail="assets/img/salle.JPEG" 
                videoSrc="#" 
                isComingSoon={true} 
            />
        </div>
      </div>
    </section>
  );
};