import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre as decorações de Natal.", "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-primary to-primary/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Fale Conosco
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Entre em contato e transforme seu Natal em um momento inesquecível
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-gold-glow mb-8 text-center">
            <h3 className="text-3xl font-display font-bold text-primary mb-4">
              Solicite um Orçamento
            </h3>
            <p className="text-lg text-card-foreground/80 mb-6">
              Nossa equipe está pronta para ajudar você a escolher as melhores decorações para o seu espaço.
              Atendimento rápido e personalizado via WhatsApp!
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-gold-glow text-lg px-8 py-6"
            >
              <MessageCircle className="mr-2" size={24} />
              Chamar no WhatsApp
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-primary-foreground/20 transition-smooth">
              <Phone className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h4 className="font-display font-semibold text-primary-foreground mb-2">Telefone</h4>
              <p className="text-primary-foreground/80">(00) 0000-0000</p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-primary-foreground/20 transition-smooth">
              <Mail className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h4 className="font-display font-semibold text-primary-foreground mb-2">E-mail</h4>
              <p className="text-primary-foreground/80">contato@natalmagico.com</p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-primary-foreground/20 transition-smooth">
              <MapPin className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h4 className="font-display font-semibold text-primary-foreground mb-2">Localização</h4>
              <p className="text-primary-foreground/80">Atendemos toda região</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-primary-foreground/70">
              Horário de atendimento: Segunda a Sábado, 9h às 19h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
