import { Skeleton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ProjectCard from "../project-card/project-card";

function Developer() {
  const [developerProjects, setDeveloperProjects] = useState<Card[]>([])


  useEffect(() => {
    axios
      .get('http://www.localhost:5000/developer')
      .then(projects => setDeveloperProjects(projects.data))

  }, [])

  return (<>
    {!developerProjects && (
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
          />
        )
      })}


  </>
  )
}
export default Developer;
