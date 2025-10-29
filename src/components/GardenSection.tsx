import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Snowflake, TreePine, Home, MessageCircle } from "lucide-react";
import gardenDecorImage from "@/assets/garden-decor.jpg";
import CheckoutDialog from "./CheckoutDialog";

const GardenSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const decorations = [
    {
      icon: Snowflake,
      title: "Papai Noel Iluminado",
      description: "Figuras em tamanho real com iluminação LED para encantar a vizinhança"
    },
    {
      icon: TreePine,
      title: "Renas e Trenó",
      description: "Conjunto completo com renas iluminadas e trenó decorativo"
    },
    {
      icon: Home,
      title: "Decoração Completa",
      description: "Pisca-pisca, guirlandas, estrelas e muito mais para fachadas"
    },
  ];

  return (
    <section id="jardim" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Decoração de Jardim e Fachada
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Leve a magia do Natal para além das portas. Transforme seu jardim e fachada 
            em um verdadeiro espetáculo natalino que encanta todos que passam.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
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
            <img 
              src={gardenDecorImage} 
              alt="Decoração de jardim com Papai Noel, trenó e renas iluminados" 
              className="w-full h-auto rounded-2xl shadow-elegant object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-4">
                Decorações Externas Premium
              </h3>
              <div className="inline-block bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground font-bold text-3xl px-8 py-4 rounded-full shadow-gold-glow border-2 border-secondary/50">
                R$ 15,90
              </div>
            </div>
            
            {decorations.map((decoration, index) => {
              const Icon = decoration.icon;
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
                        {decoration.title}
                      </h4>
                      <p className="text-card-foreground/80">
                        {decoration.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-secondary">
              <p className="text-lg text-foreground">
                <strong className="text-secondary">Resistente às Intempéries:</strong> Todos os produtos para área externa 
                são desenvolvidos com materiais resistentes à chuva e ao sol, garantindo durabilidade.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 text-center bg-card hover:shadow-elegant transition-smooth">
            <div className="text-4xl font-display font-bold text-secondary mb-2">100+</div>
            <p className="text-foreground/80">Produtos Disponíveis</p>
          </Card>
          <Card className="p-6 text-center bg-card hover:shadow-elegant transition-smooth">
            <div className="text-4xl font-display font-bold text-secondary mb-2">LED</div>
            <p className="text-foreground/80">Iluminação Econômica</p>
          </Card>
          <Card className="p-6 text-center bg-card hover:shadow-elegant transition-smooth">
            <div className="text-4xl font-display font-bold text-secondary mb-2">2 Anos</div>
            <p className="text-foreground/80">Garantia</p>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button 
            onClick={() => setDialogOpen(true)}
            size="lg"
            className="bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-secondary-foreground shadow-gold-glow text-xl px-10 py-6 animate-pulse hover:animate-none font-bold border-2 border-secondary/50 w-full md:w-auto"
          >
            <MessageCircle className="mr-3" size={28} />
            🎅 DECORAR MEU JARDIM AGORA!
          </Button>
        </div>
      </div>

      <CheckoutDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        productName="Decoração de Jardim"
        productPrice="R$ 15,90"
      />
    </section>
  );
};

export default GardenSection;
