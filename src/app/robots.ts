import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
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
      ],
    },
    sitemap: "https://nuvigant.com/sitemap.xml",
  };
}
