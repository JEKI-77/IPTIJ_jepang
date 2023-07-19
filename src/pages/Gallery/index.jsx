import blogImg from "../../assets/images/bannerbg.jpg";
import Banner from "../../Components/Atoms/Banner";

const Gallery = () => {
  return (
    <div>
      <Banner />
     
      <div className="grid grid-cols-4 mt-8 gap-4 mb-20 w-[80%] m-auto ">
        <p className="col-span-4 text-center text-3xl font-semibold">Gallery</p>
        <hr className="mb-4 border-orange-400 col-span-4 w-[50%] m-auto" />
        <div className="col-span-2 box">
          <img className="imgStyle " src={blogImg} alt="" />
        </div>
        <div className="row-span-2 box ">
          <img className="imgStyle" src={blogImg} alt="" />
        </div>
        <div className="box row-span-1">
          <img className="imgStyle" src={blogImg} alt="" />
        </div>
        <div className=" box row-span-2">
          <img className="imgStyle" src={blogImg} alt="" />
        </div>
        <div className="box ">
          <img className="imgStyle" src={blogImg} alt="" />
        </div>
        <div className="box">
          <img className="imgStyle" src={blogImg} alt="" />
        </div>
        <div className="box col-span-2 ">
          <img className="imgStyle" src={blogImg} alt="" />
        </div>
        <div className="box col-span-">
          <img className="imgStyle" src={blogImg} alt="" />
        </div>
        <div className="box  col-span-2 ">
          <img className="imgStyle" src={blogImg} alt="" />
        </div>
        <div className="box">
          <img className="imgStyle" src={blogImg} alt="" />
        </div>
        <div className="box">
          <img className="imgStyle" src={blogImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
