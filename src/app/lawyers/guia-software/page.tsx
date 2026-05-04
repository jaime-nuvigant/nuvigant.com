import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import GuiaSoftwarePage from "@/components/GuiaSoftwarePage";

export const metadata: Metadata = {
  ...canonicalAlternates('/lawyers/guia-software'),

  title: "Guía: Cómo elegir un software para abogados | Nuvigant",
  description:
    "En esta guía encontrarás de manera puntual toda la información necesaria para saber elegir el software para abogados que necesitas.",
};

export default function Page() {
  return <GuiaSoftwarePage />;
}
