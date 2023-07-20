import iptijLogo from "../../../assets/images/logo_iptij.png";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";
import { FiYoutube } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  // const NavbarHandler = (e) => {
  //   e.preventDefault();
  //   const value = e.target.value;
  //   console.log(value);
  // };
  return (
    <div className="bg-[rgb(20,53,89)]   text-gray-200 font-semibold w-full  flex h-24 mb-4 ">
      {/* logo */}
      <div className="mx-4 md:mx-20 w-full items-center flex   ">
        <img
          className="h-20 w-20 object-cover"
          src={iptijLogo}
          alt=""
          srcSet=""
        />
      </div>
      {/* navbar mobile */}
      <nav
        className={`${
          open
            ? "right-0 duration-150 ease-in"
            : "right-[-100%] duration-150 ease-out"
        }  bg-[rgb(20,53,89)] min-h-screen md:hidden flex items-center justify-center absolute w-full z-[999] `}
      >
        <ul
          onClick={() => setOpen(false)}
          className="gap-20 flex flex-col justify-center items-center  -mt-44 "
        >
          <li>
            <a className="hover" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="hover" href="gallery">
              Gallery
            </a>
          </li>
          <li>
            <a className="hover" href="kajian">
              Kajian Islam
            </a>
          </li>
          <li>
            <a className="hover" href="newsjpn">
              Berita
            </a>
          </li>

          <li>
            <a className="hover" href="team">
              Team
            </a>
          </li>
        </ul>
      </nav>
      {/* navbar togle */}
      <div
        className="text-3xl absolute w-[90%] ml-5 m-auto mt-4 md:hidden flex justify-end items-end cursor-pointer z-[999]"
        onClick={() => setOpen(!open)}
      >
        <HiMiniBars3 />
      </div>

      {/* navbar desktop */}
      <div className=" flex items-center justify-end md:m-4 w-full gap-20 md:mr-20  ">
        <nav>
          <ul className="md:flex gap-4 hidden">
            <li className="">
              <a className="hover" href="/">
                Home
              </a>
            </li>
            {/* <li>
              <a className="hover" href="newjpn">
                newjpn
              </a>
            </li> */}
            <li>
              <a className="hover" href="gallery">
                Gallery
              </a>
            </li>
            <li>
              <a className="hover" href="kajian">
                Kajian Islam
              </a>
            </li>
            <li>
              <a className="hover" href="newsindo">
                Berita
              </a>
            </li>

            <li>
              <a className="hover" href="team">
                Team
              </a>
            </li>
          </ul>
        </nav>
        <div>
          {/* sosmed */}
          <div className=" text-xl md:flex hidden ">
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
