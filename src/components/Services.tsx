
import React, { useEffect, useRef } from 'react';
import { Heart, Sparkles, Crown, Star, Gift, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="flex justify-center items-center mb-6">
              <Sparkles className="w-8 h-8 text-accent mr-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient-primary">
                Nossos Serviços Exclusivos
              </h2>
              <Sparkles className="w-8 h-8 text-accent ml-3" />
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Experiências personalizadas que transformam sua relação com a moda
            </p>
          </div>

          {/* Main Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Service 1 */}
            <div className="animate-on-scroll">
              <div className="card-elegant p-8 h-full group hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-400 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                      Atendimento Personalizado
                    </h3>
                    <p className="text-primary font-medium">Consultoria de Estilo Individual</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nossa especialista oferece auxílio completo na escolha do look ideal para cada ocasião. 
                  Analisamos seu estilo pessoal, tipo físico e preferências para criar combinações 
                  perfeitas que realçam sua beleza natural.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-4 h-4 text-accent mr-2" />
                    <span>Análise de estilo pessoal</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-4 h-4 text-accent mr-2" />
                    <span>Combinações para diferentes ocasiões</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-4 h-4 text-accent mr-2" />
                    <span>Dicas de styling profissional</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-4 h-4 text-accent mr-2" />
                    <span>Atendimento exclusivo e dedicado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="animate-on-scroll">
              <div className="card-elegant p-8 h-full group hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                      Novidades Exclusivas
                    </h3>
                    <p className="text-primary font-medium">Acesso Prioritário</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Clientes fiéis têm o privilégio de receber novidades e lançamentos antes de todos. 
                  Seja a primeira a conhecer as tendências e garantir as peças mais desejadas 
                  da nova coleção.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-4 h-4 text-accent mr-2" />
                    <span>Pré-lançamentos exclusivos</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-4 h-4 text-accent mr-2" />
                    <span>Notificações de novos produtos</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-4 h-4 text-accent mr-2" />
                    <span>Acesso a coleções limitadas</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-4 h-4 text-accent mr-2" />
                    <span>Programa de fidelidade especial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="animate-on-scroll">
            <div className="card-gradient p-8 rounded-3xl">
              <div className="text-center mb-8">
                <Crown className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                  Experiência Completa
                </h3>
                <p className="text-muted-foreground">
                  Tudo pensado para fazer você se sentir especial
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-lg mb-2">Ambiente Acolhedor</h4>
                  <p className="text-muted-foreground text-sm">
                    Espaço pensado para seu conforto e bem-estar durante a experiência de compra
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-lg mb-2">Peças Selecionadas</h4>
                  <p className="text-muted-foreground text-sm">
                    Curadoria cuidadosa de peças que combinam tendência, qualidade e elegância
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-lg mb-2">Atendimento Humanizado</h4>
                  <p className="text-muted-foreground text-sm">
                    Cuidado genuíno com cada cliente, criando relacionamentos duradouros
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-6 sm:mt-8 px-4">
                <Button 
                  onClick={scrollToContact}
                  size="lg"
                  className="btn-hero-primary rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:scale-105 transform transition-all duration-300 w-full sm:w-auto max-w-xs mx-auto"
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="whitespace-nowrap">Agende Seu Atendimento</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
