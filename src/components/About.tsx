export default function About() {
  return (
    <section className="section" id="sobre">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Sobre o Wasabi</div>
          <h2>Mais do que <span className="em">sushi</span>.<br />Uma experiência.</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <h3>Arte, sabor e frescura.</h3>
            <p>
              O Wasabi Sushi nasceu da paixão pela gastronomia japonesa e do desejo de oferecer uma experiência diferenciada, moderna e acolhedora em Vilanculos. Mais do que servir comida, queremos proporcionar momentos especiais através de sabores autênticos, ingredientes frescos e atendimento de qualidade.
            </p>
            <p>
              Cada prato é preparado com dedicação para garantir frescura, apresentação e sabor em cada detalhe — do sushi clássico aos pratos da cozinha moçambicana.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <div className="num">4,5</div>
                <div className="lbl">★ 89 críticas</div>
              </div>
              <div className="about-stat">
                <div className="num">60+</div>
                <div className="lbl">Itens no cardápio</div>
              </div>
              <div className="about-stat">
                <div className="num">2022</div>
                <div className="lbl">Desde</div>
              </div>
            </div>
          </div>

          <div className="about-art">
            <div
              className="photo a"
              style={{ backgroundImage: "url('/images/about-1.jpg')" }}
              role="img"
              aria-label="Chef do Wasabi a preparar sushi"
            >
              <span className="momento-fallback">🍣</span>
            </div>
            <div
              className="photo b"
              style={{ backgroundImage: "url('/images/about-2.jpg')" }}
              role="img"
              aria-label="Ambiente do Wasabi"
            >
              <span className="momento-fallback">🥢</span>
            </div>
            <div className="sticker">Arte<br />no<br />sabor</div>
          </div>
        </div>

        <div className="mvv-grid">
          <div className="mvv-card">
            <div className="mvv-tag">Missão</div>
            <p>Oferecer uma experiência gastronómica de qualidade, combinando sabor, criatividade e excelência no atendimento.</p>
          </div>
          <div className="mvv-card">
            <div className="mvv-tag">Visão</div>
            <p>Tornar-se uma referência em sushi e gastronomia oriental, reconhecida pela qualidade, inovação e satisfação dos clientes.</p>
          </div>
          <div className="mvv-card">
            <div className="mvv-tag">Valores</div>
            <p>Qualidade · Frescura · Respeito ao cliente · Criatividade · Excelência</p>
          </div>
        </div>
      </div>
    </section>
  );
}
