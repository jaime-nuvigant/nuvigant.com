import type { Metadata } from "next";
import NotFoundPage from "@/components/NotFoundPage";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "La página que buscas no existe o se movió.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundPage />;
}
