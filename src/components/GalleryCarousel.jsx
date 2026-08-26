import React, { useState, useEffect, useRef } from 'react';

const basePath = import.meta.env.BASE_URL;

const slides = [
  {
    id: 1,
    image: basePath + 'lightBG.png', // Or whichever image represents the terrace
    title: 'La Terrasse',
    subtitle: 'Vue imprenable sur le lac',
    icon: '☀️'
  },
  {
    id: 2,
    image: basePath + 'bagel_closeup.jpg',
    title: 'Fait Maison',
    subtitle: 'Bagels gourmets préparés avec amour',
    icon: '🥯'
  },
  {
    id: 3,
    image: basePath + 'tapas.jpg',
    title: 'Tapas',
    subtitle: 'À partager entre amis',
    icon: '🌮'
  },
  {
    id: 4,
    image: basePath + 'dessert.jpg',
    title: 'Douceurs',
    subtitle: 'Cheesecake aux fruits rouges',
    icon: '🍰'
  },
  {
    id: 5,
    image: basePath + 'drink.jpg',
    title: 'Rafraîchissements',
    subtitle: 'Citronnade glacée',
    icon: '🍹'
  }
];

const GalleryCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // Défilement toutes les 4 secondes
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleManualSelect = (index) => {
    setActiveIndex(index);
    startTimer(); // Réinitialiser le timer quand l'utilisateur clique
  };

  return (
    <div className="w-full flex gap-2 md:gap-4 h-[28rem] md:h-[32rem]">
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={slide.id}
            onClick={() => handleManualSelect(index)}
            className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-out flex-shrink-0 group ${isActive
                ? 'flex-grow w-1/2 md:w-3/5 rounded-3xl shadow-2xl border-2 border-transparent'
                : 'w-14 md:w-20 rounded-full opacity-70 hover:opacity-100 shadow-md border-2 border-sandDark/20'
              }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
            />

            {/* Gradient Overlay for active item (darken bottom for text readability) */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'
                }`}
            />

            {/* Content Container (Bottom Aligned) */}
            <div
              className={`absolute inset-x-0 bottom-4 flex items-center transition-all duration-700 ${isActive ? 'justify-start px-6' : 'justify-center px-0'
                }`}
            >
              {/* Badge Icon */}
              <div className="bg-white/90 backdrop-blur-sm text-slate-800 rounded-full flex items-center justify-center shrink-0 w-10 h-10 md:w-12 md:h-12 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <span className="text-lg md:text-xl">{slide.icon}</span>
              </div>

              {/* Text Info (Expands on active) */}
              <div
                className={`text-white overflow-hidden transition-all duration-700 flex flex-col justify-center whitespace-nowrap ${isActive ? 'ml-4 max-w-xs opacity-100' : 'ml-0 max-w-0 opacity-0'
                  }`}
              >
                <h3 className="font-serif font-bold text-xl md:text-2xl drop-shadow-md leading-tight">{slide.title}</h3>
                <p className="font-sans text-xs md:text-sm text-white/90 drop-shadow-md truncate">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GalleryCarousel;
