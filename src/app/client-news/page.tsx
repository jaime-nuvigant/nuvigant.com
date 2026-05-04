import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import ClientNewsPage from "@/components/ClientNewsPage";

const title = "News | Nuvigant";
const description =
  "Notas de producto, mejoras y avisos operativos para clientes de Nuvigant: plataforma de gestión notarial, PLD y facturación en México.";
export const metadata: Metadata = {
  ...canonicalAlternates("/client-news"),
  ...ogMetadataSpread({ title, description, pathname: "/client-news" }),
  title,
  description,
};

export default function Page() {
  return <ClientNewsPage />;
}
