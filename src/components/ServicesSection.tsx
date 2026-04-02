import { FileSearch, Box, Wrench } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

const services = [
  {
    icon: FileSearch,
    title: "Estudo & Análise",
    description:
      "Análise completa de demanda elétrica, estudos de viabilidade e dimensionamento de sistemas.",
  },
  {
    icon: Box,
    title: "Modelagem 3D BIM",
    description:
      "Desenvolvimento de modelos 3D completos em Revit com compatibilização multidisciplinar.",
  },
  {
    icon: Wrench,
    title: "Projeto Executivo",
    description:
      "Documentação técnica completa para execução, incluindo memoriais e especificações.",
  },
];

// Magnetic icon component
const MagneticIcon = ({
  children,
}: {
  children: ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });
  const scale = useSpring(1, { stiffness: 300, damping: 20 });
  const glow = useTransform(scale, [1, 1.2], [0.2, 0.8]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    // Pull toward cursor (magnetic effect)
    x.set(distX * 0.35);
    y.set(distY * 0.35);
    scale.set(1.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, scale }}
    >
      {/* Glow backdrop */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "hsl(var(--neon))",
          filter: "blur(20px)",
          opacity: glow,
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Como posso te ajudar
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Desenvolvimento completo de parte elétrica de empreendimentos desde o
          estudo à modelagem 3D completa.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="glass-card p-8 text-center group"
              variants={cardVariants}
            >
              <MagneticIcon>
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 border border-accent/20 group-hover:border-accent/50 transition-colors">
                  <service.icon className="w-10 h-10 text-accent" />
                </div>
              </MagneticIcon>

              <h3 className="text-xl font-semibold font-display text-foreground mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
