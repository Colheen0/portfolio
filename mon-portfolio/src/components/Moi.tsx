export const Moi = () => {
  return (
    <section id="a-propos" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        
        {/* Colonne Photo Couleur (prend 4 colonnes sur 12) */}
        <div className="md:col-span-4">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-slate-100 max-w-sm mx-auto">
            <img 
              src="../assets/img/Moi2.jpeg" // <-- REMPLACE PAR LE BON CHEMIN
              alt="Portrait Couleur"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        {/* Colonne Identité & Parcours (prend 8 colonnes sur 12) */}
        <div className="md:col-span-8 grid md:grid-cols-2 gap-12">
          
          {/* Bloc Identité */}
          <div>
            <h2 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.3em] mb-4">Le Profil</h2>
            <p className="text-3xl font-black text-slate-900 tracking-tighter leading-tight">
              COLHEEN <br /> NKODIA-DIABATÉ 
            </p>
            <div className="mt-6 space-y-3">
              <p className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <span className="text-lg">📍</span> Basé en Île-de-France
              </p>
              <p className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <span className="text-lg">🎂</span> 20 ans
              </p>
              <p className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <span className="text-lg">🌍</span> Bi-national Français & Ivoirien
              </p>
            </div>
          </div>

          {/* Bloc Bio */}
          <div>
             <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
              Étudiant passionné par la fusion entre le <strong>code</strong> et les <strong>arts visuels</strong>. 
              Je cherche à construire des ponts entre la technique et l'émotion à travers des projets interactifs.
            </p>
            
            {/* ... (Garde ton bloc parcours ici, il est très bien) ... */}
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

      </div>
    </section>
  );
};