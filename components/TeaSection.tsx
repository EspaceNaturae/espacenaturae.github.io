import React from 'react';
import { TeaItem } from '../types';
import { Coffee, Flame, Moon, Sun } from 'lucide-react';

const teas: TeaItem[] = [
  {
    id: 'nocturne',
    name: 'Le Nocturne',
    description: 'Conçue pour calmer l’esprit et libérer les tensions, cette tisane aide à retrouver un sommeil réparateur et une paix intérieure.',
    image: 'https://picsum.photos/seed/herbaltea1/600/600',
    details: ['Mélisse', 'Basilic sacré', 'Lavande', 'Racine de valériane', 'Ashwagandha'],
    notes: 'Florale et herbacée, avec une touche épicée et enveloppante.',
    ritual: 'Savourer avant le repos.'
  },
  {
    id: 'aurora',
    name: 'Aurora',
    description: 'Infusion botanique qui favorise la détoxification naturelle et la vitalité.',
    image: 'https://picsum.photos/seed/herbaltea2/600/600',
    details: ['Rooibos', 'Racine de pissenlits', 'Écorces d’orange', 'Basilic sacré', 'Lavande'],
    notes: 'Onctueuse et réconfortante, avec des notes florales et une finale vivifiante.',
    ritual: 'Savourer en pleine conscience pour raviver l’énergie.'
  }
];

const TeaSection: React.FC = () => {
  return (
    <section id="tisanes" className="py-24 bg-naturae-900 text-naturae-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Coffee className="w-12 h-12 mx-auto mb-6 text-amber-200 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-naturae-50 mb-6">Tisanes de Saison</h2>
          <p className="text-xl text-naturae-200 font-light max-w-2xl mx-auto italic">
            "Laissez la chaleur et la sérénité remplir votre tasse - un tendre rappel que le repos est aussi un cadeau."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {teas.map((tea, idx) => (
            <div key={tea.id} className="bg-naturae-800 rounded-3xl overflow-hidden shadow-2xl border border-naturae-700 hover:border-amber-200/30 transition-all duration-300 flex flex-col md:flex-row">
              <div className="md:w-2/5 h-64 md:h-auto relative">
                <img 
                    src={tea.image} 
                    alt={tea.name} 
                    className="w-full h-full object-cover absolute inset-0 mix-blend-overlay opacity-80" 
                />
                <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r ${idx === 0 ? 'from-indigo-900/60' : 'from-amber-900/60'} to-transparent`}></div>
                <div className="absolute bottom-4 left-4 z-10">
                    {idx === 0 ? <Moon className="text-indigo-200 w-8 h-8"/> : <Sun className="text-amber-200 w-8 h-8"/>}
                </div>
              </div>
              
              <div className="p-8 md:w-3/5 flex flex-col justify-between">
                <div>
                    <h3 className="text-3xl font-serif font-bold text-naturae-50 mb-2">{tea.name}</h3>
                    <p className="text-amber-200/80 italic text-sm mb-4">{tea.notes}</p>
                    <p className="text-naturae-200 mb-6 text-sm leading-relaxed">{tea.description}</p>
                    
                    <div className="mb-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-naturae-400 mb-2">Ingrédients</h4>
                        <div className="flex flex-wrap gap-2">
                            {tea.details?.map(ing => (
                                <span key={ing} className="text-xs bg-naturae-700 px-2 py-1 rounded text-naturae-200 border border-naturae-600">
                                    {ing}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-naturae-900/50 p-4 rounded-xl border border-naturae-700/50 flex gap-3 items-start">
                    <Flame className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wide text-amber-400 block mb-1">Rituel</span>
                        <p className="text-sm text-naturae-300">
                           Infuser 1 à 2 c. à thé, 5-7 min. <br/> {tea.ritual}
                        </p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeaSection;