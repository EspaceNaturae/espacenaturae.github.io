import React from 'react';
import { AlertTriangle, Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-white pt-20 pb-10 border-t border-naturae-100">
      <div className="container mx-auto px-6">
        
        {/* Warnings Section */}
        <div className="max-w-4xl mx-auto bg-naturae-50 border border-naturae-200 rounded-2xl p-8 mb-16">
            <h4 className="flex items-center gap-2 text-amber-800 font-bold font-serif text-lg mb-4">
                <AlertTriangle className="w-5 h-5" /> Mise en garde
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-naturae-700 leading-relaxed">
                <p>
                    Les produits Essence Naturaē sont fabriqués à la main avec des ingrédients naturels. Nous recommandons de faire un test préalable sur une petite région de la peau pour vérifier la tolérance.
                </p>
                <p>
                    Cessez immédiatement l’utilisation en cas d’irritation, rougeur ou réaction inhabituelle. Évitez le contact direct avec les yeux et ne pas appliquer sur une peau lésée.
                </p>
                <p className="md:col-span-2 text-naturae-500 text-xs italic border-t border-naturae-200 pt-4 mt-2">
                    Conserver les produits dans un endroit frais et sec, à l’abri de la chaleur et de la lumière directe.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
                <h3 className="text-3xl font-serif font-bold text-naturae-900 mb-4">Espace Naturaē</h3>
                <p className="text-naturae-600 max-w-xs">
                    Inspirés par la nature, créés pour votre bien-être. Des soins simples, authentiques et bienveillants.
                </p>
            </div>
            
            <div>
                <h5 className="font-bold text-naturae-900 mb-4">Navigation</h5>
                <ul className="space-y-2 text-naturae-600 text-sm">
                    <li><a href="#" onClick={(e) => scrollToSection(e, '#')} className="hover:text-sage-600 transition-colors">Accueil</a></li>
                    <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-sage-600 transition-colors">À Propos</a></li>
                    <li><a href="#skincare" onClick={(e) => scrollToSection(e, '#skincare')} className="hover:text-sage-600 transition-colors">Soins</a></li>
                    <li><a href="#tisanes" onClick={(e) => scrollToSection(e, '#tisanes')} className="hover:text-sage-600 transition-colors">Tisanes</a></li>
                </ul>
            </div>

            <div>
                <h5 className="font-bold text-naturae-900 mb-4">Suivez-nous</h5>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-naturae-100 rounded-full flex items-center justify-center text-naturae-800 hover:bg-sage-600 hover:text-white transition-all">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-naturae-100 rounded-full flex items-center justify-center text-naturae-800 hover:bg-sage-600 hover:text-white transition-all">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-naturae-100 rounded-full flex items-center justify-center text-naturae-800 hover:bg-sage-600 hover:text-white transition-all">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>

        <div className="text-center pt-8 border-t border-naturae-100 text-naturae-400 text-sm">
            &copy; {new Date().getFullYear()} Espace Naturaē. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;