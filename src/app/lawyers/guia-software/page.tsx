import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import GuiaSoftwarePage from "@/components/GuiaSoftwarePage";

const title = "Guía: Cómo elegir un software para abogados | Nuvigant";
const description = "En esta guía encontrarás de manera puntual toda la información necesaria para saber elegir el software para abogados que necesitas.";
export const metadata: Metadata = {
  ...canonicalAlternates("/lawyers/guia-software"),
  ...ogMetadataSpread({ title, description, pathname: "/lawyers/guia-software" }),
  title,
  description,
};

export default function Page() {
  return <GuiaSoftwarePage />;
}
