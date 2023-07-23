import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AppHome from "../../pages/AppHome";
import Home from "../../pages/Home";

import Gallery from "../../pages/Gallery";
import KajianIslam from "../../pages/KajianIslam";
import Team from "../../pages/Team";
import NewsIndo from "../../pages/NewsIndo";
import Newsjpn from "../../pages/NewsJpn/Index";
import JadwalSholat from "../../pages/JadwalSholat";
import Page404 from "../../pages/Page404";

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="kajian" element={<KajianIslam />} />
        <Route path="newsindo" element={<NewsIndo />} />
        <Route path="Team" element={<Team />} />
        <Route path="newsjpn" element={<Newsjpn />} />
        <Route path="jadwalsholat" element={<JadwalSholat />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default RouterApp;
