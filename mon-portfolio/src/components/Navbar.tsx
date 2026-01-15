export const Navbar = () => (
  <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
    <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between font-medium">
      <span className="font-black tracking-tighter text-xl"><a href="#accueil">Accueil</a></span>
      <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-slate-500">
        <a href="#departure" className="hover:text-indigo-600 transition-colors">Departure</a>
        <a href="#projets" className="hover:text-indigo-600 transition-colors">Projets</a>
        <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
      </div>
    </div>
  </nav>
);