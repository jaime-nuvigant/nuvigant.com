import type { Metadata } from "next";
import WebinarPldPage from "@/components/WebinarPldPage";

export const metadata: Metadata = {
  title: "Webinar: Reforma PLD 2025 para Notarios",
  description:
    "Conoce los cambios de la Reforma PLD 2025 y su impacto en notarías. Regístrate a nuestro webinar gratuito y mantente al día con tus obligaciones de prevención de lavado.",
};

export default function Page() {
  return <WebinarPldPage />;
}
