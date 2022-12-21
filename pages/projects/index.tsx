import Calculator from "../../public/img/Calculator.png";
import Course from "../../public/img/Course.png";
import type { NextPage } from "next";
import ProjectCard from "../../components/ProjectsCard/ProjectCard";
import Soltweet from "../../public/img/Soltweet.png";
import Sudoku from "../../public/img/Sudoku.png";

export type ProjectType = {
  name: string;
  description: string;
  url: string;
  img: StaticImageData;
  git: string;
};

const projects: ProjectType[] = [
  {
    name: "SolTweet",
    description:
      "A Twitter clone built with Next.js and TailwindCSS. The smartcontracts are written in Rust and deployed on the Solana blockchain. You can login with a wallet and post tweets. The tweets are stored on the blockchain and can be viewed by anyone. There is functionality to like a tweet and to send SOl to another user.",
    url: "https://sol-tweet.vercel.app/",
    img: Soltweet,
    git: "https://github.com/kaspergff/SolTweet",
  },
  {
    name: "Svelte - Tailwind Calculator",
    description:
      "A simple calculator built with Svelte and TailwindCSS. The calculator has a dark and light mode. I made this project to learn more about Svelte.",
    url: "https://svelte-tailwind-calculator.vercel.app/",
    img: Calculator,
    git: "https://github.com/kaspergff/Svelte-Tailwind-Calculator",
  },
  {
    name: "Next js markdown course website",
    description:
      "A template website build with Next js, Tailwind css and firebase. The website is a course website where you can add courses with lessons. The lessons are written in markdown. The website is deployed on Vercel. The backend is build with firebase. There is functionality to login with a google account and to enroll in a course.",
    url: "https://nextjs-course-app-kaspergff.vercel.app",
    img: Course,
    git: "https://github.com/kaspergff/nextjs-course-app",
  },
  {
    name: "Sudoku solver",
    description:
      "Small project to solve sudoku puzzles. The project is build with React. There are currently some bugs in the project. I will fix them soon.",
    url: "https://sudoku-solver-alpha.vercel.app/",
    img: Sudoku,
    git: "https://github.com/kaspergff/sudoku-solver",
  },
];

const Projects: NextPage<ProjectType[]> = (props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 py-10 ">
      <p className="text-xl text-center">
        On this page you can find some of my projects
      </p>
      <p className="text-lg text-center">More to come soon!</p>
      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
