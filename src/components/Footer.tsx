import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="py-10 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="flex items-center justify-center">
          <motion.p
            className="text-muted-foreground text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            © {currentYear}{" "}
            <span className="text-accent font-semibold">Wilson</span> Junior.
            Todos os direitos reservados.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
