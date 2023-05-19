import { Projects } from "../components/Project";

export default function Home() {
  return (
    <>
      <main className='mx-auto min-h-screen max-w-6xl p-6 lowercase md:w-3/4 md:p-10'>
        <section id='hero' className='mb-8 grid place-content-center md:mb-16'>
          <h1 className='mb-6 text-center text-5xl font-bold text-zinc-50 md:text-6xl'>
            my
            <span className='bg-gradient-to-br from-fuchsia-600 to-blue-600 bg-clip-text text-transparent'>
              {" portfolio"}
            </span>
          </h1>
          <p className='mx-auto mb-12 max-w-2xl text-center text-lg font-medium text-zinc-400 md:text-xl'>
            {
              "Here's a look at the projects I've worked on during my years in computer science. Go ahead and check them out! 👇"
            }
          </p>
        </section>
        <div className='flex flex-col flex-wrap items-center gap-4 md:flex-row md:items-start md:justify-around md:gap-8'>
          {/* @ts-expect-error Async Server Component */}
          <Projects />
        </div>
      </main>
    </>
  );
}
