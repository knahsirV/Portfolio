import Navbar from "@/app/components/Navbar";
import Project from "../components/Project";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='mx-auto min-h-screen max-w-6xl p-6 lowercase md:w-3/4 md:p-10'>
        <section id='hero' className=' top-20 mb-16 grid place-content-center'>
          <h1 className='mb-6 text-center text-5xl font-bold text-zinc-50 md:text-6xl'>
            my
            <span className='bg-gradient-to-br from-fuchsia-600 to-blue-600 bg-clip-text text-transparent'>
              {" portfolio"}
            </span>
          </h1>
          <p className='mx-auto mb-12 max-w-2xl text-center text-lg font-medium text-zinc-400 md:text-xl'>
            Here are the projects I've worked on. I'm always looking for new opportunities, so feel
            free to reach out!
          </p>
        </section>
        <div className='flex flex-col flex-wrap items-center gap-4 md:flex-row md:justify-around md:gap-8'>
          {[...Array(9).keys()].map((project) => (
            <div key={project}>
              <Project />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
