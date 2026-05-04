import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import FielPage from "@/components/FielPage";

const title = "FIEL — Firma Electrónica Avanzada";
const description = "Obtén y gestiona tu Firma Electrónica Avanzada (FIEL) con Nuvigant. Tramita tu FIEL ante el SAT de manera sencilla y segura.";
export const metadata: Metadata = {
  ...canonicalAlternates("/e-siganature/fiel"),
  ...ogMetadataSpread({ title, description, pathname: "/e-siganature/fiel" }),
  title,
  description,
};

export default function Page() {
  return <FielPage />;
}
