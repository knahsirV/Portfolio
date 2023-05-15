import Navbar from "@/app/components/Navbar";
import SkillsTabs from "@/app/components/SkillsTabs";
import { ArrowPathIcon, ComputerDesktopIcon } from "@heroicons/react/20/solid";
import Project from "../components/Project";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='mx-auto min-h-screen p-6 lowercase md:w-3/4 md:p-10'>
        <section className='mb-16 grid place-content-center md:h-[45vh]'>
          <h1 className='mb-6 text-center text-5xl font-bold text-zinc-50 md:text-6xl'>
            my
            <span className='bg-gradient-to-br from-orange-600 to-indigo-600 bg-clip-text text-transparent'>
              {" portfolio"}
            </span>
          </h1>
          <p className='mx-auto mb-12 max-w-2xl text-center text-lg font-medium text-zinc-400 md:text-xl'>
            Welcome to my portfolio! I love learning and building projects using various
            technologies to create dynamic and efficient applications.
          </p>
          {/* <div className='flex flex-col flex-wrap items-center gap-4 md:flex-row md:justify-between md:gap-0'>
            {[...Array(9).keys()].map((project) => (
              <div key={project}>
                <Project />
              </div>
            ))}
          </div> */}
        </section>
      </main>
    </>
  );
}
