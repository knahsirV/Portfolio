import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='min-h-screen p-6 lowercase md:p-10'>
        <div className=''>
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
      </main>
    </>
  );
}
