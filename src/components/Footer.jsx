import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cyan text-sand pt-10 pb-10">
      <div className="flex flex-row max-w-6xl  mx-auto px-6 gap-12 justify-between items-center">
        <div>
          <h2 className="text-4xl  font-serif font-bold mb-6">Nous Trouver</h2>
          <p className="text-lg font-sans font-light mb-2">
            La Guinguette du Port
          </p>
          <p className="text-lg font-sans font-light mb-8 opacity-90">
            Chemin du Lac 123,<br />
            1000 Plage-sur-Lac, CH
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-serif font-semibold mb-4">Horaires</h3>
          <p className="font-sans font-light opacity-90">
            Lundi - Dimanche<br />
            11h00 - 22h00
          </p>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-sand/20 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-sm opacity-80">
          &copy; {new Date().getFullYear()} Guinguette & Bagels. Tous droits réservés.
        </p>
        <div className="flex gap-4">
          {/* Social Icons Placeholder */}
          <a href="https://www.instagram.com/bassinbleuNE/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-sand/30 flex items-center justify-center hover:bg-sand hover:text-cyan transition-colors">
            IG
          </a>
          <a href="https://www.facebook.com/lebassinbleuneuchatel/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-sand/30 flex items-center justify-center hover:bg-sand hover:text-cyan transition-colors">
            FB
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
