import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import VideosProductoPage from "@/components/VideosProductoPage";

const title = "Videos | Nuvigant";
const description = "Descubre los distintos módulos de la plataforma Nuvigant en estos videotutoriales.";
export const metadata: Metadata = {
  ...canonicalAlternates("/videos-producto"),
  ...ogMetadataSpread({ title, description, pathname: "/videos-producto" }),
  title,
  description,
};

export default function Page() {
  return <VideosProductoPage />;
}
