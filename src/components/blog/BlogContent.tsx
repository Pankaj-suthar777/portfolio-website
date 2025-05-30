import { BlogDocument } from "@/models/blog.model";
import React from "react";
import parse from "html-react-parser";
import BackButtonNav from "../BackButtonNav";

const BlogContent = ({ blog }: { blog: BlogDocument }) => {
  return (
    <div className="mt-14">
      <BackButtonNav />
      <h1 className="text-center text-black text-3xl underline underline-offset-4">
        {blog.title}
      </h1>
      <div className="blog-content">{parse(blog.text)}</div>
    </div>
  );
};

export default BlogContent;
