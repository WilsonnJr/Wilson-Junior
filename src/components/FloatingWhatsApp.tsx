import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/5543984479229?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar Orçamento via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-sm shadow-lg"
      style={{
        background: "hsl(142 70% 45%)",
        color: "#fff",
        boxShadow:
          "0 0 20px hsl(142 70% 45% / 0.4), 0 4px 15px hsl(0 0% 0% / 0.3)",
      }}
      initial={{ opacity: 0, scale: 0, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 120 }}
      whileHover={{
        scale: 1.08,
        boxShadow:
          "0 0 30px hsl(142 70% 45% / 0.6), 0 6px 25px hsl(0 0% 0% / 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">Solicitar Orçamento</span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
