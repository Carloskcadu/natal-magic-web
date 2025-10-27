import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import treePlainImage from "@/assets/tree-plain.jpg";

const TreesSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5500000000000?text=Olá! Gostaria de conhecer as árvores de Natal disponíveis.", "_blank");
  };

  const treeSizes = [
    { size: "1,20m", description: "Perfeita para apartamentos e espaços compactos" },
    { size: "1,50m", description: "Tamanho ideal para salas de estar médias" },
    { size: "1,80m", description: "Elegante e imponente para ambientes amplos" },
    { size: "2,10m+", description: "Majestosa, perfeita para pé direito alto e grandes espaços" },
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
          <div className="order-2 md:order-1 animate-fade-in">
            <img 
              src={treePlainImage} 
              alt="Árvore de Natal natural sem enfeites" 
              className="w-full h-auto rounded-2xl shadow-elegant object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-6">
              Tamanhos Disponíveis
            </h3>
            
            {treeSizes.map((tree, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-gold-glow transition-smooth cursor-pointer bg-card border-2 border-border hover:border-secondary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-2xl font-display font-bold text-secondary mb-2">
                  {tree.size}
                </h4>
                <p className="text-card-foreground/80">
                  {tree.description}
                </p>
              </Card>
            ))}

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-secondary">
              <p className="text-lg text-foreground">
                <strong className="text-secondary">Qualidade Premium:</strong> Todas as nossas árvores são feitas com materiais de alta qualidade, 
                garantindo durabilidade e beleza por muitos Natais.
              </p>
            </div>

            <div className="mt-6 text-center">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-gold-glow text-lg px-8 py-4 animate-pulse hover:animate-none"
              >
                <MessageCircle className="mr-2" size={24} />
                Consultar Árvores Disponíveis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreesSection;
