import iptijLogo from "../../../assets/images/logo_iptij.png";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const Header = () => {
  // const update = (e) => {
  //   e.preventDefault();
  //   const value = e.target.value;
  //   console.log(value);
  // };
  return (
    <div className="bg-[rgb(20,53,89)] text-gray-200 font-semibold w-full flex h-24 mb-4 ">
      {/* logo */}
      <div className="mx-20">
        <img
          className="h-20 w-20 object-cover"
          src={iptijLogo}
          alt=""
          srcSet=""
        />
      </div>

      {/* navbar */}
      <div className=" flex items-center justify-end m-4 w-full gap-20 mr-20 ">
        <nav>
          <ul className="flex gap-4">
            <li className="">
              <a className="hover" href="home">
                Home
              </a>
            </li>
            <li>
              <a className="hover" href="gallery">
                Gallery
              </a>
            </li>
            <li>
              {/* <select className="bg-[rgb(20,53,89)]" name="" id=""> */}

              <a className="hover" href="update">
                Berita
              </a>
            </li>
            <li>
              <a className="hover" href="contact">
                Team
              </a>
            </li>
            <li>
              <a className="hover" href="shop">
                Shop
              </a>
            </li>
          </ul>
        </nav>
        <div>
          {/* sosmed */}
          <div className=" text-xl flex">
            <ul className="flex gap-4 items-center">
              <li>{<FaInstagram />}</li>
              <li>{<FaFacebookF />}</li>
              <li>{<FiYoutube />}</li>
              <li>{<FaWhatsapp />}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
