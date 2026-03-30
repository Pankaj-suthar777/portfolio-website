"use client";
import PageContainer from "@/components/layout/PageContainer";
import PageTitle from "@/components/layout/PageTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectsTab from "@/components/projects/ProjectsTab";
import projects, { ProjectType } from "@/constants/projects";
import React, { useState } from "react";

const ProjectsPage = () => {
  const [selectedTab, setSelectedTab] = useState<ProjectType>("web");

  return (
    <PageContainer>
      <PageTitle title="Projects" />
      <ProjectsTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-8">
        {projects.filter((p) => p.type === selectedTab).length === 0 ? (
          <div className="col-span-2 flex justify-center items-center py-16 text-gray-500 dark:text-gray-400 text-sm italic">
            No {selectedTab} projects yet — check back soon.
          </div>
        ) : (
          projects.map((project, i) => {
            if (selectedTab !== project.type) return null;
            return (
              <ProjectCard
                type={project.type}
                key={i}
                image={project.image}
                title={project.title}
                description={project.description}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
              />
            );
          })
        )}
      </div>
    </PageContainer>
  );
};

export default ProjectsPage;
