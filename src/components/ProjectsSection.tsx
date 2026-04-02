import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectCorporate from "@/assets/project-corporate.jpg";

const LogoCarousel3D = lazy(() => import("./LogoCarousel3D"));

const projects = [
  {
    title: "Empreendimentos Residenciais",
    description:
      "Desenvolvimento completo de projetos elétricos para torres residenciais, incluindo estudos de demanda, projeto de entrada de energia, distribuição e iluminação.",
    tags: ["BIM", "Revit", "AutoCAD"],
    image: projectResidential,
  },
  {
    title: "Complexos Comerciais",
    description:
      "Projetos integrados para centros comerciais com sistemas de CFTV, automação predial e eficiência energética.",
    tags: ["SDAI", "CFTV", "Automação"],
    image: projectCommercial,
  },
  {
    title: "Edifícios Corporativos",
    description:
      "Soluções elétricas completas para edifícios empresariais com foco em confiabilidade e sustentabilidade.",
    tags: ["SPDA", "Luminotécnico", "BIM"],
    image: projectCorporate,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-20 md:py-32">
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

        {/* 3D Logo Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Suspense
            fallback={
              <div className="w-full h-[220px] md:h-[280px] glass-card flex items-center justify-center">
                <div className="animate-breathe w-4 h-4 rounded-full bg-primary" />
              </div>
            }
          >
            <LogoCarousel3D />
          </Suspense>
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
              className="glass-card p-6 group cursor-pointer relative overflow-hidden"
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              style={{
                boxShadow: "var(--shadow-card)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "hsl(72 100% 50% / 0.6)";
                el.style.boxShadow =
                  "var(--neon-glow-strong), var(--shadow-card)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "";
                el.style.boxShadow = "var(--shadow-card)";
              }}
            >
              {/* Gradient shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

              <div className="relative z-10">
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
                      className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: tagIndex * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
