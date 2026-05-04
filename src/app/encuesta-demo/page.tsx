import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import EncuestaDemoPage from "@/components/EncuestaDemoPage";

const title = "Encuesta Demo";
const description = "Comparte tu experiencia con la demo de Nuvigant.";
export const metadata: Metadata = {
  ...canonicalAlternates("/encuesta-demo"),
  ...ogMetadataSpread({ title, description, pathname: "/encuesta-demo" }),
  title,
  description,
  robots: { index: false, follow: false },
};

export default function Page() {
  return <EncuestaDemoPage />;
}
