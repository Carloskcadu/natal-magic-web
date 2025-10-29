import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName: string;
  productPrice: string;
}

const CheckoutDialog = ({ open, onOpenChange, productName, productPrice }: CheckoutDialogProps) => {
  const { toast } = useToast();
  const [showWhatsAppButton, setShowWhatsAppButton] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.email || !formData.telefone || !formData.rua || !formData.cep || !formData.cidade) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    setShowWhatsAppButton(true);
    toast({
      title: "Cadastro realizado!",
      description: "Agora finalize sua compra no WhatsApp.",
    });
  };

  const handleWhatsAppClick = () => {
    const mensagem = `Olá! Quero finalizar minha compra:\n\n` +
      `📦 Produto: ${productName}\n` +
      `💰 Valor: ${productPrice}\n\n` +
      `👤 Nome: ${formData.nome}\n` +
      `📧 Email: ${formData.email}\n` +
      `📱 Telefone: ${formData.telefone}\n\n` +
      `📍 Endereço de entrega:\n` +
      `${formData.rua}, ${formData.numero}\n` +
      `${formData.bairro}\n` +
      `${formData.cidade} - ${formData.estado}\n` +
      `CEP: ${formData.cep}`;
    
    window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(mensagem)}`, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-primary">
            Finalize sua compra - {productName}
          </DialogTitle>
          <p className="text-lg text-secondary font-bold">{productPrice}</p>
        </DialogHeader>

        {!showWhatsAppButton ? (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome Completo *</Label>
              <Input
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                placeholder="Seu nome completo"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="rua">Rua *</Label>
                <Input
                  id="rua"
                  name="rua"
                  value={formData.rua}
                  onChange={handleInputChange}
                  placeholder="Nome da rua"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="numero">Número *</Label>
                <Input
                  id="numero"
                  name="numero"
                  value={formData.numero}
                  onChange={handleInputChange}
                  placeholder="000"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bairro">Bairro</Label>
              <Input
                id="bairro"
                name="bairro"
                value={formData.bairro}
                onChange={handleInputChange}
                placeholder="Nome do bairro"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="cidade">Cidade *</Label>
                <Input
                  id="cidade"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleInputChange}
                  placeholder="Nome da cidade"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="estado">Estado</Label>
                <Input
                  id="estado"
                  name="estado"
                  value={formData.estado}
                  onChange={handleInputChange}
                  placeholder="UF"
                  maxLength={2}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cep">CEP *</Label>
              <Input
                id="cep"
                name="cep"
                value={formData.cep}
                onChange={handleInputChange}
                placeholder="00000-000"
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-secondary-foreground shadow-gold-glow text-xl py-6 font-bold border-2 border-secondary/50"
            >
              Continuar para Finalização
            </Button>
          </form>
        ) : (
          <div className="text-center py-8 space-y-6">
            <div className="text-lg text-foreground">
              ✅ Cadastro realizado com sucesso!
            </div>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="w-full bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-secondary-foreground shadow-gold-glow text-xl px-10 py-6 animate-pulse hover:animate-none font-bold border-2 border-secondary/50"
            >
              <MessageCircle className="mr-3" size={28} />
              🎁 FINALIZE SUA COMPRA AQUI!
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutDialog;