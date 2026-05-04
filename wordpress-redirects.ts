import type { Redirect } from "next/dist/lib/load-custom-routes";

/**
 * Legacy paths from WordPress Redirection export (.ignore/redirects.csv).
 * Skipped vs next.config.ts: /25836-2, /calculo-isr (already defined).
 * Skipped ambiguous: source "//" (307 → /fedatarios/sistema-notarias) — not a safe pathname match in Next.
 */
export const wordpressLegacyRedirects: Redirect[] = [
  {
    source: "/blog/category/legal-tech",
    destination: "/blog/industry/lawyers",
    statusCode: 301,
  },
  {
    source: "/blog/category/industry/legal-tech/lawyers",
    destination: "/blog/industry/lawyers",
    statusCode: 301,
  },
  {
    source: "/blog/category/industry/legal-tech",
    destination: "/blog/industry/lawyers/legal-tech",
    statusCode: 301,
  },
  {
    source: "/770-2",
    destination: "/lawyers/guia-software",
    statusCode: 301,
  },
  {
    source: "/1087-2",
    destination: "/cookie-policy",
    statusCode: 301,
  },
  {
    source:
      "/blog/business-technology/cloud/como-trabajar-de-manera-remota",
    destination:
      "/blog/business-technology/cloud/trabajo-remoto-oficina-remota",
    statusCode: 301,
  },
  {
    source: "/calculo-de-isr-enajenacion-inmuebles",
    destination: "/fedatarios/calculo-de-isr-enajenacion-inmuebles",
    statusCode: 301,
  },
  {
    source: "/1507-2",
    destination: "/exclusive-clients",
    statusCode: 301,
  },
  {
    source: "/1764-2",
    destination: "/rfc",
    statusCode: 301,
  },
  {
    source: "/rfc",
    destination: "/datos-fiscales",
    statusCode: 301,
  },
  {
    source: "/isr",
    destination: "/fedatarios/calculo-de-isr-enajenacion-inmuebles",
    statusCode: 301,
  },
  {
    source: "/notarios",
    destination: "/fedatarios/sistema-notarias",
    statusCode: 301,
  },
  {
    source: "/conf-2022",
    destination:
      "https://share.hsforms.com/1ypkXHJ_7QTiuAWDKo78wqg2lcwx",
    statusCode: 301,
  },
  {
    source: "/2124-2",
    destination: "/isr-enajenacion-inmuebles-manual",
    statusCode: 301,
  },
  {
    source: "/fedatarios/sistema-notarias/videos-producto",
    destination: "/product/videos-producto",
    statusCode: 301,
  },
  {
    source: "/product/videos-producto",
    destination: "/videos-producto",
    statusCode: 301,
  },
  {
    source: "/datos-fiscalesregistro-pago-isr",
    destination:
      "/fedatarios/calculo-de-isr-enajenacion-inmuebles/datos-fiscalesregistro-pago-isr",
    statusCode: 301,
  },
  {
    source: "/da",
    destination: "/datos-fiscales-jcm",
    statusCode: 301,
  },
  {
    source: "/sistema-de-notarias-para-notarias-nuevas",
    destination: "/fedatarios/sistema-de-notarias-para-notarias-nuevas",
    statusCode: 301,
  },
  {
    source: "/sist-not",
    destination: "/fedatarios/sistema-de-notarias-para-notarias-nuevas",
    statusCode: 301,
  },
  {
    source: "/25955-2",
    destination: "/portal-clientes",
    statusCode: 301,
  },
  {
    source: "/25992-2",
    destination: "/alertas-seguimiento",
    statusCode: 301,
  },
  {
    source: "/isr-premium",
    destination:
      "/fedatarios/calculo-de-isr-enajenacion-inmuebles/calculo-de-isr-premium",
    statusCode: 307,
  },
  {
    source: "/isr-plus",
    destination: "/calculo-isr/get-version-plus",
    statusCode: 301,
  },
  {
    source: "/nuvigant.com/disruptivos",
    destination: "https://abogadosdisruptivos.mx/edicion-2021/",
    statusCode: 301,
  },
  {
    source: "/disruptivo",
    destination: "https://abogadosdisruptivos.mx/edicion-2021/",
    statusCode: 301,
  },
  {
    source: "/magno",
    destination: "https://youtu.be/F6SSNX0xazY?t=3715",
    statusCode: 301,
  },
  {
    source: "/presentacion",
    destination:
      "https://docs.google.com/presentation/d/13enokXHs--O-Z3X4DhHShVqoYsKeHchphuNNchJ_Kik/edit#slide=id.p",
    statusCode: 301,
  },
  {
    source: "/26086-2",
    destination: "/encuesta-demo",
    statusCode: 301,
  },
  {
    source: "/corredores",
    destination: "/fedatarios/sistema-de-corredores-publicos",
    statusCode: 301,
  },
  {
    source: "/form-submitted",
    destination:
      "/fedatarios/calculo-de-isr-enajenacion-inmuebles/form-submitted-2",
    statusCode: 301,
  },
  {
    source:
      "/fedatarios/calculo-de-isr-enajenacion-inmuebles/form-submitted-2",
    destination:
      "/fedatarios/calculo-de-isr-enajenacion-inmuebles/calculo-isr-contact-form-submitted",
    statusCode: 301,
  },
  {
    source: "/calculo-isr-para-inmobiliarias",
    destination: "/calculo-isr/calculo-isr-para-inmobiliarias",
    statusCode: 301,
  },
  {
    source: "/calculo-isr/calculo-isr-para-inmobiliarias",
    destination: "/calculo-isr/inmobiliarias",
    statusCode: 301,
  },
  {
    source: "/gracias-isr-inmobiliarias",
    destination: "/gracias-20565403133",
    statusCode: 301,
  },
  {
    source: "/gracias-20565403133",
    destination: "/calculo-isr/inmobiliarias/gracias-20565403133",
    statusCode: 301,
  },
  {
    source: "/empresa-en-linea",
    destination:
      "https://share.hsforms.com/1U_5x6EuKQw6FFbLwuIKaFw2lcwx",
    statusCode: 301,
  },
  {
    source: "/calculo-isr/get-version-plus/pricing",
    destination: "/pricing",
    statusCode: 301,
  },
  {
    source: "/26228-2",
    destination: "/calculo-isr/get-version-plus/propuesta-servicio",
    statusCode: 301,
  },
  {
    source: "/calcula-isr-seminario-actualizacion-fiscal",
    destination: "/fedatarios/calculo-isr/get-version-plus",
    statusCode: 301,
  },
  {
    source: "/qr/isr",
    destination:
      "/fedatarios/calculo-isr/get-version-plus?utm_source=seminario_actualizacion_fiscal&utm_medium=qr&utm_id=2024",
    statusCode: 307,
  },
  {
    source: "/qr/ruban1",
    destination: "/calculo-isr/get-version-plus",
    statusCode: 301,
  },
  {
    source: "/qr/ruban2",
    destination:
      "/fedatarios/sistema-notarias?utm_source=seminario_actualizacion_fiscal&utm_medium=qr&utm_id=2024",
    statusCode: 307,
  },
  {
    source: "/qr/flyer1",
    destination:
      "/fedatarios/sistema-notarias?utm_source=seminario_actualizacion_fiscal&utm_medium=qr&utm_id=2024",
    statusCode: 307,
  },
  {
    source: "/convenio-morelia",
    destination:
      "https://share.hsforms.com/1oI9kEt0xR5-FtNhHOxNpvw2lcwx",
    statusCode: 301,
  },
  {
    source: "/p12",
    destination:
      "https://docs.google.com/presentation/d/1v25il_Jrkgn9PTydDKC587oABSqT0INTzMlnDruZf8I/edit#slide=id.g1d9c67055b_0_163",
    statusCode: 301,
  },
  {
    source: "/26397-2",
    destination: "/regularizacion",
    statusCode: 301,
  },
  {
    source: "/firma-reafield",
    destination:
      "https://app.weetrust.mx/signatory/6648dbe67409c90035f19fe1/6648dc618ed9280035a2f67e/1716051041776",
    statusCode: 301,
  },
  {
    source: "/blog/uncategorized/26443",
    destination: "/blog/uncategorized/jornada-notarial-chihuahua-2024",
    statusCode: 301,
  },
  {
    source: "/blog/uncategorized/26477",
    destination:
      "/blog/uncategorized/4-maneras-de-implementar-inteligencia-artificial-en-tu-notaria",
    statusCode: 301,
  },
  {
    source: "/banner-portal-clientes",
    destination:
      "/blog/industry/fedatarios/portal-de-clientes-para-notaria",
    statusCode: 301,
  },
  {
    source: "/banner-AI",
    destination:
      "/blog/inteligencia-artificial/4-maneras-de-implementar-inteligencia-artificial-en-tu-notaria",
    statusCode: 301,
  },
  {
    source: "/blog-2",
    destination: "/blog",
    statusCode: 301,
  },
  {
    source: "/declaranot-ia",
    destination: "/automatizacion-documentos-ia-notaria",
    statusCode: 301,
  },
  {
    source:
      "/blog/industry/isr/exencion-casa-habitacion-mixt",
    destination:
      "/blog/industry/isr/exencion-casa-habitacion-mixta",
    statusCode: 301,
  },
  {
    source: "/b1",
    destination: "/automatizacion-documentos-ia-notaria",
    statusCode: 301,
  },
  {
    source:
      "/blog/business-technology/e-invoice/complemento-minuta-gastos-cuenta-teceros",
    destination:
      "/blog/industry/fedatarios/gastos-a-cuenta-de-terceros-para-notarios",
    statusCode: 301,
  },
  {
    source: "/webinar-pld",
    destination: "/webinar-reforma-pld-2025-para-notarios",
    statusCode: 307,
  },
  {
    source: "/28278-2",
    destination: "/constancias-webinar-pld-2025",
    statusCode: 301,
  },
  {
    source: "/28330-2",
    destination: "/automatizacion-documentos-ia-notaria",
    statusCode: 301,
  },
  {
    source: "/qr-client1",
    destination:
      "https://client-portal.app.nuvigant.com/info/0BA4D972D536DA986FBDD151AB902AAC?docs=%5B%7B%22reference%22:%20%22INE%20Frente%22,%22additionalInfo%22:%20%22Foto%20del%20frente%20de%20tu%20INE%22%7D,%7B%22reference%22:%20%22INE%20Reverso%22,%22additionalInfo%22:%20%22Foto%20del%20reverso%20de%20tu%20INE%22%7D,%7B%22reference%22:%20%22Constancia%20de%20Situaci%C3%B3n%20Fiscal%22,%22additionalInfo%22:%20%22Cargar%20el%20pdf%20de%20la%20Constancia%20de%20Situaci%C3%B3n%20Fiscal%22%7D,%7B%22reference%22:%20%22Antecedente%20de%20Propiedad%22,%22additionalInfo%22:%20%22%22%7D,%7B%22reference%22:%20%22Certificado%20de%20libertad%20de%20grav%C3%A1menes%22,%22additionalInfo%22:%20%22%22%7D,%7B%22reference%22:%20%22Certificado%20de%20no%20adeudo%20predial%22,%22additionalInfo%22:%20%22%22%7D,%7B%22reference%22:%20%22Aval%C3%BAo%20pericial%20autorizado%20por%20Catastro%20%22,%22additionalInfo%22:%20%22%22%7D,%7B%22reference%22:%20%22Ultimo%20pago%20de%20luz%20%22,%22additionalInfo%22:%20%22%22%7D,%7B%22reference%22:%20%22Certificado%20de%20no%20adeudo%20de%20agua%20o%20de%20inexistencia%20de%20servicio%20(SAPA)%22,%22additionalInfo%22:%20%22%22%7D,%7B%22reference%22:%20%22Constancia%20de%20derecho%20del%20tanto%20(EJIDO)%22,%22additionalInfo%22:%20%22%22%7D,%7B%22reference%22:%20%22Aval%C3%BAo%20bancario.%22,%22additionalInfo%22:%20%22%22%7D%5D",
    statusCode: 301,
  },
  {
    source: "/122",
    destination:
      "https://docs.google.com/spreadsheets/d/1sPkI9kRHcZOVlApq_8mGT_DzlBl52uNoQmWl4_VWo2g/edit?gid=0#gid=0",
    statusCode: 301,
  },
  // WordPress category archive URLs: /blog/category/a/b → /blog/a/b (must stay last in this list)
  {
    source: "/blog/category/:path*",
    destination: "/blog/:path*",
    statusCode: 301,
  },
];
