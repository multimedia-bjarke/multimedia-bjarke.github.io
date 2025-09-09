import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import "./App.css";
import Nav from "./components/Nav";
import ProjectDetail from "./pages/ProjectDetail";
import Design from "./pages/Design";
import Frontend from "./pages/Frontend";
import Content from "./pages/Content";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Nav /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/design" element={<Design />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
