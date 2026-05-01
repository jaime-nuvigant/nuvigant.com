import type { Metadata } from "next";
import CFDI40VideosPage from "@/components/CFDI40VideosPage";

export const metadata: Metadata = {
  title: "Videos CFDI 4.0",
  description:
    "Aprende a usar el CFDI 4.0 con nuestros videos tutoriales. Guías paso a paso para notarías y despachos jurídicos en México.",
};

export default function Page() {
  return <CFDI40VideosPage />;
}
