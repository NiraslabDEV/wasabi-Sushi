const items = [
  "Preparado na hora", "•", "Qualidade em cada peça", "•", "Sabores que surpreendem",
  "•", "Experiência japonesa autêntica", "•", "Feito com frescura e paixão", "•",
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
