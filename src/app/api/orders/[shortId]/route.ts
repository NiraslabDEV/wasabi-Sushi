import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { OrderStatus } from "@prisma/client";

export const dynamic = "force-dynamic";

const VALID_STATUSES: OrderStatus[] = [
  "PENDING",
  "ACCEPTED",
  "KITCHEN_PRINTED",
  "BAR_PRINTED",
  "DELIVERED",
  "CANCELLED",
];

export async function PATCH(
  req: Request,
  { params }: { params: { shortId: string } }
) {
  try {
    const shortId = params.shortId.toUpperCase();
    const body = await req.json().catch(() => ({}));
    const status = body.status as OrderStatus;

    if (!VALID_STATUSES.includes(status)) {
      return NextResponse.json({ error: "Status inválido" }, { status: 400 });
    }

    const data: any = { status };
    if (status === "ACCEPTED") data.acceptedAt = new Date();
    if (status === "DELIVERED") data.deliveredAt = new Date();

    const order = await prisma.order.update({
      where: { shortId },
      data,
    });

    return NextResponse.json({ ok: true, status: order.status });
  } catch (err: any) {
    if (err?.code === "P2025") {
      return NextResponse.json({ error: "Pedido não encontrado" }, { status: 404 });
    }
    console.error("[/api/orders/:shortId PATCH] error:", err);
    return NextResponse.json({ error: "Erro" }, { status: 500 });
  }
}
