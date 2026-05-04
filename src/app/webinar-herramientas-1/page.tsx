import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import WebinarHerramientas1Page from "@/components/WebinarHerramientas1Page";

const title = "Webinar: Herramientas parte 1 | Nuvigant";
const description = "Página de Nuvigant: Webinar: Herramientas parte 1 | Nuvigant";
export const metadata: Metadata = {
  ...canonicalAlternates("/webinar-herramientas-1"),
  ...ogMetadataSpread({ title, description, pathname: "/webinar-herramientas-1" }),
  title,
  description,
};

export default function Page() {
  return <WebinarHerramientas1Page />;
}
