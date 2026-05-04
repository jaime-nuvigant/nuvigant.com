import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import SanctionsListsPage from "@/components/SanctionsListsPage";

const title = "Búsqueda de Listados Negros | Nuvigant";
const description = "Realiza búsquedas en los listados negros que en verdad necesitas. No pagues por herramientas o listados que no son requeridas por la ley.";
export const metadata: Metadata = {
  ...canonicalAlternates("/aml/sanctions-lists"),
  ...ogMetadataSpread({ title, description, pathname: "/aml/sanctions-lists" }),
  title,
  description,
};

export default function Page() {
  return <SanctionsListsPage />;
}
