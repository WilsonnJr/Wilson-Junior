import { useRef, useEffect, useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import wilsonPhoto from "@/assets/wilson-photo.jpeg";

// Sound wave bars component
const SoundWaveBars = () => {
  const barCount = 40;
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="flex items-center gap-[3px] h-full w-full justify-center opacity-30">
        {Array.from({ length: barCount }).map((_, i) => {
          const delay = Math.random() * 2;
          const duration = 0.8 + Math.random() * 1.2;
          const maxH = 20 + Math.random() * 60;
          return (
            <motion.div
              key={i}
              className="w-[2px] rounded-full"
              style={{
                background: "hsl(72 100% 50%)",
                boxShadow: "0 0 4px hsl(72 100% 50% / 0.4)",
              }}
              animate={{
                height: [8, maxH, 12, maxH * 0.6, 8],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 100, damping: 20 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center relative overflow-hidden"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "hsl(72 100% 50% / 0.05)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "hsl(72 100% 50% / 0.03)" }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="flex flex-col items-center text-center gap-8"
          style={{ rotateX, rotateY, perspective: 1000 }}
        >
          {/* Profile photo with neon ring and sound waves */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            {/* Sound wave bars behind */}
            <div className="absolute -inset-16 md:-inset-24">
              <SoundWaveBars />
            </div>

            {/* Breathing neon ring */}
            <motion.div
              className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full"
              style={{
                background: "transparent",
                boxShadow: "0 0 20px hsl(72 100% 50% / 0.4), 0 0 60px hsl(72 100% 50% / 0.15), inset 0 0 20px hsl(72 100% 50% / 0.1)",
              }}
              animate={{
                boxShadow: [
                  "0 0 20px hsl(72 100% 50% / 0.3), 0 0 60px hsl(72 100% 50% / 0.1), inset 0 0 20px hsl(72 100% 50% / 0.05)",
                  "0 0 30px hsl(72 100% 50% / 0.6), 0 0 80px hsl(72 100% 50% / 0.25), inset 0 0 30px hsl(72 100% 50% / 0.15)",
                  "0 0 20px hsl(72 100% 50% / 0.3), 0 0 60px hsl(72 100% 50% / 0.1), inset 0 0 20px hsl(72 100% 50% / 0.05)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Neon border ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "2px solid hsl(72 100% 50% / 0.5)",
                }}
              />
              {/* Photo */}
              <div className="absolute inset-[3px] rounded-full overflow-hidden">
                <img
                  src={wilsonPhoto}
                  alt="Wilson Junior - Projetista Elétrico"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Outer decorative ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: "1px solid hsl(72 100% 50% / 0.2)" }}
              animate={{
                scale: [1.15, 1.2, 1.15],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating badge "4+ Anos" */}
            <motion.div
              className="absolute -right-4 top-4 md:-right-8 md:top-6 glass-card px-4 py-2 flex flex-col items-center"
              style={{
                border: "1px solid hsl(72 100% 50% / 0.3)",
                boxShadow: "0 0 15px hsl(72 100% 50% / 0.15)",
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-2xl md:text-3xl font-bold font-display text-gradient">4+</span>
              <span className="text-[10px] md:text-xs text-muted-foreground whitespace-nowrap">Anos de exp.</span>
            </motion.div>

            {/* Badge "Experiência Elétrica" */}
            <motion.div
              className="absolute -left-4 bottom-4 md:-left-12 md:bottom-6 glass-card px-3 py-2"
              style={{
                border: "1px solid hsl(72 100% 50% / 0.2)",
              }}
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] md:text-xs text-accent font-medium">⚡ Especialista BIM</span>
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display leading-tight">
              <span className="text-accent" style={{ textShadow: "0 0 30px hsl(72 100% 50% / 0.3)" }}>
                Wilson
              </span>
              <br />
              <span className="text-foreground">Junior</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Projetista Elétrico Sênior especializado em projetos elétricos
            desenvolvidos em metodologia BIM, com ampla experiência em Revit e
            AutoCAD.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-base rounded-full glow-accent"
            >
              <a href="#sobre-mim">
                Sobre mim
                <ChevronDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;