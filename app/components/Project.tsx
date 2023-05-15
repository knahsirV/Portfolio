import { ComputerDesktopIcon } from "@heroicons/react/20/solid";

const Project = () => {
  return (
    <div className='aspect-square w-72 rounded-lg bg-zinc-900 p-6'>
      <div className='mb-4 flex items-center justify-between'>
        <div className='grid aspect-square w-10 place-items-center rounded-lg bg-gradient-to-br from-orange-600 to-indigo-600'>
          <ComputerDesktopIcon className='h-6 w-6 text-zinc-950' />
        </div>
        <h3 className='font-bold text-zinc-600'>web app</h3>
      </div>
      <h2 className='mb-2 text-2xl font-semibold text-zinc-50'>news archiver</h2>
      <p className=' mb-4 text-sm font-medium leading-loose text-zinc-50'>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. sed sit amet, consectetur
        adipiscing elit. sed
      </p>
      <div className='mt-auto flex gap-4'>
        <button className='box-border h-min rounded-full border px-4 py-1 text-sm font-bold lowercase text-zinc-50 transition duration-300 hover:border-transparent hover:bg-zinc-50 hover:text-zinc-950'>
          github
        </button>
        <button className='box-border h-min rounded-full border px-4 py-1 text-sm font-bold lowercase text-zinc-50 transition duration-300 hover:border-transparent hover:bg-zinc-50 hover:text-zinc-950'>
          visit
        </button>
      </div>
    </div>
  );
};

export default Project;
