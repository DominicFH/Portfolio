import Head from "next/head";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import Main from "../components/Main";

export default function Projects() {
  const projects = [
    {
      name: "Portfolio Site",
      link: "https://github.com/DominicFH/Portfolio",
      desc: "The source code for this portfolio site. Built using Next.js and styled with daisyUI",
      challenge: "My first time using Next.js, this was an opportunity to learn the quirks and improvements on React",
      roomForImprovement:
        "Although I am overall happy with the styling, I will revisit the site to improve aspects of this such as the colour scheme being more readable and making the site adaptive to mobile view",
    },
    { name: "projectTwo", link: "", desc: "Description" },
  ];
  return (
    <Layout>
      <Head>
        <title>My Projects</title>
      </Head>
      <Main>
        <div className="h-full flex justify-items-center">
          <div className="carousel carousel-center rounded-box flex-auto items-center">
            {projects.map((project) => {
              return <ProjectCard project={project} />;
            })}
          </div>
        </div>
      </Main>
    </Layout>
  );
}
