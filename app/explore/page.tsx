import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

export default async function ExplorePage() {
  const posts = await getPosts();
  return (
    <>
      <h1>Explore</h1>
      <p className="muted">Discover posts from across the community.</p>
      <Posts posts={posts} />
    </>
  );
}
