import Head from "next/head";
import Layout from "../components/layout";
import ExperienceTimeline from "../components/ExperienceTimeline";

const previousExperiences = [
  {
    date: "2016 - 2020",
    title: "Customer Service Advisor (SME) - Capita: National Trust",
    description:
      "Initially answering inbound phone calls on the general customer query line, my role with Capita progressed to working on several teams from emails and complaints to the webchat team. My later role as a subject matter expert involved coaching members of my team as well as training new members of staff. I also worked closely with our technical team to report any bugs or issues which developed with the software we used or the website itself.",
  },
  {
    date: "2020",
    title: "Fraud Expert - Barclays",
    description:
      "In this role I was responsible for speaking with customers who had found themselves victims of fraud as well as fraudsters attempting to gain access to bank accounts. I greatly developed my skills in explaining complicated processes to a range of audiences from teens who already understand technology to elderly customers who may need simpler explanations",
  },
  {
    date: "2021",
    title: "Customer Service Advisor - Cleva UK",
    description:
      "This role involved working on a small team of two people and being responsible for all customer service for the business. After working for very large organisations previously, this greatly helped develop my confidence in working on a small team as we had to ensure we had good communication to provide a great experience to all customers.",
  },
];

const codingExperiences = [
  {
    date: "Sep 2021 - Dec 2021",
    title: "Coding Bootcamp Student - Northcoders",
    description:
      "Completed a comprehensive 13-week program where I gained proficiency in fundamental coding, front-end, and back-end development; focusing on technologies such as JavaScript, Node.js, React, PostgreSQL, and Express. Utilised these skills to build a fullstack project, incorporating React for the front end and using Express and PostgreSQL for the back end, with testing conducted using Jest.",
  },
  {
    date: "Jan 2022 - Jun 2022",
    title: "Junior Software Engineer & Mentor - Northcoders",
    description:
      "Supported students in the coding bootcamp by providing individualized explanations, debugging assistance, and code reviews to train in learning technologies such as JavaScript, Node.js, React, and PostgreSQL. Also contributed to internal projects, including designing sprint tasks and collaborating with staff using React and Firebase to create a polling app for use in lectures.",
  },
  {
    date: "Jul 2022 - Ongoing",
    title: "Junior Developer/Developer - SaleCycle",
    description:
      "Developing and maintaining custom TypeScript scripts integrated with clients' websites for data consumption and tracking, ensuring functionality through Cucumber tests. Monitoring captured data using SQL, Looker, and Amazon Cloudwatch to identify and resolve errors, while also advising colleagues across the company on how to leveraging script capabilities for customer retention and marketing strategies. Additionally, supporting our Design team with HTML, CSS, and Handlebars for our email re-marketing and on-site solutions.",
  },
];

export default function Career() {
  return (
    <Layout>
      <Head>
        <title>Career</title>
      </Head>
      <main className="px-2">
        <div className="collapse collapse-arrow bg-base-200 my-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Prior Experience</div>
          <div className="collapse-content">
            <ExperienceTimeline experiences={previousExperiences} initialDirectionLeft={false} />
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-2">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">Coding Career</div>
          <div className="collapse-content">
            <ExperienceTimeline experiences={codingExperiences} initialDirectionLeft={true} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
