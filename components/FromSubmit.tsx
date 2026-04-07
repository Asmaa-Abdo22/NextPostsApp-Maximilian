"use client";
import { useFormStatus } from "react-dom";

const FromSubmit = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <button type="reset">Reset</button>
      <button>{pending ? "Creating ..." : "Create a post"}</button>
    </>
  );
};

export default FromSubmit;
