import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  ...canonicalAlternates('/sistema-administrativo'),

  robots: { index: false, follow: false },
};

export default function Page() {
  redirect("/");
}
