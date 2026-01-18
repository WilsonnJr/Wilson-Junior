import { FileSearch, Box, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: FileSearch,
    title: "Estudo & Análise",
    description: "Análise completa de demanda elétrica, estudos de viabilidade e dimensionamento de sistemas."
  },
  {
    icon: Box,
    title: "Modelagem 3D BIM",
    description: "Desenvolvimento de modelos 3D completos em Revit com compatibilização multidisciplinar."
  },
  {
    icon: Wrench,
    title: "Projeto Executivo",
    description: "Documentação técnica completa para execução, incluindo memoriais e especificações."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const
    }
  }
};

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
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
          Desenvolvimento completo de parte elétrica de empreendimentos desde o estudo à modelagem 3D completa.
        </motion.p>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="glass-card p-8 text-center hover-lift group"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <service.icon className="w-10 h-10 text-accent" />
              </motion.div>
              
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
