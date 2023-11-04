import { Outlet } from "react-router-dom";
import Footer from "../../Components/Mulecules/Footer";
import Header from "../../Components/Mulecules/Header";
// import RouterApp from "../../config/Router";
// Import statement dan komponen lainnya tetap sama

const MainApp = () => {
  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainApp;
