import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import ESignaturePage from "@/components/ESignaturePage";

const title = "Firma Electrónica";
const description = "Firma documentos de forma segura y legalmente válida con Nuvigant. Soluciones de firma electrónica avanzada para notarías y despachos jurídicos en México.";
export const metadata: Metadata = {
  ...canonicalAlternates("/e-siganature"),
  ...ogMetadataSpread({ title, description, pathname: "/e-siganature" }),
  title,
  description,
};

export default function Page() {
  return <ESignaturePage />;
}
