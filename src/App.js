import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage.jsx";
import LoginPage from "./pages/LoginPage";
import CreateNewProjectPage from "./pages/CreateNewProject";

function App() {
  return (
    <Router>
      <div>
      <Nav />
        <Routes>
          <Route path="/login" element={ <LoginPage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/project" element={<CreateNewProjectPage />} />

          </Routes>
      </div>
    </Router>
  );
}

export default App;
