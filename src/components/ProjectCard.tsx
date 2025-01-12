import Image from "next/image";
import React from "react";
import Button from "./button";

interface Props {
  image: string;
  title: string;
  description: string;
}

const ProjectCard = ({ description, image, title }: Props) => {
  return (
    <div className="border flex flex-col border-slate-400 rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg justify-between">
      <Image
        src={image}
        alt="project-image"
        width={100}
        height={100}
        className="w-full object-contain h-[200px]"
        unoptimized
      />
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
