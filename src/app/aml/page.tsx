import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import AMLPage from "@/components/AMLPage";

const title = "AML | Nuvigant";
const description = "Cumple con tus obligaciones de prevención de lavado de dinero de manera sencilla, automática y a un precio justo.";
export const metadata: Metadata = {
  ...canonicalAlternates("/aml"),
  ...ogMetadataSpread({ title, description, pathname: "/aml" }),
  title,
  description,
};

export default function Page() {
  return <AMLPage />;
}
