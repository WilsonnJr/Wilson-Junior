import { motion } from "framer-motion";

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
          
          <motion.div 
            className="glass-card p-8 md:p-12 text-center"
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <span className="text-7xl md:text-8xl font-bold font-display text-gradient">4+</span>
            </motion.div>
            <motion.p 
              className="text-xl md:text-2xl text-foreground font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Anos de experiência profissional
            </motion.p>
            <motion.p 
              className="text-muted-foreground mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Especialidade em projetos integrados
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
