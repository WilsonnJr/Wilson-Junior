import { motion } from "framer-motion";
import aboutImg from "@/assets/about-workspace.jpg";

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

            <motion.div
              className="glass-card p-6 mt-6 inline-flex items-center gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 120 }}
            >
              <span className="text-5xl font-bold font-display text-gradient">4+</span>
              <div>
                <p className="text-foreground font-medium">Anos de experiência</p>
                <p className="text-muted-foreground text-sm">Especialidade em projetos integrados</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Glow border effect */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            
            <div className="relative overflow-hidden rounded-2xl border border-border/50">
              <img
                src={aboutImg}
                alt="Workspace de engenharia elétrica com modelo BIM e plantas técnicas"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
