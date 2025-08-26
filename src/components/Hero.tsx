
import React from 'react';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo Hero */}
          <div className="mb-8 animate-fade-in-up">
            <img 
              src="/lovable-uploads/906e85e1-5297-457b-8099-b330ba850469.png" 
              alt="Closet Toda Linda - Moda Feminina com Elegância e Estilo"
              className="h-32 md:h-40 lg:h-48 w-auto mx-auto mb-6 drop-shadow-lg"
            />
          </div>

          {/* Hero Text */}
          <div className="mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              <span className="text-gradient-primary">Estilo que</span>{' '}
              <span className="text-foreground">Inspira</span>
              <Heart className="inline-block w-8 h-8 md:w-12 md:h-12 text-primary ml-4 animate-pulse" />
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-light">
              Moda feminina com <span className="text-primary font-medium">elegância</span> e <span className="text-primary font-medium">qualidade</span>
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Proporcionando confiança e estilo em cada detalhe. Descubra peças únicas que realçam sua personalidade e elegância natural.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="btn-hero-primary rounded-full px-8 py-4 text-lg shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Conheça Nosso Atendimento
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              onClick={scrollToAbout}
              size="lg" 
              variant="outline"
              className="btn-hero-outline rounded-full px-8 py-4 text-lg hover:scale-105 transform transition-all duration-300"
            >
              Sobre o Closet Toda Linda
            </Button>
          </div>

          {/* Features Highlight */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Atendimento Personalizado</h3>
              <p className="text-muted-foreground">Auxílio especializado na escolha do look ideal para cada ocasião</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Novidades Exclusivas</h3>
              <p className="text-muted-foreground">Clientes fiéis recebem lançamentos e novidades em primeira mão</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 text-primary font-script text-2xl flex items-center justify-center">♛</div>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Elegância & Qualidade</h3>
              <p className="text-muted-foreground">Peças selecionadas que proporcionam confiança e estilo únicos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
