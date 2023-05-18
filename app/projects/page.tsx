import Navbar from "@/app/components/Navbar";
import { Project, ProjectSkel } from "../components/Project";
import { Suspense } from "react";
import { getProjects } from "../get-projects";

const Loading = () => {
  const empty = Array(9).fill("");
  return (
    <>
      {empty.map((project) => (
        <div key={project}>
          <ProjectSkel />
        </div>
      ))}
    </>
  );
};

export default async function Home() {
  const projects = await getProjects();
  return (
    <>
      <Navbar />
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
          <Suspense fallback={<Loading />}>
            {projects.map((project: Project) => (
              <div key={project.name}>
                <Project
                  name={project.name}
                  description={project.description}
                  github_url={project.github_url}
                  project_url={project.project_url}
                  topics={project.topics}
                />
              </div>
            ))}
          </Suspense>
        </div>
      </main>
    </>
  );
}
