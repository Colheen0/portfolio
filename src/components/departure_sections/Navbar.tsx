import { NavHashLink } from 'react-router-hash-link';

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between font-medium">
        
        {/* Logo / Retour en haut */}
        <span className="font-black tracking-tighter text-xl text-white">
          <NavHashLink smooth to="/departure#home">
            Departure
          </NavHashLink>
        </span>

        {/* Liens directs - Plus simple pour la navigation de cette page */}
        <div className="hidden md:flex items-center space-x-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          
          <NavHashLink smooth to="/departure#synopsis" className="hover:text-indigo-400 transition-colors">
            Synopsis
          </NavHashLink>

          <NavHashLink smooth to="/departure#characters" className="hover:text-indigo-400 transition-colors">
            Personnages
          </NavHashLink>

          <div className="h-4 w-px bg-white/10 mx-2" />

          {/* Lien retour Portfolio */}
          <NavHashLink 
            smooth to="/#accueil" 
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-indigo-500/50 transition-all group"
          >
            Portfolio
          </NavHashLink>
        </div>
      </div>
    </nav>
  );
};