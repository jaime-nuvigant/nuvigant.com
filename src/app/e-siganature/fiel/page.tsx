import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import FielPage from "@/components/FielPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/e-siganature/fiel'),

  title: "FIEL — Firma Electrónica Avanzada",
  description:
    "Obtén y gestiona tu Firma Electrónica Avanzada (FIEL) con Nuvigant. Tramita tu FIEL ante el SAT de manera sencilla y segura.",
};

export default function Page() {
  return <FielPage />;
}
