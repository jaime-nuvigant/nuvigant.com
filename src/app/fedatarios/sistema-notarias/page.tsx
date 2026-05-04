import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import SistemaNotariasPage from "@/components/SistemaNotariasPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/fedatarios/sistema-notarias'),

  title: "Sistema para Notarías",
  description:
    "El sistema administrativo integral para notarías en México. Gestión de escrituras, clientes, agenda, facturación y prevención de lavado en una sola plataforma.",
};

export default function Page() {
  return <SistemaNotariasPage />;
}
