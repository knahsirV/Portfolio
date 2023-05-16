import Navbar from "@/app/components/Navbar";
import SkillsTabs from "@/app/components/SkillsTabs";
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import Project from "./components/Project";
import ContactForm from "./components/ContactForm";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='mx-auto min-h-screen p-6 lowercase md:w-3/4 md:p-10'>
        <section id='hero' className='mb-16 grid place-content-center md:h-[45vh]'>
          <h1 className='mb-6 text-center text-5xl font-bold text-zinc-50 md:text-6xl'>
            Nice to meet you!
            <span className='bg-gradient-to-br from-fuchsia-600 to-blue-600 bg-clip-text text-transparent'>
              {" I'm Vrishank"}
            </span>
          </h1>
          <p className='mx-auto mb-12 max-w-2xl text-center text-lg font-medium text-zinc-400 md:text-xl'>
            Welcome to my portfolio! I love learning and building projects using various
            technologies to create dynamic and efficient applications.
          </p>
          <div className=' justify-center gap-10 md:flex'>
            <button className='mb-8 box-border w-full rounded-md border bg-zinc-50 px-8 py-2 text-lg font-semibold lowercase transition duration-300 hover:border-zinc-50 hover:bg-zinc-950 hover:text-zinc-50 md:mb-0 md:w-40'>
              Learn more
            </button>
            <div className='relative w-full md:w-40'>
              <div className='absolute -inset-1 mx-auto w-3/4 rounded-lg bg-gradient-to-br from-fuchsia-600 to-blue-600 opacity-75 blur-xl'></div>
              <Link href='/#contact' scroll={true}>
                <button className='relative w-full rounded-md bg-gradient-to-br from-fuchsia-600 to-blue-600 p-[1px] lowercase '>
                  <div className='rounded-md bg-zinc-950 px-8 py-2 text-lg font-semibold text-zinc-50 transition duration-300 hover:bg-transparent hover:text-zinc-950 '>
                    Contact
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section
          id='skills'
          className='grid grid-rows-[auto_1fr] rounded-md border border-zinc-800'
        >
          <div className='relative flex items-center gap-4 border-b border-zinc-800 p-3 md:grid md:place-items-center'>
            <div className='md:absolute md:left-3'>
              <div className='flex gap-3'>
                <div className='h-4 w-4 rounded-full bg-red-400'></div>
                <div className='h-4 w-4 rounded-full bg-yellow-400'></div>
                <div className='h-4 w-4 rounded-full bg-green-400'></div>
              </div>
            </div>
            <div className='relative inline w-full rounded-md bg-zinc-900 p-2 text-center md:flex md:w-1/3 md:justify-center'>
              <span className='font-medium tracking-wider text-zinc-50'>vrishank.dev/#skills</span>
              <ArrowPathIcon className='absolute right-3 top-3 h-4 w-4 text-zinc-50' />
            </div>
          </div>
          <SkillsTabs />
        </section>
        <section
          id='about'
          className='mt-48 flex flex-col-reverse items-center gap-8 md:flex-row md:justify-center md:gap-20'
        >
          <div className='max-w-lg'>
            <div className='flex items-center justify-between'>
              <h1 className=' text-4xl font-bold text-zinc-50'>
                get to
                <span className='bg-gradient-to-br from-fuchsia-600 to-blue-600 bg-clip-text text-transparent'>
                  {" "}
                  know me
                </span>
              </h1>
              <button className='box-border hidden h-min rounded-full border bg-zinc-950 px-4 py-2 font-bold lowercase text-zinc-50 transition duration-300 hover:border-zinc-950 hover:bg-zinc-50 hover:text-zinc-950 md:block'>
                Learn more
              </button>
            </div>
            <p className=' mt-4 text-justify text-zinc-50'>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. sed efficitur molestie diam,
              vitae viverra ipsum tincidunt nec .lorem ipsum dolor sit amet, consectetur adipiscing
              elit. sed efficitur molestie diam
            </p>
            <button className='ml-auto mt-4 box-border block h-min rounded-full border bg-zinc-950 px-4 py-2 font-bold lowercase text-zinc-50 transition duration-300 hover:border-zinc-950 hover:bg-zinc-50 hover:text-zinc-950 md:hidden'>
              Learn more
            </button>
          </div>
          <div className=' h-60 w-full rounded-md border border-zinc-800'>
            <div className='border-b border-zinc-800 p-3'>
              <div className='flex gap-3'>
                <div className='h-4 w-4 rounded-full bg-red-400'></div>
                <div className='h-4 w-4 rounded-full bg-yellow-400'></div>
                <div className='h-4 w-4 rounded-full bg-green-400'></div>
              </div>
            </div>
            <div className='p-4'>
              <code className=' font-semibold text-white'>
                ~ % <span className='text-zinc-600'>vrishank/</span> git pull about_
              </code>
            </div>
          </div>
        </section>
        <section id='featured-projects' className='mt-48 '>
          <div className='mb-8 items-center justify-between md:flex'>
            <h1 className='text-center text-4xl font-bold text-zinc-50 md:text-left'>
              featured
              <span className='bg-gradient-to-br from-fuchsia-600 to-blue-600 bg-clip-text text-transparent'>
                {" "}
                projects
              </span>
            </h1>
            <button className='mx-auto mt-8 box-border block h-min rounded-full border bg-zinc-950 px-4 py-2 font-bold lowercase text-zinc-50 transition duration-300 hover:border-zinc-950 hover:bg-zinc-50 hover:text-zinc-950 md:mx-0 md:mt-0'>
              all projects
            </button>
          </div>
          <div className='flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-0'>
            {[1, 2, 3].map((project) => (
              <div key={project}>
                <Project />
              </div>
            ))}
          </div>
        </section>
        <section id='contact' className='mt-48 md:flex md:gap-16'>
          <div className='grid-rows-[auto_1fr] md:grid md:w-1/2 md:gap-8'>
            <div className='mb-4 md:mb-0'>
              <h1 className='text-center text-4xl font-bold text-zinc-50 md:text-left'>
                get in
                <span className='bg-gradient-to-br from-fuchsia-600 to-blue-600 bg-clip-text text-transparent'>
                  {" "}
                  contact
                </span>
              </h1>
              <p className=' mt-4 text-justify text-zinc-50'>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. sed efficitur molestie
                diam, vitae viverra ipsum tincidunt nec .lorem ipsum dolor sit amet, consectetur
                adipiscing elit. sed efficitur molestie diam
              </p>
            </div>
            <div className='hidden grid-rows-[auto_1fr] rounded-lg border border-zinc-800 md:grid'>
              <div className='border-b border-zinc-800 p-3'>
                <div className='flex gap-3'>
                  <div className='h-4 w-4 rounded-full bg-red-400'></div>
                  <div className='h-4 w-4 rounded-full bg-yellow-400'></div>
                  <div className='h-4 w-4 rounded-full bg-green-400'></div>
                </div>
              </div>
              <div className='flex'>
                <div className='w-1/3 border-r border-r-zinc-800'>
                  <div className='border-b border-b-zinc-800 p-4'>
                    <h1 className='mb-2 text-lg font-bold text-zinc-50'>Inbox</h1>
                    <div className='h-5 w-full rounded bg-zinc-700'></div>
                  </div>
                  {[1, 2, 3].map((message) => (
                    <div
                      key={message}
                      className='relative border-b border-b-zinc-800 p-6 last:border-none'
                    >
                      <div className='grid grid-cols-[auto_1fr] gap-2 '>
                        <div className='h-6 w-6 rounded-full bg-zinc-700' />
                        <div className='space-y-2'>
                          <div className='h-1 w-1/2 rounded-full bg-zinc-700' />
                          <div className='h-1.5 w-full rounded-full bg-zinc-700' />
                          <div className='h-0.5 w-5/6 rounded-full bg-zinc-700' />
                          <div className='h-0.5 w-2/3 rounded-full bg-zinc-700' />
                        </div>
                      </div>
                      <div className='absolute right-3 top-3 h-0.5 w-4 rounded-full bg-zinc-700' />
                    </div>
                  ))}
                </div>
                <div className='relative w-2/3 p-8'>
                  <div className='absolute right-8 top-8 h-0.5 w-4 rounded-full bg-zinc-700' />
                  <div className='flex items-center gap-2 '>
                    <div className='h-6 w-6 rounded-full bg-zinc-700' />
                    <div className='space-y-2'>
                      <div className='h-1 w-10 rounded-full bg-zinc-700' />
                      <div className='h-1.5 w-20 rounded-full bg-zinc-700' />
                    </div>
                  </div>
                  <div className='mt-4 h-6 w-2/3 rounded-full bg-zinc-700' />
                  <div className='mt-8 h-1.5 w-11/12 rounded-full bg-zinc-700' />
                  <div className='mt-3 h-1.5 w-10/12 rounded-full bg-zinc-700' />
                  <div className='mt-3 h-1.5 w-11/12 rounded-full bg-zinc-700' />
                  <div className='mt-3 h-1.5 w-9/12 rounded-full bg-zinc-700' />
                  <div className='mt-3 h-1.5 w-8/12 rounded-full bg-zinc-700' />
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>
    </>
  );
}
