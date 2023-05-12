import Navbar from "@/components/Navbar";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='min-h-screen p-6 lowercase md:p-10'>
        <div className='mb-16'>
          <h1 className='mb-6 text-center text-5xl font-extrabold text-zinc-50 md:text-6xl'>
            Nice to meet you!
            <span className='bg-gradient-to-br from-orange-600 to-indigo-600 bg-clip-text text-transparent'>
              {" I'm Vrishank"}
            </span>
          </h1>
          <p className='mx-auto mb-12 max-w-2xl text-center text-lg font-semibold text-zinc-500 md:text-xl'>
            Welcome to my portfolio! I love learning and building projects using various
            technologies to create dynamic and efficient applications.
          </p>
          <div className=' justify-center gap-10 md:flex'>
            <button className='mb-8 box-border w-full rounded border bg-zinc-50 px-8 py-2 text-lg font-semibold lowercase transition duration-300 hover:border-zinc-50 hover:bg-zinc-950 hover:text-zinc-50 md:mb-0 md:w-40'>
              Learn more
            </button>
            <div className='relative w-full md:w-40'>
              <div className='absolute -inset-1 mx-auto w-3/4 rounded-lg bg-gradient-to-br from-orange-600 to-indigo-600 opacity-75 blur-xl'></div>
              <button className='relative w-full rounded bg-gradient-to-br from-orange-600 to-indigo-600 p-[1px] lowercase '>
                <div className='rounded bg-zinc-950 px-8 py-2 text-lg font-semibold text-zinc-50 transition duration-300 hover:bg-transparent hover:text-zinc-950 '>
                  Contact
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className='mx-auto h-96 rounded border border-zinc-600 md:w-3/4'>
          <div className='relative flex items-center gap-4 border-b border-zinc-600 p-3 md:grid md:place-items-center'>
            <div className='md:absolute md:left-3'>
              <div className='flex gap-3'>
                <div className='h-4 w-4 rounded-full bg-red-400'></div>
                <div className='h-4 w-4 rounded-full bg-yellow-400'></div>
                <div className='h-4 w-4 rounded-full bg-green-400'></div>
              </div>
            </div>
            <div className='relative inline w-full rounded bg-zinc-900 p-2 text-center md:flex md:w-1/3 md:justify-center'>
              <span className='font-medium tracking-wider text-zinc-50'>localhost:3000/skills</span>
              <ArrowPathIcon className='absolute right-3 top-3 h-4 w-4 text-zinc-50' />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
