import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage.jsx";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
