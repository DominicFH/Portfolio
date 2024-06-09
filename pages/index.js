import Head from "next/head";
import Layout from "../components/Layout";
import Main from "../components/Main";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>About Me</title>
      </Head>
      <Main>
        <div className="hero bg-base-200 rounded-box h-full w-auto">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">I'm Dominic</h1>
              <p className="py-6">
                A Full Stack Developer based in North East England I have been coding since 2021 when I was awarded a fully paid scholarship to attend an
                intensive 13 week coding bootcamp in which I gained the skills to launch my developer career after years in the customer service/support
                industry.
              </p>
              <p className="py-6">
                Along with my experience in React I am currently using Typescript on a daily basis in my current role. I enjoy learning new technologies and am
                always ready to take on a new challenge to broaden my knowledge.
              </p>
            </div>
          </div>
        </div>
      </Main>
    </Layout>
  );
}
