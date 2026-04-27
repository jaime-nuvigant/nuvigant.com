import type { Metadata } from "next";
import ImplementationPage from "@/components/ImplementationPage";

export const metadata: Metadata = {
  title: "Tips de Implementación | Nuvigant",
  description:
    "Aquí encontrarás varias medidas y sugerencias que hemos visto que sirven al momento de implementar nuestra aplicación en tu operación.",
};

export default function Page() {
  return <ImplementationPage />;
}
