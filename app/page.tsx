import { ArrowPathIcon } from "@heroicons/react/20/solid";
import { quickActions } from "./ConstData/quickActions";
import Link from "next/link";
import ContactForm from "./components/ContactForm";
import LatestProjects from "./components/LatestProjects";
import {
  HeroMotionContainer,
  HeroMotionItem,
  OtherSectionsMotionContainer,
} from "./components/Motion";
import ProjectScroll from "./components/ProjectScroll";
import SkillsTabs from "./components/SkillsTabs";
import { Projects } from "./components/Project";

export default async function Home() {
  return (
    <>
      <main className='mx-auto min-h-screen max-w-6xl p-6 lowercase md:w-3/4 md:p-10'>
        {/* Hero */}
        <HeroMotionContainer staggerChildren={1.75}>
          <HeroMotionItem section id='hero' className='mb-16 grid place-content-center md:h-[45vh]'>
            <div className='mb-6 flex flex-wrap items-center justify-center gap-4'>
              {quickActions.map((action) => (
                <HeroMotionItem key={action.name}>
                  <Link
                    href={action.link}
                    target='_blank'
                    className=' flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-1.5 font-bold lowercase text-zinc-300 transition duration-300 hover:bg-zinc-300 hover:text-zinc-800'
                  >
                    {action.icon}
                    <span>{action.name}</span>
                  </Link>
                </HeroMotionItem>
              ))}
            </div>
            <h1 className='mb-6 text-center text-5xl font-bold text-zinc-50 md:text-6xl'>
              Nice to meet you!
              <span className='animate-bg-pan bg-gradient-to-r from-fuchsia-600 via-blue-600 to-fuchsia-600 bg-double bg-clip-text text-transparent'>
                {" I'm Vrishank"}
              </span>
            </h1>
            <p className='mx-auto mb-12 max-w-2xl text-center text-lg font-medium text-zinc-400 md:text-xl'>
              Welcome to my portfolio! I love learning and building projects using various
              technologies to create dynamic and efficient applications.
            </p>
            <div className=' justify-center gap-10 md:flex'>
              <Link
                href='/#skills'
                className='mb-8 box-border block w-full rounded-md border bg-zinc-50 px-8 py-2 text-center text-lg font-semibold lowercase transition duration-300 hover:border-zinc-50 hover:bg-zinc-950 hover:text-zinc-50 md:mb-0 md:w-40'
              >
                Learn more
              </Link>
              <div className='group relative w-full md:w-40'>
                <div className='absolute -inset-1 mx-auto w-3/4 rounded-lg bg-gradient-to-br from-fuchsia-600 to-blue-600 opacity-75 blur-xl transition-all group-hover:animate-ping-once' />
                <Link href='/#contact'>
                  <button className='relative w-full rounded-md bg-gradient-to-br from-fuchsia-600 to-blue-600 p-[1px] lowercase '>
                    <div className='rounded-md bg-zinc-950 px-8 py-2 text-lg font-semibold text-zinc-50 transition duration-300 hover:bg-transparent hover:text-zinc-950 '>
                      Contact
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </HeroMotionItem>
          <div id='skills' className='-mt-20  pt-20 ' />
          <HeroMotionItem
            section
            className='grid grid-rows-auto-1fr rounded-md border border-zinc-800'
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
                <span className='font-medium tracking-wider text-zinc-50'>
                  vrishank.dev/#skills
                </span>
                <ArrowPathIcon className='absolute right-3 top-3 h-4 w-4 text-zinc-50' />
              </div>
            </div>
            <SkillsTabs />
          </HeroMotionItem>
        </HeroMotionContainer>
        {/* About */}
        {/* <OtherSectionsMotionContainer
          id='about'
          className='mt-48 flex flex-col-reverse items-center gap-8 md:flex-row md:justify-center md:gap-20'
        >
          <div className='max-w-lg'>
            <div className='items-center justify-between md:flex'>
              <h1 id='title' className=' text-center text-4xl font-bold text-zinc-50 md:text-left'>
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
            <p className=' mt-4 text-center text-zinc-50 md:text-justify'>
              {
                "I'm a third-year Computer Science student at the University of Texas at Austin. I'm passionate about building applications that solve real-world problems and improve the lives of others."
              }
            </p>
            <button className='mx-auto mt-4 box-border block h-min rounded-full border bg-zinc-950 px-4 py-2 font-bold lowercase text-zinc-50 transition duration-300 hover:border-zinc-950 hover:bg-zinc-50 hover:text-zinc-950 md:hidden'>
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
              <code className=' flex items-center gap-2 font-semibold text-zinc-50'>
                ~ % <span className='text-zinc-600'>vrishank/</span>
                <span className='inline-block w-[15ch] animate-typing overflow-x-hidden whitespace-nowrap border-r-2 border-white'>
                  {" "}
                  git pull about
                </span>
              </code>
            </div>
          </div>
        </OtherSectionsMotionContainer> */}
        {/* Latest Projects */}
        <OtherSectionsMotionContainer id='latest-projects' className='mt-48 '>
          <div className='mb-6 items-center justify-between md:flex'>
            <h1 className='text-center text-4xl font-bold text-zinc-50 md:text-left'>
              latest
              <span className='bg-gradient-to-br from-fuchsia-600 to-blue-600 bg-clip-text text-transparent'>
                {" "}
                projects
              </span>
            </h1>
            <ProjectScroll />
            <Link
              href='/projects'
              className='mx-auto mt-6 box-border hidden h-min w-min whitespace-nowrap rounded-full border bg-zinc-950 px-4 py-2 font-bold lowercase text-zinc-50 transition duration-300 hover:border-zinc-950 hover:bg-zinc-50 hover:text-zinc-950 md:mx-0 md:mt-0 md:block'
            >
              all projects
            </Link>
          </div>
          <div
            id='projects-container'
            className='scrollbar-hide mx-auto w-72 overflow-scroll rounded-lg md:w-auto'
          >
            <LatestProjects>
              {/* @ts-expect-error Async Server Component */}
              <Projects numProjects={3} />
            </LatestProjects>
          </div>
          <Link
            href='/projects'
            className='mx-auto mt-6 box-border block h-min w-min whitespace-nowrap rounded-full border bg-zinc-950 px-4 py-2 font-bold lowercase text-zinc-50 transition duration-300 hover:border-zinc-950 hover:bg-zinc-50 hover:text-zinc-950 md:mx-0 md:mt-0 md:hidden'
          >
            all projects
          </Link>
        </OtherSectionsMotionContainer>
        {/* Contact */}
        <div id='contact' className='-mt-20  pt-20 ' />
        <OtherSectionsMotionContainer className='mt-48 md:flex md:gap-16'>
          <div className='grid-rows-auto-1fr md:grid md:w-1/2 md:gap-8'>
            <div className='mb-4 md:mb-0'>
              <h1 className='text-center text-4xl font-bold text-zinc-50 md:text-left'>
                get in
                <span className='bg-gradient-to-br from-fuchsia-600 to-blue-600 bg-clip-text text-transparent'>
                  {" "}
                  contact
                </span>
              </h1>
              <p className=' mt-4 text-center text-zinc-50 md:text-justify'>
                {
                  "I'm always looking for new opportunities, so feel free to reach out. I'm excited to connect and hear from you soon!"
                }
              </p>
            </div>
            <div className='hidden grid-rows-auto-1fr rounded-lg border border-zinc-800 md:grid'>
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
                      <div className='grid-cols-auto-1fr grid gap-2 '>
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
        </OtherSectionsMotionContainer>
      </main>
    </>
  );
}
