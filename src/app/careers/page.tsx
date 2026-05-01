import type { Metadata } from "next";
import CareersPage from "@/components/CareersPage";

export const metadata: Metadata = {
  title: "Únete al equipo",
  description:
    "Únete a Nuvigant y ayúdanos a transformar la gestión notarial en México. Explora nuestras vacantes y forma parte de un equipo apasionado por la tecnología y el derecho.",
};

export default function Page() {
  return <CareersPage />;
}
