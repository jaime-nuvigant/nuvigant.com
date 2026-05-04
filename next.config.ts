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
        source: "/fedatarios/calculo-isr/inmobiliarias",
        destination: "/fedatarios/calculo-de-isr-enajenacion-inmuebles",
        permanent: true,
      },
      {
        source: "/fedatarios/calculo-isr",
        destination: "/fedatarios/calculo-de-isr-enajenacion-inmuebles",
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
      {
        source: "/blog/solo-terreno-calculo-isr-enajenacion-inmuebles",
        destination: "/blog/industry/isr/solo-terreno-calculo-isr-enajenacion-inmuebles",
        permanent: true,
      },
      {
        source: "/blog/isr-enajenacion-inmuebles-depreciacion-de-un-inmueble",
        destination: "/blog/industry/isr/isr-enajenacion-inmuebles-depreciacion-de-un-inmueble",
        permanent: true,
      },
      {
        source: "/blog/inflacion-isr-por-enajenacion-de-inmuebles",
        destination: "/blog/industry/isr/inflacion-isr-por-enajenacion-de-inmuebles",
        permanent: true,
      },
      {
        source: "/blog/isr-enajenacion-inmuebles",
        destination: "/blog/industry/isr/isr-enajenacion-inmuebles",
        permanent: true,
      },
      {
        source: "/blog/cfdi-4-notarios-publicos",
        destination: "/blog/industry/fedatarios/cfdi-4-notarios-publicos",
        permanent: true,
      },
      {
        source: "/blog/jornada-notarial-oaxaca-2021",
        destination: "/blog/industry/fedatarios/jornada-notarial-oaxaca-2021",
        permanent: true,
      },
      {
        source: "/blog/constitucion-de-sociedad-a-traves-de-la-firma-electronica-avanzada",
        destination: "/blog/industry/fedatarios/constitucion-de-sociedad-a-traves-de-la-firma-electronica-avanzada",
        permanent: true,
      },
      {
        source: "/blog/que-es-la-firma-electronica-avanzada-para-notarios-y-corredores",
        destination: "/blog/industry/fedatarios/que-es-la-firma-electronica-avanzada-para-notarios-y-corredores",
        permanent: true,
      },
      {
        source: "/blog/protocolo-electronico-notarial-en-mexico-2020",
        destination: "/blog/industry/fedatarios/protocolo-electronico-notarial-en-mexico-2020",
        permanent: true,
      },
      {
        source: "/blog/acumulados-de-operaciones-notariales-y-de-corredores-en-mexico",
        destination: "/blog/industry/fedatarios/acumulados-de-operaciones-notariales-y-de-corredores-en-mexico",
        permanent: true,
      },
      {
        source: "/blog/corredor-y-notario-en-linea",
        destination: "/blog/industry/fedatarios/corredor-y-notario-en-linea",
        permanent: true,
      },
      {
        source: "/blog/reglas-para-la-realizacion-de-visitas-a-notarios",
        destination: "/blog/industry/fedatarios/reglas-para-la-realizacion-de-visitas-a-notarios",
        permanent: true,
      },
      {
        source: "/blog/aspectos-fiscales-practicos-con-el-nuevo-declaranot",
        destination: "/blog/industry/fedatarios/aspectos-fiscales-practicos-con-el-nuevo-declaranot",
        permanent: true,
      },
      {
        source: "/blog/resumen-de-conferencia-actualizacion-fiscal-mexico-2020",
        destination: "/blog/industry/fedatarios/resumen-de-conferencia-actualizacion-fiscal-mexico-2020",
        permanent: true,
      },
      {
        source: "/blog/jornada-de-notarios-mazatlan-2019",
        destination: "/blog/industry/fedatarios/jornada-de-notarios-mazatlan-2019",
        permanent: true,
      },
      {
        source: "/blog/6-pasos-para-implementar-un-software-para-abogados",
        destination: "/blog/industry/lawyers/6-pasos-para-implementar-un-software-para-abogados",
        permanent: true,
      },
      {
        source: "/blog/industry/lawyers/legal-tech/6-pasos-para-implementar-un-software-para-abogados",
        destination: "/blog/industry/lawyers/6-pasos-para-implementar-un-software-para-abogados",
        permanent: true,
      },
      {
        source: "/blog/50-kpis-para-abogados",
        destination: "/blog/industry/lawyers/50-kpis-para-abogados",
        permanent: true,
      },
      {
        source: "/blog/industry/lawyers/legal-tech/metodologies/50-kpis-para-abogados",
        destination: "/blog/industry/lawyers/50-kpis-para-abogados",
        permanent: true,
      },
      {
        source: "/blog/como-saber-si-necesito-un-software-de-abogados",
        destination: "/blog/industry/lawyers/como-saber-si-necesito-un-software-de-abogados",
        permanent: true,
      },
      {
        source: "/blog/industry/lawyers/legal-tech/como-saber-si-necesito-un-software-de-abogados",
        destination: "/blog/industry/lawyers/como-saber-si-necesito-un-software-de-abogados",
        permanent: true,
      },
      {
        source: "/blog/software-para-abogados-15-cosas-que-debes-saber",
        destination: "/blog/industry/lawyers/software-para-abogados-15-cosas-que-debes-saber",
        permanent: true,
      },
      {
        source: "/blog/industry/lawyers/legal-tech/software-para-abogados-15-cosas-que-debes-saber",
        destination: "/blog/industry/lawyers/software-para-abogados-15-cosas-que-debes-saber",
        permanent: true,
      },
      {
        source: "/blog/10-recomendaciones-a-corredores-y-notarios-sobre-corona-virus",
        destination: "/blog/industry/aml/10-recomendaciones-a-corredores-y-notarios-sobre-corona-virus",
        permanent: true,
      },
      {
        source: "/blog/cumpliendo-con-leyes-anti-lavado-sin-morir-en-el-intento",
        destination: "/blog/industry/aml/cumpliendo-con-leyes-anti-lavado-sin-morir-en-el-intento",
        permanent: true,
      },
      {
        source: "/blog/fechas-importantes-en-prevencion-de-lavado-de-dinero-en-mexico",
        destination: "/blog/industry/aml/fechas-importantes-en-prevencion-de-lavado-de-dinero-en-mexico",
        permanent: true,
      },
      {
        source: "/blog/3-cosas-que-debes-de-saber-sobre-los-listados-negros",
        destination: "/blog/industry/aml/3-cosas-que-debes-de-saber-sobre-los-listados-negros",
        permanent: true,
      },
      {
        source: "/blog/5-terminos-de-prevencion-de-lavado-de-dinero-que-debes-conocer",
        destination: "/blog/industry/aml/5-terminos-de-prevencion-de-lavado-de-dinero-que-debes-conocer",
        permanent: true,
      },
      {
        source: "/blog/pilares-programa-prevencion-lavado-dinero",
        destination: "/blog/industry/aml/pilares-programa-prevencion-lavado-dinero",
        permanent: true,
      },
      {
        source: "/blog/trabajo-remoto-oficina-remota",
        destination: "/blog/business-technology/cloud/trabajo-remoto-oficina-remota",
        permanent: true,
      },
      {
        source: "/blog/3-cosas-que-debes-de-saber-sobre-la-nube",
        destination: "/blog/business-technology/cloud/3-cosas-que-debes-de-saber-sobre-la-nube",
        permanent: true,
      },
      {
        source: "/blog/deberia-subir-mi-informacion-a-la-nube",
        destination: "/blog/business-technology/cloud/deberia-subir-mi-informacion-a-la-nube",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
