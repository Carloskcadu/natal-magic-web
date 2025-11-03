import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";
import treePlainImage from "@/assets/tree-plain.jpg";
import CheckoutDialog from "./CheckoutDialog";

const TreesSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const treeFeatures = [
    { title: "Galhos Firmes e Resistentes", description: "Estrutura robusta que suporta todos os seus enfeites favoritos" },
    { title: "Folhas Macias e Ultra Realistas", description: "Toque suave e aparência natural que impressiona" },
    { title: "Fácil Montagem", description: "Monte em minutos sem complicação, desmonte e guarde facilmente" },
    { title: "Tamanho Perfeito: 1,20m", description: "Ideal para qualquer ambiente, compacta mas imponente" },
  ];

  return (
    <section id="arvores" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Árvores de Natal Premium
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o tamanho perfeito para o seu espaço e crie o cenário mágico que sua família merece
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1 animate-fade-in relative">
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
                R$ 49,90
              </div>
            </div>
            <img 
              src={treePlainImage} 
              alt="Árvore de Natal natural sem enfeites" 
              className="w-full h-auto rounded-2xl shadow-elegant object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-4">
                Árvore Premium 1,20m
              </h3>
            </div>
            
            {treeFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-gold-glow transition-smooth cursor-pointer bg-card border-2 border-border hover:border-secondary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-xl font-display font-bold text-secondary mb-2 text-center md:text-left">
                  {feature.title}
                </h4>
                <p className="text-card-foreground/80 text-center md:text-left">
                  {feature.description}
                </p>
              </Card>
            ))}

            <div className="mt-8 p-6 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-xl border-2 border-secondary/30 text-center">
              <p className="text-lg text-foreground mb-2">
                <strong className="text-secondary text-xl">✨ Qualidade Premium Garantida</strong>
              </p>
              <p className="text-foreground/80">
                Materiais de alta durabilidade que mantêm a beleza por muitos Natais
              </p>
            </div>

            <div className="mt-6 text-center">
              <Button 
                onClick={() => setDialogOpen(true)}
                size="lg"
                className="bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-secondary-foreground shadow-gold-glow text-xl px-10 py-6 animate-pulse hover:animate-none font-bold border-2 border-secondary/50 w-full md:w-auto"
              >
                <MessageCircle className="mr-3" size={28} />
                🎄 QUERO MINHA ÁRVORE AGORA!
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CheckoutDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        productName="Árvore de Natal Premium 1,20m"
        productPrice="R$ 49,90"
      />
    </section>
  );
};

export default TreesSection;
