import type { Metadata } from "next";
import AMLPage from "@/components/AMLPage";

export const metadata: Metadata = {
  title: "AML | Nuvigant",
  description:
    "Cumple con tus obligaciones de prevención de lavado de dinero de manera sencilla, automática y a un precio justo.",
};

export default function Page() {
  return <AMLPage />;
}
