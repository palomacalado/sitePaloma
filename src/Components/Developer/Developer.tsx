// import styles from "./Projects.module.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProjectCard from '../project-card/project-card';


function Developer() {
 const [developerProjects, setDeveloperProjects] = useState<Card[]>();

  useEffect(() => {
    axios.get("http://www.localhost:3004/developer")
    .then((projects)=>{ setDeveloperProjects(projects.data); console.log(projects.data);
    });
  
  }, [])
  

  return (
    <div>
      {developerProjects &&
          developerProjects.map((project:Card)=>{
            return <ProjectCard title={project.title} image ={project.image} description ={project.description} preview={project.preview}  />
          })
      }
   
  </div>
  );
  }
export default Developer;