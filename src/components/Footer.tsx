
import React from 'react';
import { Heart, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border/30">
      <div className="container mx-auto container-padding py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <div className="flex justify-center sm:justify-start items-center mb-3 sm:mb-4">
              <img 
                src="/lovable-uploads/906e85e1-5297-457b-8099-b330ba850469.png" 
                alt="Closet Toda Linda"
                className="h-12 sm:h-16 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              Moda feminina com elegância e qualidade. Estilo que inspira confiança em cada detalhe.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
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
          <div className="text-center sm:text-left">
            <h3 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contato</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center justify-center sm:justify-start">
                <MapPin className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm">R. João Batista de Castilhos, 147</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <span className="text-xs sm:text-sm ml-6">Vila Ré, Quaraí - RS</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Phone className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                <a href="tel:+5555996239472" className="text-xs sm:text-sm hover:text-primary transition-colors">
                  (55) 99623-9472
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Mail className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                <a 
                  href="mailto:rafaeladeoliveirastefani@gmail.com" 
                  className="text-xs sm:text-sm hover:text-primary transition-colors break-all"
                >
                  rafaeladeoliveirastefani@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">Horário de Funcionamento</h3>
            <div className="space-y-2 text-muted-foreground text-xs sm:text-sm">
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
        <div className="border-t border-border/30 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-muted-foreground space-y-3 sm:space-y-0">
            <div className="flex items-center">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-2" />
              <span>© {currentYear} Closet Toda Linda. Todos os direitos reservados.</span>
            </div>
            <div className="text-center sm:text-right">
              <p>CNPJ: 036.038.230-44</p>
              <p className="flex items-center justify-center sm:justify-end">
                Desenvolvido com <Heart className="w-2 h-2 sm:w-3 sm:h-3 text-primary inline mx-1" /> para mulheres que inspiram
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
