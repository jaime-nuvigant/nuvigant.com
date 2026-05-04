import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import RegularizacionPage from "@/components/RegularizacionPage";

const title = "Regularización";
const description = "Regulariza tu situación fiscal y documental con el apoyo de Nuvigant. Soluciones ágiles para notarías y particulares en México.";
export const metadata: Metadata = {
  ...canonicalAlternates("/regularizacion"),
  ...ogMetadataSpread({ title, description, pathname: "/regularizacion" }),
  title,
  description,
};

export default function Page() {
  return <RegularizacionPage />;
}
