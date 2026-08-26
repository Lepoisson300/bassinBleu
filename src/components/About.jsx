import React from 'react';
import FadeInSection from './FadeInSection';
import GalleryCarousel from './GalleryCarousel';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-sand overflow-hidden">
      {/* Decorative Tropical Leaves (Generated Images) */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/4 w-96 opacity-60 pointer-events-none mix-blend-multiply">
        <img src="/tropical_leaves.png" alt="Feuilles tropicales" className="w-full rounded-br-4xl h-auto" />
      </div>

      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/4 w-[28rem] opacity-80 pointer-events-none mix-blend-multiply rotate-180">
        <img src="/tropical_leaves.png" alt="Feuilles tropicales" className="w-full  h-auto" />
      </div>

      <FadeInSection className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">

        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl text-cyan font-serif font-bold mb-8 relative inline-block">
            Une Vibe Aquatique
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-tropicalGreen/30 rounded-full"></span>
          </h2>

          <p className="text-xl md:text-2xl text-text-muted font-sans font-light leading-relaxed mb-6">
            Oubliez les terrasses classiques. Ici, on dîne littéralement <span className="text-cyan font-medium">les pieds dans l'eau</span>, comme dans une piscine rafraîchissante.
          </p>

          <p className="text-lg md:text-xl text-text-muted font-sans font-light leading-relaxed mb-10">
            Venez vous immerger dans notre bassin bleu turquoise en savourant des bagels <strong className="font-medium text-text-main">100% faits maison</strong> (viande CH). L'eau fraîche sous vos pieds, le soleil d'été et une vue imprenable sur les bateaux : le lâcher-prise est total.
          </p>

          {/* Wave Separator */}
          <div className="flex justify-center lg:justify-start my-12 opacity-50">
            <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10" stroke="#00B4D8" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>

        <div className="flex-1 w-full relative">
          <GalleryCarousel />
        </div>

      </FadeInSection>
    </section>
  );
};

export default About;
