import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Design from "./pages/Design";
import Frontend from "./pages/Frontend";
import Content from "./pages/Content";
import Menu from "./pages/Menu";
import { useEffect, useRef, useState } from "react";
import DesignDetail from "./pages/DesignDetail";
import ContentDetail from "./pages/ContentDetail";
import FrontendDetail from "./pages/FrontendDetail";
import "animate.css";

function App() {
  const audioRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const handleFirstClick = () => {
      if (!hasPlayed && audioRef.current) {
        audioRef.current.play().catch((err) => console.log(err));
        setHasPlayed(true);
        window.removeEventListener("click", handleFirstClick); // remove after first click
      }
    };

    // Listen for the first click anywhere on the page
    window.addEventListener("click", handleFirstClick);

    return () => {
      window.removeEventListener("click", handleFirstClick);
    };
  }, [hasPlayed]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/design" element={<Design />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/content" element={<Content />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/designdetail/:slug" element={<DesignDetail />} />
          <Route path="/contentdetail/:slug" element={<ContentDetail />} />
          <Route path="/frontenddetail/:slug" element={<FrontendDetail />} />
        </Routes>
      </BrowserRouter>

      {/* Audio element mounted once for the whole app */}
      <audio ref={audioRef} loop className="visible" muted>
        <source src="/audio/rnb.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}

export default App;
