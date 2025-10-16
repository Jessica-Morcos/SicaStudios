import React, { useRef, useEffect , useLayoutEffect  } from "react";
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
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";
import SocialSidebarLeft from "./components/SocialSidebarLeft";
import Huskd from "./components/Huskd";
import Polaroid from "./components/Polaroid";
import RibbitsRobots from "./components/RibbitsRobots";
import SicaStudios from "./components/SS";

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}




function AppContent() {
  const scrollY = useRef(0);
  const location = useLocation();

  // ✅ Single scroll listener (not re-added every render)
  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Hide sidebars on all project pages (Huskd, Polaroid, etc.)
  const hiddenRoutes = ["/huskd", "/polaroid", "/ribbitsrobots", "/sicastudios"];
  const hideSidebars = hiddenRoutes.includes(location.pathname.toLowerCase());

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

// ✅ Main App wrapper
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
