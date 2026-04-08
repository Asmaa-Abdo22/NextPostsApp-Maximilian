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
    <div className="card">
      <h2 style={{ margin: 0, marginBottom: "0.5rem" }}>Create a new post</h2>
      <form action={formAction}>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Short, catchy title"
          />
          {state?.errors?.title && (
            <div className="form-errors">{state.errors.title.join(", ")}</div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </div>

        <div className="form-control">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            rows={5}
            placeholder="What do you want to share?"
          />
          {state?.errors?.content && (
            <div className="form-errors">{state.errors.content.join(", ")}</div>
          )}
        </div>

        <div className="form-actions">
          <button type="reset" className="btn btn-ghost">
            Reset
          </button>
          <FromSubmit />
        </div>
      </form>
    </div>
  );
};

export default PostForm;
