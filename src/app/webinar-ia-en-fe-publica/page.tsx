import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import WebinarIaPage from "@/components/WebinarIaPage";

const title = "Webinar: IA en la Fe Pública";
const description = "Explora cómo la inteligencia artificial está transformando la fe pública notarial en México. Regístrate a nuestro webinar gratuito con expertos en derecho y tecnología.";
export const metadata: Metadata = {
  ...canonicalAlternates("/webinar-ia-en-fe-publica"),
  ...ogMetadataSpread({ title, description, pathname: "/webinar-ia-en-fe-publica" }),
  title,
  description,
};

export default function Page() {
  return <WebinarIaPage />;
}
