import React from 'react';
import { Droplets, Sun, Moon, Shield, Info, AlertCircle } from 'lucide-react';

const BaumeDetails: React.FC = () => {
  return (
    <section id="baume" className="py-24 bg-naturae-100 relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-naturae-900 mb-6">Le Baume Naturaē</h2>
          <p className="text-xl text-naturae-700 font-light italic">
            "Un retour à la simplicité et aux rituels d’autrefois."
          </p>
          <p className="mt-6 text-naturae-800 leading-relaxed">
            Baume de suif artisanal, infusé de plantes biologiques pour nourrir et protéger la peau.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
          {/* Left Column: Usage & Visuals */}
          <div className="space-y-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 group">
               <img 
                 src="https://picsum.photos/seed/tallowbalm/800/800" 
                 alt="Application du baume" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-naturae-900/60 to-transparent flex flex-col justify-end p-8">
                 <h3 className="text-white font-serif text-2xl font-bold">Rituel d'Application</h3>
                 <p className="text-naturae-100 mt-2">Prélevez une petite quantité, laissez-la fondre, massez délicatement.</p>
               </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-naturae-200">
               <h3 className="text-2xl font-serif font-bold text-naturae-900 mb-6 flex items-center gap-2">
                 <Droplets className="text-sage-500" /> Mode d'emploi
               </h3>
               <ul className="space-y-4">
                 <li className="flex gap-4">
                   <div className="bg-sage-100 p-2 rounded-full h-fit"><Sun className="w-5 h-5 text-sage-600"/></div>
                   <div>
                     <span className="font-semibold block text-naturae-900">Hydratant quotidien</span>
                     <p className="text-sm text-naturae-600">Sur une peau fraîchement nettoyée.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <div className="bg-naturae-200 p-2 rounded-full h-fit"><Moon className="w-5 h-5 text-naturae-700"/></div>
                   <div>
                     <span className="font-semibold block text-naturae-900">Baume de nuit</span>
                     <p className="text-sm text-naturae-600">Pour une nutrition intense.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <div className="bg-amber-100 p-2 rounded-full h-fit"><Shield className="w-5 h-5 text-amber-600"/></div>
                   <div>
                     <span className="font-semibold block text-naturae-900">Voile protecteur</span>
                     <p className="text-sm text-naturae-600">Idéal pour les activités extérieures hivernales.</p>
                   </div>
                 </li>
               </ul>
            </div>
          </div>

          {/* Right Column: Ingredients & Transition Info */}
          <div className="space-y-8">
            
            {/* Ingredients Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-sage-500">
                    <h4 className="text-xl font-serif font-bold text-naturae-900 mb-4">Visage (15 g)</h4>
                    <p className="text-sm text-naturae-600 leading-relaxed">
                        Suif de veau, huile de jojoba*, fleurs de calendula*, huile de rose musquée*, cire d’abeille*, vitamine E*.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-naturae-500">
                    <h4 className="text-xl font-serif font-bold text-naturae-900 mb-4">Corps (30 g)</h4>
                    <p className="text-sm text-naturae-600 leading-relaxed">
                        Suif de veau, huile de ricin communis*, fleurs de lavande*, fleurs de rose*, cire d’abeille*, arrowroot*.
                    </p>
                </div>
            </div>

            {/* Transition Period Info */}
            <div className="bg-sage-50 rounded-2xl p-8 border border-sage-200">
                <h3 className="text-xl font-serif font-bold text-sage-800 mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5"/> Note importante : La période d'adaptation
                </h3>
                <div className="space-y-4 text-naturae-700 text-sm leading-relaxed">
                    <p>
                        Lorsqu’on passe d’une crème à base d’eau à un baume au suif, la peau peut vivre une courte période d’adaptation. Cela reflète le temps nécessaire pour s’habituer à une formule plus simple et riche en lipides.
                    </p>
                    <p>
                        De petites irrégularités ou un peu de sécheresse peuvent apparaître durant les premiers jours. <span className="font-semibold text-sage-800">C’est normal et temporaire</span> : la barrière cutanée se rééquilibre au contact de lipides naturellement compatibles.
                    </p>
                    <p className="italic font-medium text-sage-700">
                        Résultat attendu : Une peau plus douce, plus lisse et mieux nourrie en 1 à 2 semaines.
                    </p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BaumeDetails;