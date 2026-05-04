import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import TrabajaPage from "@/components/TrabajaPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/trabaja-en-nuvigant'),

  title: "Trabaja en Nuvigant",
  description:
    "Forma parte del equipo de Nuvigant. Buscamos personas talentosas apasionadas por la tecnología y el derecho para transformar la gestión notarial en México.",
};

export default function Page() {
  return <TrabajaPage />;
}
