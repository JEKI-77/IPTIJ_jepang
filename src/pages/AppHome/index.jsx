import Footer from "../../Components/Mulecules/Footer";
import Header from "../../Components/Mulecules/Header";
import RouterApp from "../../config/Router";

const AppHome = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 ">
        <RouterApp />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AppHome;
