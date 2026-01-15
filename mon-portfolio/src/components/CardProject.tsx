interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

export const ProjectCard = ({ title, description, tags }: ProjectCardProps) => {
  return (
    <div className="group border-l-2 border-slate-100 pl-6 py-4 hover:border-indigo-500 transition-all hover:bg-white hover:shadow-sm rounded-r-xl">
      <h4 className="text-lg font-bold group-hover:text-indigo-600 transition-colors">
        {title}
      </h4>
      <p className="text-slate-500 text-sm mt-2 mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="text-[10px] font-black px-2 py-1 bg-slate-100 text-slate-600 rounded uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};