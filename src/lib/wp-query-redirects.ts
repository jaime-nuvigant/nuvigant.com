/**
 * WordPress legacy `?p=` (post ID) → canonical pathname (no query).
 * `?page_id=` is handled in middleware: always redirected to `/blog`.
 *
 * Sourced from `.ignore/webpages.json` plus manual IDs from `.ignore/all_urls.txt`.
 * Paths are normalized to final public URLs (single hop).
 *
 * Unknown `?p=` post IDs (e.g. old drafts) are not listed below on purpose: middleware
 * sends them to `WP_QUERY_UNKNOWN_FALLBACK` with HTTP 302 (soft redirect), not 301.
 */

/** Normalize old permalink paths from the export to current routes. */
export function normalizeLegacyBlogPath(pathname: string): string {
  let p = pathname;
  if (p === "/blog/uncategorized/jornada-notarial-chihuahua-2024") {
    return "/blog/industry/aml/jornada-notarial-chihuahua-2024";
  }
  if (p === "/blog/business-technology/automatizacion-para-notarias-e-inmobiliarias-nuvigant-zapier") {
    return "/blog/business-technology/automation/automatizacion-para-notarias-e-inmobiliarias-nuvigant-zapier";
  }
  if (p.startsWith("/blog/industry/lawyers/legal-tech/metodologies/")) {
    return p.replace(
      "/blog/industry/lawyers/legal-tech/metodologies/",
      "/blog/industry/lawyers/"
    );
  }
  if (p.startsWith("/blog/industry/lawyers/legal-tech/")) {
    return p.replace("/blog/industry/lawyers/legal-tech/", "/blog/industry/lawyers/");
  }
  return p;
}

/**
 * WordPress post/page numeric ID → pathname on this site (before normalizeLegacyBlogPath).
 */
