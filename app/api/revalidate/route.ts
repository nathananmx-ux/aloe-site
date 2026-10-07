import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = {
  _type?: string;
  slug?: string;
};

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  if (!secret) {
    return NextResponse.json(
      { message: "SANITY_REVALIDATE_SECRET não configurado." },
      { status: 500 }
    );
  }

  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      request,
      secret,
      true
    );

    if (!isValidSignature) {
      return NextResponse.json(
        { message: "Assinatura inválida." },
        { status: 401 }
      );
    }

    if (body?._type !== "post") {
      return NextResponse.json(
        { message: "Evento ignorado.", body },
        { status: 202 }
      );
    }

    revalidatePath("/blog");
    if (body.slug) revalidatePath(`/blog/${body.slug}`);

    return NextResponse.json({ revalidated: true, body });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro desconhecido";
    return NextResponse.json({ message }, { status: 500 });
  }
}
