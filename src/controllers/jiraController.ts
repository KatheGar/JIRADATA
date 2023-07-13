import { Version3Client } from "jira.js";

const client = new Version3Client({
  host: process.env.JIRA_API_BASE || "",
  authentication:{
    basic: {
        email: process.env.JIRA_USER_MAIL || '',
        apiToken: process.env.JIRA_ACCESS_TOKEN || ''
      },

  }

});
export async function getProjectsInformation(projectKey: string) {
    try {
        const projects = await client.projects.getAllProjects();
        console.log(projects)
      return projects;
    } catch (error) {
      console.error('Error al obtener el proyecto:', error);
      throw error;
    }
  }
  
