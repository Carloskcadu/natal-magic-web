import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
    telefone: "",
    endereco: "",
    rua: "",
    bairro: "",
    cidade: "",
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
    if (!formData.nome || !formData.telefone || !formData.endereco || !formData.rua || !formData.bairro || !formData.cidade || !formData.cep) {
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
      description: "Agora finalize sua compra clicando no botão abaixo.",
    });
  };

  const handlePurchaseClick = () => {
    window.open("https://go.perfectpay.com.br/PPU38CQ1KOS", "_blank");
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

        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 border-2 border-secondary/20 mt-4">
          <p className="text-sm text-foreground/90 text-center">
            ⚠️ <strong>Importante:</strong> Essas informações são de extrema importância para que possamos enviar todos os itens de forma correta e sem falha. 
            <br />
            🚚 <strong>Prazo de entrega:</strong> 10 dias úteis com <strong className="text-secondary">FRETE GRÁTIS</strong>!
          </p>
        </div>

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

            <div className="space-y-2">
              <Label htmlFor="endereco">Endereço *</Label>
              <Input
                id="endereco"
                name="endereco"
                value={formData.endereco}
                onChange={handleInputChange}
                placeholder="Endereço completo"
                required
              />
            </div>

            <div className="space-y-2">
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
              <Label htmlFor="bairro">Bairro *</Label>
              <Input
                id="bairro"
                name="bairro"
                value={formData.bairro}
                onChange={handleInputChange}
                placeholder="Nome do bairro"
                required
              />
            </div>

            <div className="space-y-2">
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
              onClick={handlePurchaseClick}
              size="lg"
              className="w-full bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-secondary-foreground shadow-gold-glow text-xl px-10 py-6 animate-pulse hover:animate-none font-bold border-2 border-secondary/50"
            >
              🎁 FINALIZE SUA COMPRA AQUI!
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutDialog;