import { NavHashLink } from 'react-router-hash-link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-950 border-t border-white/5 pt-24 pb-12 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Appel à l'action - Style Sombre */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 italic uppercase">
              UN PROJET ? <br />
              <span className="text-indigo-500">DISCUTONS-EN.</span>
            </h2>
            <p className="text-slate-400 max-w-sm font-light">
              Ouvert aux opportunités en montage, création de contenus ou développement web.
            </p>
          </div>
          
          <a 
            href="mailto:ton@email.com" 
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-indigo-600 font-pj rounded-full hover:bg-indigo-500 shadow-lg shadow-indigo-500/20"
          >
            Me contacter par mail
          </a>
        </div>

        {/* Liens et Réseaux */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          
          {/* NAVIGATION DEPARTURE */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Navigation</span>
            <NavHashLink smooth to="/departure#home" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Accueil</NavHashLink>
            <NavHashLink smooth to="/departure#synopsis" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Synopsis</NavHashLink>
            <NavHashLink smooth to="/departure#characters" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Personnages</NavHashLink>
            <NavHashLink smooth to="/#accueil" className="text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors">← Portfolio</NavHashLink>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Social</span>
            <a href="https://www.linkedin.com/in/colheen-nkodia-diabat%C3%A9-001322296/" target="_blank" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">LinkedIn</a>
            <a href="https://github.com/Colheen0/" target="_blank" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">GitHub</a>
            <a href="https://www.instagram.com/nekhco?igsh=MW92OTBrY29kaTR6ag%3D%3D&utm_source=qr" target="_blank" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Instagram</a>
          </div>

          <div className="hidden md:flex flex-col gap-4 col-span-2 text-right">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Localisation</span>
            <p className="text-sm font-medium text-slate-300">Basé en Île-de-France (Marne-la-Vallée)</p>
            <p className="text-xs text-slate-500 italic">Disponible en présentiel ou télétravail</p>
          </div>
        </div>

        {/* Copyright & Crédits */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 font-medium text-center md:text-left">
            Colheen NKODIA-DIABATÉ - Développeur et Créatif Multimédia. <br />
            © {currentYear} — Colheen NKODIA-DIABATÉ - Tous droits réservés.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold px-2 py-1 bg-white/5 border border-white/10 rounded text-slate-400 uppercase">React</span>
            <span className="text-[10px] font-bold px-2 py-1 bg-white/5 border border-white/10 rounded text-slate-400 uppercase">Tailwind V4</span>
            <span className="text-[10px] font-bold px-2 py-1 bg-white/5 border border-white/10 rounded text-slate-400 uppercase">TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};