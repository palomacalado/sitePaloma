import { Skeleton } from '@mui/material';
import { useContext } from 'react';
import ProjectCard from '../project-card/project-card';
import { ProjectsContext } from '../../contexts/projects';

function Developer() {
  const { developerProjects }: any = useContext(ProjectsContext);

  return (
    <>
      {developerProjects.length === 0 && (
        <Skeleton animation="wave" variant="circular" width={40} height={40} />
      )}
      {developerProjects &&
        developerProjects.map((project: Card) => {
          return (
            <ProjectCard
              title={project.title}
              image={project.image}
              description={project.description}
              preview={project.preview}
              _id={project._id}
              type="developer"
            />
          );
        })}
    </>
  );
}
export default Developer;
