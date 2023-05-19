import { getProjects } from "../get-projects";
import { Project } from "./Project";

export default async function LatestProjects() {
  const latestProjects: Project[] = await getProjects(3);
  return (
    <>
      {latestProjects.map((project: Project) => (
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
    </>
  );
}
