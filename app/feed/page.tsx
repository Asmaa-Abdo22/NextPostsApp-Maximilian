import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';
export async function generateMetadata() {
   const posts = await getPosts();
   const postCount = posts.length;
  return {
    title: `Browse all ${postCount} posts in the feed`,
    description: "See all posts by all users in the feed.",
  };
}
export default async function FeedPage() {
    const posts = await getPosts();
  return (
    <>
      <h1 className='mb-5'>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
