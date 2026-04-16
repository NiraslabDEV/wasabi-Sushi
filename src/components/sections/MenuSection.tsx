"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "@/app/TranslationProvider";

interface MenuItem {
  name: string;
  description: string;
  price: number;
  icon?: string;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "entradas",
    name: "Entradas",
    items: [
      {
        name: "Edamame",
        description: "Steamed soybeans with sea salt",
        price: 350,
      },
      {
        name: "Miso Soup",
        description: "Traditional soybean broth with tofu and seaweed",
        price: 450,
      },
      {
        name: "Gyoza Frito (6 pcs)",
        description: "Crispy pan-fried dumplings with dipping sauce",
        price: 850,
      },
      {
        name: "Tataki de Atum",
        description: "Seared tuna with ponzu and crispy garlic",
        price: 1200,
      },
    ],
  },
  {
    id: "sushi",
    name: "Sushi Tradicional",
    items: [
      {
        name: "Salmão Nigiri",
        description: "Fresh salmon over sushi rice",
        price: 550,
      },
      {
        name: "Atum Nigiri",
        description: "Premium tuna over sushi rice",
        price: 600,
      },
      {
        name: "California Roll",
        description: "Crab, cucumber, avocado",
        price: 950,
      },
      {
        name: "Spicy Tuna Roll",
        description: "Spicy tuna with jalapeño and sriracha",
        price: 1050,
      },
      {
        name: "Dragon Roll",
        description: "Shrimp tempura, cucumber, eel, avocado",
        price: 1350,
      },
      {
        name: "Rainbow Roll",
        description: "California roll topped with assorted sashimi",
        price: 1450,
      },
    ],
  },
  {
    id: "mocambicana",
    name: "Cozinha Moçambicana",
    items: [
      {
        name: "Camarão Peri-Peri",
        description: "Grilled prawns with Mozambican spices and coconut",
        price: 2800,
      },
      {
        name: "Matapa de Lagosta",
        description: "Lobster in cassava leaf cream sauce with jasmine rice",
        price: 3500,
      },
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas & Cocktails",
    items: [
      {
        name: "Sake Quente",
        description: "Warmed traditional Japanese rice wine",
        price: 400,
      },
      {
        name: "Sake Frio Premium",
        description: "Chilled premium sake selection",
        price: 650,
      },
      {
        name: "Wasabi Martini",
        description: "Vodka, wasabi pear, citrus",
        price: 550,
      },
      {
        name: "Tropical Yuzu Spritz",
        description: "Sparkling yuzu, tropical fruits, herbs",
        price: 450,
      },
      {
        name: "Água / Refrigerante",
        description: "Still or sparkling water, soft drinks",
        price: 150,
      },
    ],
  },
  {
    id: "vinhos",
    name: "Vinhos",
    items: [
      {
        name: "Casa Branca (Branco, Moçambique)",
        description: "Local crisp white wine",
        price: 800,
      },
      {
        name: "Vinho Verde (Branco, Portugal)",
        description: "Refreshing slightly sparkling white",
        price: 1200,
      },
      {
        name: "Cabernet Sauvignon (Tinto, África do Sul)",
        description: "Full-bodied red wine",
        price: 1500,
      },
      {
        name: "Champagne Brut (França)",
        description: "Premium French champagne",
        price: 3800,
      },
    ],
  },
];

