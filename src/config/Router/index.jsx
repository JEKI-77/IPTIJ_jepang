import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AppHome from "../../pages/AppHome";
import Blog from "../../pages/Blog";
import Home from "../../pages/Home";
import Shop from "../../pages/Shop";
import Contact from "../../pages/Contact";
import Upadate from "../../pages/Upadate";

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="gallery" element={<Blog />} />
        <Route path="shop" element={<Shop />} />
        <Route path="update" element={<Upadate />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default RouterApp;
