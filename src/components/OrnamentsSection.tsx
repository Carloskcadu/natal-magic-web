import { Card } from "@/components/ui/card";
import { Sparkles, Star, Lightbulb, Gift } from "lucide-react";
import treeDecoratedImage from "@/assets/tree-decorated.jpg";

const OrnamentsSection = () => {
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
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-6">
              Coleção Completa de Enfeites
            </h3>
            
            {ornaments.map((ornament, index) => {
              const Icon = ornament.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-gold-glow transition-smooth cursor-pointer bg-card border-2 border-border hover:border-secondary"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
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
          <div className="animate-fade-in">
            <img 
              src={treeDecoratedImage} 
              alt="Árvore de Natal totalmente decorada com bolas, estrelas, luzes e presentes" 
              className="w-full h-auto rounded-2xl shadow-elegant object-cover"
            />
          </div>
        </div>

        <div className="mt-8 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border-2 border-secondary/20 text-center">
          <h4 className="text-2xl font-display font-bold text-primary mb-4">
            Kits Completos Disponíveis
          </h4>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Oferecemos kits de decoração completos para que sua árvore fique perfeita. 
            Cada kit é cuidadosamente selecionado com enfeites que se harmonizam em cores e estilos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrnamentsSection;
