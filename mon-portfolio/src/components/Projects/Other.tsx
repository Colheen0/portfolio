interface OtherItemProps {
  title: string;
  category: string;
  icon: string;
}

const OtherItem = ({ title, category, icon }: OtherItemProps) => (
  <div className="min-w-70 bg-slate-50 border border-slate-200 p-6 rounded-2xl snap-center group hover:border-indigo-500 transition-colors">
    <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform">{icon}</span>
    <h4 className="font-bold text-slate-900">{title}</h4>
    <p className="text-xs text-slate-500 uppercase font-black tracking-widest mt-1">{category}</p>
  </div>
);

export const Other = () => {
  return (
    <section id="others" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-black mb-16 uppercase tracking-tighter italic">Projets Personnels</h2>

        {/* Ligne 1: After Effects */}
        <div className="mb-16">
          <h3 className="text-sm font-black text-indigo-500 uppercase tracking-[0.2em] mb-8 border-l-4 border-indigo-500 pl-4">Post-Production (After Effects)</h3>
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x scrollbar-hide">
            <OtherItem title="Motion Design Logo" category="Animation" icon="🎬" />
            <OtherItem title="Effets Spéciaux Clip" category="VFX" icon="✨" />
            <OtherItem title="Générique Fiction" category="Compositing" icon="📺" />
          </div>
        </div>

        {/* Ligne 2: Audacity / Audio */}
        <div>
          <h3 className="text-sm font-black text-amber-500 uppercase tracking-[0.2em] mb-8 border-l-4 border-amber-500 pl-4">Sound Design (Audacity)</h3>
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x scrollbar-hide">
            <OtherItem title="Nettoyage Interview" category="Audio" icon="🎙️" />
            <OtherItem title="Ambiances Sonores" category="Sound Design" icon="🔊" />
          </div>
        </div>
      </div>
    </section>
  );
};