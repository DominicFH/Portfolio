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
      skillLogo: "nextjs-icon.png",
    },
    {
      name: "News Site Web App",
      link: "https://github.com/DominicFH/nc-news",
      desc: "A web app for news articles. Built using React.js including React Router and integrating an API using Axios",
      challenge:
        "As my first React project, this was a great experience in using and understanding hooks and linking a front end to a back end in a seamless manner",
      roomForImprovement: "With a tight deadline my focus was just on the MVP, there are features such as pagination that I would have liked to implement",
      skillLogo: "reactjs-icon.png",
    },
    {
      name: "News Site API",
      link: "https://github.com/DominicFH/dominic-news-project",
      desc: "An api providing news articles. Using PSQL, Express and tested with Jest this was an opportunity to learn to use data with JSON and understand how data is transferred across the web",
      challenge:
        "The main challenge was becoming comfortable with TDD however I found myself able to lean into writing tests first and not getting ahead of myself writing unsafe code",
      roomForImprovement:
        "I'd like to make use of my current SQL knowledge gained from work and use a wider variety of queries using aggregate functions and pivots for example to unlock more specific features for the news site",
      skillLogo: "expressjs-icon.png",
    },
  ];
  return (
    <Layout>
      <Head>
        <title>My Projects</title>
      </Head>
      <Main>
        <div className="h-full flex justify-items-center">
          <div className="carousel carousel-center rounded-box flex-initial items-center">
            {projects.map((project) => {
              return <ProjectCard project={project} />;
            })}
          </div>
        </div>
      </Main>
    </Layout>
  );
}
