import blogImg from "../../assets/images/bannerbg.jpg";
import Banner from "../../Components/Atoms/Banner";

const Blog = () => {
  return (
    <div>
      <Banner/>
      <div className="grid grid-cols-4 mt-8 gap-4 mb-20 ">
        <p className="col-span-4 text-center text-3xl font-semibold">Gallery</p>
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
        <div className="col-span-">
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

export default Blog;
