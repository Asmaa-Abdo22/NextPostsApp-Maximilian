"use client";
import { formatDate } from "@/lib/format";
import LikeButton from "./like-icon";
import { togglePostLikeStatus } from "@/actions/postsActions";
import { useOptimistic } from "react";
import Image from "next/image";

type PostItem = {
  id: number;
  image: string;
  title: string;
  content: string;
  createdAt: string;
  userFirstName: string;
  userLastName?: string;
  likes?: number;
  isLiked?: boolean;
};
// const cloudinaryLoader = ({
//   src,
//   width,
//   quality,
// }: {
//   src: string;
//   width?: number;
//   quality?: number;
// }) => {
//   const w = width ?? 800;
//   const q = quality ?? 75;
//   return `https://res.cloudinary.com/dr0mnfhg6/image/upload/w_${w},q_${q}/${src}`;
// };
function Post({
  post,
  action,
}: {
  post: PostItem;
  action: (postId: number) => void;
}) {
  return (
    <article className="post card">
      <div className="post-image">
        <Image
          //loader={cloudinaryLoader}
          src={post.image}
          alt={post.title}
          fill
          sizes="128px"
          priority
        />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p className="muted">
              Shared by {post.userFirstName} on{" "}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <form
              action={action.bind(null, post.id)}
              className={post.isLiked ? "liked" : ""}
            >
              <LikeButton />
            </form>
            <div className="like-count">{post.likes ?? 0}</div>
          </div>
        </header>
        <p style={{ marginTop: 8 }}>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }: { posts: PostItem[] }) {
  const [optimisticPosts, updateOptimisticPosts] = useOptimistic(
    posts,
    (prevPosts, updatedPostId) => {
      const updatedPostIndex = prevPosts.findIndex(
        (post) => post.id === updatedPostId,
      );
      if (updatedPostIndex === -1) {
        return prevPosts;
      }
      const updatedPost = { ...prevPosts[updatedPostIndex] };
      updatedPost.likes =
        (updatedPost.likes ?? 0) + (updatedPost.isLiked ? -1 : 1);
      updatedPost.isLiked = !updatedPost.isLiked;
      const newPosts = [...prevPosts];
      newPosts[updatedPostIndex] = updatedPost;
      return newPosts;
    },
  );
  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }
  async function updatePost(postId: number) {
    updateOptimisticPosts(postId);
    await togglePostLikeStatus(postId);
  }
  return (
    <ul className="posts">
      {optimisticPosts.map((post: PostItem) => (
        <li key={post.id}>
          <Post post={post} action={updatePost} />
        </li>
      ))}
    </ul>
  );
}