export const WP_QUERY_ID_TO_PATH: Record<string, string> = {
  // From webpages.json (export)
  "160": "/blog/industry/aml/pilares-programa-prevencion-lavado-dinero",
  "167": "/blog/industry/aml/5-terminos-de-prevencion-de-lavado-de-dinero-que-debes-conocer",
  "171": "/blog/business-technology/cloud/deberia-subir-mi-informacion-a-la-nube",
  "175": "/blog/industry/aml/3-cosas-que-debes-de-saber-sobre-los-listados-negros",
  "178": "/blog/industry/fedatarios/jornada-de-notarios-mazatlan-2019",
  "182": "/blog/industry/fedatarios/aspectos-fiscales-practicos-con-el-nuevo-declaranot",
  "186": "/blog/industry/fedatarios/reglas-para-la-realizacion-de-visitas-a-notarios",
  "190": "/blog/industry/fedatarios/corredor-y-notario-en-linea",
  "195": "/blog/industry/fedatarios/acumulados-de-operaciones-notariales-y-de-corredores-en-mexico",
  "205": "/blog/industry/aml/fechas-importantes-en-prevencion-de-lavado-de-dinero-en-mexico",
  "208": "/blog/business-technology/cloud/3-cosas-que-debes-de-saber-sobre-la-nube",
  "213": "/blog/industry/fedatarios/que-es-la-firma-electronica-avanzada-para-notarios-y-corredores",
  "217": "/blog/industry/fedatarios/resumen-de-conferencia-actualizacion-fiscal-mexico-2020",
  "221": "/blog/industry/aml/cumpliendo-con-leyes-anti-lavado-sin-morir-en-el-intento",
  "224": "/blog/industry/aml/10-recomendaciones-a-corredores-y-notarios-sobre-corona-virus",
  "230": "/blog/industry/fedatarios/protocolo-electronico-notarial-en-mexico-2020",
  "234": "/blog/business-technology/cloud/trabajo-remoto-oficina-remota",
  "238": "/blog/industry/fedatarios/constitucion-de-sociedad-a-traves-de-la-firma-electronica-avanzada",
  "802": "/blog/industry/lawyers/software-para-abogados-15-cosas-que-debes-saber",
  "822": "/blog/industry/lawyers/como-saber-si-necesito-un-software-de-abogados",
  "856": "/blog/industry/lawyers/50-kpis-para-abogados",
  "1334": "/blog/industry/lawyers/6-pasos-para-implementar-un-software-para-abogados",
  "1831": "/blog/industry/fedatarios/jornada-notarial-oaxaca-2021",
  "1930": "/blog/industry/fedatarios/cfdi-4-notarios-publicos",
  "1999": "/blog/industry/isr/isr-enajenacion-inmuebles",
  "2132": "/blog/industry/isr/inflacion-isr-por-enajenacion-de-inmuebles",
  "2159": "/blog/industry/isr/isr-enajenacion-inmuebles-depreciacion-de-un-inmueble",
  "2180": "/blog/industry/isr/solo-terreno-calculo-isr-enajenacion-inmuebles",
  "25365": "/blog/industry/fedatarios/sello-digital-notarial-que-es-y-como-funciona",
  "25429": "/blog/industry/isr/solo-construccion-calculo-isr",
  "25445": "/blog/industry/isr/variantes-calculo-isr-enajenacion-inmuebles",
  "25453": "/blog/industry/isr/ochenta-veinte-misma-fecha-calculo-de-isr",
  "25595": "/blog/industry/isr/calculo-isr-diferente-fecha",
  "25707": "/blog/industry/isr/deducibles-calculo-isr-por-venta-de-inmuebles",
  "25732": "/blog/industry/isr/enajenantes-y-el-calculo-isr-por-venta-de-inmuebles",
  "25929": "/blog/industry/isr/calculo-de-isr-para-agentes-inmobiliarios",
  "26024": "/blog/industry/isr/casa-habiracion-exentar-casa-habitacion",
  "26216": "/blog/industry/fedatarios/empezar-a-ofrecer-fe-publica-en-internet",
  "26238": "/blog/industry/isr/isr-avaluo-referido-mejoras",
  "26241": "/blog/industry/isr/isr-enajenacion-separar-precio-de-venta-terreno-y-construccion",
  "26271": "/blog/industry/isr/deducir-impuesto-cedular-isr-enajenacion",
  "26298": "/blog/industry/isr/isr-enajenacion-inmueble-vendedor-extranjero",
  "26443": "/blog/uncategorized/jornada-notarial-chihuahua-2024",
  "26477": "/blog/inteligencia-artificial/4-maneras-de-implementar-inteligencia-artificial-en-tu-notaria",
  "26543": "/blog/industry/fedatarios/portal-de-clientes-para-notaria",
  "26579": "/blog/industry/fedatarios/fe-de-hechos-de-mensajes-de-whatsapp-y-otras-herramientas-de-mensajeria",
  "27812": "/blog/industry/lawyers/api-para-notarios-que-es-un",
  "27862": "/blog/industry/lawyers/retos-de-una-notaria-en-crecimiento",
  "27885": "/blog/industry/isr/impuesto-cedular-san-luis-potosi",
  "27904": "/blog/inteligencia-artificial/post-firma-inteligencia-artificial",
  "27953": "/blog/business-technology/automatizacion-para-notarias-e-inmobiliarias-nuvigant-zapier",
  "27998": "/blog/inteligencia-artificial/analisis-de-escrituras-con-ia",
  "28017": "/blog/industry/fedatarios/ia-en-notaria-automatizacion-y-analisis-de-escrituras-con-nuvigant",
  "28117": "/blog/industry/fedatarios/gastos-a-cuenta-de-terceros-para-notarios",
  "28152": "/blog/inteligencia-artificial/extraccion-automatica-de-datos-de-documentos",
  "28170": "/blog/industry/aml/reforma-antilavado-2025-para-notarios",
  "28193": "/blog/industry/aml/que-son-los-peps-para-notarios",
  // Manual: all_urls.txt / drafts with known intent (avoid 404 on legacy query links)
  "199": "/blog/industry/fedatarios/gastos-a-cuenta-de-terceros-para-notarios",
  "25614": "/blog/industry/isr/casa-habiracion-exentar-casa-habitacion",
  "25883": "/videos-producto",
};

/** Target for legacy `?p=` when the ID is not in `WP_QUERY_ID_TO_PATH`. Middleware uses 302 here (soft redirect). */
export const WP_QUERY_UNKNOWN_FALLBACK = "/blog";
