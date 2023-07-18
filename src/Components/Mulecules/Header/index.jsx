import iptijLogo from "../../../assets/images/logo_iptij.png";

const Header = () => {
  return (
    <div className="h-24 mt-10">
      <div className="logo-sosmed flex justify-between w-8/12 mx-auto">
        <div className="">
          <img className="h-40 w-40" src={iptijLogo} alt="" srcSet="" />
        </div>
        <div className="sosmed">
          <ul className="flex gap-4">
            <li>ig</li>
            <li>fb</li>
            <li>yt</li>
            <li>twt</li>
          </ul>
        </div>
      </div>

      <div className="bg-cyan-500 h-20 w-full ">
        <div className=" flex justify-between items-center m-4  w-8/12 mx-auto ">
          <div className="">
            <ul className="flex gap-4 justify-center items-center h-20  ">
              <li>
                <a href="home">Home</a>
              </li>
              <li>
                <a href="shop">Shop</a>
              </li>
              <li>
                <a href="blog">Blog</a>
              </li>
              <li>
                <a href="tilawah">Tilawah</a>
              </li>
              <li>
                <a href="webinar">Webinar</a>
              </li>
            </ul>
          </div>
          <div>
            <span className="mr-4">search</span>
            <span>button</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
