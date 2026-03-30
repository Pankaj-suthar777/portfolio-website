import PageContainer from "@/components/layout/PageContainer";
import React from "react";

const Experience = () => {
  return (
    <PageContainer>
      <h1 className="text-2xl font-medium text-black dark:text-white mb-8">
        Work Experience
      </h1>
      <div className="space-y-10">
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3">
            <h3 className="text-lg font-medium text-black dark:text-white">
              Full Stack Engineer
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              NanoThread | Jan 2026 – Present | Remote
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Working as a full-stack engineer building and maintaining two SaaS products and a cloud video desk service.
            Handling frontend, backend, and DevOps activities.
          </p>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3">
            <h3 className="text-lg font-medium text-black dark:text-white">
              Full Stack Developer
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Zeus Artificial Intelligence | Jun 2025 – Dec 2025 | On-site
            </span>
          </div>
          <ul className="text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside">
            <li>Developed and maintained IoT-based applications across both frontend and backend.</li>
            <li>Worked on 13+ IoT projects involving real-time data and device integration.</li>
            <li>Optimized SQL queries to improve performance and reduce execution time.</li>
            <li>Debugged and resolved issues in large codebases (1000+ lines of components).</li>
            <li>Contributed to building efficient, scalable, and reliable system architectures.</li>
          </ul>
        </div>
      </div>
    </PageContainer>
  );
};

export default Experience;
