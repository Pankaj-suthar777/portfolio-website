import BlogContent from "@/components/blog/BlogContent";
import dbConnect from "@/config/db";
import Blog, { BlogDocument } from "@/models/blog.model";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export const revalidate = 300;

const BlogDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  let blog: BlogDocument | null = null;

  try {
    await dbConnect();
    blog = await Blog.findById(id).lean();
  } catch {
    notFound();
  }

  if (!blog) {
    notFound();
  }

  return <BlogContent blog={blog} />;
};

export default BlogDetailPage;
