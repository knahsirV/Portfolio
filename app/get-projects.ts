import { Octokit } from "octokit";

export const revalidate = 10;

const unmodifiableProjects: { [key: string]: { description: string; topics: string[] } } = {
  FamiLead: {
    description:
      "An app designed to provide a streamlined communication platform for families and stay connected with a task scheduler, chat service, calendar, maps, and location tracking.",
    topics: ["react", "twilio", "firebase", "google-calendar"],
  },
};

export const getProjects = async (numResults?: number) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const data = await octokit
    .request("GET /users/{username}/repos", {
      username: "knahsirV",
      sort: "created",
      type: "all",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
    .then((res: any) => res.data);

  const projects = data
    .map((project: any) => ({
      name: project.name,
      description: unmodifiableProjects[project.name]
        ? unmodifiableProjects[project.name].description
        : project.description,
      github_url: project.html_url,
      project_url: project.homepage,
      topics: unmodifiableProjects[project.name]
        ? unmodifiableProjects[project.name].topics.sort()
        : project.topics,
    }))
    .filter((project: any) => !new Set(["Gazelle", "knahsirV"]).has(project.name))
    .slice(0, numResults);

  return projects;
};
