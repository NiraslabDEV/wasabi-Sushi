const items = [
  "Fresh Sushi", "•", "Comida Moçambicana", "•", "Delivery em Vilanculos",
  "•", "Café da Manhã", "•", "Combos a partir de 1.020 MT", "•",
];

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
  const prefix = ariaHidden ? "d" : "";
  return (
    <span aria-hidden={ariaHidden || undefined}>
      {items.map((t, i) =>
        t === "•" ? (
          <span key={prefix + i} className="sep" />
        ) : (
          <span key={prefix + i}>{t}</span>
        )
      )}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <Track />
        <Track ariaHidden />
      </div>
    </div>
  );
}
