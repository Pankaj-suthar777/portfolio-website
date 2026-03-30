import PageContainer from "@/components/layout/PageContainer";
import PageTitle from "@/components/layout/PageTitle";
import Link from "next/link";
import React from "react";

const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "GDScript"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Redux", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "GraphQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "AWS"],
  },
  {
    category: "Game Development",
    items: ["Godot Engine"],
  },
];

const SkillsScreen = () => {
  return (
    <PageContainer>
      <PageTitle title="Skills" />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 text-black dark:text-white">
        {skills.map((group) => (
          <div
            key={group.category}
            className="border border-slate-300 dark:border-slate-700 rounded-md p-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1 rounded-full border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
        Want to see these in action?{" "}
        <Link
          href="/projects"
          className="underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors"
        >
          View my projects
        </Link>
        .
      </p>
    </PageContainer>
  );
};

export default SkillsScreen;
