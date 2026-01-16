import { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link'; 

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between font-medium">
        
        {/* Logo / Accueil */}
        <span className="font-black tracking-tighter text-xl">
          <NavHashLink smooth to="/#accueil" onClick={closeDropdown}>
            Accueil
          </NavHashLink>
        </span>

        <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest text-slate-500">
          
          {/* LIEN VERS LA SECTION DEPARTURE (MODIFIÉ) */}
          <NavHashLink 
            smooth 
            to="/#departure" 
            onClick={closeDropdown}
            className="hover:text-indigo-600 transition-colors"
          >
            Departure
          </NavHashLink>

          {/* Menu Déroulant Projets */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              className={`flex items-center gap-1 hover:text-indigo-600 transition-colors uppercase outline-none ${isDropdownOpen ? 'text-indigo-600' : ''}`}
            >
              Projets
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Liste du menu */}
            {isDropdownOpen && (
              <div className="absolute top-full -left-4 pt-2 w-64 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-white border border-slate-100 shadow-xl rounded-2xl overflow-hidden py-2">
                  <NavHashLink 
                    smooth to="/#marne-et-gondoire" 
                    onClick={closeDropdown}
                    className="block px-6 py-3 text-[10px] font-black hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                  >
                    Marne et Gondoire
                  </NavHashLink>
                  <NavHashLink 
                    smooth to="/#cmj" 
                    onClick={closeDropdown}
                    className="block px-6 py-3 text-[10px] font-black hover:bg-slate-50 hover:text-amber-600 transition-colors"
                  >
                    CMJ Governes
                  </NavHashLink>
                  <NavHashLink 
                    smooth to="/#scholar" 
                    onClick={closeDropdown}
                    className="block px-6 py-3 text-[10px] font-black hover:bg-slate-50 hover:text-sky-500 transition-colors"
                  >
                    Travaux Scolaires
                  </NavHashLink>
                  <NavHashLink 
                    smooth to="/#others" 
                    onClick={closeDropdown}
                    className="block px-6 py-3 text-[10px] font-black hover:bg-slate-50 hover:text-violet-600 transition-colors"
                  >
                    Projets Personnels
                  </NavHashLink>
                </div>
              </div>
            )}
          </div>

          {/* LIEN VERS LE FOOTER (CONTACT) */}
          <NavHashLink 
            smooth to="/#footer" 
            className="hover:text-indigo-600 transition-colors"
          >
            Contact
          </NavHashLink>
        </div>
      </div>
    </nav>
  );
};