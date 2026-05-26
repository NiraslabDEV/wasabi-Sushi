"use client";

import { useEffect, useState } from "react";
import { MENU, MenuCategory, MenuItem, MenuSectionId, formatPrice } from "@/data/menu";

function MenuItemRow({ item }: { item: MenuItem }) {
  if (item.includes) {
    return (
      <div className={"combo" + (item.highlight ? " highlight" : "")}>
        <div className="combo-header">
          <div>
            <h4 className="combo-name">{item.name}</h4>
            {item.meta && <div className="combo-meta">{item.meta}</div>}
          </div>
          <div className="combo-price">
            {formatPrice(item.price)} <span style={{ fontSize: "14px", letterSpacing: "1px" }}>MT</span>
          </div>
        </div>
        <ul className="combo-includes">
          {item.includes.map((line, i) => <li key={i}>{line}</li>)}
        </ul>
      </div>
    );
  }
  return (
    <div className="menu-item">
      <div>
        <div className="nm">
          <span>{item.name}</span>
          {item.en && <span className="en">{item.en}</span>}
          {item.meta && <span className={"meta-tag" + (item.sunday ? " sunday-tag" : "")}>{item.meta}</span>}
        </div>
        {item.desc && <div className="desc">{item.desc}</div>}
      </div>
      <div className="price">{formatPrice(item.price)}<span className="unit">MT</span></div>
    </div>
  );
}

function CategoryBlock({ cat }: { cat: MenuCategory }) {
  return (
    <div className="menu-cat">
      <div className="menu-cat-head">
        <h3>{cat.label}</h3>
        {cat.meta && <span className="cat-meta">{cat.meta}</span>}
      </div>
      {cat.items.map((it, i) => <MenuItemRow key={i} item={it} />)}
    </div>
  );
}

export default function Menu() {
  const sections = Object.keys(MENU) as MenuSectionId[];
  const [activeSection, setActiveSection] = useState<MenuSectionId>("sushi");
  const [activeCat, setActiveCat] = useState<string>("all");

  const cur = MENU[activeSection];
  const categories = cur.categories;

  useEffect(() => {
    setActiveCat("all");
  }, [activeSection]);

  const visible = activeCat === "all" ? categories : categories.filter((c) => c.id === activeCat);

  // balance into two columns by item count
  const leftCol: MenuCategory[] = [];
  const rightCol: MenuCategory[] = [];
  let leftCount = 0, rightCount = 0;
  visible.forEach((cat) => {
    const n = cat.items.length;
    if (leftCount <= rightCount) {
      leftCol.push(cat);
      leftCount += n + 1;
    } else {
      rightCol.push(cat);
      rightCount += n + 1;
    }
  });

  return (
    <section className="section alt" id="cardapio">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Nosso Menu</div>
          <h2>Explore os nossos <span className="em">sabores</span></h2>
          <p>Do sushi clássico às combinações especiais da casa, cada pedido é preparado com dedicação e frescura. Clique para filtrar por categoria — preços em meticais (MT).</p>
        </div>

        <div className="menu-tabs">
          {sections.map((s) => (
            <button
              key={s}
              className={"menu-tab" + (activeSection === s ? " active" : "")}
              onClick={() => setActiveSection(s)}
            >
              {MENU[s].label}
            </button>
          ))}
        </div>

        <div className="menu-tagline">{cur.tagline}</div>

        <div className="menu-chips">
          <button
            className={"chip" + (activeCat === "all" ? " active" : "")}
            onClick={() => setActiveCat("all")}
          >
            Tudo <span className="count">{categories.reduce((s, c) => s + c.items.length, 0)}</span>
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              className={"chip" + (activeCat === c.id ? " active" : "")}
              onClick={() => setActiveCat(c.id)}
            >
              {c.label}<span className="count">{c.items.length}</span>
            </button>
          ))}
        </div>

        <div className="menu-list">
          <div>
            {leftCol.map((cat) => <CategoryBlock key={cat.id} cat={cat} />)}
          </div>
          <div>
            {rightCol.map((cat) => <CategoryBlock key={cat.id} cat={cat} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
