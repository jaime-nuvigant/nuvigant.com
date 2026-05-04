import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import FedatariosPage from "@/components/FedatariosPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/fedatarios'),

  title: "Fedatarios | Nuvigant",
  description: "Software en la nube que te acerca a tus clientes y a tus metas.",
};

export default function Page() {
  return <FedatariosPage />;
}
