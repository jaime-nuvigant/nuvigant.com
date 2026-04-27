import type { Metadata } from "next";
import ClientNewsPage from "@/components/ClientNewsPage";

export const metadata: Metadata = {
  title: "News | Nuvigant",
  description: "Actualizaciones importantes sobre la plataforma Nuvigant para clientes.",
};

export default function Page() {
  return <ClientNewsPage />;
}
