import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import PortalClientesPage from "@/components/PortalClientesPage";

const title = "Portal de Clientes";
const description = "Accede al portal de clientes de Nuvigant. Gestiona tus documentos notariales, firma electrónicamente y da seguimiento a tus trámites en línea.";
export const metadata: Metadata = {
  ...canonicalAlternates("/portal-clientes"),
  ...ogMetadataSpread({ title, description, pathname: "/portal-clientes" }),
  title,
  description,
};

export default function Page() {
  return <PortalClientesPage />;
}
