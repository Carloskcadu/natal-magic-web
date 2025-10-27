import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary/95 py-8 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-display font-bold text-gradient-gold mb-2">
            Natal Mágico
          </h3>
          <p className="text-primary-foreground/70 mb-4">
            Transformando casas em lares cheios de magia natalina
          </p>
          <div className="flex items-center justify-center text-primary-foreground/60 text-sm">
            <span>Feito com</span>
            <Heart className="w-4 h-4 mx-1 text-secondary fill-secondary" />
            <span>para você e sua família</span>
          </div>
          <p className="text-primary-foreground/50 text-sm mt-4">
            © 2025 Natal Mágico. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
