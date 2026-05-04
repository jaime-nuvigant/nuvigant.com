import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import CFDI40VideosPage from "@/components/CFDI40VideosPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/cfdi-4-0-videos'),

  title: "Videos CFDI 4.0",
  description:
    "Aprende a usar el CFDI 4.0 con nuestros videos tutoriales. Guías paso a paso para notarías y despachos jurídicos en México.",
};

export default function Page() {
  return <CFDI40VideosPage />;
}
