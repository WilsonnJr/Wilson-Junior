import { ExternalLink } from "lucide-react";

const companies = [
  {
    name: "MRV",
    logo: "https://logodownload.org/wp-content/uploads/2014/07/mrv-logo-1.png",
    url: "https://www.mrv.com.br"
  },
  {
    name: "PLAENGE",
    logo: "https://www.plaenge.com.br/Content/images/plaenge/logo-plaenge.svg",
    url: "https://www.plaenge.com.br"
  },
  {
    name: "BRAVO",
    logo: "https://construtora.bravo.com.br/img/logo-bravo.png",
    url: "https://construtora.bravo.com.br"
  },
  {
    name: "PIEMONTE",
    logo: "https://www.piemonte.com.br/site-piemonte-2023/wp-content/uploads/2023/02/piemonte-logo.svg",
    url: "https://www.piemonte.com.br"
  },
  {
    name: "YTICON",
    logo: "https://yticon.com.br/wp-content/uploads/2022/01/logo-yticon.svg",
    url: "https://yticon.com.br"
  },
  {
    name: "YOSHII",
    logo: "https://www.yoshii.com.br/wp-content/themes/yoshii/assets/images/logo.svg",
    url: "https://www.yoshii.com.br"
  }
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
            <a 
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-6 py-4 flex items-center gap-3 hover-lift group cursor-pointer"
            >
              <img 
                src={company.logo} 
                alt={`Logo ${company.name}`}
                className="h-8 w-auto object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
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
