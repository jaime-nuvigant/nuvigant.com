import { MetadataRoute } from "next";
import { getAllPostsMeta, getPostUrl } from "@/lib/blog";

const SITE_URL = "https://nuvigant.com";

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/",                                    priority: 1.0,  changeFrequency: "weekly" },
  { path: "/product",                             priority: 0.9,  changeFrequency: "monthly" },
  { path: "/pricing",                             priority: 0.9,  changeFrequency: "monthly" },
  { path: "/schedule-demo",                       priority: 0.9,  changeFrequency: "monthly" },

  // Fedatarios
  { path: "/fedatarios",                          priority: 0.8,  changeFrequency: "monthly" },
  { path: "/fedatarios/sistema-notarias",         priority: 0.8,  changeFrequency: "monthly" },
  { path: "/fedatarios/sistema-notarias/notariamasmas-nuvigant", priority: 0.7, changeFrequency: "monthly" },
  { path: "/fedatarios/sistema-de-corredores-publicos", priority: 0.7, changeFrequency: "monthly" },
  { path: "/fedatarios/calculo-de-isr-enajenacion-inmuebles", priority: 0.7, changeFrequency: "monthly" },
  { path: "/fedatarios/calculo-de-isr-enajenacion-inmuebles/definiciones-en-el-isr-por-enajenacion-de-inmuebles", priority: 0.6, changeFrequency: "monthly" },
  { path: "/fedatarios/calculo-isr",              priority: 0.7,  changeFrequency: "monthly" },
  { path: "/fedatarios/calculo-isr/inmobiliarias",priority: 0.6,  changeFrequency: "monthly" },
  { path: "/fedatarios/implementation",           priority: 0.6,  changeFrequency: "monthly" },
  { path: "/fedatarios/pricing",                  priority: 0.7,  changeFrequency: "monthly" },

  // Lawyers
  { path: "/lawyers",                             priority: 0.8,  changeFrequency: "monthly" },
  { path: "/lawyers/guia-software",               priority: 0.6,  changeFrequency: "monthly" },

  // Finance / AML
  { path: "/finance-agencies",                    priority: 0.8,  changeFrequency: "monthly" },
  { path: "/aml",                                 priority: 0.8,  changeFrequency: "monthly" },
  { path: "/aml/sanctions-lists",                 priority: 0.7,  changeFrequency: "monthly" },
  { path: "/alertas-seguimiento",                 priority: 0.7,  changeFrequency: "monthly" },

  // Products & features
  { path: "/automatizacion-documentos-ia-notaria",priority: 0.8,  changeFrequency: "monthly" },
  { path: "/isr-enajenacion-inmuebles-manual",    priority: 0.7,  changeFrequency: "monthly" },
  { path: "/isr-enajenacion-inmuebles-manual/isr-enajenacion-de-inmuebles-preguntas-frecuentes", priority: 0.6, changeFrequency: "monthly" },
  { path: "/sistema-administrativo",              priority: 0.7,  changeFrequency: "monthly" },
  { path: "/regularizacion",                      priority: 0.7,  changeFrequency: "monthly" },
  { path: "/e-siganature",                        priority: 0.7,  changeFrequency: "monthly" },
  { path: "/e-siganature/fiel",                   priority: 0.7,  changeFrequency: "monthly" },
  { path: "/e-siganature/fiel/fiel-pricing",      priority: 0.6,  changeFrequency: "monthly" },
  { path: "/e-siganature/fiel/webinar-firma-electronica-avanzada", priority: 0.5, changeFrequency: "yearly" },
  { path: "/invest",                              priority: 0.7,  changeFrequency: "monthly" },

  // Blog & news
  { path: "/blog",                                priority: 0.8,  changeFrequency: "daily" },
  { path: "/client-news",                         priority: 0.6,  changeFrequency: "monthly" },
  { path: "/client-news/cambio-notaria-nuvigant", priority: 0.5,  changeFrequency: "yearly" },

  // Company
  { path: "/about",                               priority: 0.6,  changeFrequency: "monthly" },
  { path: "/careers",                             priority: 0.6,  changeFrequency: "monthly" },
  { path: "/trabaja-en-nuvigant",                 priority: 0.6,  changeFrequency: "monthly" },
  { path: "/contact",                             priority: 0.6,  changeFrequency: "monthly" },
  { path: "/convenio-colegio-de-notarios-de-michoacan", priority: 0.5, changeFrequency: "yearly" },

  // Events & webinars
  { path: "/cfdi-4-0-videos",                     priority: 0.5,  changeFrequency: "yearly" },
  { path: "/videos-producto",                     priority: 0.5,  changeFrequency: "yearly" },
  { path: "/calcula-isr-seminario-actualizacion-fiscal", priority: 0.5, changeFrequency: "yearly" },
  { path: "/constancias-webinar-pld-2025",        priority: 0.5,  changeFrequency: "yearly" },
  { path: "/webinar-herramientas-1",              priority: 0.5,  changeFrequency: "yearly" },
  { path: "/webinar-ia-en-fe-publica",            priority: 0.5,  changeFrequency: "yearly" },
  { path: "/webinar-reforma-pld-2025-para-notarios", priority: 0.5, changeFrequency: "yearly" },

  // Legal
  { path: "/privacy-notice",                      priority: 0.3,  changeFrequency: "yearly" },
  { path: "/cookie-policy",                       priority: 0.3,  changeFrequency: "yearly" },
  { path: "/terms-conditions",                    priority: 0.3,  changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPostsMeta();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}${getPostUrl(post)}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  return [...staticEntries, ...postEntries];
}
