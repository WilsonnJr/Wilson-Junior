const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} <span className="text-accent font-semibold">Wilson</span> Junior. Todos os direitos reservados.
          </p>
          
          <nav className="flex gap-6">
            <a 
              href="#sobre-mim" 
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Sobre
            </a>
            <a 
              href="#contato" 
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
