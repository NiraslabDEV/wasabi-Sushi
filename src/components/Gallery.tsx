type Momento = {
  src: string;
  alt: string;
  span: "big" | "small" | "wide";
  objectPosition?: string;
};

// Order matters — grid fills row-by-row.
// Layout (4 cols × 3 rows = 12 cells):
//   [BIG (2x2)   ] [WIDE  (2x1)        ]
//   [BIG (2x2)   ] [WIDE  (2x1)        ]
//   [WIDE  (2x1)              ] [WIDE  (2x1)              ]
const MOMENTOS: Momento[] = [
  { src: "/images/momentos/01.webp", alt: "Clientes felizes no Wasabi", span: "big", objectPosition: "center top" },
  { src: "/images/momentos/05.webp", alt: "Amigos a partilhar combos", span: "wide", objectPosition: "center top" },
  { src: "/images/momentos/06.webp", alt: "Família a celebrar no Wasabi", span: "wide", objectPosition: "center 20%" },
  { src: "/images/momentos/07.webp", alt: "Momentos no Wasabi", span: "wide", objectPosition: "center top" },
  { src: "/images/momentos/08.webp", alt: "Sorrisos no Wasabi", span: "wide", objectPosition: "center top" },
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
              <img
                src={m.src}
                alt={m.alt}
                loading="lazy"
                style={m.objectPosition ? { objectPosition: m.objectPosition } : undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
