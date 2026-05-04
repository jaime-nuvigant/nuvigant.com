import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import LawyersPage from "@/components/LawyersPage";

const title = "Nuvigant para Abogados";
const description = "Descubre cómo Nuvigant potencia el trabajo de abogados y despachos jurídicos en México. Gestión de expedientes, firma electrónica y más.";
export const metadata: Metadata = {
  ...canonicalAlternates("/lawyers"),
  ...ogMetadataSpread({ title, description, pathname: "/lawyers" }),
  title,
  description,
};

export default function Page() {
  return <LawyersPage />;
}
