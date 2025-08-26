
import React, { useEffect, useRef } from 'react';
import { Heart, Sparkles, Star, Crown } from 'lucide-react';

const About = () => {
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
    <section id="about" ref={sectionRef} className="section-padding bg-gradient-section">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="flex justify-center items-center mb-6">
              <Crown className="w-8 h-8 text-accent mr-3" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient-primary">
                Sobre o Closet Toda Linda
              </h2>
              <Crown className="w-8 h-8 text-accent ml-3" />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma boutique dedicada a realçar a beleza e elegância feminina através de peças cuidadosamente selecionadas
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Text Content */}
            <div className="animate-on-scroll">
              <h3 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
                Nossa Missão é Especial
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong className="text-primary">Oferecer moda feminina com elegância e qualidade</strong>, 
                  proporcionando confiança e estilo em cada detalhe. No Closet Toda Linda, acreditamos que 
                  cada mulher merece se sentir especial e radiante.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nosso compromisso vai além de vender roupas - criamos experiências que despertam a 
                  autoestima e realçam a personalidade única de cada cliente. Cada peça é escolhida 
                  pensando na mulher moderna que valoriza qualidade, conforto e sofisticação.
                </p>
                <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg">
                  <p className="text-lg font-script text-primary italic mb-2">
                    "Estilo que inspira"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Mais que um slogan, é nossa filosofia de vida
                  </p>
                </blockquote>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="card-elegant p-8 text-center">
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg">
                      <Heart className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-xl font-display font-semibold text-foreground mb-2">
                      Closet Toda Linda
                    </h4>
                    <p className="text-muted-foreground">
                      Rua João Batista de Castilhos 147
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <Star className="w-4 h-4 text-accent" />
                      <span>CNPJ: 036.038.230-44</span>
                    </div>
                    <div className="pt-4 border-t border-border/30">
                      <p className="font-medium text-foreground mb-2">Horário de Funcionamento</p>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Segunda à Sexta: 08:30 às 19:00</p>
                        <p>Sábado: 09:00 às 19:00</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-float opacity-80"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary rounded-full animate-float opacity-60" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
            <div className="card-gradient p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-display font-semibold mb-4">Elegância</h4>
              <p className="text-muted-foreground leading-relaxed">
                Peças selecionadas que refletem sofisticação e bom gosto em cada detalhe
              </p>
            </div>

            <div className="card-gradient p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-display font-semibold mb-4">Qualidade</h4>
              <p className="text-muted-foreground leading-relaxed">
                Comprometimento com materiais e acabamentos que garantem durabilidade e conforto
              </p>
            </div>

            <div className="card-gradient p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <Crown className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-display font-semibold mb-4">Exclusividade</h4>
              <p className="text-muted-foreground leading-relaxed">
                Experiência personalizada que faz cada cliente se sentir única e especial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
