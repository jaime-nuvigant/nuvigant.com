import PostCard from "./PostCard";
import type { PostMeta } from "@/lib/blog";

interface RelatedPostsProps {
  posts: PostMeta[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section aria-label="Artículos relacionados">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Artículos relacionados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
