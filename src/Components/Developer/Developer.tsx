// import styles from "./Projects.module.css";
import { Skeleton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectCard from "../project-card/project-card";

const OnlyCards = styled.div`
  width: 80vw;
  height: 100%;
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content: space-around;
  align-items:center;
  padding-top:10px
`;

function Developer() {
  const [developerProjects, setDeveloperProjects] = useState<Card[]>();

  useEffect(() => {
    axios
      .get("http://www.localhost:3004/developer")
      .then((projects) => setDeveloperProjects(projects.data));
  }, []);

  return (
    <OnlyCards>
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
          );
        })}
    </OnlyCards>
  );
}
export default Developer;
