import iptijLogo from "../../../assets/images/logo_iptij.png";
import { HiMiniBars3 } from "react-icons/hi2";
// import { FiYoutube } from "react-icons/fi";
import { useEffect, useState } from "react";
import Sosmed from "../../Atoms/Sosmed";
import { Link } from "react-router-dom";
import ReactGa from "react-ga";
import DarkMode from "../Darkmode";
import HomeIcon from "../../../assets/icon/home.png";
import GalleryIcon from "../../../assets/icon/Gallery.png";
import PrayTimeIcon from "../../../assets/icon/prayTime.png";
import NewsIcon from "../../../assets/icon/news.png";
// import AlquranIcon from "../../../assets/icon/al-quran.png";
// import CurrencyIcon from "../../../assets/icon/currency.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);

    // darkmode
    isChecked
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  };

  const TRAKING_ID = "G-JT6Q77YK8E";
  ReactGa.initialize(TRAKING_ID);

  useEffect(() => {
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div
      className={` text-gray-200 font-semibold box-border flex  ${
        isChecked ? "  dark " : "bg-[rgb(20,53,89)]"
      }`}
    >
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
          className="gap-16 grid grid-cols-2 items-center -mt-52  "
        >
          <li className="hover bg-white ">
            <Link to="/">
              <img className="w-14 h-14" src={HomeIcon} alt="" srcSet="" />
              <p className="text-[0.8em] text-center"> Home </p>
            </Link>
          </li>
          <li className="hover  bg-white ">
            <Link to="/gallery">
              <img className="w-14 h-14" src={GalleryIcon} alt="" srcSet="" />
              <p className="text-[0.8em] text-center"> Gallery </p>
            </Link>
          </li>
          <li className="hover  bg-white ">
            <Link to="/waktuSholatjepang">
              <img className="w-14 h-14" src={PrayTimeIcon} alt="" srcSet="" />
              <p className="text-[0.7em] text-center">Waktu Sholat</p>
            </Link>
          </li>
          <li className="hover  bg-white ">
            <Link to="/news">
              <img className="w-14 h-14" src={NewsIcon} alt="" srcSet="" />
              <p className="text-[0.8em] text-center">News</p>
            </Link>
          </li>
          {/* <li className="hover">
            <Link to="">
              <img className="w-14 h-14" src={AlquranIcon} alt="" srcSet="" />
              <p className="text-[0.8em] text-center">Alquran</p>
            </Link>
          </li>
          <li className="hover">
            <Link to="">
              <img className="w-14 h-14" src={CurrencyIcon} alt="" srcSet="" />
              <p className="text-[0.8em] text-center">Currency</p>
            </Link>
          </li> */}
          {/* <li>
            <Link className="hover" to="/team">
              Team
            </Link>
          </li> */}
        </ul>
      </nav>
      <div className="flex md:hidden items-center justify-center  ">
        <Sosmed />
      </div>

      {/* navbar toggle */}
      <div
        className="text-3xl absolute ml-[85%] m-auto md:hidden flex justify-end mt-5 cursor-pointer z-[999] text-white flex-col "
        onClick={() => setOpen(!open)}
      >
        <HiMiniBars3 />
        <DarkMode isChecked={isChecked} handleToggle={handleToggle} />
      </div>

      {/* navbar desktop */}
      <div className=" md:flex hidden items-center justify-end md:m-4 w-full gap-20 md:mr-20  ">
        <nav className="flex justify-center items-center">
          <ul className="md:flex gap-3 ">
            <li>
              <Link className="hover" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="whitespace-nowrap ">
              <Link className="hover " to="/waktuSholatjepang">
                Waktu Sholat
              </Link>
            </li>
            <li>
              <Link className="hover" to="/news">
                News
              </Link>
            </li>

            {/* <li>
              <Link className="hover" to="/team">
                Team
              </Link>
            </li> */}
          </ul>
        </nav>

        <div className="md:flex hidden ">
          <Sosmed />
          <DarkMode isChecked={isChecked} handleToggle={handleToggle} />
        </div>
      </div>
    </div>
  );
};

export default Header;
