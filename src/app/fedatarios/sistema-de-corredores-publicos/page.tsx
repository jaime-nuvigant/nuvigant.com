import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import CorredoresPage from "@/components/CorredoresPage";

const title = "Sistema para Corredores Públicos";
const description = "Plataforma integral para corredores públicos en México. Gestiona contratos mercantiles, actas y expedientes con las herramientas de Nuvigant.";
export const metadata: Metadata = {
  ...canonicalAlternates("/fedatarios/sistema-de-corredores-publicos"),
  ...ogMetadataSpread({ title, description, pathname: "/fedatarios/sistema-de-corredores-publicos" }),
  title,
  description,
};

export default function Page() {
  return <CorredoresPage />;
}
