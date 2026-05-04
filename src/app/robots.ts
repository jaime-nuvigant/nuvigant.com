import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/onboarding-timeline-v1/",
        "/email-verified/",
        "/not-registered/",
        "/verify-email/",
        "/encuesta-demo/",
        "/datos-fiscales/",
        "/datos-fiscales-jcm/",
        "/exclusive-clients/",
        "/portal-clientes/",
        "/fedatarios/calculo-de-isr-enajenacion-inmuebles/calculo-de-isr/",
        "/fedatarios/calculo-de-isr-enajenacion-inmuebles/calculo-isr-contact-form-submitted/",
        "/fedatarios/calculo-de-isr-enajenacion-inmuebles/datos-fiscalesregistro-pago-isr/",
        "/fedatarios/calculo-de-isr-enajenacion-inmuebles/form-submitted/",
        "/fedatarios/calculo-isr/get-version-plus/propuesta-servicio/",
        "/fedatarios/calculo-isr/gracias-20565403133/",
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