export default function MenuSection() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("entradas");

  // Special sections from the original HTML
  const specialties = [
    {
      name: "Tuna Truffle Tataki",
      description: "Seared Atlantic tuna, black truffle ponzu, crispy garlic chips, and maldon sea salt.",
      price: 2450,
      label: "House Signature",
      isLarge: true,
      image: "https://images.unsplash.com/photo-1553909092-d9eae28fcf81?w=800&h=600&fit=crop",
    },
    {
      name: "Prawn Carpaccio",
      description: "Local Bazaruto prawns, citrus emulsion, and pink peppercorns.",
      price: 1850,
      icon: "eco",
    },
    {
      name: "A5 Wagyu Nigiri",
      description: "Torched Miyazaki beef, foie gras mousse, and nikiri glaze.",
      price: 3200,
      icon: "workspace_premium",
    },
  ];

  const combinados = [
    {
      name: "Zanzibar Drift",
      description: "32 Pieces. A tribute to the Indian Ocean. Features spicy tuna, tempura prawns, and local white fish nigiri.",
      price: 4200,
      label: "Only 5 Daily",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop",
    },
    {
      name: "The Omakase Deck",
      description: "48 Pieces. The Chef's ultimate vision. Includes premium imported Wagyu, scallops, and fresh Bazaruto lobster rolls.",
      price: 7500,
      label: "Premium",
      isFeatured: true,
      image: "https://images.unsplash.com/photo-1686897962053-83ee2abf3f0d?w=600&h=400&fit=crop",
    },
    {
      name: "Bazaruto Bloom",
      description: "24 Pieces. Vegan & Vegetarian focus. Mango uramaki, avocado nigiri, and tempura sweet potato.",
      price: 3100,
      label: "Vegan",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop",
    },
  ];

  const activeMenuCategory = menuData.find((cat) => cat.id === activeCategory);
  const categories = menuData.filter((cat) => cat.id !== "mocambicana" && cat.id !== "bebidas" && cat.id !== "vinhos");

  return (
    <section className="py-24 px-8 max-w-screen-2xl mx-auto" id="menu">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 mb-20 items-baseline border-b border-outline-variant/10 pb-8">
        <h2 className="font-headline text-4xl md:text-5xl text-secondary pr-12">
          {t("theCollection")}
        </h2>
        <div className="flex flex-wrap gap-6 text-sm font-medium tracking-widest uppercase text-on-surface/60 overflow-x-auto pb-4 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? "text-primary border-b border-primary"
                  : "hover:text-primary"
              }`}
            >
              {t(`menu.category.${cat.id}`)}
            </button>
          ))}
          <button
            onClick={() => setActiveCategory("mocambicana")}
            className={`whitespace-nowrap transition-colors ${
              activeCategory === "mocambicana"
                ? "text-primary border-b border-primary"
                : "hover:text-primary"
            }`}
          >
            {t("menu.category.mocambicana")}
          </button>
        </div>
      </div>

      {/* Especialidades - Bento Grid */}
      {activeCategory === "entradas" && (
        <div className="mb-32" id="especialidades">
          <div className="mb-8">
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-2 block">
              {t("menu.houseSpecialties")}
            </span>
            <h3 className="font-headline text-3xl italic mb-12">
              {t("menu.especialidades")}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
            {/* Large Card */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl h-[500px] bg-surface-container-low shadow-2xl">
              <Image
                src={specialties[0].image}
                alt={specialties[0].name}
                fill
                className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <span className="text-secondary-fixed text-xs font-bold tracking-widest uppercase mb-2 block">
                  {specialties[0].label}
                </span>
                <h3 className="font-headline text-4xl mb-2">{specialties[0].name}</h3>
                <p className="text-on-surface-variant max-w-md mb-6">
                  {specialties[0].description}
                </p>
                <span className="text-secondary font-headline text-2xl">
                  {specialties[0].price.toLocaleString("pt-MZ")} MT
                </span>
              </div>
            </div>

            {/* Small Cards */}
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              {specialties.slice(1).map((item, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container-high p-8 rounded-xl flex flex-col justify-between emerald-glow"
                >
                  <div>
                    <h3 className="font-headline text-2xl mb-2">{item.name}</h3>
                    <p className="text-on-surface-variant text-sm">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-8">
                    <span className="text-secondary font-headline text-xl">
                      {item.price.toLocaleString("pt-MZ")} MT
                    </span>
                    {item.icon && (
                      <span className="material-symbols-outlined text-secondary">
                        {item.icon}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Regular Categories Grid */}
      {activeMenuCategory && activeCategory !== "mocambicana" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {activeMenuCategory.items.map((item) => (
            <div
              key={item.name}
              className="bg-surface-container-high p-6 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all group cursor-pointer"
            >
              <h4 className="font-headline text-lg mb-1 group-hover:text-secondary transition-colors">
                {item.name}
              </h4>
              <p className="text-on-surface-variant text-sm mb-4">
                {item.description}
              </p>
              <span className="text-secondary font-headline text-lg block">
                {item.price.toLocaleString("pt-MZ")} MT
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Cozinha Moçambicana */}
      {activeCategory === "mocambicana" && (
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuData
              .find((cat) => cat.id === "mocambicana")
              ?.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-surface-container-high p-8 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all"
                >
                  <h4 className="font-headline text-2xl mb-2 text-secondary">
                    {item.name}
                  </h4>
                  <p className="text-on-surface-variant mb-6">
                    {item.description}
                  </p>
                  <span className="text-secondary font-headline text-2xl block">
                    {item.price.toLocaleString("pt-MZ")} MT
                  </span>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Combinados Section */}
      <div className="mb-32" id="combinados">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-2 block">
              {t("menu.curatedSelections")}
            </span>
            <h2 className="font-headline text-4xl md:text-5xl italic">
              {t("menu.theCombinados")}
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-on-surface-variant text-sm italic">
              {t("menu.designedForSharing")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {combinados.map((combo, idx) => (
            <div
              key={idx}
              className={`rounded-xl overflow-hidden border transition-all duration-500 ${
                combo.isFeatured
                  ? "bg-surface-container-highest border-secondary/20 shadow-2xl relative scale-105 z-10"
                  : "bg-surface-container-low border-outline-variant/10 group hover:border-primary/30"
              }`}
            >
              {combo.isFeatured && (
                <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
              )}
              <div className="relative h-64">
                <Image
                  src={combo.image}
                  alt={combo.name}
                  fill
                  className={`object-cover ${
                    !combo.isFeatured && "group-hover:scale-105 transition-transform duration-700"
                  }`}
                />
                {combo.isFeatured && (
                  <div className="absolute inset-0 bg-black/20"></div>
                )}
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h4
                    className={`font-headline text-2xl ${
                      combo.isFeatured ? "text-secondary-fixed" : ""
                    }`}
                  >
                    {combo.name}
                  </h4>
                  <span
                    className={`font-headline text-xl ${
                      combo.isFeatured ? "text-secondary-fixed" : "text-secondary"
                    }`}
                  >
                    {combo.price.toLocaleString("pt-MZ")} MT
                  </span>
                </div>
                <p
                  className={`text-sm mb-8 leading-relaxed ${
                    combo.isFeatured ? "text-tertiary-fixed" : "text-on-surface-variant"
                  }`}
                >
                  {combo.description}
                </p>
                <button
                  className={`w-full py-4 text-xs font-bold tracking-widest uppercase transition-all ${
                    combo.isFeatured
                      ? "bg-secondary text-on-secondary hover:brightness-110"
                      : "border border-outline-variant/30 hover:bg-primary hover:text-on-primary hover:border-primary"
                  }`}
                >
                  {combo.isFeatured ? t("menu.reserveCollection") : t("menu.requestSelection")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bebidas e Vinhos - Simple Lists */}
      {(activeCategory === "bebidas" || activeCategory === "vinhos") && (
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuData
              .find((cat) => cat.id === activeCategory)
              ?.items.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-start pb-6 border-b border-outline-variant/10"
                >
                  <div className="flex-1">
                    <h4 className="font-headline text-lg mb-1">
                      {item.name}
                    </h4>
                    <p className="text-on-surface-variant text-sm">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-secondary font-headline text-lg ml-4 whitespace-nowrap">
                    {item.price.toLocaleString("pt-MZ")} MT
                  </span>
                </div>
              ))}
          </div>
        </div>
      )}
    </section>
  );
}
