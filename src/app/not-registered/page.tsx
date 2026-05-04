import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import NotRegisteredPage from "@/components/NotRegisteredPage";

const title = "Not Registered | Nuvigant";
const description = "Página de Nuvigant: Not Registered | Nuvigant";
export const metadata: Metadata = {
  ...canonicalAlternates("/not-registered"),
  ...ogMetadataSpread({ title, description, pathname: "/not-registered" }),
  title,
  description,
  robots: { index: false },
};

export default function Page() {
  return <NotRegisteredPage />;
}
