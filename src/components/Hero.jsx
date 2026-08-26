import { lightBG } from "/lightBG.png"

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-cyanDark">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        {/* L'image s'affichera selon le thème grâce aux classes 'dark:hidden' et 'hidden dark:block' */}
        <img
          src="/lightBG.png"
          alt="Terrasse de la guinguette sur le lac (Jour)"
          className="absolute inset-0 w-full h-full object-cover block dark:hidden"
        />
        <img
          src={lightBG}
          alt="Terrasse de la guinguette sur le lac (Nuit)"
          className="absolute inset-0 w-full h-full object-cover hidden dark:block"
        />
        <div className="absolute inset-0 bg-cyanDark/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-t from-cyanDark/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-32 bg-linear-to-t from-sand to-transparent z-10" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-sand font-serif font-bold mb-6 drop-shadow-lg tracking-tight">
          Le Bassin Bleu<br /><span className="text-tropicalGreen-300 italic font-light">Les Pieds Dans L'Eau</span>
        </h1>
        <p className="text-lg md:text-2xl text-sand font-sans font-medium mb-10 max-w-2xl drop-shadow-md">
          Une expérience unique : savourez nos bagels gourmets attablés dans une pataugeoire turquoise, la brise du lac en prime.
        </p>
        <a
          href="#menu"
          className="inline-block bg-sand text-cyanDark font-serif font-bold text-lg px-8 py-4 rounded-full shadow-[0_4px_14px_0_rgba(0,180,216,0.39)] hover:shadow-[0_6px_20px_rgba(0,180,216,0.23)] hover:-translate-y-1 transition-all duration-300"
        >
          Retirer ses chaussures
        </a>
      </div>
    </section>
  );
};

export default Hero;
