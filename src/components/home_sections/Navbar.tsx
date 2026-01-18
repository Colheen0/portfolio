import { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link'; 

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between font-medium">
        
        {/* Logo / Accueil */}
        <span className="font-black tracking-tighter text-xl text-white">
          <NavHashLink smooth to="/#accueil" onClick={closeDropdown}>
            Accueil
          </NavHashLink>
        </span>

        {/* Liens de Navigation repositionnés */}
        <div className="hidden md:flex items-center space-x-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          
          {/* 1. Menu Déroulant Projets (Placé en premier) */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              className={`flex items-center gap-1 hover:text-indigo-400 transition-colors uppercase outline-none ${isDropdownOpen ? 'text-white' : ''}`}
            >
              Projets
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Liste du menu */}
            {isDropdownOpen && (
              <div className="absolute top-full -left-4 pt-2 w-64 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-slate-900 border border-white/10 shadow-2xl rounded-2xl overflow-hidden py-2 text-slate-400">
                  <NavHashLink smooth to="/#marne-et-gondoire" onClick={closeDropdown} className="block px-6 py-3 hover:bg-white/5 hover:text-indigo-400 transition-colors">
                    Marne et Gondoire
                  </NavHashLink>
                  <NavHashLink smooth to="/#cmj" onClick={closeDropdown} className="block px-6 py-3 hover:bg-white/5 hover:text-amber-400 transition-colors">
                    CMJ Governes
                  </NavHashLink>
                  <NavHashLink smooth to="/#scholar" onClick={closeDropdown} className="block px-6 py-3 hover:bg-white/5 hover:text-sky-400 transition-colors">
                    Travaux Scolaires
                  </NavHashLink>
                  <NavHashLink smooth to="/#others" onClick={closeDropdown} className="block px-6 py-3 hover:bg-white/5 hover:text-violet-400 transition-colors">
                    Projets Personnels
                  </NavHashLink>
                </div>
              </div>
            )}
          </div>

          {/* 2. LIEN VERS LE CONTACT (Placé après les projets) */}
          <NavHashLink 
            smooth to="/#contact" 
            className="hover:text-indigo-400 transition-colors"
          >
            Contact
          </NavHashLink>

          {/* 3. LIEN VERS LA PAGE DEPARTURE (Échangé et mis en format bouton) */}
          <NavHashLink 
            smooth 
            to="/departure#home" 
            onClick={closeDropdown}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-indigo-500/50 transition-all flex items-center gap-2 group"
          >
            Departure
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 transition-transform group-hover:translate-x-1">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </NavHashLink>
        </div>
      </div>
    </nav>
  );
};