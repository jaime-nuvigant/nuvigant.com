import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import WebinarHerramientas1Page from "@/components/WebinarHerramientas1Page";

export const metadata: Metadata = {
  ...canonicalAlternates('/webinar-herramientas-1'),

  title: "Webinar: Herramientas parte 1 | Nuvigant",
};

export default function Page() {
  return <WebinarHerramientas1Page />;
}
