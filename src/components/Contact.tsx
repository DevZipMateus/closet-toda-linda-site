
import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-gradient-section">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="flex justify-center items-center mb-6">
              <Heart className="w-8 h-8 text-accent mr-3" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient-primary">
                Entre em Contato
              </h2>
              <Heart className="w-8 h-8 text-accent ml-3" />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para tornar sua experiência ainda mais especial
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-on-scroll">
              <div className="card-elegant p-8">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                      <p className="text-muted-foreground">Rua João Batista de Castilhos 147</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                      <a 
                        href="tel:+5555996239472" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (55) 99623-9472
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <a 
                        href="mailto:rafaeladeoliveirastefani@gmail.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        rafaeladeoliveirastefani@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Horário de Funcionamento</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Segunda à Sexta: 08:30 às 19:00</p>
                        <p>Sábado: 09:00 às 19:00</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Redes Sociais</h4>
                      <a 
                        href="https://www.instagram.com/clo.settodalinda" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                      >
                        @clo.settodalinda
                        <Instagram className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 space-y-4">
                  <Button 
                    asChild
                    size="lg"
                    className="btn-hero-primary w-full rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300"
                  >
                    <a href="https://wa.me/5555996239472" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Fale Conosco no WhatsApp
                    </a>
                  </Button>
                  
                  <Button 
                    asChild
                    size="lg" 
                    variant="outline"
                    className="btn-hero-outline w-full rounded-xl hover:scale-105 transform transition-all duration-300"
                  >
                    <a href="https://www.instagram.com/clo.settodalinda" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-5 h-5 mr-2" />
                      Siga no Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="animate-on-scroll">
              <div className="card-elegant p-2 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123456789!2d-53.123456!3d-29.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Jo%C3%A3o%20Batista%20de%20Castilhos%20147!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Closet Toda Linda"
                  className="w-full h-full min-h-[450px]"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Additional CTA */}
          <div className="mt-16 text-center animate-on-scroll">
            <div className="card-gradient p-8 rounded-3xl">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Pronta para uma Experiência Única?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Visite nosso closet e descubra peças que vão transformar seu guarda-roupa. 
                Estamos ansiosas para conhecer você!
              </p>
              <Button 
                asChild
                size="lg"
                className="btn-hero-primary rounded-full px-8 py-4 text-lg shadow-2xl hover:scale-105 transform transition-all duration-300"
              >
                <a href="https://wa.me/5555996239472" target="_blank" rel="noopener noreferrer">
                  <Heart className="w-5 h-5 mr-2" />
                  Agende Sua Visita
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
