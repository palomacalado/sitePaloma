import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext, AuthProvider } from "./contexts/auth";

import NewProject from "./components/new-project/new-project";
import PageNotFound from "./components/page-not-found/page-not-found";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Projects from "./pages/projects/projects";
import Community from "./pages/community/community";
import { useContext } from "react";
import CommunityRegister from "./pages/community/community-register";

function Ways() {
  const Private = ({children}:any) =>{
    const {authenticated, loading}:any = useContext(AuthContext);

    if(loading) return <div>Carregando...</div>;

    if(!authenticated) return <Navigate to="/login" />;

    return children;
  }
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/novo-projeto" element={<NewProject />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro-comunidade" element={<CommunityRegister />} />
          <Route path="/comunidade" element={<Private><Community /></Private>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default Ways;
