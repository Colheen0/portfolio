export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white border-t border-slate-200 pt-24 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Appel à l'action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
              UN PROJET ? <br />
              <span className="text-indigo-600">DISCUTONS-EN.</span>
            </h2>
            <p className="text-slate-500 max-w-sm">
              Ouvert aux opportunités en montage, création de contenus ou développement web.
            </p>
          </div>
          
          <a 
            href="mailto:ton@email.com" 
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-slate-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-indigo-600"
          >
            Me contacter par mail
          </a>
        </div>

        {/* Liens et Réseaux */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-16 border-b border-slate-100">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Navigation</span>
            <a href="#" className="text-sm font-medium hover:text-indigo-600 transition-colors">Accueil</a>
            <a href="#departure" className="text-sm font-medium hover:text-indigo-600 transition-colors">Departure</a>
            <a href="#projets" className="text-sm font-medium hover:text-indigo-600 transition-colors">Projets</a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Social</span>
            <a href="https://www.linkedin.com/in/colheen-nkodia-diabat%C3%A9-001322296/" target="_blank" className="text-sm font-medium hover:text-indigo-600 transition-colors">LinkedIn</a>
            <a href="https://github.com/Colheen0/" target="_blank" className="text-sm font-medium hover:text-indigo-600 transition-colors">GitHub</a>
            <a href="https://www.instagram.com/nekhco?igsh=MW92OTBrY29kaTR6ag%3D%3D&utm_source=qr" className="text-sm font-medium hover:text-indigo-600 transition-colors">Instagram</a>
          </div>

          <div className="hidden md:flex flex-col gap-4 col-span-2 text-right">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Localisation</span>
            <p className="text-sm font-medium text-slate-600">Basé en Île-de-France (Marne-la-Vallée)</p>
            <p className="text-xs text-slate-400 italic">Disponible en présentiel ou télétravail</p>
          </div>
        </div>

        {/* Copyright & Crédits */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 font-medium">
            © {currentYear} — Conçu et codé avec passion.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold px-2 py-1 bg-slate-50 border border-slate-200 rounded text-slate-500">REACT</span>
            <span className="text-[10px] font-bold px-2 py-1 bg-slate-50 border border-slate-200 rounded text-slate-500">TAILWIND V4</span>
            <span className="text-[10px] font-bold px-2 py-1 bg-slate-50 border border-slate-200 rounded text-slate-500">TYPESCRIPT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};