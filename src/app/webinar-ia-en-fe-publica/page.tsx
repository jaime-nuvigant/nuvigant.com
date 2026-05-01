import type { Metadata } from "next";
import WebinarIaPage from "@/components/WebinarIaPage";

export const metadata: Metadata = {
  title: "Webinar: IA en la Fe Pública",
  description:
    "Explora cómo la inteligencia artificial está transformando la fe pública notarial en México. Regístrate a nuestro webinar gratuito con expertos en derecho y tecnología.",
};

export default function Page() {
  return <WebinarIaPage />;
}
