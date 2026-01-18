import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    href: "https://wa.me/5543984479229"
  }
];

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-32">
      <div className="container">
        <h2 className="section-title">Entre em contato comigo</h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Tem um projeto em mente? Vamos conversar sobre como posso ajudar a transformar suas ideias em realidade.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 text-center hover-lift group block"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all">
                  <contact.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                
                <h3 className="text-lg font-semibold font-display text-foreground mb-2">
                  {contact.label}
                </h3>
                
                <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors break-all">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-10 py-6 text-base rounded-full glow-accent"
            >
              <a href="mailto:wilsonjuniorlive10271@gmail.com">
                Iniciar Conversa
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
