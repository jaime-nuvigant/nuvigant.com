import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce al equipo detrás de Nuvigant, nuestra misión y cómo estamos transformando la gestión notarial en México con tecnología e inteligencia artificial.",
};

export default function Page() {
  return <AboutPage />;
}
