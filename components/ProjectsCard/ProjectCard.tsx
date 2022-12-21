import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import { ProjectType } from "../../pages/projects";

const ProjectCard: NextPage<ProjectType> = (props) => {
  return (
    <div className="flex flex-col gap-5 p-2 mx-auto  shadow-lg select-none max-h-content rounded-2xl sm:flex-row ">
      <div className="w-52 relative mx-auto rounded-full">
        <Image
          className="rounded-lg"
          src={props.img}
          alt={props.name}
          // layout="fill"
          // objectFit="cover"
          quality={100}
        />
      </div>
      <div className="flex flex-col flex-1 gap-5 sm:p-2 max-w-xl mx-5">
        <div className="flex flex-col gap-2 justify-items-start">
          <p className="w-full text-lg">{props.name}</p>
          <p className="text-sm"> {props.description}</p>
          <div className="flex flex-row gap-1 flex-1 ">
            <Link href={props.url} passHref>
              <a target="_blank" className="text-sm underline">
                View Project
              </a>
            </Link>
            <Link href={props.git} passHref>
              <a target="_blank" className="text-sm underline">
                Github
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
