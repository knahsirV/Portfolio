import { ComputerDesktopIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export const Project = ({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) => {
  return (
    <div className='aspect-square w-72 rounded-lg bg-zinc-900 p-6'>
      <div className='mb-4 flex items-center justify-between'>
        <div className='grid aspect-square w-10 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-600 to-blue-600'>
          <ComputerDesktopIcon className='h-6 w-6 text-zinc-950' />
        </div>
        <h3 className='font-bold text-zinc-600'>web app</h3>
      </div>
      <h2 className='mb-2 text-2xl font-semibold text-zinc-50'>{name}</h2>
      <p className=' mb-4 line-clamp-3 text-sm font-medium leading-loose text-zinc-50'>
        {description}
      </p>
      <div className='mt-auto flex gap-4'>
        <Link
          href={url}
          target='_blank'
          className='box-border h-min rounded-full border px-4 py-1 text-sm font-bold lowercase text-zinc-50 transition duration-300 hover:border-transparent hover:bg-zinc-50 hover:text-zinc-950'
        >
          github
        </Link>
        <button className='box-border h-min rounded-full border px-4 py-1 text-sm font-bold lowercase text-zinc-50 transition duration-300 hover:border-transparent hover:bg-zinc-50 hover:text-zinc-950'>
          visit
        </button>
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
