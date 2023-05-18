import { ComputerDesktopIcon, ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export type Project = {
  name: string;
  description: string;
  github_url: string;
  project_url: string;
  topics: string[];
};

export const Project = ({ name, description, github_url, project_url, topics }: Project) => {
  return (
    <div className='aspect-square w-72 rounded-lg bg-zinc-900 p-6'>
      <div className='mb-4 flex items-center justify-between'>
        <div className='grid aspect-square w-10 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-600 to-blue-600'>
          <ComputerDesktopIcon className='h-6 w-6 text-zinc-950' />
        </div>
        {/* <h3 className='font-bold text-zinc-600'>{topics[0]}</h3> */}
        <div className='flex'>
          <Link
            href={github_url}
            target='_blank'
            className='flex h-min items-center font-bold lowercase text-zinc-600 transition duration-300 hover:text-zinc-50'
          >
            <span>github</span> <ArrowUpRightIcon className='h-5 w-5' />
          </Link>
          {project_url && (
            <>
              <span className='mx-2 font-semibold text-zinc-600'>|</span>
              <Link
                href={project_url}
                target='_blank'
                className='flex h-min items-center font-bold lowercase text-zinc-600 transition duration-300 hover:text-zinc-50'
              >
                <span>try out</span> <ArrowUpRightIcon className='h-5 w-5' />
              </Link>
            </>
          )}
        </div>
      </div>
      <h2 className='mb-2 text-2xl font-semibold text-zinc-50'>{name}</h2>
      <p className=' mb-4 line-clamp-3 text-sm font-medium leading-loose text-zinc-50'>
        {description}
      </p>
      <div className='scrollbar-hide mt-auto flex gap-4 overflow-scroll rounded-md'>
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
