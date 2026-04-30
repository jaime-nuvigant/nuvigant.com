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
      {
        source: "/blog/industry/lawyers/legal-tech/retos-de-una-notaria-en-crecimiento",
        destination: "/blog/industry/lawyers/retos-de-una-notaria-en-crecimiento",
        permanent: true,
      },
      {
        source: "/blog/retos-de-una-notaria-en-crecimiento",
        destination: "/blog/industry/lawyers/retos-de-una-notaria-en-crecimiento",
        permanent: true,
      },
      {
        source: "/blog/industry/lawyers/legal-tech/api-para-notarios-que-es-un",
        destination: "/blog/industry/lawyers/api-para-notarios-que-es-un",
        permanent: true,
      },
      {
        source: "/blog/api-para-notarios-que-es-un",
        destination: "/blog/industry/lawyers/api-para-notarios-que-es-un",
        permanent: true,
      },
      {
        source: "/blog/fe-de-hechos-de-mensajes-de-whatsapp-y-otras-herramientas-de-mensajeria",
        destination: "/blog/industry/fedatarios/fe-de-hechos-de-mensajes-de-whatsapp-y-otras-herramientas-de-mensajeria",
        permanent: true,
      },
      {
        source: "/blog/portal-de-clientes-para-notaria",
        destination: "/blog/industry/fedatarios/portal-de-clientes-para-notaria",
        permanent: true,
      },
      {
        source: "/blog/4-maneras-de-implementar-inteligencia-artificial-en-tu-notaria",
        destination: "/blog/inteligencia-artificial/4-maneras-de-implementar-inteligencia-artificial-en-tu-notaria",
        permanent: true,
      },
      {
        source: "/blog/uncategorized/jornada-notarial-chihuahua-2024",
        destination: "/blog/industry/aml/jornada-notarial-chihuahua-2024",
        permanent: true,
      },
      {
        source: "/blog/jornada-notarial-chihuahua-2024",
        destination: "/blog/industry/aml/jornada-notarial-chihuahua-2024",
        permanent: true,
      },
      {
        source: "/blog/isr-enajenacion-inmueble-vendedor-extranjero",
        destination: "/blog/industry/isr/isr-enajenacion-inmueble-vendedor-extranjero",
        permanent: true,
      },
      {
        source: "/blog/deducir-impuesto-cedular-isr-enajenacion",
        destination: "/blog/industry/isr/deducir-impuesto-cedular-isr-enajenacion",
        permanent: true,
      },
      {
        source: "/blog/isr-avaluo-referido-mejoras",
        destination: "/blog/industry/isr/isr-avaluo-referido-mejoras",
        permanent: true,
      },
      {
        source: "/blog/isr-enajenacion-separar-precio-de-venta-terreno-y-construccion",
        destination: "/blog/industry/isr/isr-enajenacion-separar-precio-de-venta-terreno-y-construccion",
        permanent: true,
      },
      {
        source: "/blog/empezar-a-ofrecer-fe-publica-en-internet",
        destination: "/blog/industry/fedatarios/empezar-a-ofrecer-fe-publica-en-internet",
        permanent: true,
      },
      {
        source: "/blog/casa-habiracion-exentar-casa-habitacion",
        destination: "/blog/industry/isr/casa-habiracion-exentar-casa-habitacion",
        permanent: true,
      },
      {
        source: "/blog/calculo-de-isr-para-agentes-inmobiliarios",
        destination: "/blog/industry/isr/calculo-de-isr-para-agentes-inmobiliarios",
        permanent: true,
      },
      {
        source: "/blog/enajenantes-y-el-calculo-isr-por-venta-de-inmuebles",
        destination: "/blog/industry/isr/enajenantes-y-el-calculo-isr-por-venta-de-inmuebles",
        permanent: true,
      },
      {
        source: "/blog/deducibles-calculo-isr-por-venta-de-inmuebles",
        destination: "/blog/industry/isr/deducibles-calculo-isr-por-venta-de-inmuebles",
        permanent: true,
      },
      {
        source: "/blog/calculo-isr-diferente-fecha",
        destination: "/blog/industry/isr/calculo-isr-diferente-fecha",
        permanent: true,
      },
      {
        source: "/blog/ochenta-veinte-misma-fecha-calculo-de-isr",
        destination: "/blog/industry/isr/ochenta-veinte-misma-fecha-calculo-de-isr",
        permanent: true,
      },
      {
        source: "/blog/variantes-calculo-isr-enajenacion-inmuebles",
        destination: "/blog/industry/isr/variantes-calculo-isr-enajenacion-inmuebles",
        permanent: true,
      },
      {
        source: "/blog/solo-construccion-calculo-isr",
        destination: "/blog/industry/isr/solo-construccion-calculo-isr",
        permanent: true,
      },
      {
        source: "/blog/sello-digital-notarial-que-es-y-como-funciona",
        destination: "/blog/industry/fedatarios/sello-digital-notarial-que-es-y-como-funciona",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
