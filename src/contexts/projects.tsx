import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ProjectsContextInterface } from '../types/projects-context';

export const ProjectsContext = createContext<ProjectsContextInterface | null>(
  null,
);

export const ProjectsProvider = ({ children }: any) => {
  const [developerProjects, setDeveloperProjects] = useState<Card[]>([]);

  useEffect(() => {
    axios
      .get('http://www.localhost:5000/developer')
      .then((projects) => setDeveloperProjects(projects.data));
  }, []);

  return (
    <ProjectsContext.Provider
      value={{ developerProjects, setDeveloperProjects }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
