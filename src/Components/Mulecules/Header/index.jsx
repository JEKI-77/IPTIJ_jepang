import iptijLogo from "../../../assets/images/logo_iptij.png";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import Button from "../../Atoms/Button";

const Header = () => {
  return (
    <div className="bg-[#f4f8fb] w-full flex h-24 ">
      {/* logo */}
      <div className="mx-8">
        <img
          className="h-20 w-20 object-cover"
          src={iptijLogo}
          alt=""
          srcSet=""
        />
      </div>

      {/* navbar */}
      <div className=" flex items-center justify-end m-4 w-full gap-20 ">
        <nav>
          <ul className="flex gap-4">
            <li className="">
              <a className="hover" href="home">
                Home
              </a>
            </li>
            <li>
              <a className="hover" href="blog">
                Blog
              </a>
            </li>
            <li>
              <a className="hover" href="tilawah">
                Tilawah
              </a>
            </li>
            <li>
              <a className="hover" href="webinar">
                Webinar
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
            <div className="ml-8">
              <Button title="Sign in" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
