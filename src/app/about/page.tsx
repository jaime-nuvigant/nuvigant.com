import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import AboutPage from "@/components/AboutPage";

const title = "Nosotros";
const description = "Conoce al equipo detrás de Nuvigant, nuestra misión y cómo estamos transformando la gestión notarial en México con tecnología e inteligencia artificial.";
export const metadata: Metadata = {
  ...canonicalAlternates("/about"),
  ...ogMetadataSpread({ title, description, pathname: "/about" }),
  title,
  description,
};

export default function Page() {
  return <AboutPage />;
}
