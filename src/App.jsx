import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import BackgroundImage from "./assets/greengold.jpg";
import Projects from "./components/Projects";
import Project from "./components/Project";
import About from "./components/About";
import NotFound from "./components/NotFound";
import ScrollToTop from "./ui/ScrollToTop";

function App() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${BackgroundImage})`;
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Projects />} />
          <Route path="project/:projectId" element={<Project />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
