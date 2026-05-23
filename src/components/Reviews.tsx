const reviews = [
  { stars: 5, body: "O melhor sushi de Vilanculos. Salmão sempre fresco e o Dragon Roll é incrível. Atendimento de primeira.", name: "Maria S.", when: "Há 2 semanas" },
  { stars: 5, body: "Comi a matapa com caranguejo e fiquei impressionado. Ambiente acolhedor, perfeito para um jantar com amigos.", name: "João P.", when: "Há 1 mês" },
  { stars: 4, body: "Excelente fusão. O Combo Bazaruto é generoso e vale cada metical. Delivery rápido também!", name: "Ana T.", when: "Há 3 semanas" },
];

export default function Reviews() {
  return (
    <section className="section alt" id="avaliacoes">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Avaliações</div>
          <h2>O que dizem os nossos <span className="em">clientes</span></h2>
        </div>

        <div className="reviews-summary">
          <div className="big">4,5</div>
          <div>
            <div className="stars-big">★ ★ ★ ★ <span style={{ opacity: 0.5 }}>★</span></div>
            <div className="count">89 críticas no Google</div>
          </div>
        </div>

        <div className="reviews-row">
          {reviews.map((r, i) => (
            <div className="review" key={i}>
              <div className="stars">{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</div>
              <p>&ldquo;{r.body}&rdquo;</p>
              <div className="who">
                <div className="avatar">{r.name[0]}</div>
                <div className="meta">
                  <span className="name">{r.name}</span>
                  <span className="when">{r.when}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
