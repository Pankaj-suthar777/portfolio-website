import PageContainer from "@/components/layout/PageContainer";
import React from "react";
import BlogCarousel from "@/components/blog/BlogCarousel";
import Blog, { BlogDocument } from "@/models/blog.model";
import dbConnect from "@/config/db";
import Link from "next/link";

const Home = async () => {
  let blogs: BlogDocument[] = [];
  try {
    await dbConnect();
    blogs = await Blog.find({}).sort({ createdAt: -1 }).limit(6).lean();
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  return (
    <PageContainer>
      {/* Hero */}
      <div className="max-w-xl">
        <h2 className="text-2xl font-medium text-black dark:text-white mb-4">
          Hey, I&apos;m Pankaj Suthar.
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          I&apos;m a full-stack developer who loves system design, backend
          engineering, and building things that work well. I enjoy hard problems
          and I&apos;m always working on something new.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          I write about engineering and tech here, and share what I&apos;m
          building on{" "}
          <a
            href="https://x.com/Inyourdream0007"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors"
          >
            Twitter
          </a>
          . My code lives on{" "}
          <a
            href="https://github.com/Pankaj-suthar777"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          .
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            href="/projects"
            className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm rounded hover:opacity-80 transition-opacity"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 border border-slate-300 dark:border-slate-700 text-sm rounded hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-base font-semibold text-black dark:text-white mb-6">
          Work Experience
        </h2>
        <div className="space-y-8">
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h3 className="text-base font-medium text-black dark:text-white">
                Full Stack Engineer
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                NanoThread | Jan 2026 – Present | Remote
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Working as a full-stack engineer building and maintaining two SaaS products and a cloud video desk service.
              Handling frontend, backend, and DevOps activities.
            </p>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h3 className="text-base font-medium text-black dark:text-white">
                Full Stack Developer
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Zeus Artificial Intelligence | Jun 2025 – Dec 2025 | On-site
              </span>
            </div>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1 list-disc list-inside">
              <li>Developed and maintained IoT-based applications across both frontend and backend.</li>
              <li>Worked on 13+ IoT projects involving real-time data and device integration.</li>
              <li>Optimized SQL queries to improve performance and reduce execution time.</li>
              <li>Debugged and resolved issues in large codebases (1000+ lines of components).</li>
              <li>Contributed to building efficient, scalable, and reliable system architectures.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Blog Carousel */}
      <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base font-semibold text-black dark:text-white">
            Latest Posts
          </h2>
          <Link
            href="/blogs"
            className="text-sm underline underline-offset-4 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            All posts →
          </Link>
        </div>
        <BlogCarousel posts={blogs} />
      </div>
    </PageContainer>
  );
};

export default Home;
