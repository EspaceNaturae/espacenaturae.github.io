import React, { useState } from 'react';
import { ProductItem } from '../types';
import { X, Check, ShoppingBag } from 'lucide-react';

const products: ProductItem[] = [
  {
    id: 'box',
    name: 'Boîte découverte',
    description: 'Une collection artisanale de soins pour le corps et l’esprit, fabriqués en petites quantités. Idéal pour s\'initier à notre univers ou pour offrir.',
    image: 'https://picsum.photos/seed/giftbox/600/400',
    tag: 'Best-seller',
    details: [
      'Savon Douceur (100g) surgras',
      'Baume à lèvres Naturel (5g)',
      'Petite bougie "Sérénité" (120g)'
    ],
    ingredients: 'Huiles végétales biologiques, cire de soja, mèches en coton, huiles essentielles pures.'
  },
  {
    id: 'lip-naturel',
    name: 'Baume à lèvres - Le Naturel',
    description: 'Un baume minimaliste pour un soin quotidien. Enrichi d’huile et de beurres nourrissants pour protéger et adoucir les lèvres naturellement.',
    image: 'https://picsum.photos/seed/lipbalm1/600/400',
    details: [
      'Tube en carton compostable (5g)',
      'Sans huiles essentielles',
      'Convient aux peaux sensibles'
    ],
    ingredients: 'Suif de bœuf local, cire d\'abeille, huile de jojoba bio, vitamine E.'
  },
  {
    id: 'lip-menthe',
    name: 'Baume à lèvres - Menthe',
    description: 'Une touche rafraîchissante de menthe pour éveiller les sens. Une protection douce et vivifiante.',
    image: 'https://picsum.photos/seed/lipbalm2/600/400',
    details: [
      'Tube en carton compostable (5g)',
      'Effet frais immédiat',
      'Protection longue durée'
    ],
    ingredients: 'Suif de bœuf local, cire d\'abeille, huile de jojoba bio, huile essentielle de menthe poivrée, vitamine E.'
  }
];

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <section id="skincare" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sage-600 font-bold tracking-widest uppercase text-sm">Collection Artisanale</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-naturae-900 mt-2">Soins Quotidiens</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-naturae-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                {product.tag && (
                  <span className="absolute top-4 left-4 z-10 bg-sage-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.tag}
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-naturae-900 mb-3">{product.name}</h3>
                <p className="text-naturae-600 leading-relaxed mb-6">{product.description}</p>
                <button 
                  onClick={() => setSelectedProduct(product)}
                  className="text-sage-700 font-semibold uppercase text-sm tracking-widest hover:text-sage-900 border-b-2 border-transparent hover:border-sage-900 transition-all pb-1 cursor-pointer"
                >
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-naturae-900/40 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          ></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-in zoom-in-95 duration-200">
            <button 
              className="absolute top-4 right-4 z-10 p-2 bg-white/70 hover:bg-white text-naturae-900 rounded-full transition-colors"
              onClick={() => setSelectedProduct(null)}
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Modal Image */}
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Modal Content */}
            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
              <span className="text-sage-600 text-sm font-bold tracking-widest uppercase mb-2">
                {selectedProduct.tag || 'Soins Naturels'}
              </span>
              <h3 className="text-3xl font-serif font-bold text-naturae-900 mb-4">
                {selectedProduct.name}
              </h3>
              <p className="text-naturae-700 leading-relaxed mb-8">
                {selectedProduct.description}
              </p>
              
              <div className="space-y-6 mb-8 flex-grow">
                {selectedProduct.details && (
                  <div>
                    <h4 className="font-serif font-bold text-naturae-900 mb-3 border-b border-naturae-100 pb-1">Détails</h4>
                    <ul className="list-disc list-inside text-sm text-naturae-600 space-y-1">
                      {selectedProduct.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedProduct.ingredients && (
                  <div>
                    <h4 className="font-serif font-bold text-naturae-900 mb-3 border-b border-naturae-100 pb-1">Ingrédients clés</h4>
                    <p className="text-sm text-naturae-600 italic">
                      {selectedProduct.ingredients}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-auto pt-4">
                <button 
                    onClick={handleAddToCart}
                    disabled={isAdded}
                    className={`w-full py-4 px-6 rounded-full font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
                        isAdded 
                        ? 'bg-sage-600 text-white' 
                        : 'bg-naturae-900 text-white hover:bg-naturae-800 hover:scale-[1.02]'
                    }`}
                >
                    {isAdded ? (
                        <>
                            <Check className="w-5 h-5" /> Ajouté au panier
                        </>
                    ) : (
                        <>
                            <ShoppingBag className="w-5 h-5" /> Ajouter au panier
                        </>
                    )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;