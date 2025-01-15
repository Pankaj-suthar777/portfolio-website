"use client";
import Carousel from "@/components/Carousel";
import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import projects from "@/constants/projects";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const ProjectPage = () => {
  const { id_title } = useParams();
  const decodedTitle = decodeURIComponent(id_title); // Decode the URL-encoded title
  const project = projects.find((pro) => pro.title === decodedTitle); // Compare with decoded title
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    if (project) {
      const path = `/markdown/${project.title}.md`;
      console.log(`Fetching markdown from: ${path}`);
      fetch(path)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
          }
          return response.text();
        })
        .then((text) => {
          console.log("Markdown fetched successfully:", text);
          setMarkdownContent(text);
        })
        .catch((error) => console.error("Error fetching markdown:", error));
    }
  }, [project]);

  if (project === undefined) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <p>Project not exist.</p>
      </div>
    );
  }

  return (
    <PageContainer>
      <PageTitle
        title={project.title}
        whereToGoOnBack="/projects"
        showBackButton={true}
      />
      <Carousel items={project.images} />
      <div className="mt-8 markdown-content">
        <ReactMarkdown skipHtml={false}>{markdownContent}</ReactMarkdown>
      </div>
    </PageContainer>
  );
};

export default ProjectPage;
