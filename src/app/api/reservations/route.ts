import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendReservationEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nome, telefone, data, hora, pessoas, mensagem } = body;

    // Validação
    if (!nome || !telefone || !data || !hora || !pessoas) {
      return NextResponse.json(
        { error: "Campos obrigatórios em falta" },
        { status: 400 }
      );
    }

    // Criar reserva
    const reserva = await prisma.reserva.create({
      data: {
        nome,
        telefone,
        data: new Date(data),
        hora,
        pessoas: Number(pessoas),
        mensagem: mensagem || null,
      },
    });

    // Enviar email (não bloqueia a resposta)
    sendReservationEmail({
      nome,
      telefone,
      data,
      hora,
      pessoas,
      mensagem,
    }).catch(console.error);

    return NextResponse.json(
      { success: true, id: reserva.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao criar reserva:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
