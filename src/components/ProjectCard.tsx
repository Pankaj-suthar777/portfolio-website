import Image from "next/image";
import React from "react";
import Button from "./button";

interface Props {
  image: string;
  title: string;
  description: string;
  liveLink: string;
}

const ProjectCard = ({ description, image, title, liveLink }: Props) => {
  return (
    <div className="border flex flex-col border-slate-400 rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg justify-between">
      <div className="relative w-full h-[200px] overflow-hidden rounded-lg group">
        <Image
          src={image}
          alt="project-image"
          width={400}
          height={200}
          className="w-full h-full object-cover"
          unoptimized
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-200 ease-in-out pointer-events-none group-hover:opacity-100">
          <a
            href={liveLink}
            className="text-white z-20 text-2xl font-semibold cursor-pointer underline underline-offset-4"
          >
            Live Demo
          </a>
        </div>
      </div>

      <p className="text-center my-6 text-xl font-semibold tracking-wider">
        {title}
      </p>
      <p>{description}</p>
      <div className="mt-4 flex gap-4">
        <Button>View</Button>
        {/* <Button>Live</Button> */}
      </div>
    </div>
  );
};

export default ProjectCard;
