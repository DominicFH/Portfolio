import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project: { name, link, desc, challenge, roomForImprovement, skillLogo } }) => {
  console.log(link);
  return (
    <div className="card bg-base-200 w-96 shadow-xl mx-8">
      <div className="card-compact p-5">
        <div className="grid grid-cols-2 gap-4">
          <h2 className="card-title w-auto text-2xl">{name}</h2>
          <div className="justify-self-end relative w-12 h-12">
            <Image src={`/images/${skillLogo}`} fill />
          </div>
        </div>
        <div className="project-desc my-2">
          <h3 className="text-lg">Description:</h3>
          <p>{desc}</p>
        </div>
        <div className="project-challenges my-2">
          <h3 className="text-lg">Challenge:</h3>
          <p>{challenge}</p>
        </div>
        <div className="project-improvements my-2">
          <h3 className="text-lg">Things to improve upon:</h3>
          <p>{roomForImprovement}</p>
        </div>
        <div className="card-actions justify-end">
          <Link href={link}>
            <button className="btn btn-primary">
              View Repo
              <div className="justify-self-end relative w-8 h-8">
                <Image src="/images/github-icon.png" fill />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
