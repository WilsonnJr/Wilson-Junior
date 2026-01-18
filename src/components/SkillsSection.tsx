import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1 as const,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

const SkillsSection = () => {
  return (
    <section id="habilidades" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Principais Habilidades
        </motion.h2>
        
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill) => (
            <motion.div 
              key={skill.title}
              className="glass-card p-6 hover-lift group cursor-pointer"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <skill.icon className="w-7 h-7 text-accent" />
              </motion.div>
              
              <h3 className="text-lg font-semibold font-display text-foreground mb-2">
                {skill.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
