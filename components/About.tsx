import React from 'react';
import { Leaf, Heart, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-naturae-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-naturae-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-naturae-900 mb-8">
            Notre Philosophie
          </h2>
          <div className="w-24 h-1 bg-sage-400 mx-auto mb-10"></div>
          
          <p className="text-lg md:text-xl text-naturae-700 leading-relaxed font-light">
            Chez <span className="font-serif font-semibold text-naturae-900">Espace Naturaē</span>, nous sommes convaincus que prendre soin de soi devrait passer par des ingrédients aussi simples et bienveillants que ceux destinés à nourrir notre corps. C’est pourquoi nous proposons uniquement des formulations simples, élaborées à partir d’ingrédients naturels soigneusement sélectionnés.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 text-center">
            <div className="flex flex-col items-center group">
                <div className="p-4 bg-white rounded-full shadow-md mb-4 group-hover:bg-sage-50 transition-colors">
                    <Leaf className="w-8 h-8 text-sage-600" />
                </div>
                <h3 className="font-serif font-semibold text-naturae-900 mb-2">100% Naturel</h3>
                <p className="text-sm text-naturae-600">Ingrédients simples et purs</p>
            </div>
            <div className="flex flex-col items-center group">
                <div className="p-4 bg-white rounded-full shadow-md mb-4 group-hover:bg-sage-50 transition-colors">
                    <Heart className="w-8 h-8 text-naturae-500" />
                </div>
                <h3 className="font-serif font-semibold text-naturae-900 mb-2">Fait avec soin</h3>
                <p className="text-sm text-naturae-600">Fabrication artisanale</p>
            </div>
            <div className="flex flex-col items-center group">
                <div className="p-4 bg-white rounded-full shadow-md mb-4 group-hover:bg-sage-50 transition-colors">
                    <Sparkles className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="font-serif font-semibold text-naturae-900 mb-2">Bienveillance</h3>
                <p className="text-sm text-naturae-600">Pour le corps et l'esprit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;