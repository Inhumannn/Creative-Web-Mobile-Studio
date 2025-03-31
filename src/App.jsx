import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import OurStudio from "./pages/ourstudio";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/ourstudio" element={<OurStudio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
