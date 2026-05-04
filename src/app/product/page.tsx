import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import ProductPage from "@/components/ProductPage";

const title = "Producto";
const description =
  "Descubre todas las funcionalidades de Nuvigant: gestión documental, cálculo de ISR, prevención de lavado de dinero, firma electrónica y más para notarías.";

export const metadata: Metadata = {
  ...canonicalAlternates("/product"),
  ...ogMetadataSpread({ title, description, pathname: "/product" }),
  title,
  description,
};

export default function Page() {
  return <ProductPage />;
}
