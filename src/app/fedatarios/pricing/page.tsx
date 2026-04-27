import type { Metadata } from "next";
import FedatariosPricingPage from "@/components/FedatariosPricingPage";

export const metadata: Metadata = {
  title: "Pricing | Nuvigant",
  description: "Nuestra plataforma crece junto contigo. Escoge los módulos que necesitas.",
};

export default function Page() {
  return <FedatariosPricingPage />;
}
