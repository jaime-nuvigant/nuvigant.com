import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/product'),

  title: "Producto",
  description:
    "Descubre todas las funcionalidades de Nuvigant: gestión documental, cálculo de ISR, prevención de lavado de dinero, firma electrónica y más para notarías.",
};

export default function Page() {
  return <ProductPage />;
}
