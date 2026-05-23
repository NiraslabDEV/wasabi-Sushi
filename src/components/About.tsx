export default function About() {
  return (
    <section className="section" id="sobre">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Sobre o Wasabi</div>
          <h2>Onde o <span className="em">Japão</span> encontra<br />Moçambique</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <h3>No coração do sushi.</h3>
            <p>
              Desde 2022, o Wasabi é o ponto de encontro em Vilanculos para quem ama um bom sushi e a comida da terra. Combinamos a precisão japonesa com a alma moçambicana — matapa, picanha, choco frito, e o melhor salmão fresco para nigiris, makis e combinados.
            </p>
            <p>
              De manhã servimos café, omeletes e tostas. Ao almoço e jantar, escolha entre o cardápio japonês ou os pratos tradicionais. Tudo preparado na hora.
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
            <div className="photo a">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=700&q=80&auto=format&fit=crop" alt="Sushi" />
            </div>
            <div className="photo b">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&q=80&auto=format&fit=crop" alt="Chef plating" />
            </div>
            <div className="sticker">No coração<br />do<br />sushi</div>
          </div>
        </div>
      </div>
    </section>
  );
}
