import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import wilsonPhoto from "@/assets/wilson-photo.jpeg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display mb-6 leading-tight">
              <span className="text-accent">Wilson</span>
              <br />
              <span className="text-foreground">Junior</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Projetista Elétrico Sênior especializado em projetos elétricos desenvolvidos em metodologia BIM, com ampla experiência em Revit e AutoCAD.
            </p>
            
            <Button 
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-base rounded-full glow-accent"
            >
              <a href="#sobre-mim">
                Sobre mim
                <ChevronDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Profile photo */}
          <div className="flex-shrink-0 animate-slide-up">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-accent/20 glow-accent">
                <img
                  src={wilsonPhoto}
                  alt="Wilson Junior - Projetista Elétrico"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/30 scale-110 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
