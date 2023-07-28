import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
// import Skills from "./pages/Skills";
import ProjectGallery from "./pages/ProjectGallery";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home/>}
      />
      <Route path="/About" element={<About/>} />
      {/* <Route path="/Skills" element={<Skills/>} /> */}
      <Route path="/Projects" element={<ProjectGallery/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
  )
}

export default AllRoutes