type Momento = {
  src: string;
  alt: string;
  span: "big" | "small" | "wide";
};

const MOMENTOS: Momento[] = [
  { src: "/images/momentos/01.webp", alt: "Clientes felizes no Wasabi Sushi", span: "big" },
  { src: "/images/momentos/02.webp", alt: "Sushi servido na mesa", span: "small" },
  { src: "/images/momentos/03.webp", alt: "Combos especiais do Wasabi", span: "small" },
  { src: "/images/momentos/04.webp", alt: "Sabores frescos do Wasabi", span: "wide" },
];

export default function Gallery() {
  return (
    <section className="section momentos" id="momentos">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Vida no Wasabi</div>
          <h2>
            Os <span className="em">momentos</span> que servimos
          </h2>
          <p>Mais do que uma refeição — uma experiência partilhada. Veja o que acontece todos os dias na Av. Eduardo Mondlane.</p>
        </div>

        <div className="momentos-grid">
          {MOMENTOS.map((m, i) => (
            <div key={i} className={"momento momento-" + m.span}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.src} alt={m.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
