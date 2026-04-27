import type { Metadata } from "next";
import VideosProductoPage from "@/components/VideosProductoPage";

export const metadata: Metadata = {
  title: "Videos | Nuvigant",
  description: "Descubre los distintos módulos de la plataforma Nuvigant en estos videotutoriales.",
};

export default function Page() {
  return <VideosProductoPage />;
}
