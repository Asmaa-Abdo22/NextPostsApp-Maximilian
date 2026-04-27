import { Suspense } from "react";

import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

export const metadata = {
  title: "Latest posts - Social Media App",
  description: "Catch up with latest posts from your friends and connections.",
};

async function LatestPosts() {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts} />;
}

export default async function Home() {
  return (
    <>
      <section className="card" style={{ marginBottom: "1rem" }}>
        <h2 style={{ margin: 0 }}>Welcome back 👋</h2>
        <p className="muted">
          Catch up with latest posts or share something new.
        </p>
        <div style={{ marginTop: "0.6rem", display: "flex", gap: "0.5rem" }}>
          <a href="/feed" className="btn btn-ghost">
            View feed
          </a>
          <a href="/new-post" className="btn btn-primary">
            Create post
          </a>
        </div>
      </section>

      <section id="latest-posts">
        <h3 style={{ marginBottom: "0.5rem" }}>Recent posts</h3>
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <LatestPosts />
        </Suspense>
      </section>
    </>
  );
}
