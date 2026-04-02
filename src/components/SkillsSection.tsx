import { motion } from "framer-motion";
import { lazy, Suspense, useState } from "react";
import type { ShapeType } from "./WireframeShape";

const WireframeShape = lazy(() => import("./WireframeShape"));

const skills: { shape: ShapeType; title: string; description: string }[] = [
  {
    shape: "icosahedron",
    title: "Instalações Elétricas",
    description: "Projetos completos de instalações elétricas residenciais, comerciais e industriais.",
  },
  {
    shape: "octahedron",
    title: "Luminotécnico",
    description: "Estudos e projetos de iluminação eficientes e confortáveis.",
  },
  {
    shape: "dodecahedron",
    title: "SPDA",
    description: "Sistema de Proteção contra Descargas Atmosféricas.",
  },
  {
    shape: "tetrahedron",
    title: "SDAI",
    description: "Sistema de Detecção e Alarme de Incêndio.",
  },
  {
    shape: "torus",
    title: "CFTV",
    description: "Circuito Fechado de Televisão para segurança.",
  },
  {
    shape: "torusKnot",
    title: "Automação",
    description: "Sistemas de automação predial e residencial.",
  },
  {
    shape: "cube",
    title: "Diagramas Elétricos",
    description: "Elaboração de diagramas unifilares e multifilares.",
  },
  {
    shape: "cylinder",
    title: "Estudos Elétricos",
    description: "Análises de demanda, curto-circuito e seletividade.",
  },
  {
    shape: "cone",
    title: "Compatibilização BIM",
    description: "Integração e compatibilização de projetos em BIM.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1 as const,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const SkillsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
          {skills.map((skill, index) => {
            const isFocused = hoveredIndex === index;
            const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <motion.div
                key={skill.title}
                className="glass-card p-6 group cursor-pointer transition-all duration-300"
                style={{
                  opacity: isDimmed ? 0.4 : 1,
                  filter: isDimmed ? "brightness(0.5)" : "none",
                }}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Suspense
                  fallback={
                    <div className="w-full h-[120px] flex items-center justify-center">
                      <div className="animate-breathe w-3 h-3 rounded-full bg-primary" />
                    </div>
                  }
                >
                  <WireframeShape
                    shape={skill.shape}
                    focused={isFocused}
                    dimmed={isDimmed}
                  />
                </Suspense>

                <h3 className="text-lg font-semibold font-display text-foreground mb-2 mt-3">
                  {skill.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
