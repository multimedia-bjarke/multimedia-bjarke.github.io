import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import "./App.css";
import ProjectDetail from "./pages/ProjectDetail";
import Design from "./pages/Design";
import Frontend from "./pages/Frontend";
import Content from "./pages/Content";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/design" element={<Design />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/content" element={<Content />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
      <audio autoPlay loop controls className="hidden">
        <source src="/audio/rnb.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}

export default App;
