import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked, Renderer } from "marked";
import hljs from "highlight.js";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export interface PostAuthor {
  name: string;
  avatar: string;
  bio: string;
  twitter?: string;
  linkedin?: string;
}

export interface PostFrontmatter {
  title: string;
  date: string;
  author: PostAuthor;
  tags: string[];
  excerpt: string;
  coverImage: string;
  published: boolean;
  category?: string;
  subcategory?: string;
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
  readTime: string;
}

export interface TOCItem {
  level: number;
  id: string;
  text: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
  toc: TOCItem[];
}

function calcReadTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min de lectura`;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function buildRenderer(): Renderer {
  const renderer = new Renderer();

  renderer.code = ({ text, lang }) => {
    const language = lang && hljs.getLanguage(lang) ? lang : "plaintext";
    const highlighted = hljs.highlight(text, { language }).value;
    return `<pre class="hljs-pre"><code class="hljs language-${language}">${highlighted}</code></pre>`;
  };

  renderer.heading = ({ text, depth }) => {
    const id = slugify(text);
    return `<h${depth} id="${id}">${text}</h${depth}>\n`;
  };

  renderer.image = ({ href, title, text }) => {
    const titleAttr = title ? ` title="${title}"` : "";
    return `<img src="${href}" alt="${text}"${titleAttr} loading="lazy" class="blog-img" />`;
  };

  return renderer;
}

export function parseMarkdown(content: string): string {
  marked.use({ renderer: buildRenderer(), gfm: true, breaks: false });
  return marked.parse(content) as string;
}

export function extractTOC(html: string): TOCItem[] {
  const headingRegex = /<h([23])\s+id="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/gi;
  const items: TOCItem[] = [];
  let match: RegExpExecArray | null;
  while ((match = headingRegex.exec(html)) !== null) {
    items.push({
      level: parseInt(match[1]),
      id: match[2],
      text: match[3].replace(/<[^>]+>/g, "").trim(),
    });
  }
  return items;
}

export async function getAllPostsMeta(): Promise<PostMeta[]> {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  const posts: PostMeta[] = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      ...(data as PostFrontmatter),
      slug,
      readTime: calcReadTime(content),
    };
  });

  return posts
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const contentHtml = parseMarkdown(content);
  const toc = extractTOC(contentHtml);

  return {
    ...(data as PostFrontmatter),
    slug,
    readTime: calcReadTime(content),
    contentHtml,
    toc,
  };
}

export async function getRelatedPosts(
  currentSlug: string,
  tags: string[],
  limit = 3
): Promise<PostMeta[]> {
  const all = await getAllPostsMeta();
  return all
    .filter((p) => p.slug !== currentSlug && p.tags.some((t) => tags.includes(t)))
    .slice(0, limit);
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPostsMeta();
  const tagSet = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

export async function getSurroundingPosts(
  slug: string
): Promise<{ prev: PostMeta | null; next: PostMeta | null }> {
  const all = await getAllPostsMeta();
  const idx = all.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  };
}

export function getPostUrl(post: Pick<PostMeta, "category" | "subcategory" | "slug">): string {
  if (post.category && post.subcategory) {
    return `/blog/${post.category}/${post.subcategory}/${post.slug}`;
  }
  return `/blog/${post.slug}`;
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
