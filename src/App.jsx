import React, { useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";
import SocialSidebarLeft from "./components/SocialSidebarLeft";
import Huskd from "./components/Huskd";
import Polaroid from "./components/Polaroid";
import RibbitsRobots from "./components/RibbitsRobots";
import SicaStudios from "./components/SS";

function AppContent() {
  const scrollY = useRef(0);
  const location = useLocation();

  window.addEventListener("scroll", () => {
    scrollY.current = window.scrollY;
  });

  // ✅ Hide sidebars only on /huskd
  const hideSidebars = location.pathname.toLowerCase() === "/huskd";

  return (
    <div className="font-sans bg-white text-black relative">
    
      {!hideSidebars && (
        <>
          <SocialSidebar />
          <SocialSidebarLeft />
        </>
      )}

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero scrollY={scrollY} />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/huskd" element={<Huskd />} />
        <Route path="/polaroid" element={<Polaroid />} />
        <Route path="/ribbitsrobots" element={<RibbitsRobots />} />
        <Route path="/sicastudios" element={<SicaStudios />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
