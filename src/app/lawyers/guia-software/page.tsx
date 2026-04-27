import type { Metadata } from "next";
import GuiaSoftwarePage from "@/components/GuiaSoftwarePage";

export const metadata: Metadata = {
  title: "Guía: Cómo elegir un software para abogados | Nuvigant",
  description:
    "En esta guía encontrarás de manera puntual toda la información necesaria para saber elegir el software para abogados que necesitas.",
};

export default function Page() {
  return <GuiaSoftwarePage />;
}
