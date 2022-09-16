import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage.jsx";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage/register.jsx";
import CreateNewProjectPage from "./pages/CreateNewProject";
import Header from "./components/Header/Header"
import Contact from "./components/Contact"
// import CreateNewProjectForm from "./components/CreateNewProjectForm/CreateNewProjectForm";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/login" element={ <LoginPage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/project" element={<CreateNewProjectPage />} />
          {/* <Route path="create" element={<CreateNewProjectForm/>} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="/register" element={<Register />} /> */}
          </Routes>
      </div>
    </Router>
  );
}

export default App;
