import blogImg from "../../assets/images/bannerbg.jpg";
import Banner from "../../Components/Atoms/Banner";
import "animate.css/animate.min.css";

const Gallery = () => {
  return (
    <div className="md:grid md:grid-cols-6 flex flex-col  gap-2 w-[90%] m-auto mb-4  ">
      <div className="col-span-6">
        <Banner />
      </div>
      <div className="col-span-6 mt-8  animate__animated  animate__fadeInDown">
        <p className="text-center text-3xl font-semibold">Gallery</p>
        <hr className="mb-4 border-orange-400 col-span-4 w-[50%] m-auto" />
      </div>
      {/* grid image */}
      <div className="box md:col-span-3   ">
        <img className="md:imgStyle  " src={blogImg} alt="" />
      </div>
      <div className=" box md:row-span-2 md:col-span-2 ">
        <img className="imgStyle" src={blogImg} alt="" />
      </div>
      <div className="box  ">
        <img className="imgStyle" src={blogImg} alt="" />
      </div>
      <div className=" box md:col-span-2 ">
        <img className="imgStyle" src={blogImg} alt="" />
      </div>
      <div className="box ">
        <img className="imgStyle" src={blogImg} alt="" />
      </div>
      <div className="box  ">
        <img className="imgStyle" src={blogImg} alt="" />
      </div>
      <div className="box ">
        <img className="imgStyle" src={blogImg} alt="" />
      </div>
      <div className="box ">
        <img className="imgStyle" src={blogImg} alt="" />
      </div>
      <div className="box md:col-span-3  ">
        <img className="imgStyle" src={blogImg} alt="" />
      </div>
      <div className="box md:col-span-1">
        <img className="imgStyle" src={blogImg} alt="" />
      </div>{" "}
    </div>
  );
};

export default Gallery;
