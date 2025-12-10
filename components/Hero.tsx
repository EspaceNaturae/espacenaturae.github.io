import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/nature123/1920/1080" 
          alt="Nature background" 
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-naturae-50/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <span className="inline-block py-1 px-3 border border-naturae-800/30 rounded-full text-xs font-bold tracking-[0.2em] text-naturae-900 uppercase mb-6 bg-white/40 backdrop-blur-sm">
          Bien-être holistique
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-naturae-900 mb-6 drop-shadow-sm leading-tight">
          Espace <span className="text-sage-700 italic">Naturaē</span>
        </h1>
        <p className="text-xl md:text-2xl text-naturae-800 font-light mb-10 tracking-wide max-w-2xl mx-auto">
          Créés avec soin, inspirés par la nature.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
                href="#skincare"
                onClick={(e) => scrollToSection(e, '#skincare')}
                className="px-8 py-3 bg-naturae-800 text-white rounded-full font-medium hover:bg-naturae-900 transition-all hover:scale-105 shadow-lg cursor-pointer"
            >
                Découvrir nos soins
            </a>
            <a 
                href="#tisanes"
                onClick={(e) => scrollToSection(e, '#tisanes')}
                className="px-8 py-3 bg-white/80 backdrop-blur-sm text-naturae-900 border border-naturae-200 rounded-full font-medium hover:bg-white transition-all hover:scale-105 shadow-sm cursor-pointer"
            >
                Nos tisanes
            </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-naturae-800">
        <a 
          href="#about" 
          aria-label="Scroll down"
          onClick={(e) => scrollToSection(e, '#about')}
          className="cursor-pointer"
        >
          <ArrowDown className="w-6 h-6 opacity-70" />
        </a>
      </div>
    </section>
  );
};

export default Hero;