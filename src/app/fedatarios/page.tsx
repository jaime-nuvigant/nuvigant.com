import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import FedatariosPage from "@/components/FedatariosPage";

const title = "Fedatarios | Nuvigant";
const description = "Software en la nube que te acerca a tus clientes y a tus metas.";

export const metadata: Metadata = {
  ...canonicalAlternates("/fedatarios"),
  ...ogMetadataSpread({ title, description, pathname: "/fedatarios" }),
  title,
  description,
};

export default function Page() {
  return <FedatariosPage />;
}
