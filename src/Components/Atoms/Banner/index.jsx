import bannerbg from "../../../assets/images/bannerbg.jpg";

const Banner = () => {
  return (
    <div>
      <div>
        <img className="w-full h-[600px] object-cover" src={bannerbg} alt="bannerBg" />
      </div>
    </div>
  );
};

export default Banner;
