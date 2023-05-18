"use client";
import {
  ComputerDesktopIcon,
  ArrowUpRightIcon,
  WindowIcon,
  GlobeAltIcon,
} from "@heroicons/react/20/solid";
import { Github } from "react-bootstrap-icons";
import Link from "next/link";
import { projectIcons } from "../ConstData/projectIcons";
import { useState } from "react";

export type Project = {
  name: string;
  description: string;
  github_url: string;
  project_url: string;
  topics: string[];
};

export const Project = ({ name, description, github_url, project_url, topics }: Project) => {
  const [expanded, setExpanded] = useState(false);
  const canExpland = description.length > 160;
  return (
    <div className=' aspect-square w-72 rounded-lg bg-zinc-900 p-6'>
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
      <p
        className={` mb-1 ${
          !expanded && "line-clamp-3"
        } text-sm font-medium leading-loose text-zinc-50`}
      >
        {description}
      </p>
      <button
        className={`mb-4 block text-sm font-extrabold ${
          !canExpland && "invisible"
        } text-zinc-600 transition duration-300 hover:text-zinc-50 `}
        onClick={() => setExpanded(!expanded)}
      >
        view {expanded ? "less" : "more"}
      </button>
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

export const ProjectSkel = () => {
  return (
    <div className='aspect-square w-72 animate-pulse rounded-lg bg-zinc-900 p-6 opacity-25'>
      <div className='mb-4 flex items-center justify-between'>
        <div className='grid aspect-square w-10 place-items-center rounded-lg bg-zinc-800'></div>
        <div className='h-4 w-12 rounded-full bg-zinc-800 ' />
      </div>
      <div className='mb-4 h-6 w-3/4 rounded-full bg-zinc-800' />
      <div className='mb-4 h-3 w-2/3 rounded-full bg-zinc-800' />
      <div className='mb-4 h-3 w-5/6 rounded-full bg-zinc-800' />
      <div className='mb-6 h-3 w-1/2 rounded-full bg-zinc-800' />
      <div className='flex gap-4'>
        <div className='h-8 w-16 rounded-full bg-zinc-800' />
        <div className='h-8 w-14 rounded-full bg-zinc-800' />
      </div>
    </div>
  );
};
