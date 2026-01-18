import { Building2, ExternalLink } from "lucide-react";

const companies = [
  "MRV",
  "PLAENGE",
  "BRAVO",
  "PIEMONTE",
  "YTICON",
  "YOSHII"
];

const projects = [
  {
    title: "Empreendimentos Residenciais",
    description: "Desenvolvimento completo de projetos elétricos para torres residenciais, incluindo estudos de demanda, projeto de entrada de energia, distribuição e iluminação.",
    tags: ["BIM", "Revit", "AutoCAD"]
  },
  {
    title: "Complexos Comerciais",
    description: "Projetos integrados para centros comerciais com sistemas de CFTV, automação predial e eficiência energética.",
    tags: ["SDAI", "CFTV", "Automação"]
  },
  {
    title: "Edifícios Corporativos",
    description: "Soluções elétricas completas para edifícios empresariais com foco em confiabilidade e sustentabilidade.",
    tags: ["SPDA", "Luminotécnico", "BIM"]
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <h2 className="section-title">Projetos Desenvolvidos</h2>
        
        <p className="text-lg text-muted-foreground mb-8">
          Explore algumas construtoras que eu já trabalhei:
        </p>
        
        {/* Companies logos */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
          {companies.map((company) => (
            <div 
              key={company}
              className="glass-card px-6 py-3 flex items-center gap-2 hover-lift"
            >
              <Building2 className="w-5 h-5 text-accent" />
              <span className="font-semibold text-foreground">{company}</span>
            </div>
          ))}
          <div className="glass-card px-6 py-3 flex items-center gap-2 hover-lift">
            <span className="font-semibold text-muted-foreground">+ outras</span>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-card p-6 hover-lift group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold font-display text-foreground">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
