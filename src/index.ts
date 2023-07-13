import axios, { AxiosResponse } from 'axios';
//import mysql, { Connection } from 'mysql';

// Configuración de la base de datos
// const dbConfig = {
//   host: 'localhost',
//   user: 'tu-usuario',
//   password: 'tu-contraseña',
//   database: 'nombre-de-la-base-de-datos'
// };

// Conexión a la base de datos
//const connection: Connection = mysql.createConnection(dbConfig);
// JIRA_USER_MAIL=gerentes@fi.com.py
// JIRA_ACCESS_TOKEN=2qCadzdSEueRf4lTZHRvD30D
// JIRA_API_BASE=https://fintechinnovacion.atlassian.net/rest/api/3
// Conectarse a la API REST de JIRA
const jiraUrl = '';
const auth = {
  username: '',
  password: ''
};

// Interfaz para el objeto de proyecto
interface Project {
  key: string;
  name: string;
  description?: string;
  lead:any;
  url:string;
  issueTypes:any;
}

// Función para obtener la lista de proyectos
async function getProjects(): Promise<Project[]> {
  try {
    const response: AxiosResponse = await axios.get(`${jiraUrl}/rest/api/3/project`, {
      auth
    });

    return response.data;
  } catch (error) {
    console.error('Error al obtener la lista de proyectos:', error);
    throw error;
  }
}

// Función para almacenar los proyectos en la base de datos
function storeProjects(projects: Project[]): void {
 // const query = 'INSERT INTO proyectos (clave, nombre, descripcion) VALUES (?, ?, ?)';

  projects.forEach((project: Project) => {
    const values = [project.key, project.name, project.description || '',project.lead, project.url, project.issueTypes ];

    console.log(values)
    // connection.query(query, values, (error:any, results:any) => {
    //   if (error) {
    //     console.error('Error al almacenar el proyecto:', error);
    //   } else {
    //     console.log('Proyecto almacenado con éxito:', project.key);
    //   }
    // });
  });
}

// Obtener y almacenar la lista de proyectos
getProjects()
  .then((projects: Project[]) => {
    storeProjects(projects);
    //connection.end();
  })
  .catch((error) => {
    console.error('Error al obtener la lista de proyectos:', error);
    //connection.end();
  });
