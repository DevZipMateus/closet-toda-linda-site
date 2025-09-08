
import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Heart } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      {/* Expanded Message */}
      {isExpanded && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl p-4 max-w-xs animate-fade-in-up border border-primary/20">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-2">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-sm text-foreground">Closet Toda Linda</span>
            </div>
            <button 
              onClick={toggleExpanded}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
            Olá! 👋 Como podemos ajudar você a encontrar o look perfeito hoje?
          </p>
          <a
            href="https://wa.me/5555996239472"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 hover:bg-green-600 text-white text-center py-2 px-4 rounded-lg transition-colors text-sm font-medium"
          >
            Iniciar Conversa
          </a>
        </div>
      )}

      {/* Floating Button */}
      <div className="relative">
        <a
          href="https://wa.me/5555996239472"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse"
          aria-label="Abrir chat do WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-10 pointer-events-none" style={{animationDelay: '0.5s'}}></div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
