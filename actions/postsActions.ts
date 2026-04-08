"use server";
import { FormState } from "@/components/PostForm";
import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as z from "zod";

export async function createPost(prevState: FormState, formData: FormData) {
  const title = formData.get("title") as string;
  const image = formData.get("image");
  const content = formData.get("content") as string;

  if (!image || !(image instanceof File)) {
    return { errors: { image: ["Image file is required"] } };
  }

  const schema = z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
  });

  const result = schema.safeParse({ title, content });
  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    return { errors: { image: ["Failed to upload image"] } };
  }

  await storePost({
    imageUrl,
    title,
    content,
    userId: 1,
  });
  revalidatePath("/", "layout");
  redirect("/feed");
}
export async function togglePostLikeStatus(postId: number) {
  await updatePostLikeStatus(postId, 2);
  revalidatePath("/", "layout");
}
