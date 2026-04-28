import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "notariamasmas3imagenes.blob.core.windows.net",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/ia-automatizacion-notarias",
        destination: "/blog/industry/lawyers/ia-automatizacion-notarias",
        permanent: true,
      },
      {
        source: "/blog/operaciones-vulnerables-notarios",
        destination: "/blog/industry/lawyers/operaciones-vulnerables-notarios",
        permanent: true,
      },
      {
        source: "/blog/reforma-antilavado-2025",
        destination: "/blog/industry/lawyers/reforma-antilavado-2025",
        permanent: true,
      },
      {
        source: "/blog/puede-ia-sustituir-al-notario",
        destination: "/blog/industry/lawyers/puede-la-ia-sustituir-al-notario",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
