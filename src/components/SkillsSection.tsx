import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Zap,
  Lightbulb,
  Shield,
  Flame,
  Camera,
  Cpu,
  GitBranch,
  BarChart3,
  Layers,
} from "lucide-react";

const skills = [
  {
    icon: Zap,
    title: "Instalações Elétricas",
    description: "Projetos completos residenciais, comerciais e industriais.",
    level: 95,
  },
  {
    icon: Lightbulb,
    title: "Luminotécnico",
    description: "Estudos e projetos de iluminação eficientes e confortáveis.",
    level: 90,
  },
  {
    icon: Shield,
    title: "SPDA",
    description: "Sistema de Proteção contra Descargas Atmosféricas.",
    level: 88,
  },
  {
    icon: Flame,
    title: "SDAI",
    description: "Sistema de Detecção e Alarme de Incêndio.",
    level: 85,
  },
  {
    icon: Camera,
    title: "CFTV",
    description: "Circuito Fechado de Televisão para segurança.",
    level: 82,
  },
  {
    icon: Cpu,
    title: "Automação",
    description: "Sistemas de automação predial e residencial.",
    level: 80,
  },
  {
    icon: GitBranch,
    title: "Diagramas Elétricos",
    description: "Elaboração de diagramas unifilares e multifilares.",
    level: 92,
  },
  {
    icon: BarChart3,
    title: "Estudos Elétricos",
    description: "Análises de demanda, curto-circuito e seletividade.",
    level: 87,
  },
  {
    icon: Layers,
    title: "Compatibilização BIM",
    description: "Integração e compatibilização de projetos em BIM.",
    level: 93,
  },
];

const SkillCard = ({
  skill,
  index,
  hoveredIndex,
  onHover,
}: {
  skill: (typeof skills)[0];
  index: number;
  hoveredIndex: number | null;
  onHover: (i: number | null) => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isFocused = hoveredIndex === index;
  const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
  const Icon = skill.icon;

  return (
    <motion.div
      ref={ref}
      className="glass-card p-6 group cursor-pointer transition-all duration-300"
      style={{
        opacity: isDimmed ? 0.4 : 1,
        filter: isDimmed ? "brightness(0.6)" : "none",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{
        y: -6,
        transition: { duration: 0.25 },
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Header: icon + title + percentage */}
      <div className="flex items-center gap-3 mb-3">
        <motion.div
          className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20"
          whileHover={{
            boxShadow: "0 0 20px hsl(var(--primary) / 0.4)",
          }}
        >
          <Icon className="w-5 h-5 text-primary" />
        </motion.div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold font-display text-foreground truncate">
            {skill.title}
          </h3>
        </div>
        <motion.span
          className="text-sm font-bold font-mono text-primary"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 + index * 0.08 }}
        >
          {skill.level}%
        </motion.span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 rounded-full bg-muted/50 overflow-hidden mb-3">
        <motion.div
          className="h-full rounded-full relative"
          style={{
            background:
              "linear-gradient(90deg, hsl(var(--primary) / 0.6), hsl(var(--primary)))",
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3 + index * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, hsl(var(--primary-foreground) / 0.3) 50%, transparent 100%)",
              backgroundSize: "200% 100%",
            }}
            animate={
              isInView
                ? { backgroundPosition: ["200% 0", "-200% 0"] }
                : {}
            }
            transition={{
              duration: 2,
              delay: 1 + index * 0.08,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "linear",
            }}
          />

          {/* Glow tip */}
          {isFocused && (
            <motion.div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
              style={{
                background: "hsl(var(--primary))",
                boxShadow: "0 0 12px hsl(var(--primary) / 0.8)",
              }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </motion.div>
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground leading-relaxed">
        {skill.description}
      </p>
    </motion.div>
  );
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              skill={skill}
              index={index}
              hoveredIndex={hoveredIndex}
              onHover={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
