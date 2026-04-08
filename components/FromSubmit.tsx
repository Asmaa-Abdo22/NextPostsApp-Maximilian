"use client";
import { useFormStatus } from "react-dom";

const FromSubmit = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <button type="submit" className="btn btn-primary">
        {pending ? "Creating ..." : "Create post"}
      </button>
    </>
  );
};

export default FromSubmit;
