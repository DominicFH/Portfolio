import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project: { name, link, desc, challenge, roomForImprovement } }) => {
  console.log(link);
  return (
    <div className="card bg-base-200 w-96 shadow-xl h-fit mx-8 grow">
      <div className="card-body">
        <div className="grid grid-cols-2 gap-4">
          <h2 className="card-title w-auto text-xl">{name}</h2>
          <div className="justify-self-end relative w-12 h-12">
            <Image src="/images/nextjs-icon.png" fill />
          </div>
        </div>
        <div className="my-8">
          <h3 className="text-lg">Description</h3>
          <p>{desc}</p>
          <h3 className="text-lg">Challenge</h3>
          <p>{challenge}</p>
          <h3 className="text-lg">Things to improve upon</h3>
          <p>{roomForImprovement}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link href={link}>View Repo</Link>
            <div className="justify-self-end relative w-8 h-8">
              <Image src="/images/github-icon.png" fill />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
