import type { Metadata } from "next";
import EncuestaDemoPage from "@/components/EncuestaDemoPage";

export const metadata: Metadata = {
  title: "Encuesta Demo",
  description: "Comparte tu experiencia con la demo de Nuvigant.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <EncuestaDemoPage />;
}
