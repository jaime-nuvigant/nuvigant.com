import type { Metadata } from "next";
import OnboardingTimelinePage from "@/components/OnboardingTimelinePage";

export const metadata: Metadata = {
  title: "Proceso de Onboarding",
  description: "Conoce los pasos para comenzar a usar Nuvigant en tu notaría.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <OnboardingTimelinePage />;
}
