const AboutSection = () => {
  return (
    <section id="sobre-mim" className="py-20 md:py-32">
      <div className="container">
        <h2 className="section-title">Sobre mim</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Seja muito bem-vindo(a) ao meu portfólio. Conheça a minha trajetória:
            </p>
            
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
              Sou um profissional dedicado à excelência em projetos elétricos, com foco em metodologia BIM e domínio completo das ferramentas Revit e AutoCAD. Minha experiência abrange desde instalações residenciais até grandes empreendimentos comerciais e industriais.
            </p>
            
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
              Ao longo da minha carreira, desenvolvi expertise em diversas áreas da engenharia elétrica, sempre buscando soluções inovadoras e eficientes para cada projeto.
            </p>
          </div>
          
          <div className="glass-card p-8 md:p-12 text-center">
            <div className="mb-4">
              <span className="text-7xl md:text-8xl font-bold font-display text-gradient">4+</span>
            </div>
            <p className="text-xl md:text-2xl text-foreground font-medium">
              Anos de experiência profissional
            </p>
            <p className="text-muted-foreground mt-2">
              Especialidade em projetos integrados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
