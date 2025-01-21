"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProjectType } from "@/constants/projects";
import Button from "@/components/ui/button";

interface Props {
  image: string;
  title: string;
  description: string;
  type: ProjectType;
  liveLink: string;
  githubLink: string;
}

const ProjectCard = ({
  description,
  image,
  title,
  liveLink,
  type,
  githubLink,
}: Props) => {
  return (
    <div className="border flex flex-col border-slate-400 rounded-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg justify-between">
      <div className="relative w-full h-[200px] overflow-hidden rounded-md group">
        <Image
          src={image}
          alt="project-image"
          width={400}
          height={200}
          className={`w-full h-full ${
            type === "mobile" ? "object-contain" : "object-cover"
          }`}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
          <Link href={liveLink} target="_blank">
            <span className="text-white z-20 text-2xl font-semibold cursor-pointer underline underline-offset-4">
              Live Demo
            </span>
          </Link>
        </div>
      </div>

      <p className="text-center my-6 text-xl font-semibold tracking-wider">
        {title}
      </p>
      <p>{description}</p>
      <div className="mt-4 flex gap-4">
        <Link href={githubLink} target="_blank" className="w-full">
          <Button>Github Link</Button>
        </Link>
        {/* <Button>Live</Button> */}
      </div>
    </div>
  );
};

export default ProjectCard;
