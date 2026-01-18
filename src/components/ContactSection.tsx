import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "wilsonjuniorlive10271@gmail.com",
    href: "mailto:wilsonjuniorlive10271@gmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Wilson Ferreira Novaes Junior",
    href: "https://www.linkedin.com/in/wilson-ferreira-novaes-junior-200b30235/"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Enviar mensagem",
    href: "https://wa.me/5543984479229?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20projetos"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring" as const,
      stiffness: 150
    }
  }
};

const ContactSection = () => {
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
            Tem um projeto em mente? Vamos conversar sobre como posso ajudar a transformar suas ideias em realidade.
          </motion.p>
          
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
                className="glass-card p-6 text-center hover-lift group block"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all"
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
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-10 py-6 text-base rounded-full glow-accent"
              >
                <a href="mailto:wilsonjuniorlive10271@gmail.com">
                  Iniciar Conversa
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
