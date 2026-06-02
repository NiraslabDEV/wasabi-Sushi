import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import PedidoClient, { type OrderForView } from "./PedidoClient";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { shortId: string } }): Promise<Metadata> {
  return {
    title: `Pedido #${params.shortId.toUpperCase()} · Wasabi`,
    robots: { index: false, follow: false },
  };
}

export default async function PedidoPage({ params }: { params: { shortId: string } }) {
  const shortId = params.shortId.toUpperCase();

  let order: OrderForView | null = null;
  try {
    const row = await prisma.order.findUnique({ where: { shortId } });
    if (row) {
      order = {
        shortId: row.shortId,
        items: row.items as OrderForView["items"],
        total: row.total,
        status: row.status,
        createdAt: row.createdAt.toISOString(),
        acceptedAt: row.acceptedAt?.toISOString() ?? null,
        deliveredAt: row.deliveredAt?.toISOString() ?? null,
      };
    }
  } catch (err) {
    console.error("[/pedido/:shortId] db error:", err);
  }

  if (!order) notFound();

  return <PedidoClient order={order} />;
}
