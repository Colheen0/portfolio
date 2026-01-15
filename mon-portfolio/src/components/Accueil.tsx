export const Accueil = () => (
  <section id="accueil" className="pt-32 pb-20 px-6">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      
      {/* Colonne Texte */}
      <div className="order-2 md:order-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] md:text-xs font-bold mb-8">
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
          Disponible pour de nouveaux défis
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-slate-900 leading-[0.9]">
          CRÉER. <br />
          RACONTER. <br />
          CODER.
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-md leading-relaxed">
          Créatif hybride spécialisé dans le <strong>montage</strong> et le <strong>storytelling</strong>. Auteur de l'univers <em>Departure</em>.
        </p>
      </div>

      {/* Colonne Image - Redimensionnée ici */}
      <div className="order-1 md:order-2 flex justify-center md:justify-end">
        <div className="relative">
          {/* Halo lumineux en fond */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-slate-100 rounded-full blur-3xl -z-10"></div>
          
          {/* Conteneur de l'image : Taille réduite ici */}
          <div className="relative rounded-[2.5rem] overflow-hidden rotate-2 border-4 border-white shadow-2xl w-65 md:w-[320px] lg:w-95 aspect-3/4">
            <img 
              src="/assets/img/Moi1.jpeg" 
              alt="Portrait Noir et Blanc"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
      
    </div>
  </section>
);