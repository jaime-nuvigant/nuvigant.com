import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import DatosFiscalesPage from "@/components/DatosFiscalesPage";

const title = "Datos Fiscales | Nuvigant";
const description = "Estamos muy cerca de empezar a trabajar juntos. Te pedimos tus datos fiscales para seguir adelante.";
export const metadata: Metadata = {
  ...canonicalAlternates("/datos-fiscales"),
  ...ogMetadataSpread({ title, description, pathname: "/datos-fiscales" }),
  title,
  description,
  robots: { index: false, follow: false },
};

export default function Page() {
  return <DatosFiscalesPage />;
}
