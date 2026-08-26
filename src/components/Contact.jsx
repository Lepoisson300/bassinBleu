import React, { useState } from 'react';
import FadeInSection from './FadeInSection';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('submitting');

    // Simulate checking for availability (network request)
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');

      // Reset after a few seconds
      setTimeout(() => {
        setStatus('idle');
        e.target.reset();
      }, 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-sandDark relative overflow-hidden">

      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tropicalGreen/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <FadeInSection className="max-w-6xl mx-auto px-6 relative z-10 pt-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-cyan font-serif font-bold mb-4">Nous Contacter</h2>
          <p className="text-lg text-text-muted font-sans max-w-2xl mx-auto">
            Une question ou une réservation ? On vous attend dans notre bassin ! <br />
            <span className="font-semibold text-tropicalGreen">N'oubliez pas vos tongs et de quoi remonter vos pantalons.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Horaires Card */}
          <div className="bg-bg-card p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-cyan/20 hover:border-cyan/50 transition-colors">
            <div className="w-12 h-12 bg-cyan/10 rounded-full flex items-center justify-center mb-6 text-cyan">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-cyanDark font-semibold mb-4">Horaires</h3>
            <ul className="text-text-muted font-sans space-y-2">
              <li className="flex justify-between border-b border-sandDark pb-2">
                <span>Mercredi - Dimanche</span>
                <span className="font-medium">11h - 22h</span>
              </li>
              <li className="flex justify-between pt-2 text-sm italic text-tropicalGreen">
                <span>Lundi & Mardi</span>
                <span>Fermé</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-text-muted font-sans">
              Venez profiter de l'ambiance au coucher du soleil pour une expérience inoubliable.
            </p>
          </div>

          {/* Localisation Card */}
          <div className="bg-bg-card p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-cyan/20 hover:border-cyan/50 transition-colors">
            <div className="w-12 h-12 bg-cyan/10 rounded-full flex items-center justify-center mb-6 text-cyan">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-cyanDark font-semibold mb-4">Nous Trouver</h3>
            <p className="text-text-muted font-sans mb-6 leading-relaxed">
              Le bassin Bleu<br />
              Quai du Port 5,<br />
              2000 Neuchâtel
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Quai+du+Port+5,2000+Neuchatel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-cyan text-white font-sans font-medium px-6 py-3 rounded-xl hover:bg-cyanDark transition-colors shadow-md hover:shadow-lg"
            >
              Itinéraire
            </a>
          </div>

          {/* Contact Form / Reservation Card */}
          <div className="bg-bg-card p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-cyan/20 hover:border-cyan/50 transition-colors flex flex-col">
            <div className="w-12 h-12 bg-cyan/10 rounded-full flex items-center justify-center mb-6 text-cyan shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-cyanDark font-semibold mb-4">Réserver une table</h3>

            <form className="space-y-4 flex-1 flex flex-col justify-between" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Votre Nom"
                  className="w-full bg-sandDark/30 border border-sandDark rounded-lg px-4 py-2.5 font-sans text-text-main placeholder-text-muted focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    required
                    min="1"
                    max="20"
                    placeholder="Nb personnes"
                    className="w-full bg-sandDark/30 border border-sandDark rounded-lg px-4 py-2.5 font-sans text-text-main placeholder-text-muted focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors"
                  />
                  <input
                    type="date"
                    required
                    className="w-full bg-sandDark/30 border border-sandDark rounded-lg px-4 py-2.5 font-sans text-text-muted focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors"
                  />
                </div>
                <input
                  type="time"
                  required
                  className="w-full bg-sandDark/30 border border-sandDark rounded-lg px-4 py-2.5 font-sans text-text-muted focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || status === 'success'}
                className="w-full bg-tropicalGreen text-white font-sans font-medium px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg disabled:opacity-80 flex items-center justify-center mt-4"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Vérification des places...
                  </>
                ) : status === 'success' ? (
                  'Table Réservée ! 🎉'
                ) : (
                  'Réserver maintenant'
                )}
              </button>
            </form>
          </div>

        </div>
      </FadeInSection>
    </section>
  );
};

export default Contact;
