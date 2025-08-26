
import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Instagram, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto container-padding">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/906e85e1-5297-457b-8099-b330ba850469.png" 
              alt="Closet Toda Linda - Moda Feminina Elegante"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/clo.settodalinda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Siga-nos no Instagram"
            >
              <Instagram size={20} />
            </a>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-hero-primary rounded-full px-6"
            >
              <Heart className="w-4 h-4 mr-2" />
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Menu de navegação"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-border/50 animate-fade-in">
            <div className="py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 transition-colors font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 transition-colors font-medium"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 transition-colors font-medium"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 transition-colors font-medium"
              >
                Contato
              </button>
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border/30">
                <a 
                  href="https://www.instagram.com/clo.settodalinda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-colors"
                  aria-label="Siga-nos no Instagram"
                >
                  <Instagram size={24} />
                </a>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-hero-primary rounded-full px-6"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
