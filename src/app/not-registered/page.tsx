import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import NotRegisteredPage from "@/components/NotRegisteredPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/not-registered'),

  title: "Not Registered | Nuvigant",
  robots: { index: false },
};

export default function Page() {
  return <NotRegisteredPage />;
}
