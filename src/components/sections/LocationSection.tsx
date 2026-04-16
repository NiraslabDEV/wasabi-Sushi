"use client";

export default function LocationSection() {
  return (
    <section className="bg-surface py-32 px-8" id="location">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-6 block">
            Find Us
          </span>
          <h2 className="font-headline text-4xl md:text-5xl mb-12">
            Location & Hours
          </h2>

          <div className="space-y-8">
            {/* Address */}
            <div>
              <h3 className="text-primary font-bold text-xs tracking-widest uppercase mb-2">
                Endereço
              </h3>
              <p className="text-on-surface text-lg mb-2">
                Av. Eduardo Mondlane
              </p>
              <p className="text-on-surface-variant mb-4">
                Vilanculos, Moçambique
              </p>
              <a
                href="https://maps.google.com/?q=-22.005,35.310"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary-fixed transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined">location_on</span>
                Ver no Mapa
              </a>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-primary font-bold text-xs tracking-widest uppercase mb-4">
                Horário de Funcionamento
              </h3>
              <div className="space-y-2 text-on-surface">
                <div className="flex justify-between">
                  <span>Terça - Quinta</span>
                  <span className="text-on-surface-variant">18:00 — 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sexta - Sábado</span>
                  <span className="text-on-surface-variant">18:00 — 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span className="text-on-surface-variant">12:00 — 22:00</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-outline-variant/10">
                  <span className="text-on-surface-variant">Segunda</span>
                  <span className="text-on-surface-variant italic">Fechado</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-primary font-bold text-xs tracking-widest uppercase mb-4">
                Contato
              </h3>
              <a
                href="https://wa.me/258846007007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary hover:text-secondary-fixed transition-colors mb-2"
              >
                <span className="material-symbols-outlined">phone</span>
                +258 84 600 7007
              </a>
              <p className="text-on-surface-variant text-sm">
                WhatsApp & Reservas
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-outline-variant/10">
              <a
                href="https://wa.me/258846007007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-on-primary px-8 py-4 rounded font-bold tracking-[0.1em] uppercase text-sm hover:scale-105 transition-transform"
              >
                Confirmar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=35.29,22.02,35.33,21.99&layer=mapnik&marker=-22.005,35.310"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(100%) invert(90%) contrast(130%) brightness(45%)",
            }}
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Additional Info */}
      <div className="max-w-screen-2xl mx-auto mt-16 pt-16 border-t border-outline-variant/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <span className="material-symbols-outlined text-5xl text-primary block mb-4">
              location_on
            </span>
            <h4 className="font-headline text-lg mb-1">Localização Perfeita</h4>
            <p className="text-on-surface-variant text-sm">
              Vistazo direto para o Oceano Índico
            </p>
          </div>
          <div>
            <span className="material-symbols-outlined text-5xl text-primary block mb-4">
              schedule
            </span>
            <h4 className="font-headline text-lg mb-1">Horário Flexível</h4>
            <p className="text-on-surface-variant text-sm">
              Almoço aos domingos e noites elegantes
            </p>
          </div>
          <div>
            <span className="material-symbols-outlined text-5xl text-primary block mb-4">
              contactless
            </span>
            <h4 className="font-headline text-lg mb-1">Acesso Fácil</h4>
            <p className="text-on-surface-variant text-sm">
              Reservas simples pelo WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
