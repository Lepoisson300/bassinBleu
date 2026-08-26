import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cyan text-sand pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-4xl font-serif font-bold mb-6">Nous Trouver</h2>
          <p className="text-lg font-sans font-light mb-2">
            La Guinguette du Port
          </p>
          <p className="text-lg font-sans font-light mb-8 opacity-90">
            Chemin du Lac 123,<br/>
            1000 Plage-sur-Lac, CH
          </p>
          
          <h3 className="text-2xl font-serif font-semibold mb-4">Horaires</h3>
          <p className="font-sans font-light opacity-90">
            Lundi - Dimanche<br/>
            11h00 - 22h00
          </p>
        </div>
        
        {/* Placeholder for Map Illustration / Google Map */}
        <div className="bg-cyanDark rounded-3xl p-8 flex items-center justify-center min-h-[300px] border-4 border-sand/20 relative overflow-hidden">
          {/* Faux map elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan/50 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-tropicalGreen/30 rounded-full blur-2xl"></div>
          
          <div className="text-center z-10">
            <svg className="w-12 h-12 mx-auto mb-4 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="font-serif text-2xl font-bold">Plan du Port</p>
            <p className="font-sans text-sm opacity-80 mt-2">📍 Suivez la terrasse bleue</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-sand/20 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-sm opacity-80">
          &copy; {new Date().getFullYear()} Guinguette & Bagels. Tous droits réservés.
        </p>
        <div className="flex gap-4">
          {/* Social Icons Placeholder */}
          <a href="#" className="w-10 h-10 rounded-full border border-sand/30 flex items-center justify-center hover:bg-sand hover:text-cyan transition-colors">
            IG
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-sand/30 flex items-center justify-center hover:bg-sand hover:text-cyan transition-colors">
            FB
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
