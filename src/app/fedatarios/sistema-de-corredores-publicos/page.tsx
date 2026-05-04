import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import CorredoresPage from "@/components/CorredoresPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/fedatarios/sistema-de-corredores-publicos'),

  title: "Sistema para Corredores Públicos",
  description:
    "Plataforma integral para corredores públicos en México. Gestiona contratos mercantiles, actas y expedientes con las herramientas de Nuvigant.",
};

export default function Page() {
  return <CorredoresPage />;
}
