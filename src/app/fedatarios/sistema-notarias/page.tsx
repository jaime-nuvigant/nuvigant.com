import type { Metadata } from "next";
import SistemaNotariasPage from "@/components/SistemaNotariasPage";

export const metadata: Metadata = {
  title: "Sistema para Notarías",
  description:
    "El sistema administrativo integral para notarías en México. Gestión de escrituras, clientes, agenda, facturación y prevención de lavado en una sola plataforma.",
};

export default function Page() {
  return <SistemaNotariasPage />;
}
