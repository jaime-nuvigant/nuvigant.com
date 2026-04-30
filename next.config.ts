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
        destination: "/blog/industry/aml/operaciones-vulnerables-4-cosas-que-todo-notario-debe-sab",
        permanent: true,
      },
      {
        source: "/blog/industry/lawyers/operaciones-vulnerables-notarios",
        destination: "/blog/industry/aml/operaciones-vulnerables-4-cosas-que-todo-notario-debe-sab",
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
      {
        source: "/blog/exencion-casa-habitacion-mixta",
        destination: "/blog/industry/isr/exencion-casa-habitacion-mixta",
        permanent: true,
      },
      {
        source: "/blog/inteligencia-artificial-en-sector-notarial",
        destination: "/blog/industry/fedatarios/inteligencia-artificial-en-sector-notarial",
        permanent: true,
      },
      {
        source: "/blog/industry/lawyers/legal-tech/fe-de-hechos-de-una-api",
        destination: "/blog/industry/lawyers/fe-de-hechos-de-una-api",
        permanent: true,
      },
      {
        source: "/blog/fe-de-hechos-de-una-api",
        destination: "/blog/industry/lawyers/fe-de-hechos-de-una-api",
        permanent: true,
      },
      {
        source: "/blog/que-son-los-peps-para-notarios",
        destination: "/blog/industry/aml/que-son-los-peps-para-notarios",
        permanent: true,
      },
      {
        source: "/blog/extraccion-automatica-de-datos-de-documentos",
        destination: "/blog/inteligencia-artificial/extraccion-automatica-de-datos-de-documentos",
        permanent: true,
      },
      {
        source: "/blog/gastos-a-cuenta-de-terceros-para-notarios",
        destination: "/blog/industry/fedatarios/gastos-a-cuenta-de-terceros-para-notarios",
        permanent: true,
      },
      {
        source: "/blog/ia-en-notaria-automatizacion-y-analisis-de-escrituras-con-nuvigant",
        destination: "/blog/industry/fedatarios/ia-en-notaria-automatizacion-y-analisis-de-escrituras-con-nuvigant",
        permanent: true,
      },
      {
        source: "/blog/analisis-de-escrituras-con-ia",
        destination: "/blog/inteligencia-artificial/analisis-de-escrituras-con-ia",
        permanent: true,
      },
      {
        source: "/blog/business-technology/automatizacion-para-notarias-e-inmobiliarias-nuvigant-zapier",
        destination: "/blog/business-technology/automation/automatizacion-para-notarias-e-inmobiliarias-nuvigant-zapier",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
