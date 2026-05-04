import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import WebinarPldPage from "@/components/WebinarPldPage";

const title = "Webinar: Reforma PLD 2025 para Notarios";
const description = "Conoce los cambios de la Reforma PLD 2025 y su impacto en notarías. Regístrate a nuestro webinar gratuito y mantente al día con tus obligaciones de prevención de lavado.";
export const metadata: Metadata = {
  ...canonicalAlternates("/webinar-reforma-pld-2025-para-notarios"),
  ...ogMetadataSpread({ title, description, pathname: "/webinar-reforma-pld-2025-para-notarios" }),
  title,
  description,
};

export default function Page() {
  return <WebinarPldPage />;
}
