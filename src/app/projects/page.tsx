import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/constants/projects";
import React from "react";

const ProjectsPage = () => {
  return (
    <PageContainer>
      <PageTitle title="Projects" />
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </PageContainer>
  );
};

export default ProjectsPage;
