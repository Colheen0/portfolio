export const Moi = () => {
  return (
    <section id="a-propos" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Colonne Identité */}
        <div className="md:w-1/3">
          <h2 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.3em] mb-4">Le Profil</h2>
          <p className="text-4xl font-black text-slate-900 tracking-tighter">
            COLHEEN <br /> NKODIA-DIABATÉ 
          </p>
          <div className="mt-6 space-y-2">
            <p className="text-sm text-slate-500">📍 Basé en Île-de-France</p>
            <p className="text-sm text-slate-500">🎂 20 ans</p>
            <p className="text-sm text-slate-500">Bi-national France 🇫🇷 et Côte d'Ivoire 🇨🇮</p>
          </div>
        </div>

        {/* Colonne Bio & Parcours */}
        <div className="md:w-2/3">
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            Étudiant passionné par la fusion entre le <strong>code</strong> et les <strong>arts visuels</strong>. 
            Je ne me contente pas de monter des vidéos ou d'écrire des scripts : je cherche à construire des ponts 
            entre la technique et l'émotion à travers des projets interactifs.
          </p>

          <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-8">Mon Parcours</h3>
          
          <div className="space-y-8 border-l border-slate-100 pl-8 relative">
            {/* Élément de parcours 1 */}
            <div className="relative">
              <div className="absolute -left-9.25 top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white shadow-sm"></div>
              <span className="text-xs font-bold text-indigo-600">2024 - Présent</span>
              <h4 className="text-lg font-bold text-slate-900">BUT Métiers du Multimédia et de l'Internet (MMI)</h4>
              <p className="text-sm text-slate-500 mt-1">Spécialisation en développement web et création de contenus numériques.</p>
            </div>

            {/* Élément de parcours 2 */}
            <div className="relative">
              <div className="absolute -left-9.25 top-1 w-4 h-4 rounded-full bg-slate-200 border-4 border-white"></div>
              <span className="text-xs font-bold text-slate-400">2023</span>
              <h4 className="text-lg font-bold text-slate-900">Baccalauréat STMG : Gestion Finance</h4>
              <p className="text-sm text-slate-500 mt-1">Obtention du diplôme avec mention Assez Bien.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};