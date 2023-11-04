import iptijLogo from "../../../assets/images/logo_iptij.png";
import { HiMiniBars3 } from "react-icons/hi2";
// import { FiYoutube } from "react-icons/fi";
import { useEffect, useState } from "react";
import Sosmed from "../../Atoms/Sosmed";
import { Link } from "react-router-dom";
import ReactGa from "react-ga";

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
      {/* darkmode */}
      <label className="flex items-center space-x-2 cursor-pointer mr-8">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            onChange={handleToggle}
          />
          <div
            className={`w-10 h-5 rounded-full shadow-inner ${
              isChecked ? " bg-black " : "bg-gray-400"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                isChecked ? "translate-x-6" : "translate-x-0 "
              }`}
            />
          </div>
        </div>
      </label>
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
          className="gap-16 flex flex-col justify-center items-center -mt-52  "
        >
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
          <li>
            <Link className="hover" to="/waktuSholatjepang">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
