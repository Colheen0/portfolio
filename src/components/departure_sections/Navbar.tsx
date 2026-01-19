import { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between font-medium">
        
        {/* Logo / Retour en haut */}
        <span className="font-black tracking-tighter text-xl text-white z-50">
          <NavHashLink smooth to="/departure#home" onClick={closeMenu}>
            Departure
          </NavHashLink>
        </span>

        {/* --- NAVIGATION DESKTOP --- */}
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

        {/* --- BOUTON BURGER (Mobile uniquement) --- */}
        <button 
          className="md:hidden p-2 text-white z-50 outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>

        {/* --- MENU MOBILE (Opaque et Plein Écran) --- */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-slate-900 z-40 flex flex-col pt-24 px-8 space-y-8 animate-in fade-in slide-in-from-right duration-300 h-screen w-screen">
            <div className="flex flex-col space-y-6 text-sm font-black uppercase tracking-[0.2em] text-slate-400">
              <span className="text-[10px] text-slate-500 border-b border-white/10 pb-2">Navigation Departure</span>
              
              <NavHashLink smooth to="/departure#synopsis" onClick={closeMenu} className="hover:text-white transition-colors">
                Synopsis
              </NavHashLink>

              <NavHashLink smooth to="/departure#characters" onClick={closeMenu} className="hover:text-white transition-colors">
                Personnages
              </NavHashLink>

              <div className="pt-8 flex flex-col space-y-4">
                <span className="text-[10px] text-slate-500 border-b border-white/10 pb-2">Retour</span>
                <NavHashLink 
                  smooth to="/#accueil" 
                  onClick={closeMenu}
                  className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white text-center hover:bg-white/10 transition-all"
                >
                  ← Revenir au Portfolio
                </NavHashLink>
              </div>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};