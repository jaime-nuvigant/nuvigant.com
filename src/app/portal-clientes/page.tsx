import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import PortalClientesPage from "@/components/PortalClientesPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/portal-clientes'),

  title: "Portal de Clientes",
  description:
    "Accede al portal de clientes de Nuvigant. Gestiona tus documentos notariales, firma electrónicamente y da seguimiento a tus trámites en línea.",
};

export default function Page() {
  return <PortalClientesPage />;
}
