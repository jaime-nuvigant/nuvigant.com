import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import CFDI40VideosPage from "@/components/CFDI40VideosPage";

const title = "Videos CFDI 4.0";
const description = "Aprende a usar el CFDI 4.0 con nuestros videos tutoriales. Guías paso a paso para notarías y despachos jurídicos en México.";
export const metadata: Metadata = {
  ...canonicalAlternates("/cfdi-4-0-videos"),
  ...ogMetadataSpread({ title, description, pathname: "/cfdi-4-0-videos" }),
  title,
  description,
};

export default function Page() {
  return <CFDI40VideosPage />;
}
