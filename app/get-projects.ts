import { Octokit } from "octokit";

export const getProjects = async (numResults?: number) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });
  const data = await octokit
    .request("GET /users/{username}/repos", {
      username: "knahsirV",
      sort: "created",
      type: "all",
      per_page: numResults || 30,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
    .then((res: any) => res.data);

  const projects = data.map((project: any) => ({
    name: project.name,
    description: project.description,
    url: project.html_url,
  }));

  return projects;
};
