"use client";
import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import ProjectCard from "@/components/ProjectCard";
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
        {projects.map((project, i) => {
          if (selectedTab === project.type) {
            return (
              <ProjectCard
                key={i}
                image={project.image}
                title={project.title}
                description={project.description}
                liveLink={project.liveLink}
              />
            );
          } else {
            return;
          }
        })}
      </div>
    </PageContainer>
  );
};

export default ProjectsPage;
