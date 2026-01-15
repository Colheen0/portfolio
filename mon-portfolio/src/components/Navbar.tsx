import { useState } from 'react';

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fonction pour fermer le menu quand on clique sur un lien
  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between font-medium">
        <span className="font-black tracking-tighter text-xl">
          <a href="#accueil" onClick={closeDropdown}>Accueil</a>
        </span>

        <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest text-slate-500">
          <a href="#departure" className="hover:text-indigo-600 transition-colors">Departure</a>

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
                  <a 
                    href="#marne-et-gondoire" 
                    onClick={closeDropdown}
                    className="block px-6 py-3 text-[10px] font-black hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                  >
                    Marne et Gondoire
                  </a>
                  <a 
                    href="#cmj" 
                    onClick={closeDropdown}
                    className="block px-6 py-3 text-[10px] font-black hover:bg-slate-50 hover:text-amber-600 transition-colors"
                  >
                    CMJ Governes
                  </a>
                  <a 
                    href="#scholar" 
                    onClick={closeDropdown}
                    className="block px-6 py-3 text-[10px] font-black hover:bg-slate-50 hover:text-sky-500 transition-colors"
                  >
                    Travaux Scolaires
                  </a>
                  <a 
                    href="#others" 
                    onClick={closeDropdown}
                    className="block px-6 py-3 text-[10px] font-black hover:bg-slate-50 hover:text-violet-600 transition-colors"
                  >
                    Projets Personnels
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};