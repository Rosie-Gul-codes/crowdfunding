import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage.jsx";
import LoginPage from "./pages/LoginPage";
import CreateNewProjectPage from "./pages/CreateNewProject";
import Header from "./components/Header/Header"
import Contact from "./components/Contact"

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
          <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
