import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="py-8 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p 
            className="text-muted-foreground text-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            © {currentYear} <span className="text-accent font-semibold">Wilson</span> Junior. Todos os direitos reservados.
          </motion.p>
          
          <motion.nav 
            className="flex gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.a 
              href="#sobre-mim" 
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Sobre
            </motion.a>
            <motion.a 
              href="#contato" 
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Contato
            </motion.a>
          </motion.nav>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
