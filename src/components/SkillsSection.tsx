import { 
  Zap, 
  Lightbulb, 
  Shield, 
  Flame, 
  Camera, 
  Settings, 
  FileText, 
  BarChart3, 
  Layers 
} from "lucide-react";

const skills = [
  {
    icon: Zap,
    title: "Instalações Elétricas",
    description: "Projetos completos de instalações elétricas residenciais, comerciais e industriais."
  },
  {
    icon: Lightbulb,
    title: "Luminotécnico",
    description: "Estudos e projetos de iluminação eficientes e confortáveis."
  },
  {
    icon: Shield,
    title: "SPDA",
    description: "Sistema de Proteção contra Descargas Atmosféricas."
  },
  {
    icon: Flame,
    title: "SDAI",
    description: "Sistema de Detecção e Alarme de Incêndio."
  },
  {
    icon: Camera,
    title: "CFTV",
    description: "Circuito Fechado de Televisão para segurança."
  },
  {
    icon: Settings,
    title: "Automação",
    description: "Sistemas de automação predial e residencial."
  },
  {
    icon: FileText,
    title: "Diagramas Elétricos",
    description: "Elaboração de diagramas unifilares e multifilares."
  },
  {
    icon: BarChart3,
    title: "Estudos Elétricos",
    description: "Análises de demanda, curto-circuito e seletividade."
  },
  {
    icon: Layers,
    title: "Compatibilização BIM",
    description: "Integração e compatibilização de projetos em BIM."
  }
];

const SkillsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <h2 className="section-title">Principais Habilidades</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className="glass-card p-6 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <skill.icon className="w-7 h-7 text-accent" />
              </div>
              
              <h3 className="text-lg font-semibold font-display text-foreground mb-2">
                {skill.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
