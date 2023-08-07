import { AnimationOnScroll } from "react-animation-on-scroll";

const Quotes = () => {
  return (
    <div>
      <AnimationOnScroll animateIn="animate__backInUp animate__slow">
        <div className=" bg-[#1662d4] shadow-lg  h-52 flex justify-center items-center m-4 rounded-xl  ">
          <p className="text-gray-900 md:text-lg text-md text-center  m-2 font-semibold ">
            <div className="text-start mb-4">
              <span className=""></span>
            </div>
            <i className="text-md md:text-2xl text-gray-100  ">
              Tidak ada beban yang diberikan kepada seseorang melainkan sesuai
              dengan kesanggupannya.
            </i>
            <div className="text-end mt-4 text-gray-800">
              <span className=""> - (Q.S. Al-Baqarah, 2:286) -</span>
            </div>
          </p>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Quotes;
