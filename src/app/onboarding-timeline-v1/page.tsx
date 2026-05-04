import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import OnboardingTimelinePage from "@/components/OnboardingTimelinePage";

export const metadata: Metadata = {
  ...canonicalAlternates('/onboarding-timeline-v1'),

  title: "Proceso de Onboarding",
  description: "Conoce los pasos para comenzar a usar Nuvigant en tu notaría.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <OnboardingTimelinePage />;
}
