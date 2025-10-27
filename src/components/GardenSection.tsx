import { Card } from "@/components/ui/card";
import { Snowflake, TreePine, Home } from "lucide-react";
import gardenDecorImage from "@/assets/garden-decor.jpg";

const GardenSection = () => {
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
          <div className="animate-fade-in">
            <img 
              src={gardenDecorImage} 
              alt="Decoração de jardim com Papai Noel, trenó e renas iluminados" 
              className="w-full h-auto rounded-2xl shadow-elegant object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-6">
              Decorações Externas Premium
            </h3>
            
            {decorations.map((decoration, index) => {
              const Icon = decoration.icon;
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
      </div>
    </section>
  );
};

export default GardenSection;
