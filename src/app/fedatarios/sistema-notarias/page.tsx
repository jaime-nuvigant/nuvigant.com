import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import SistemaNotariasPage from "@/components/SistemaNotariasPage";

const title = "Sistema para Notarías";
const description = "El sistema administrativo integral para notarías en México. Gestión de escrituras, clientes, agenda, facturación y prevención de lavado en una sola plataforma.";
export const metadata: Metadata = {
  ...canonicalAlternates("/fedatarios/sistema-notarias"),
  ...ogMetadataSpread({ title, description, pathname: "/fedatarios/sistema-notarias" }),
  title,
  description,
};

export default function Page() {
  return <SistemaNotariasPage />;
}
