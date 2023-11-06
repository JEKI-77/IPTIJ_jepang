import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Gallery from "../../pages/Gallery";
import NewsIndo from "../../pages/NewsIndo";
import JadwalSholat from "../../pages/waktuSholat";
import Page404 from "../../pages/Page404";
import MainApp from "../../pages/mainApp";
import IslamNews from "../../pages/islamNews";
import Alquran from "../../pages/alquran";
import Currency from "../../pages/Currency";
import Detail from "../../pages/alquran/detail";
// import ChatApp from "../../pages/chat/chatApp";

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<IslamNews />} />
          <Route path="/newsindo" element={<NewsIndo />} />
          <Route path="/waktuSholatjepang" element={<JadwalSholat />} />
          {/* <Route path="/chat" element={<ChatApp />} /> */}
          <Route path="/alquran" element={<Alquran />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/currency" element={<Currency />} />
          <Route path="/*" element={<Page404 />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterApp;
