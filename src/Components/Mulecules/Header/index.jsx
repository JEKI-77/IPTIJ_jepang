/* eslint-disable react/no-unescaped-entities */
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
import AlquranIcon from "../../../assets/icon/quran.png";
import { useTranslation } from "react-i18next";
import TranslateSelect from "../../Atoms/TranslateSelect";
// import CurrencyIcon from "../../../assets/icon/currency.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [language, setLanguage] = useState("id");
  const { t, i18n } = useTranslation();

  function changeLanguage(e) {
    const code = e.target.value;
    console.log(code);

    if (i18n.language !== code) {
      i18n.changeLanguage(code);
      setLanguage(code);
    }
  }

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

  //translate

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
        }   bg-[rgb(20,53,89)] md:hidden flex items-center justify-center absolute w-full z-[999] h-screen mt-[4.4em]`}
      >
        <span className="absolute ml-52 h-full mt-20 z-[999] mb-20">
          <TranslateSelect
            language={language}
            changeLanguage={changeLanguage}
          />
        </span>
        <ul
          onClick={() => setOpen(false)}
          className="gap-8 grid grid-cols-3 -mt-48"
        >
          <li className="hover bg-white ">
            <Link to="/">
              <img className="w-14 h-14" src={HomeIcon} alt="" srcSet="" />
              <p className="text-[0.8em] text-center">{t("home")}</p>
            </Link>
          </li>
          <li className="hover  bg-white ">
            <Link to="/gallery">
              <img className="w-14 h-14" src={GalleryIcon} alt="" srcSet="" />
              <p className="text-[0.8em] text-center"> {t("Gallery")} </p>
            </Link>
          </li>
          <li className="hover bg-white z-[999]">
            <Link to="/waktuSholatjepang">
              <img className="w-14 h-14" src={PrayTimeIcon} alt="" srcSet="" />
              <p className="text-[0.7em] text-center">{t("waktuSholat")} </p>
            </Link>
          </li>
          <li className="hover  bg-white ">
            <Link to="/news">
              <img className="w-14 h-14" src={NewsIcon} alt="" srcSet="" />
              <p className="text-[0.8em] text-center">{t("news")}</p>
            </Link>
          </li>
          <li className="hover  bg-white w-full">
            <Link to="/alquran">
              <img className="w-14 h-14 " src={AlquranIcon} alt="" srcSet="" />
              <p className="text-[0.8em] text-center">{t("Quran")}</p>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex md:hidden items-center justify-center  ">
        <DarkMode isChecked={isChecked} handleToggle={handleToggle} />
        <Sosmed />
      </div>

      {/* navbar toggle */}
      <div
        className="text-3xl absolute ml-[85%] m-auto md:hidden flex justify-end mt-5 cursor-pointer z-[999] text-white flex-col "
        onClick={() => setOpen(!open)}
      >
        <HiMiniBars3 />
      </div>

      {/* navbar desktop */}
      <div className=" md:flex hidden items-center justify-end md:m-4 w-full gap-20 md:mr-20  ">
        <nav className="flex justify-center items-center ">
          <ul className="md:flex gap-3 ">
            <li className="whitespace-nowrap">
              <Link className="hover" to="/">
                {t("home")}
              </Link>
            </li>
            <li className="whitespace-nowrap">
              <Link className="hover" to="/gallery">
                {t("Gallery")}
              </Link>
            </li>
            <li className="whitespace-nowrap ">
              <Link className="hover " to="/waktuSholatjepang">
                {t("waktuSholat")}
              </Link>
            </li>
            <li className="whitespace-nowrap">
              <Link className="hover" to="/news">
                {t("news")}
              </Link>
            </li>
            <li className="whitespace-nowrap">
              <Link className="hover" to="/Alquran">
                {t("Quran")}
              </Link>
            </li>
          </ul>{" "}
        </nav>

        <div className="md:flex hidden ">
          <Sosmed />
          <DarkMode isChecked={isChecked} handleToggle={handleToggle} />
          <TranslateSelect
            language={language}
            changeLanguage={changeLanguage}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
