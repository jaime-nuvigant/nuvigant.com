import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import ImplementationPage from "@/components/ImplementationPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/fedatarios/implementation'),

  title: "Tips de Implementación | Nuvigant",
  description:
    "Aquí encontrarás varias medidas y sugerencias que hemos visto que sirven al momento de implementar nuestra aplicación en tu operación.",
};

export default function Page() {
  return <ImplementationPage />;
}
