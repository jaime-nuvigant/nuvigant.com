import { getAllPostsMeta, getPostUrl } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site-url";
const SITE_NAME = "Nuvigant";
const SITE_DESCRIPTION =
  "Artículos sobre gestión notarial, tecnología legal, ISR, PLD y transformación digital para fedatarios en México.";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const siteUrl = getSiteUrl();
  const posts = await getAllPostsMeta();

  const items = posts
    .map((post) => {
      const url = `${siteUrl}${getPostUrl(post)}`;
      const pubDate = new Date(post.date + "T00:00:00").toUTCString();
      const categories = post.tags.map((t) => `<category>${escapeXml(t)}</category>`).join("\n    ");

      return `
  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${url}</link>
    <guid isPermaLink="true">${url}</guid>
    <description>${escapeXml(post.excerpt)}</description>
    <pubDate>${pubDate}</pubDate>
    <author>${escapeXml(post.author.name)}</author>
    ${categories}
  </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
>
  <channel>
    <title>${escapeXml(SITE_NAME)} Blog</title>
    <link>${siteUrl}/blog</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>es-MX</language>
    <atom:link href="${siteUrl}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
