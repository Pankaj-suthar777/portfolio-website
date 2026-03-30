"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProjectType } from "@/constants/projects";

interface Props {
  image: string;
  title: string;
  description: string;
  type: ProjectType;
  liveLink: string;
  githubLink: string;
}

const ProjectCard = ({ description, image, title, liveLink, type, githubLink }: Props) => {
  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-md overflow-hidden flex flex-col project-card">
      <div className="relative w-full h-[180px] overflow-hidden group">
        <Image
          src={image}
          alt={`${title} screenshot`}
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjwvc3ZnPg=="
          placeholder="blur"
          loading="lazy"
          width={400}
          height={180}
          className={`w-full h-full ${type === "mobile" ? "object-contain" : "object-cover"}`}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <Link href={liveLink} target="_blank" className="text-white text-sm font-medium underline underline-offset-4">
            Live Demo
          </Link>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-medium text-black dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 flex-1">{description}</p>
        <div className="flex gap-3 mt-4 text-xs">
          <Link
            href={githubLink}
            target="_blank"
            className="underline underline-offset-4 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            GitHub
          </Link>
          <Link
            href={liveLink}
            target="_blank"
            className="underline underline-offset-4 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
