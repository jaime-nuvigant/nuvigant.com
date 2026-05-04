import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import ClientNewsPage from "@/components/ClientNewsPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/client-news'),

  title: "News | Nuvigant",
  description: "Actualizaciones importantes sobre la plataforma Nuvigant para clientes.",
};

export default function Page() {
  return <ClientNewsPage />;
}
