import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/auth";
import { useContext } from "react";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import DeveloperForm from "./Pages/new-project/developer-form";
import Login from "./Pages/login/login";
import Community from "./Pages/community/community";
import PageNotFound from "./Components/page-not-found/page-not-found";
import FormCadastro from "./Components/form-cadastro/form-cadastro";
import ContentForm from "./Pages/new-project/content-form";


function Ways() {
  const Private = ({children}:any) =>{
    const {authenticated, loading}:any = useContext(AuthContext);

    if(loading) return <div>Carregando...</div>;

    if(!authenticated) return <Navigate to="/login" />;

    return children;
  }
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/novo-projeto-desenvolvedora" element={<DeveloperForm />} />
          <Route path="/novo-projeto-criadora" element={<ContentForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<FormCadastro />} />
          <Route path="/comunidade" element={<Private><Community /></Private>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  );
}

export default Ways;
