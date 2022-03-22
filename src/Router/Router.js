import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "../Components/Contact";
import Interview from "../Components/Interview";
import Navigation from "../Components/Navigation";
import Project from "../Components/Project";
import Home from "./Home";

const AppRouter = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
