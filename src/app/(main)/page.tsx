import PageContainer from "@/components/layout/PageContainer";
import PageTitle from "@/components/layout/PageTitle";
import React from "react";
import BlogCarousel from "@/components/blog/BlogCarousel";
import Blog, { BlogDocument } from "@/models/blog.model";
import dbConnect from "@/config/db";

const Home = async () => {
  let blogs: BlogDocument[] = [];
  try {
    await dbConnect();

    blogs = await Blog.find({}).sort({ createdAt: -1 }).limit(3).lean();
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
  return (
    <PageContainer>
      <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
        <PageTitle title="About Me" />
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
            Hey, I’m Pankaj Suthar. I’m someone who loves learning about system
            design, backend engineering, and building cool apps. I enjoy taking
            challenges, and I’m excited to work on many things in the future.
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-8 mb-16 leading-relaxed">
            I’ll be sharing what I’m working on here and on Twitter, and I’ll
            also be writing blogs about engineering and other tech stuff.
          </p>
        </div>
      </div>

      {/* Blog Carousel Section */}
      <div className="max-w-3xl mx-auto mt-12 mb-16">
        <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-8">
          Latest Blog Posts
        </h2>

        <BlogCarousel posts={blogs} />
      </div>
      <div className="max-w-3xl mx-auto mt-12 mb-16">
        <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-8">
          My Journal (Public)
        </h2>
        <div className="flex justify-center items-center py-8">
          No journal yet.
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
