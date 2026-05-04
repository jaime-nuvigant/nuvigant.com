import { NextRequest, NextResponse } from "next/server";
import { getSiteUrl } from "@/lib/site-url";

const HUBSPOT_PORTAL_ID =
  process.env.HUBSPOT_PORTAL_ID?.trim() || "4355745";
const HUBSPOT_FORM_GUID =
  process.env.HUBSPOT_DEMO_FORM_GUID?.trim() ||
  "393ec060-a169-40c7-9cb8-c830769c0378";

/**
 * Maps our form keys to HubSpot field internal names (Marketing → Forms → field settings).
 * Update if your HubSpot form uses different property names.
 */
const FIELD_MAP = {
  empresa: "company",
  email: "email",
  telefono: "phone",
  mensaje: "message",
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const nombre =
    typeof data.nombre === "string" ? data.nombre.trim().slice(0, 100) : "";
  const apellidos =
    typeof data.apellidos === "string" ? data.apellidos.trim().slice(0, 100) : "";
  const email =
    typeof data.email === "string" ? data.email.trim().slice(0, 320) : "";

  if (!nombre || !apellidos || !email) {
    return NextResponse.json(
      { error: "Nombre, apellidos y correo son obligatorios." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Correo electrónico no válido." },
      { status: 400 }
    );
  }

  const str = (v: unknown, max: number) =>
    typeof v === "string" ? v.trim().slice(0, max) : "";

  const empresa = str(data.empresa, 500);
  const telefono = str(data.telefono, 80);
  const mensaje = str(data.mensaje, 10000);

  if (!telefono) {
    return NextResponse.json(
      { error: "El teléfono es obligatorio." },
      { status: 400 }
    );
  }
  const pageUri =
    typeof data.pageUri === "string"
      ? data.pageUri.trim().slice(0, 2048)
      : "";
  const hutk =
    typeof data.hutk === "string" ? data.hutk.trim().slice(0, 200) : "";

  const fields: { name: string; value: string }[] = [
    { name: "firstname", value: nombre },
    { name: "lastname", value: apellidos },
    { name: FIELD_MAP.email, value: email },
  ];
  if (empresa) fields.push({ name: FIELD_MAP.empresa, value: empresa });
  fields.push({ name: FIELD_MAP.telefono, value: telefono });
  if (mensaje) fields.push({ name: FIELD_MAP.mensaje, value: mensaje });

  const fallbackUri = `${getSiteUrl()}/schedule-demo/`;
  const resolvedPageUri =
    pageUri || request.headers.get("referer")?.slice(0, 2048) || fallbackUri;

  const hubspotPayload: {
    fields: { name: string; value: string }[];
    context: { pageUri: string; pageName: string; hutk?: string };
  } = {
    fields,
    context: {
      pageUri: resolvedPageUri,
      pageName: "Solicitar Demo — Nuvigant",
    },
  };
  if (hutk) hubspotPayload.context.hutk = hutk;

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;

  const hsRes = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(hubspotPayload),
  });

  const hsText = await hsRes.text();
  if (!hsRes.ok) {
    console.error("[hubspot demo]", hsRes.status, hsText);
    return NextResponse.json(
      { error: "No se pudo enviar el formulario. Intenta de nuevo más tarde." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true as const });
}
