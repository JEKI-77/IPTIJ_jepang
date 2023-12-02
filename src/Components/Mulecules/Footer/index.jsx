import { FaLinkedin } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import SearchBar from "../../Atoms/Search";
import Sosmed from "../../Atoms/Sosmed";
import { BsSend } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[rgb(20,53,89)]  grid grid-cols-4 md:grid-cols-10 justify-center  ">
      <div className=" gap-2 mt-8 col-span-2 m-auto ml-10 ">
        <h2 className="md:text-xl text-lg text-gray-300  mb-4">
          {t("footer.kontak")}
        </h2>
        <div className="text-gray-400 text-md ">
          <p className="text-[0.9em] md:text-[1em]  ">{t("footer.alamat")}</p>
          {/* <p>No Hp: 08383833</p> */}
          <p>{t("footer.email")}</p>
        </div>
      </div>

      <div className="gap-2 mt-8 col-span-2 md:col-span-2 m-auto  ">
        <h2 className="md:text-xl text-lg  text-gray-300 mb-4">
          {t("footer.tentangKami")}
        </h2>
        <div className="text-gray-400  text-md ">
          <p className="text-center">{t("footer.anggota")}</p>
          <p className="text-center">{t("footer.aktivitas")}</p>
        </div>
      </div>

      <div className="mt-8 gap-4  col-span-4 md:col-span-2 m-auto ">
        <h2 className="text-xl text-center text-gray-300 mb-4">
          {t("footer.sosialMedia")}
        </h2>
        <div className=" text-gray-300 text-center ml-20">
          <Sosmed />
        </div>
      </div>

      <div className="md:mt-8 mt-4 gap-4 col-span-4 md:col-span-4  w-[90%] m-auto  ">
        <h2 className="text-center text-xl text-gray-300 m-4 ">
          {t("footer.buletinkami")}
        </h2>
        <p className="text-gray-400 text-center m-2 text-sm md:text-md">
          {t("footer.info")}
        </p>
       <div className="w-full flex justify-center items-center">
       <SearchBar
          icon={<BsSend />}
          title="Kirim"
          placeholder={t("footer.masukanEmail")}
        />
       </div>
      </div>

      {/* copyright */}
      <div className=" mt-20 bg-[rgb(20,53,89)] text-gray-300 text-[14px] h-14  col-span-4 md:col-span-12 m-auto  ">
        <div>
          <span className="flex items-center justify-center text-sm ">
            <span className="mr-1">
              <AiOutlineCopyrightCircle />
            </span>
            Copyright IPTIJ 2023{" "}
          </span>

          <span className="text-center flex text-[12px] md:text-sm">
            Devloper by Deki Saputra <p className="text-cyan-500 mx-1"> </p>{" "}
            <a
              className=" cursor-pointer items-center flex"
              rel="stylesheet"
              href="https://www.linkedin.com/in/jeki-saputra-ab6069274/"
            >
              <FaLinkedin />
            </a>
            <span className="ml-2">| 1.1 version</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
