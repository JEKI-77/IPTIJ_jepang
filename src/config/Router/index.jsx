import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AppHome from "../../pages/AppHome";
import Home from "../../pages/Home";

import Gallery from "../../pages/Gallery";
import News from "../../pages/News";
import KajianIslam from "../../pages/KajianIslam";
import Team from "../../pages/Team";

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="kajian" element={<KajianIslam />} />
        <Route path="news" element={<News />} />
        <Route path="Team" element={<Team />} />
      </Routes>
    </Router>
  );
};

export default RouterApp;
