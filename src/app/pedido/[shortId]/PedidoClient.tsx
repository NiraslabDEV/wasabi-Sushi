"use client";

import { useState } from "react";
import Link from "next/link";
import { formatPrice } from "@/data/menu";

export type OrderForView = {
  shortId: string;
  items: Array<{ name: string; meta?: string; price: number; qty: number; emoji?: string; gradient?: string }>;
  total: number;
  status: string;
  createdAt: string;
  acceptedAt: string | null;
  deliveredAt: string | null;
};

const STATUS_LABEL: Record<string, string> = {
  PENDING: "Pendente",
  ACCEPTED: "Aceito",
  KITCHEN_PRINTED: "Impresso na cozinha",
  BAR_PRINTED: "Impresso no bar",
  DELIVERED: "Entregue",
  CANCELLED: "Cancelado",
};

const STATUS_COLOR: Record<string, string> = {
  PENDING: "#c39b4e",
  ACCEPTED: "#066b2a",
  KITCHEN_PRINTED: "#066b2a",
  BAR_PRINTED: "#066b2a",
  DELIVERED: "#0a0f0c",
  CANCELLED: "#b91c1c",
};

export default function PedidoClient({ order: initial }: { order: OrderForView }) {
  const [order, setOrder] = useState(initial);
  const [busy, setBusy] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  async function updateStatus(status: string) {
    setBusy(status);
    try {
      const res = await fetch(`/api/orders/${order.shortId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (!res.ok) {
        setToast(data?.error || "Erro a actualizar");
      } else {
        setOrder((o) => ({ ...o, status: data.status }));
        if (status === "ACCEPTED") setToast("✓ Pedido aceito");
        if (status === "DELIVERED") setToast("✓ Marcado como entregue");
      }
    } catch {
      setToast("Sem ligação");
    }
    setBusy(null);
    setTimeout(() => setToast(null), 2500);
  }

  function placeholderPrint(area: "Cozinha" | "Bar") {
    setToast(`🖨 ${area}: integração com impressora térmica chega na Fase 6 (KDS). Por agora, leia o pedido na tela.`);
    setTimeout(() => setToast(null), 4500);
  }

  const acceptedOrDone =
    order.status === "ACCEPTED" ||
    order.status === "KITCHEN_PRINTED" ||
    order.status === "BAR_PRINTED" ||
    order.status === "DELIVERED";

  return (
    <div className="pedido-page">
      <header className="pedido-header">
        <Link href="/cardapio" className="pedido-back">← Cardápio</Link>
        <div className="pedido-id">
          <span className="hash">#</span>{order.shortId}
        </div>
        <div className="pedido-status" style={{ background: STATUS_COLOR[order.status] || "var(--ink)" }}>
          {STATUS_LABEL[order.status] || order.status}
        </div>
      </header>

      <main className="pedido-main">
        <div className="container">
          <div className="pedido-head">
            <div className="kicker">Pedido recebido</div>
            <h1>Mesa <span className="em">do cliente</span></h1>
            <p className="muted">Criado em {new Date(order.createdAt).toLocaleString("pt-PT")}</p>
          </div>

          <ul className="pedido-items">
            {order.items.map((it, i) => (
              <li key={i}>
                <div className="line">
                  <span className="qty">{it.qty}×</span>
                  {it.emoji && (
                    <span
                      className="dot"
                      style={{ background: it.gradient || "var(--green)" }}
                    >
                      {it.emoji}
                    </span>
                  )}
                  <span className="name">
                    {it.name}
                    {it.meta && <span className="meta"> · {it.meta}</span>}
                  </span>
                </div>
                <span className="price">{formatPrice(it.qty * it.price)} MT</span>
              </li>
            ))}
          </ul>

          <div className="pedido-total">
            <span>Total</span>
            <span className="big">{formatPrice(order.total)} MT</span>
          </div>

          <div className="pedido-actions">
            {order.status === "PENDING" && (
              <button
                className="btn btn-primary"
                onClick={() => updateStatus("ACCEPTED")}
                disabled={busy === "ACCEPTED"}
              >
                {busy === "ACCEPTED" ? "A aceitar..." : "✓ Aceitar pedido"}
              </button>
            )}

            <button
              className="btn btn-ghost"
              onClick={() => placeholderPrint("Cozinha")}
              disabled={!!busy}
            >
              🖨 Imprimir cozinha
            </button>

            <button
              className="btn btn-ghost"
              onClick={() => placeholderPrint("Bar")}
              disabled={!!busy}
            >
              🍺 Imprimir bar
            </button>

            {acceptedOrDone && order.status !== "DELIVERED" && (
              <button
                className="btn btn-primary"
                onClick={() => updateStatus("DELIVERED")}
                disabled={busy === "DELIVERED"}
              >
                {busy === "DELIVERED" ? "A marcar..." : "Marcar como entregue"}
              </button>
            )}
          </div>

          <p className="pedido-future">
            <strong>Fase 6 (futura):</strong> os botões "Imprimir cozinha" e "Imprimir bar"
            vão enviar comandas térmicas separadas — sushi/quentes para uma impressora,
            bebidas para outra. Por agora, o garçom apresenta o pedido na cozinha visualmente.
          </p>
        </div>
      </main>

      {toast && <div className="pedido-toast">{toast}</div>}
    </div>
  );
}
