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
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
