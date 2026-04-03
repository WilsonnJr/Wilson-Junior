import { motion } from "framer-motion";

const stats = [
  { label: "Projetos entregues", value: 50, suffix: "+" },
  { label: "Clientes satisfeitos", value: 30, suffix: "+" },
  { label: "Certificações", value: 6, suffix: "" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  return (
    <motion.span
      className="text-3xl font-bold font-display text-gradient"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {value}{suffix}
    </motion.span>
  );
};

const AboutSection = () => {
  return (
    <section id="sobre-mim" className="py-20 md:py-32">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Sobre mim
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Seja muito bem-vindo(a) ao meu portfólio. Conheça a minha trajetória:
            </p>

            <motion.p
              className="text-base md:text-lg text-foreground/90 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Sou um profissional dedicado à excelência em projetos elétricos, com foco em metodologia BIM e domínio completo das ferramentas Revit e AutoCAD. Minha experiência abrange desde instalações residenciais até grandes empreendimentos comerciais e industriais.
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-foreground/90 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Ao longo da minha carreira, desenvolvi expertise em diversas áreas da engenharia elétrica, sempre buscando soluções inovadoras e eficientes para cada projeto.
            </motion.p>
          </motion.div>

          {/* Right - Experience showcase */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Animated background glow */}
            <motion.div
              className="absolute w-72 h-72 rounded-full bg-primary/10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 w-full max-w-sm">
              {/* Main ring card */}
              <motion.div
                className="relative mx-auto w-56 h-56 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Rotating ring */}
                <motion.svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 200 200"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <defs>
                    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                      <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="url(#ringGrad)"
                    strokeWidth="2"
                    strokeDasharray="8 6"
                  />
                </motion.svg>

                {/* Progress arc */}
                <motion.svg
                  className="absolute inset-0 w-full h-full -rotate-90"
                  viewBox="0 0 200 200"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="hsl(var(--primary) / 0.1)"
                    strokeWidth="6"
                  />
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 80}
                    initial={{ strokeDashoffset: 2 * Math.PI * 80 }}
                    whileInView={{ strokeDashoffset: 2 * Math.PI * 80 * 0.15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                    style={{ filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.5))" }}
                  />
                </motion.svg>

                {/* Center content */}
                <div className="text-center z-10">
                  <motion.span
                    className="text-6xl font-bold font-display text-gradient block"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
                  >
                    4+
                  </motion.span>
                  <motion.span
                    className="text-sm text-muted-foreground mt-1 block"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    Anos de experiência
                  </motion.span>
                </div>
              </motion.div>

              {/* Mini stat cards around the ring */}
              {stats.map((stat, index) => {
                const positions = [
                  "top-0 -left-4 md:-left-8",
                  "top-0 -right-4 md:-right-8",
                  "-bottom-4 left-1/2 -translate-x-1/2",
                ];
                return (
                  <motion.div
                    key={stat.label}
                    className={`absolute ${positions[index]} glass-card px-4 py-3 text-center min-w-[120px]`}
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 1.3 + index * 0.2,
                      type: "spring",
                      stiffness: 150,
                    }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
                    }}
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
