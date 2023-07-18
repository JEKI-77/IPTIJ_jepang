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
      <div className="mt-100">
        <Footer />
      </div>
    </div>
  );
};

export default AppHome;
