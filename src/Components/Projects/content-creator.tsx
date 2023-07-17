import { Skeleton } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProjectCard from '../project-card/project-card';

function ContentCreator() {
  const [contentProjects, setContentProjects] = useState<Card[]>([]);

  useEffect(() => {
    axios
      .get('http://www.localhost:5000/content-creator')
      .then((projects) => setContentProjects(projects.data));
  }, []);

  return (
    <>
      {!contentProjects && (
        <Skeleton animation="wave" variant="circular" width={40} height={40} />
      )}
      {contentProjects &&
        contentProjects.map((project: Card) => {
          return (
            <ProjectCard
              title={project.title}
              image={project.image}
              description={project.description}
              preview={project.preview}
              _id={project._id}
              type="creator"
            />
          );
        })}
    </>
  );
}
export default ContentCreator;
