import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = typeof body.email === "string" ? body.email.toLowerCase().trim() : "";
    const source = typeof body.source === "string" ? body.source : "exit_popup";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    await prisma.lead.upsert({
      where: { email },
      update: {},
      create: { email, source },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/leads] error:", err);
    return NextResponse.json({ error: "Erro a registar" }, { status: 500 });
  }
}
