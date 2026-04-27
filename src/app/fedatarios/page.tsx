import type { Metadata } from "next";
import FedatariosPage from "@/components/FedatariosPage";

export const metadata: Metadata = {
  title: "Fedatarios | Nuvigant",
  description: "Software en la nube que te acerca a tus clientes y a tus metas.",
};

export default function Page() {
  return <FedatariosPage />;
}
