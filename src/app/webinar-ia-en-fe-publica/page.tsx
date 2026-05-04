import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import WebinarIaPage from "@/components/WebinarIaPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/webinar-ia-en-fe-publica'),

  title: "Webinar: IA en la Fe Pública",
  description:
    "Explora cómo la inteligencia artificial está transformando la fe pública notarial en México. Regístrate a nuestro webinar gratuito con expertos en derecho y tecnología.",
};

export default function Page() {
  return <WebinarIaPage />;
}
