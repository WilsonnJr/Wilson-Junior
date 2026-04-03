import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contato");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        // Hide when contact section is visible in viewport
        setVisible(rect.top > window.innerHeight * 0.6);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://wa.me/5543984479229?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Solicitar Orçamento via WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-5 py-3 font-bold font-display text-sm bg-accent text-accent-foreground overflow-hidden"
          style={{
            boxShadow:
              "0 0 20px hsl(72 100% 50% / 0.5), 0 0 60px hsl(72 100% 50% / 0.2)",
          }}
          initial={{ opacity: 0, scale: 0, y: 40 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            boxShadow: [
              "0 0 20px hsl(72 100% 50% / 0.4), 0 0 60px hsl(72 100% 50% / 0.15)",
              "0 0 30px hsl(72 100% 50% / 0.6), 0 0 80px hsl(72 100% 50% / 0.25)",
              "0 0 20px hsl(72 100% 50% / 0.4), 0 0 60px hsl(72 100% 50% / 0.15)",
            ],
          }}
          exit={{ opacity: 0, scale: 0, y: 40, transition: { duration: 0.3 } }}
          transition={{
            duration: 0.6,
            delay: 1.2,
            type: "spring",
            stiffness: 120,
            boxShadow: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.08,
            boxShadow:
              "0 0 30px hsl(72 100% 50% / 0.7), 0 0 80px hsl(72 100% 50% / 0.3), 0 0 120px hsl(72 100% 50% / 0.15)",
          }}
          whileTap={{ scale: 0.95 }}
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
          <span className="hidden sm:inline relative z-10">Solicitar Orçamento</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;
