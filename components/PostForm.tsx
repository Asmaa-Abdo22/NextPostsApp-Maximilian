"use client";
import { useActionState } from "react";
import FromSubmit from "./FromSubmit";
export type FormState = {
  errors?: {
    title?: string[];
    content?: string[];
    image?: string[];
  };
};
const PostForm = ({ action }: { action: any }) => {
  const [state, formAction, isPending] = useActionState<FormState>(action, {});
  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
          {state?.errors?.title && (
            <span className="text-red-500">
              {state.errors.title.join(", ")}
            </span>
          )}
        </p>
        <p className="form-control">
          <label htmlFor="image">Image </label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>

          <textarea id="content" name="content" rows={5} />
          {state?.errors?.content && (
            <span className=" text-red-500">
              {state.errors.content.join(", ")}
            </span>
          )}
        </p>
        <p className="form-actions">
          <FromSubmit />
        </p>
      </form>
    </>
  );
};

export default PostForm;
