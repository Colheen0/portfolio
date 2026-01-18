import { ScrollReveal } from '../utils/ScrollReveal';

export const Synopsis = () => {
  return (
    <section id="synopsis" className="relative py-32 bg-slate-900 text-white z-10">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* En-tête de section */}
        <ScrollReveal>
          <div className="flex flex-col items-center mb-20">
            <span className="text-indigo-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4">
              L'intrigue
            </span>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter italic">
              Synopsis
            </h2>
            <div className="w-12 h-1 bg-indigo-500 mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid gap-16">
          {/* La grande phrase d'accroche */}
          <ScrollReveal delay={0.2}>
            <p className="text-2xl md:text-4xl font-light italic text-slate-200 leading-tight text-center px-4">
              "Dans un monde où les départs ne sont jamais des adieux, mais des commencements brutaux..."
            </p>
          </ScrollReveal>

          {/* Le corps du texte */}
          <ScrollReveal delay={0.4}>
            <div className="columns-1 md:columns-2 gap-12 space-y-8 text-slate-400 leading-relaxed text-lg font-light">
              <p>
                <strong className="text-white font-bold italic">Departure</strong> n'est pas seulement un voyage à travers l'espace, c'est une odyssée vers l'inconnu. L'histoire suit les traces de survivants qui doivent réapprendre à vivre alors que tout ce qu'ils connaissaient a disparu en un instant.
              </p>
              
              <p>
                Au cœur de cet univers, la technologie et le mystère s'entremêlent. Les enjeux ne sont plus seulement individuels, ils deviennent universels. Comment rester humain quand les lois de la physique elles-mêmes semblent s'effondrer ?
              </p>

              <p>
                Ce projet est né d'une volonté d'explorer les thèmes du deuil, de la résilience et de la découverte. Chaque personnage porte en lui une part de cette ombre, cherchant une lumière qui semble s'éloigner à chaque pas.
              </p>

              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl italic text-sm text-indigo-300">
                Plongez dans un récit où chaque chapitre est une pièce d'un puzzle complexe, mêlant action intense et moments de pure contemplation.
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};