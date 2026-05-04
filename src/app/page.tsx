import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ISRCalculator from "@/components/ISRCalculator";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  ...canonicalAlternates('/'),

  title: "Nuvigant · Gestión Notarial con IA",
  description:
    "Plataforma de gestión notarial con IA para México. Portal de clientes, prevención de lavado, facturación electrónica, cálculo de ISR y más.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <ISRCalculator />
      <CTA />
    </main>
  );
}
