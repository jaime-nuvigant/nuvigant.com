import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import DatosFiscalesJCMPage from "@/components/DatosFiscalesJCMPage";

const title = "Datos Fiscales | JCM | Nuvigant";
const description = "Página de Nuvigant: Datos Fiscales | JCM | Nuvigant";
export const metadata: Metadata = {
  ...canonicalAlternates("/datos-fiscales-jcm"),
  ...ogMetadataSpread({ title, description, pathname: "/datos-fiscales-jcm" }),
  title,
  description,
};

export default function Page() {
  return <DatosFiscalesJCMPage />;
}
