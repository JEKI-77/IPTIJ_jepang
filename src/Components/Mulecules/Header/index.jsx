import iptijLogo from "../../../assets/images/logo_iptij.png";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";
import { FiYoutube } from "react-icons/fi";
import { useState } from "react";
import Sosmed from "../../Atoms/Sosmed";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[rgb(20,53,89)] text-gray-200 font-semibold box-border flex ">
      {/* logo */}
      <div className="mx-4 md:mx-20 w-full items-center flex   ">
        <img
          className="h-14 md:h-20 md:w-20 m-2 w-14 z-[999] object-cover"
          src={iptijLogo}
          alt=""
          srcSet=""
        />
      </div>
      {/* navbar mobile */}
      <nav
        className={`${
          open
            ? "right-0 animate__animated animate__fadeInRight "
            : "right-[-100%] hidden duration-500"
        }   bg-[rgb(20,53,89)] md:hidden flex items-center justify-center absolute w-full z-[999] h-screen   mt-[4.4em]`}
      >
        <ul
          onClick={() => setOpen(false)}
          className="gap-16 flex flex-col justify-center items-center -mt-52 "
        >
          <li>
            <a className="hover" href="/">Home</a>
          </li>
          <li>
            <a className="hover" href="/gallery">Gallery</a>
          </li>
          <li>
            <a className="hover" href="/jadwalsholat">Jadwal Sholat</a>
          </li>
          <li>
            <a className="hover" href="/kajian">News</a>
          </li>
          <li>
            <a className="hover" href="/team">Team</a>
          </li>
        </ul>
      </nav>
      <div className="flex md:hidden ">
        <Sosmed />
      </div>

      {/* navbar toggle */}
      <div
        className="text-3xl absolute ml-[85%] m-auto md:hidden flex justify-end mt-5 cursor-pointer z-[999] text-white "
        onClick={() => setOpen(!open)}
      >
        <HiMiniBars3 />
      </div>

      {/* navbar desktop */}
      <div className=" md:flex hidden items-center justify-end md:m-4 w-full gap-20 md:mr-20  ">
        <nav className="flex justify-center items-center">
          <ul className="md:flex gap-3 ">
            <li>
              <a className="hover" href="/">Home</a>
            </li>
            <li>
              <a className="hover" href="/gallery">Gallery</a>
            </li>
            <li>
              <a className="hover" href="/jadwalsholat">Jadwal Sholat</a>
            </li>
            <li>
              <a className="hover" href="/kajian">News</a>
            </li>
            <li>
              <a className="hover" href="/team">Team</a>
            </li>
          </ul>
        </nav>

        <div className="md:flex hidden ">
          <Sosmed />
        </div>
      </div>
    </div>
  );
};

export default Header;
