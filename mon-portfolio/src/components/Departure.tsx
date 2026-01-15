export const Departure = () => {
  return (
    <section id="departure" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-indigo-500 rounded-full text-[10px] font-bold uppercase tracking-wider">
                Projet Passion
              </span>
              <span className="text-slate-400 text-xs font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                En développement
              </span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter italic">
              DEPARTURE
            </h2>
            
            <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
              Un univers narratif où la fiction rencontre l'interactivité. Né d'une plume passionnée, 
              illustré en collaboration et propulsé par un Visual Novel sous <strong>Ren'Py</strong>. 
            </p>
            
            <div className="flex flex-wrap gap-6 items-center">
              <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-indigo-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg shadow-indigo-500/20">
                Explorer l'univers
              </button>
              <div className="text-sm text-slate-400 font-medium border-l border-slate-700 pl-6">
                Concept, Écriture <br />& Visual Novel
              </div>
            </div>
          </div>
          
          {/* Décoration en arrière-plan */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};