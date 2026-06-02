import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@prisma/client";

export const dynamic = "force-dynamic";

// Short ID alphabet — uppercase letters + digits, skipping ambiguous (0/O, 1/I, etc.)
const SHORT_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function makeShortId(length = 6) {
  let id = "";
  for (let i = 0; i < length; i++) {
    id += SHORT_CHARS[Math.floor(Math.random() * SHORT_CHARS.length)];
  }
  return id;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const items = Array.isArray(body.items) ? body.items : [];
    const total = Math.max(0, Math.round(Number(body.total) || 0));

    if (items.length === 0) {
      return NextResponse.json({ error: "Carrinho vazio" }, { status: 400 });
    }

    // Retry on rare shortId collision
    for (let attempt = 0; attempt < 5; attempt++) {
      const shortId = makeShortId();
      try {
        const order = await prisma.order.create({
          data: {
            shortId,
            items: items as Prisma.InputJsonValue,
            total,
          },
        });
        return NextResponse.json({ shortId: order.shortId });
      } catch (e: any) {
        if (e?.code === "P2002") continue; // unique constraint, retry
        throw e;
      }
    }

    return NextResponse.json({ error: "Could not allocate id" }, { status: 500 });
  } catch (err) {
    console.error("[/api/orders POST] error:", err);
    return NextResponse.json({ error: "Erro a criar pedido" }, { status: 500 });
  }
}
