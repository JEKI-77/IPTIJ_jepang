import Footer from "../Components/Mulecules/Footer";
import Header from "../Components/Mulecules/Header";
import RouterApp from "../config/Router";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 mt-52 ">
        <RouterApp />
      </div>
      <Footer />
    </div>
  );
}

export default App;
