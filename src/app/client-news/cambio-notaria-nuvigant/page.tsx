import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import CambioNotariaPage from "@/components/CambioNotariaPage";

const title = "Cambio a Notaría++ => Nuvigant | Nuvigant";
const description = "Conoce la nueva y mejorada versión del sistema Notaría++ que ahora será conocida como Nuvigant.";
export const metadata: Metadata = {
  ...canonicalAlternates("/client-news/cambio-notaria-nuvigant"),
  ...ogMetadataSpread({ title, description, pathname: "/client-news/cambio-notaria-nuvigant" }),
  title,
  description,
};

export default function Page() {
  return <CambioNotariaPage />;
}
