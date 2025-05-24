import PageContainer from "@/components/layout/PageContainer";
import PageTitle from "@/components/layout/PageTitle";
import React from "react";
import BlogCarousel, { BlogPost } from "@/components/blog/BlogCarousel";

// Temporary blog data
const tempBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js 15",
    snippet:
      "An introductory guide to the latest features and improvements in Next.js 15, helping you kickstart your project.",
    date: "May 15, 2025",
    link: "#",
  },
  {
    id: "2",
    title: "Tailwind CSS Best Practices for Scalable UIs",
    snippet:
      "Learn how to effectively use Tailwind CSS to build maintainable and scalable user interfaces for your web applications.",
    date: "May 10, 2025",
    link: "#",
  },
  {
    id: "3",
    title: "Mastering TypeScript for Backend Development",
    snippet:
      "Explore the benefits of using TypeScript in your backend projects and discover tips for writing robust and type-safe code.",
    date: "May 05, 2025",
    link: "#",
  },
  {
    id: "4",
    title: "Deep Dive into System Design Principles",
    snippet:
      "A comprehensive look at fundamental system design principles to help you build resilient and efficient distributed systems.",
    date: "May 01, 2025",
    link: "#",
  },
  {
    id: "5",
    title: "The Future of Web Development: Trends to Watch",
    snippet:
      "Stay ahead of the curve by exploring the upcoming trends in web development, from new frameworks to AI integrations.",
    date: "April 28, 2025",
    link: "#",
  },
];

const Home = () => {
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
        <div className="flex justify-center items-center py-8">
          No blogs yet.
        </div>
        {/* <BlogCarousel posts={tempBlogPosts} /> */}
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
