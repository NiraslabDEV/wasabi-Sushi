export type CategoryVisual = { gradient: string; emoji: string };

// Visual style for each menu category — used in the visual cards on /cardapio.
export function getCategoryVisual(catId: string): CategoryVisual {
  if (catId === "combos") return { gradient: "linear-gradient(135deg, #c39b4e 0%, #d4ae5e 100%)", emoji: "🎁" };

  if (catId === "entradas-jp") return { gradient: "linear-gradient(135deg, #14d855 0%, #00b844 100%)", emoji: "🥟" };
  if (catId === "california") return { gradient: "linear-gradient(135deg, #00b844 0%, #066b2a 100%)", emoji: "🍣" };
  if (catId === "sashimi") return { gradient: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)", emoji: "🐟" };
  if (catId === "special") return { gradient: "linear-gradient(135deg, #f97316 0%, #c2410c 100%)", emoji: "🔥" };
  if (catId === "temaki") return { gradient: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)", emoji: "🌯" };
  if (catId === "nigiri") return { gradient: "linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)", emoji: "🍣" };
  if (catId === "maki") return { gradient: "linear-gradient(135deg, #15803d 0%, #14532d 100%)", emoji: "🍙" };
  if (catId === "rosas") return { gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)", emoji: "🌹" };
  if (catId === "sandwich") return { gradient: "linear-gradient(135deg, #eab308 0%, #a16207 100%)", emoji: "🥪" };
  if (catId === "finest") return { gradient: "linear-gradient(135deg, #9333ea 0%, #6b21a8 100%)", emoji: "✨" };

  if (catId === "pequeno-almoco") return { gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)", emoji: "🥐" };
  if (catId === "petiscos") return { gradient: "linear-gradient(135deg, #92400e 0%, #6b3713 100%)", emoji: "🥢" };
  if (catId === "tostas-burgers") return { gradient: "linear-gradient(135deg, #ea580c 0%, #9a3412 100%)", emoji: "🍔" };
  if (catId === "pratos") return { gradient: "linear-gradient(135deg, #b45309 0%, #78350f 100%)", emoji: "🍽️" };
  if (catId === "extras") return { gradient: "linear-gradient(135deg, #6b7670 0%, #4a5550 100%)", emoji: "🍚" };
  if (catId === "sobremesas") return { gradient: "linear-gradient(135deg, #ec4899 0%, #831843 100%)", emoji: "🍰" };

  if (catId === "cafe-cha") return { gradient: "linear-gradient(135deg, #78350f 0%, #451a03 100%)", emoji: "☕" };
  if (catId === "refrigerantes") return { gradient: "linear-gradient(135deg, #0891b2 0%, #155e75 100%)", emoji: "🥤" };
  if (catId === "cervejas") return { gradient: "linear-gradient(135deg, #ca8a04 0%, #854d0e 100%)", emoji: "🍺" };
  if (catId === "espirituosas") return { gradient: "linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%)", emoji: "🥃" };
  if (catId === "vinhos") return { gradient: "linear-gradient(135deg, #7c2d12 0%, #450a0a 100%)", emoji: "🍷" };

  return { gradient: "linear-gradient(135deg, #00b844 0%, #066b2a 100%)", emoji: "🍱" };
}
