import { motion } from "framer-motion";
import aboutImg from "@/assets/about-workspace.png";

const experienceData = [
  { year: "2020", value: 20 },
  { year: "2021", value: 40 },
  { year: "2022", value: 65 },
  { year: "2023", value: 85 },
  { year: "2024", value: 100 },
];

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

            {/* Experience card with animated chart */}
            <motion.div
              className="glass-card p-6 mt-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 120 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl font-bold font-display text-gradient">4+</span>
                <div>
                  <p className="text-foreground font-medium">Anos de experiência</p>
                  <p className="text-muted-foreground text-sm">Especialidade em projetos integrados</p>
                </div>
              </div>
              
              {/* Animated bar chart */}
              <div className="flex items-end gap-2 h-20 mt-2">
                {experienceData.map((item, index) => (
                  <div key={item.year} className="flex-1 flex flex-col items-center gap-1">
                    <motion.div
                      className="w-full rounded-t-md bg-gradient-to-t from-primary/80 to-primary relative group/bar cursor-pointer"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.9 + index * 0.15, ease: "easeOut" }}
                      whileHover={{ 
                        scaleY: 1.1, 
                        filter: "brightness(1.3)",
                        boxShadow: "0 0 15px hsl(var(--primary) / 0.5)"
                      }}
                    >
                      <motion.span 
                        className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-primary font-semibold opacity-0 group-hover/bar:opacity-100 transition-opacity"
                      >
                        {item.value}%
                      </motion.span>
                    </motion.div>
                    <span className="text-[10px] text-muted-foreground">{item.year}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image with transparent bg and hover effects */}
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Animated glow behind image */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-primary/10 blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.img
              src={aboutImg}
              alt="Engenheiro elétrico trabalhando com modelo BIM"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-auto max-w-md object-contain relative z-10 drop-shadow-2xl opacity-90"
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                opacity: 1,
                filter: "drop-shadow(0 0 30px hsl(var(--primary) / 0.4))"
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
