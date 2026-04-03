import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useRef } from "react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "wilsonjuniorlive10271@gmail.com",
    href: "mailto:wilsonjuniorlive10271@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Wilson Ferreira Novaes Junior",
    href: "https://www.linkedin.com/in/wilson-ferreira-novaes-junior-200b30235/",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Enviar mensagem",
    href: "https://wa.me/5543984479229?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20projetos",
  },
];

// Spark particle for Contact Sphere
interface Spark {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
  size: number;
}

const SparkParticle = ({ spark }: { spark: Spark }) => {
  const dx = Math.cos(spark.angle) * spark.speed * 80;
  const dy = Math.sin(spark.angle) * spark.speed * 80;

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: spark.x,
        top: spark.y,
        width: spark.size,
        height: spark.size,
        background: "hsl(var(--neon))",
        boxShadow: `0 0 ${spark.size * 2}px hsl(72 100% 50% / 0.8)`,
      }}
      initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      animate={{
        opacity: 0,
        x: dx,
        y: dy,
        scale: 0,
      }}
      transition={{ duration: 0.6 + Math.random() * 0.4, ease: "easeOut" }}
    />
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring" as const, stiffness: 150 },
  },
};

const ContactSection = () => {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const sparkIdRef = useRef(0);

  const handleContactSphereClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newSparks: Spark[] = [];
      for (let i = 0; i < 12; i++) {
        newSparks.push({
          id: sparkIdRef.current++,
          x,
          y,
          angle: (Math.PI * 2 * i) / 12 + (Math.random() - 0.5) * 0.5,
          speed: 0.5 + Math.random() * 1,
          size: 3 + Math.random() * 4,
        });
      }
      setSparks((prev) => [...prev, ...newSparks]);

      // Cleanup after animation
      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => !newSparks.includes(s)));
      }, 1200);
    },
    []
  );

  return (
    <section id="contato" className="py-20 md:py-32">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Entre em contato comigo
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <motion.p
            className="text-lg text-muted-foreground mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tem um projeto em mente? Vamos conversar sobre como posso ajudar a
            transformar suas ideias em realidade.
          </motion.p>

          {/* Social contact icons */}
          <motion.div
            className="grid sm:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {contacts.map((contact) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 text-center group block"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-accent group-hover:scale-110"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <contact.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </motion.div>

                <h3 className="text-lg font-semibold font-display text-foreground mb-2">
                  {contact.label}
                </h3>

                <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors break-all">
                  {contact.value}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Sphere - pulsing energy button */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="relative inline-block">
              {/* Outer pulsing rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "hsl(var(--neon))",
                  filter: "blur(25px)",
                }}
                animate={{
                  opacity: [0.15, 0.35, 0.15],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "hsl(var(--neon))",
                  filter: "blur(40px)",
                }}
                animate={{
                  opacity: [0.08, 0.2, 0.08],
                  scale: [1.1, 1.5, 1.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              <motion.a
                href="https://wa.me/5543984479229?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-2 px-12 py-5 text-lg font-bold font-display rounded-full bg-accent text-accent-foreground overflow-hidden"
                style={{
                  boxShadow:
                    "0 0 20px hsl(72 100% 50% / 0.5), 0 0 60px hsl(72 100% 50% / 0.2)",
                }}
                whileHover={{
                  scale: 1.08,
                  boxShadow:
                    "0 0 30px hsl(72 100% 50% / 0.7), 0 0 80px hsl(72 100% 50% / 0.3), 0 0 120px hsl(72 100% 50% / 0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 20px hsl(72 100% 50% / 0.4), 0 0 60px hsl(72 100% 50% / 0.15)",
                    "0 0 30px hsl(72 100% 50% / 0.6), 0 0 80px hsl(72 100% 50% / 0.25)",
                    "0 0 20px hsl(72 100% 50% / 0.4), 0 0 60px hsl(72 100% 50% / 0.15)",
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                onClick={handleContactSphereClick}
              >
                {/* Inner shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 2,
                  }}
                />
                <MessageCircle className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Solicitar Orçamento</span>

                {/* Spark particles */}
                <AnimatePresence>
                  {sparks.map((spark) => (
                    <SparkParticle key={spark.id} spark={spark} />
                  ))}
                </AnimatePresence>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
