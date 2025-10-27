import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-christmas.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre as decorações de Natal.", "_blank");
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-in">
          Natal Mágico em Família
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          O Natal é o momento mais especial do ano, onde a família se reúne para celebrar o amor, a união e a magia das festas.
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Transforme sua casa em um verdadeiro cenário natalino com nossas decorações premium. Cada detalhe foi pensado para criar memórias inesquecíveis.
        </p>
        <Button 
          onClick={handleWhatsAppClick}
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-gold-glow text-lg px-8 py-6 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <MessageCircle className="mr-2" size={24} />
          Fale Conosco no WhatsApp
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
