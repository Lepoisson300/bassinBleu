import React, { useState } from 'react';
import FadeInSection from './FadeInSection';
const basePath = import.meta.env.BASE_URL;

const menuItems = [
  // Tapas / Entrées
  { name: 'Guacamole Maison', ingredients: 'Avocats frais, citron vert, coriandre, chips de maïs', category: 'tapas', image: basePath + 'guacamole.jpg' },
  { name: 'Nachos Gratinés', ingredients: 'Cheddar fondu, jalapeños, crème aigre, pico de gallo', category: 'tapas', image: basePath + 'tapas.jpg' },
  { name: 'Salade Estivale', ingredients: 'Jeunes pousses, feta, pastèque, menthe', category: 'tapas', image: basePath + 'salade_estivale.jpg' },

  // Plats (Bagels)
  { name: 'Le Chèvre', ingredients: 'Caviar d\'aubergine, chèvre, miel', category: 'plats', image: basePath + 'bagel_chevre.jpg' },
  { name: 'Le Burger', ingredients: 'Bœuf CH, cheddar, oignons caramélisés', category: 'plats', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80' },
  { name: 'Le Lève tard', ingredients: 'Bacon, raclette, œuf', category: 'plats', image: basePath + 'bagel_leve_tard.jpg' },
  { name: 'Le Pulled Pork', ingredients: 'Porc effiloché CH', category: 'plats', image: basePath + 'bagel_pulled_pork.jpg' },
  { name: 'Le Big JO', ingredients: 'Bœuf CH, raclette, bacon, œuf', category: 'plats', image: basePath + 'bagel_big_jo.jpg' },
  { name: 'Le Vegan', ingredients: 'Tzatziki, burger végétal', category: 'plats', image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=800&q=80' },
  { name: 'Le Poulet', ingredients: 'Poulet mariné, crudités, sauce maison', category: 'plats', image: 'https://images.unsplash.com/photo-1615719413546-198b25453f85?auto=format&fit=crop&w=800&q=80' },
  { name: 'Le Red Hot', ingredients: 'Bœuf CH, cheddar, piments, sauce piquante', category: 'plats', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80' },
  { name: 'Le Nippon', ingredients: 'Saumon, wasabi, concombre, sésame', category: 'plats', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80' },

  // Desserts
  { name: 'Cheesecake', ingredients: 'Coulis de fruits rouges maison', category: 'desserts', image: basePath + 'dessert.jpg' },
  { name: 'Cookie Géant', ingredients: 'Pépites de chocolat fondant, noix de pécan', category: 'desserts', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80' },
  { name: 'Glace Artisanale', ingredients: '2 boules au choix (Vanille, Fraise, Citron)', category: 'desserts', image: 'https://images.unsplash.com/photo-1563805042-7684c8e9e1cb?auto=format&fit=crop&w=800&q=80' },

  // Boissons
  { name: 'Citronnade Maison', ingredients: 'Citrons pressés, menthe fraîche, peu sucré', category: 'boissons', image: basePath + 'drink.jpg' },
  { name: 'Thé Glacé Pêche', ingredients: 'Infusion maison, morceaux de pêche', category: 'boissons', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80' },
  { name: 'Bière Blonde Locale', ingredients: 'Pression 50cl - Brasserie du Lac', category: 'boissons', image: 'https://images.unsplash.com/photo-1575037614876-c3852d244d37?auto=format&fit=crop&w=800&q=80' },
];

const categories = [
  { id: 'tapas', label: 'Entrées & Tapas' },
  { id: 'plats', label: 'Nos Bagels' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'boissons', label: 'Boissons' },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('plats');

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-sandDark relative overflow-hidden">

      {/* Decorative side images */}
      <div className="absolute top-20 -left-32 w-80 opacity-80 pointer-events-none mix-blend-multiply rotate-45">
        <img src={basePath + "tropical_leaves.png"} alt="Décoration" className="w-full rounded-2xl h-auto" />
      </div>
      <div className="absolute bottom-10 -right-32 w-80 opacity-80 pointer-events-none mix-blend-multiply -rotate-45">
        <img src={basePath + "tropical_leaves.png"} alt="Décoration" className="w-full  h-auto" />
      </div>

      <FadeInSection className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-cyan font-serif font-bold mb-4">Notre Carte</h2>
          <p className="text-lg text-text-muted font-sans">
            Nos plats sont disponibles en version <span className="font-semibold text-text-main">Simple</span> ou <span className="font-semibold text-text-main">Assiette</span> (avec frites & salade).
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-serif font-semibold text-lg transition-all duration-300 ${activeCategory === cat.id
                ? 'bg-cyan text-white shadow-md scale-105'
                : 'bg-sand text-cyan hover:bg-cyan/10'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-sand rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-sandDark/50 group hover:-translate-y-2 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-sand via-transparent to-transparent"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif text-cyan font-semibold mb-3 group-hover:text-cyanDark transition-colors">
                  {item.name}
                </h3>
                <p className="text-text-muted font-sans font-light leading-relaxed">
                  {item.ingredients}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default Menu;
