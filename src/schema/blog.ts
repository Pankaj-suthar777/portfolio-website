import { z } from "zod";

const blogSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title is too long"),
  text: z.string().min(1, "Content is required"),
});

const updateBlogSchema = z
  .object({
    title: z
      .string()
      .min(1, "Title is required")
      .max(100, "Title is too long")
      .optional(),
    text: z.string().min(1, "Content is required").optional(),
  })
  .refine((data) => data.title || data.text, {
    message: "At least one field must be provided",
    path: ["title or text"],
  });

export { blogSchema, updateBlogSchema };
