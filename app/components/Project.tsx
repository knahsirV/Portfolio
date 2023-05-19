import { ComputerDesktopIcon, WindowIcon } from "@heroicons/react/20/solid";
import { Github } from "react-bootstrap-icons";
import Link from "next/link";
import { projectIcons } from "../ConstData/projectIcons";
import { Suspense } from "react";
import { getProjects } from "../get-projects";
import ProjectDescription from "./ProjectDescription";

export type Project = {
  name: string;
  description: string;
  github_url: string;
  project_url: string;
  topics: string[];
};

export const Project = ({ name, description, github_url, project_url, topics }: Project) => {
  return (
    <div id={name} className='aspect-square w-72 snap-center rounded-lg bg-zinc-900 p-6'>
      <div className='mb-4 flex items-center justify-between'>
        <div
          className={`grid aspect-square w-10 place-items-center rounded-lg bg-gradient-to-br text-zinc-900 ${
            projectIcons[name.toLowerCase()]?.bg || "from-fuchsia-600 to-blue-600 "
          }`}
        >
          {projectIcons[name.toLowerCase()]?.icon || <ComputerDesktopIcon className='h-6 w-6 ' />}
        </div>
        <div className='flex items-center gap-1'>
          <Link
            href={github_url}
            target='_blank'
            className='flex h-min items-center gap-1 font-bold lowercase text-zinc-600 transition duration-300 hover:text-zinc-50'
          >
            <Github className='h-4 w-4 ' /> <span>view code</span>
          </Link>
          {project_url && (
            <>
              <span className='mx-1 select-none font-semibold text-zinc-600'>|</span>
              <Link
                href={project_url}
                target='_blank'
                className='flex h-min items-center gap-1 font-bold lowercase text-zinc-600 transition duration-300 hover:text-zinc-50'
              >
                <WindowIcon className=' h-4 w-4' />
                <span>try out</span>
              </Link>
            </>
          )}
        </div>
      </div>
      <h2 className='mb-2 text-2xl font-bold text-zinc-50'>{name}</h2>
      <ProjectDescription description={description} />
      <div className='scrollbar-hide mt-auto flex gap-4 overflow-scroll rounded-lg'>
        {topics.map((topic) => (
          <span
            key={topic}
            className='h-min whitespace-nowrap rounded-full bg-zinc-700 px-4 py-1 text-sm font-bold lowercase text-zinc-300'
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectSkel = () => {
  return (
    <div className='aspect-square w-72 animate-pulse rounded-lg bg-zinc-900 p-6 opacity-25'>
      <div className='mb-4 flex items-center justify-between'>
        <div className='grid aspect-square w-10 place-items-center rounded-lg bg-zinc-800'></div>
        <div className='h-6 w-20 rounded-full bg-zinc-800 ' />
        <div className='h-6 w-20 rounded-full bg-zinc-800 ' />
      </div>
      <div className='mb-4 h-6 w-3/4 rounded-full bg-zinc-800' />
      <div className='mb-4 h-3 w-5/6 rounded-full bg-zinc-800' />
      <div className='mb-4 h-3 w-full rounded-full bg-zinc-800' />
      <div className='mb-6 h-3 w-2/3 rounded-full bg-zinc-800' />
      <div className='flex gap-4'>
        <div className='h-8 w-16 rounded-full bg-zinc-800' />
        <div className='h-8 w-14 rounded-full bg-zinc-800' />
        <div className='h-8 w-20 rounded-full bg-zinc-800' />
      </div>
    </div>
  );
};

export const ProjectLoading = () => {
  const empty = Array(3).fill(0);
  return (
    <>
      {empty.map((_, index) => (
        <div key={index}>
          <ProjectSkel />
        </div>
      ))}
    </>
  );
};

export const ProjectCards = async ({ numProjects }: { numProjects?: number }) => {
  const projects = await getProjects(numProjects);
  return (
    <>
      {projects.map((project: Project) => (
        <div key={project.name}>
          <Project
            name={project.name}
            description={project.description}
            github_url={project.github_url}
            project_url={project.project_url}
            topics={project.topics}
          />
        </div>
      ))}
    </>
  );
};

export const Projects = async ({ numProjects }: { numProjects?: number }) => {
  const projects = await getProjects(numProjects);
  return (
    <Suspense fallback={<ProjectLoading />}>
      {projects.map((project: Project) => (
        <div key={project.name}>
          <Project
            name={project.name}
            description={project.description}
            github_url={project.github_url}
            project_url={project.project_url}
            topics={project.topics}
          />
        </div>
      ))}
    </Suspense>
  );
};
