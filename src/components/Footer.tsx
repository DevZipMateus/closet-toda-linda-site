
import React from 'react';
import { Heart, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border/30">
      <div className="container mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center mb-4">
              <img 
                src="/lovable-uploads/906e85e1-5297-457b-8099-b330ba850469.png" 
                alt="Closet Toda Linda"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Moda feminina com elegância e qualidade. Estilo que inspira confiança em cada detalhe.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://www.instagram.com/clo.settodalinda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://wa.me/5555996239472"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Fale conosco no WhatsApp"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-display font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm">Rua João Batista de Castilhos 147</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <a href="tel:+5555996239472" className="text-sm hover:text-primary transition-colors">
                  (55) 99623-9472
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <a 
                  href="mailto:rafaeladeoliveirastefani@gmail.com" 
                  className="text-sm hover:text-primary transition-colors"
                >
                  rafaeladeoliveirastefani@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h3 className="font-display font-semibold text-lg mb-4">Horário de Funcionamento</h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              <div className="flex justify-between">
                <span>Segunda à Sexta:</span>
                <span>08:30 - 19:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado:</span>
                <span>09:00 - 19:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo:</span>
                <span>Fechado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center mb-4 md:mb-0">
              <Heart className="w-4 h-4 text-primary mr-2" />
              <span>© {currentYear} Closet Toda Linda. Todos os direitos reservados.</span>
            </div>
            <div className="text-center md:text-right">
              <p>CNPJ: 036.038.230-44</p>
              <p>Desenvolvido com <Heart className="w-3 h-3 text-primary inline mx-1" /> para mulheres que inspiram</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
