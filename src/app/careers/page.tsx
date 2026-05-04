import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import CareersPage from "@/components/CareersPage";

const title = "Únete al equipo";
const description = "Únete a Nuvigant y ayúdanos a transformar la gestión notarial en México. Explora nuestras vacantes y forma parte de un equipo apasionado por la tecnología y el derecho.";
export const metadata: Metadata = {
  ...canonicalAlternates("/careers"),
  ...ogMetadataSpread({ title, description, pathname: "/careers" }),
  title,
  description,
};

export default function Page() {
  return <CareersPage />;
}
