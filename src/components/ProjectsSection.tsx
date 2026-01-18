import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import mrvLogo from "@/assets/mrv.png";
import plaengeLogo from "@/assets/plaenge.jpg";
import piemonteLogo from "@/assets/piemonte.png";
import yticonLogo from "@/assets/yticon.jpg";
import yoshiiLogo from "@/assets/yoshii.webp";

const companies = [
  {
    name: "MRV",
    logo: mrvLogo,
    url: "https://www.mrv.com.br"
  },
  {
    name: "PLAENGE",
    logo: plaengeLogo,
    url: "https://www.plaenge.com.br"
  },
  {
    name: "PIEMONTE",
    logo: piemonteLogo,
    url: "https://www.piemonte.com.br"
  },
  {
    name: "YTICON",
    logo: yticonLogo,
    url: "https://yticon.com.br"
  },
  {
    name: "YOSHII",
    logo: yoshiiLogo,
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

const ProjectsSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Projetos Desenvolvidos
        </motion.h2>
        
        <motion.p 
          className="text-lg text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore algumas construtoras que eu já trabalhei:
        </motion.p>
        
        {/* Companies logos */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {companies.map((company, index) => (
            <motion.a 
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-6 py-4 flex items-center gap-3 hover-lift group cursor-pointer"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={company.logo} 
                alt={`Logo ${company.name}`}
                className="h-8 w-auto object-contain"
              />
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            </motion.a>
          ))}
          <motion.div 
            className="glass-card px-6 py-4 flex items-center"
            variants={itemVariants}
          >
            <span className="text-muted-foreground font-medium">entre outras</span>
          </motion.div>
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.title}
              className="glass-card p-6 hover-lift group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold font-display text-foreground">
                  {project.title}
                </h3>
                <motion.div
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </motion.div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span 
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: tagIndex * 0.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
