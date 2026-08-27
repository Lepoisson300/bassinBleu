import React from 'react';
import FadeInSection from './FadeInSection';
const basePath = import.meta.env.BASE_URL;

const eventsList = [
  {
    id: 1,
    title: 'DJ Set Sunset Chill',
    date: 'Tous les vendredis soirs',
    description: 'Rejoignez-nous pour un set live au coucher du soleil. Ambiance tropicale, cocktails et pieds dans l\'eau pour terminer la semaine en beauté.',
    image: basePath + 'event_dj_set.jpg',
    hasTicket: false,
  },
  {
    id: 2,
    title: 'Brunch Dominical',
    date: 'Un dimanche sur deux',
    description: 'Le brunch ultime les pieds dans l\'eau. Bagels, avocado toasts, mimosas et une ambiance détendue. Places limitées, réservez votre accès spécial !',
    image: basePath + 'event_sunday_brunch.jpg',
    hasTicket: true,
    ticketLink: '#',
  },
];

const Events = () => {
  return (
    <section id="events" className="py-24 bg-sand relative overflow-hidden">

      {/* Decorative side images */}
      <div className="absolute top-10 -left-16 md:-left-10 w-64 md:w-80 opacity-40 pointer-events-none mix-blend-multiply rotate-12">
        <img src={basePath + "dj_van_deco.jpg"} alt="DJ Van Déco" className="w-full h-auto grayscale-[20%] scale-125 contrast-125 rounded-xl" />
      </div>
      <div className="absolute bottom-10 -right-16 md:-right-10 w-64 md:w-80 opacity-40 pointer-events-none mix-blend-multiply -rotate-12">
        <img src={basePath + "cocktail_deco.jpg"} alt="Cocktail Déco" className="w-full h-auto grayscale-[20%] scale-125 contrast-125 rounded-xl" />
      </div>

      <FadeInSection className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-cyan font-serif font-bold mb-6">
            Événements & Ambiance
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-text-main font-sans font-medium mb-4">
              Mangez et détendez-vous les pieds dans la piscine !
            </p>
            <p className="text-lg text-text-muted font-sans font-light mb-8">
              Nous ne prenons <span className="font-semibold text-cyanDark">aucune réservation</span> pour les tables. Venez comme vous êtes !
              Cependant, nous organisons régulièrement des événements spéciaux. Suivez-nous sur les réseaux pour ne rien manquer :
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://www.facebook.com/bassinbleuNE/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-cyan text-white rounded-full font-serif font-semibold hover:bg-cyanDark hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/lebassinbleuneuchatel/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full font-serif font-semibold hover:opacity-90 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {eventsList.map((event) => (
            <div
              key={event.id}
              className="bg-sandDark rounded-3xl overflow-hidden shadow-lg border border-cyan/10 group flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-4 py-1.5 rounded-full text-cyanDark font-semibold text-sm shadow-sm">
                  {event.date}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-3xl font-serif text-cyan font-bold mb-4">
                  {event.title}
                </h3>
                <p className="text-text-muted font-sans font-light leading-relaxed mb-8 flex-1">
                  {event.description}
                </p>

                {event.hasTicket && (
                  <div className="mt-auto">
                    <a
                      href={event.ticketLink}
                      className="inline-block bg-transparent border-2 border-cyan text-cyan font-serif font-bold text-md px-6 py-2.5 rounded-full hover:bg-cyan hover:text-white transition-colors duration-300 w-full text-center"
                    >
                      Acheter un ticket
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </FadeInSection>
    </section>
  );
};

export default Events;
