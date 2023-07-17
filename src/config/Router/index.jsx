import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHome from "../../pages/AppHome";
import Blog from "../../pages/Blog";
import Home from "../../pages/Home";
import Shop from "../../pages/Shop";
import Tilawah from "../../pages/Tilawah";
import WebinarDoc from "../../pages/WebinarDoc";
const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppHome />}>
          <Route path="home" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="shop" element={<Shop />} />
          <Route path="tilawah" element={<Tilawah />} />
          <Route path="webinar" element={<WebinarDoc />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterApp;
