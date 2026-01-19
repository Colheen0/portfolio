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
          {/* Le corps du texte */}
          <ScrollReveal delay={0.4}>
            <div className="columns-1 md:columns-2 gap-12 space-y-8 text-slate-400 leading-relaxed text-lg font-light">
              <p>
                <strong className="text-white font-bold italic">Departure</strong> n'est pas seulement un voyage à travers l'espace, c'est une odyssée vers l'inconnu. L'histoire suit un groupe d'exploration qui part découvrir un ancien monde, afin de découvrir de vieux mystères.
              </p>
            
              <p>
               Là où les cultures s’opposent et où les rêves des nations s’entrechoquent, une force se cache dans les interstices. Ce qui n’était qu'une expédition pourrait cacher quelque chose de plus sombre. Comment trouver le courage de faire un pas de plus, quand on découvre que les fondations de notre vie ne sont que les débris du rêve d'un autre ?              
              </p>
              <p>
                Ce projet c'est mon projet de coeur, j'y ai mis tout ce que j'ai : mon imagination, ma passion, mon espoir, tout. C'est une histoire que j'ai écrite d'abord pour moi en y mettant tout ce que j'aime dans la fiction, mais c'est aussi une histoire que j'ai envie de partager avec le plus grand nombre pour faire réfléchire les gens, les faire rêver et revenir à des choses simples.
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