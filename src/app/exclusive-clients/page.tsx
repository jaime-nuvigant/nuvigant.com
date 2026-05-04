import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import ExclusiveClientsPage from "@/components/ExclusiveClientsPage";

const title = "Página exclusiva clientes | Nuvigant";
const description = "Estás intentando acceder a una sección exclusiva para clientes.";
export const metadata: Metadata = {
  ...canonicalAlternates("/exclusive-clients"),
  ...ogMetadataSpread({ title, description, pathname: "/exclusive-clients" }),
  title,
  description,
};

export default function Page() {
  return <ExclusiveClientsPage />;
}
