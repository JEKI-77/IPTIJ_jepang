import Banner from "../../Components/Atoms/Banner";
import "animate.css/animate.min.css";
import imgGallery1 from "../../assets/imagesIptij/img1.jpg";
import imgGallery2 from "../../assets/imagesIptij/img2.jpg";
import imgGallery3 from "../../assets/imagesIptij/img3.jpg";
import imgGallery4 from "../../assets/imagesIptij/img4.jpg";
import imgGallery5 from "../../assets/imagesIptij/img5.jpg";
import imgGallery6 from "../../assets/imagesIptij/img6.jpg";
import imgGallery7 from "../../assets/imagesIptij/img7.jpg";
import imgGallery9 from "../../assets/imagesIptij/img9.jpg";
import imgGallery10 from "../../assets/imagesIptij/img10.jpg";
import imgGallery11 from "../../assets/imagesIptij/img11.jpg";
import imgGallery12 from "../../assets/imagesIptij/img12.jpg";

const Gallery = () => {
  return (
    <div className="md:grid-cols-12 grid grid-cols-8  gap-2 w-[95%] m-auto mb-4  ">
      <div className="lg:col-span-12 col-span-8">
        <Banner />
      </div>
      <div className="lg:col-span-12 col-span-8 mt-8  animate__animated  animate__fadeInDown">
        <p className="text-center text-3xl font-semibold">Gallery</p>
        <hr className="mb-4 border-orange-400 col-span-12 w-[50%] m-auto" />
      </div>
      {/* grid image */}
      <div className="box lg:col-span-6 col-span-4  ">
        <img className="imgStyle h-full lg:h-full " src={imgGallery1} alt="" />
      </div>
      <div className=" box lg:col-span-4  col-span-4 ">
        <img className="imgStyle   lg:h-full" src={imgGallery4} alt="" />
      </div>
      <div className="box md:block hidden lg:col-span-2 col-span-4 ">
        <img className="imgStyle   lg:h-full" src={imgGallery7} alt="" />
      </div>

      <div className=" box lg:col-span-4 col-span-4 ">
        <img className="imgStyle  lg:h-full" src={imgGallery2} alt="" />
      </div>
      <div className="box lg:col-span-4 col-span-4  ">
        <img className="imgStyle  lg:h-full" src={imgGallery10} alt="" />
      </div>
      <div className="box hidden lg:block lg:col-span-4 col-span-4 ">
        <img className="imgStyle lg:h-full" src={imgGallery12} alt="" />
      </div>

      <div className="box lg:col-span-6 col-span-4  ">
        <img className="imgStyle  lg:h-full" src={imgGallery3} alt="" />
      </div>
      <div className="box lg:col-span-6 col-span-4 ">
        <img className="imgStyle " src={imgGallery6} alt="" />
      </div>
      <div className="box lg:col-span-4 col-span-4  ">
        <img className="imgStyle lg:h-full" src={imgGallery9} alt="" />
      </div>
      <div className="box lg:col-span-4 col-span-4 ">
        <img className="imgStyle  lg:h-full" src={imgGallery5} alt="" />
      </div>
      <div className="box lg:col-span-4 col-span-4 ">
        <img className="imgStyle  lg:h-full" src={imgGallery11} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
