import { Dispatch, SetStateAction } from "react"

interface ProjectsContextInterface {
  developerProjects: Card[]
  setDeveloperProjects: Dispatch<SetStateAction<Card[]>>
};


  