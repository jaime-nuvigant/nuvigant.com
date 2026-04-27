import type { Metadata } from "next";
import NotRegisteredPage from "@/components/NotRegisteredPage";

export const metadata: Metadata = {
  title: "Not Registered | Nuvigant",
  robots: { index: false },
};

export default function Page() {
  return <NotRegisteredPage />;
}
