import { motion } from "framer-motion";
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
  },
  {
    icon: Lightbulb,
    title: "Luminotécnico",
    description: "Estudos e projetos de iluminação eficientes e confortáveis.",
  },
  {
    icon: Shield,
    title: "SPDA",
    description: "Sistema de Proteção contra Descargas Atmosféricas.",
  },
  {
    icon: Flame,
    title: "SDAI",
    description: "Sistema de Detecção e Alarme de Incêndio.",
  },
  {
    icon: Camera,
    title: "CFTV",
    description: "Circuito Fechado de Televisão para segurança.",
  },
  {
    icon: Cpu,
    title: "Automação",
    description: "Sistemas de automação predial e residencial.",
  },
  {
    icon: GitBranch,
    title: "Diagramas Elétricos",
    description: "Elaboração de diagramas unifilares e multifilares.",
  },
  {
    icon: BarChart3,
    title: "Estudos Elétricos",
    description: "Análises de demanda, curto-circuito e seletividade.",
  },
  {
    icon: Layers,
    title: "Compatibilização BIM",
    description: "Integração e compatibilização de projetos em BIM.",
  },
];

const SkillsSection = () => {
  return (
    <section id="habilidades" className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-3xl">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Principais <span className="text-primary">Habilidades</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-[2px] bg-border" />

          {skills.map((skill, index) => {
            const isLeft = index % 2 === 0;
            const Icon = skill.icon;
            const step = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={skill.title}
                className={`relative flex items-center mb-4 last:mb-0 ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {/* Center dot */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 z-10 w-3 h-3 rounded-full bg-primary"
                  style={{
                    boxShadow: "0 0 10px hsl(var(--primary) / 0.6)",
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.3, delay: index * 0.08 + 0.2 }}
                />

                {/* Card */}
                <motion.div
                  className={`glass-card p-4 w-[44%] cursor-default group`}
                  whileHover={{
                    y: -3,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:shadow-[0_0_12px_hsl(var(--primary)/0.3)] transition-shadow">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-mono text-primary/80 block leading-none mb-0.5">
                        {step}
                      </span>
                      <h3 className="text-sm font-semibold font-display text-foreground truncate leading-tight">
                        {skill.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
