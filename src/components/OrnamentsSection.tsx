import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Star, Lightbulb, Gift, MessageCircle } from "lucide-react";
import treeDecoratedImage from "@/assets/tree-decorated.jpg";
import CheckoutDialog from "./CheckoutDialog";

const OrnamentsSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const ornaments = [
    {
      icon: Sparkles,
      title: "Bolas Decorativas",
      description: "Disponíveis em diversas cores e acabamentos: fosco, brilhante, glitter"
    },
    {
      icon: Star,
      title: "Estrelas",
      description: "Do topo à base, estrelas que brilham e encantam"
    },
    {
      icon: Lightbulb,
      title: "Luzes LED",
      description: "Iluminação especial que cria uma atmosfera mágica e aconchegante"
    },
    {
      icon: Gift,
      title: "Complementos",
      description: "Laços, fitas, pinhas e outros detalhes que fazem toda a diferença"
    },
  ];

  return (
    <section id="enfeites" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Enfeites que Transformam
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Os enfeites são a alma da decoração natalina. São eles que transformam uma simples árvore 
            em uma obra de arte que emociona e cria memórias inesquecíveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Content */}
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-4">
                Coleção Completa de Enfeites
              </h3>
            </div>
            
            {ornaments.map((ornament, index) => {
              const Icon = ornament.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-gold-glow transition-smooth cursor-pointer bg-card border-2 border-border hover:border-secondary"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <h4 className="text-xl font-display font-bold text-secondary mb-2">
                        {ornament.title}
                      </h4>
                      <p className="text-card-foreground/80">
                        {ornament.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Image */}
          <div className="animate-fade-in relative">
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
              <Badge className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-4 py-2 shadow-lg">
                🔥 Descontos Black Friday
              </Badge>
              <Badge className="bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-4 py-2 shadow-lg">
                ✓ Frete Grátis
              </Badge>
            </div>
            <div className="absolute bottom-4 right-4 z-10">
              <div className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground font-bold text-3xl px-8 py-4 rounded-full shadow-gold-glow border-2 border-secondary/50">
                R$ 15,90
              </div>
            </div>
            <img 
              src={treeDecoratedImage} 
              alt="Árvore de Natal totalmente decorada com bolas, estrelas, luzes e presentes" 
              className="w-full h-auto rounded-2xl shadow-elegant object-cover"
            />
          </div>
        </div>

        <div className="mt-8 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border-2 border-secondary/20 text-center">
          <h4 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">
            🎁 Kits Completos Disponíveis
          </h4>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6">
            Oferecemos kits de decoração completos para que sua árvore fique perfeita. 
            Cada kit é cuidadosamente selecionado com enfeites que se harmonizam em cores e estilos.
          </p>
          <Button 
            onClick={() => setDialogOpen(true)}
            size="lg"
            className="bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-secondary-foreground shadow-gold-glow text-xl px-10 py-6 animate-pulse hover:animate-none font-bold border-2 border-secondary/50 w-full md:w-auto"
          >
            <MessageCircle className="mr-3" size={28} />
            ✨ GARANTIR MEU KIT AGORA!
          </Button>
        </div>
      </div>

      <CheckoutDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        productName="Kit Completo de Enfeites"
        productPrice="R$ 15,90"
      />
    </section>
  );
};

export default OrnamentsSection;
