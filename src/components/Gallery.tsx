type Momento = {
  src: string;
  alt: string;
  span: "big" | "tall" | "wide" | "small";
};

const MOMENTOS: Momento[] = [
  { src: "/images/momentos/05.webp", alt: "Amigos a partilhar combos no Wasabi", span: "big" },
  { src: "/images/momentos/02.jpg", alt: "Sushi servido na mesa", span: "tall" },
  { src: "/images/momentos/03.jpg", alt: "Detalhe do preparo", span: "small" },
  { src: "/images/momentos/04.jpg", alt: "Ambiente do restaurante", span: "small" },
  { src: "/images/momentos/06.webp", alt: "Família a saborear sushi no Wasabi", span: "wide" },
  { src: "/images/momentos/01.jpg", alt: "Chef em acção no Wasabi", span: "wide" },
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
            <div
              key={i}
              className={"momento momento-" + m.span}
              style={{ backgroundImage: `url('${m.src}')` }}
              role="img"
              aria-label={m.alt}
            >
              <span className="momento-fallback">📸</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
