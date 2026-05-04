import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import OnboardingTimelinePage from "@/components/OnboardingTimelinePage";

const title = "Proceso de Onboarding";
const description = "Conoce los pasos para comenzar a usar Nuvigant en tu notaría.";
export const metadata: Metadata = {
  ...canonicalAlternates("/onboarding-timeline-v1"),
  ...ogMetadataSpread({ title, description, pathname: "/onboarding-timeline-v1" }),
  title,
  description,
  robots: { index: false, follow: false },
};

export default function Page() {
  return <OnboardingTimelinePage />;
}
