import { Routes, Route } from "react-router-dom";
import NewProject from "./components/new-project/new-project";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";

function Ways() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/novo-projeto" element={<NewProject />} />
      </Routes>
    </div>
  );
}

export default Ways;
