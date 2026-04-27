import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "notariamasmas3imagenes.blob.core.windows.net",
      },
    ],
  },
};

export default nextConfig;
