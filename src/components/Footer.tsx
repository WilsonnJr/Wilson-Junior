import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/wilson-ferreira-novaes-junior-200b30235/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:wilsonjuniorlive10271@gmail.com",
    label: "Email",
  },
];

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
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            className="text-muted-foreground text-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            © {currentYear}{" "}
            <span className="text-accent font-semibold">Wilson</span> Junior.
            Todos os direitos reservados.
          </motion.p>

          {/* Social icons with neon fill on hover */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:bg-accent hover:border-accent hover:text-accent-foreground"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>

          <motion.nav
            className="flex gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#sobre-mim"
              className="text-sm text-muted-foreground hover:text-accent transition-colors neon-underline"
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="text-sm text-muted-foreground hover:text-accent transition-colors neon-underline"
            >
              Contato
            </a>
          </motion.nav>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
