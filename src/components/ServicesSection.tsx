import { FileSearch, Box, Wrench } from "lucide-react";

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

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <h2 className="section-title">Como posso te ajudar</h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Desenvolvimento completo de parte elétrica de empreendimentos desde o estudo à modelagem 3D completa.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="glass-card p-8 text-center hover-lift group"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-10 h-10 text-accent" />
              </div>
              
              <h3 className="text-xl font-semibold font-display text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
