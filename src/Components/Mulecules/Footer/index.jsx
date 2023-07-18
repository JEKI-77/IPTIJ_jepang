import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import SearchBar from "../../Atoms/Search";

const Footer = () => {
  return (
    <div className="bg-[rgb(20,53,89)] ">
      <div className=" text-gray-400 h-60 flex justify-evenly ">
        <div className="flex flex-col gap-2 mt-8">
          <h2 className="text-xl text-gray-300 mb-4">Alamat</h2>
          <p>Tokyoto, Meguro, nichome 2-3</p>
          <p>No Hp: 08383833</p>
          <p>Email: iptij@gmail.com</p>
        </div>
        <div className="flex flex-col gap-2 mt-8">
          <h2 className="text-xl text-gray-300 mb-4">Tentang kami</h2>
          <p>Tentang kami</p>
          <p>Tentang kami</p>
        </div>
        <div className="flex flex-col mt-8 gap-4 items-center">
          <h2 className="text-xl text-gray-300 mb-4">Sosial Media</h2>
          <ul className="flex gap-y gap-4 text-xl">
            <li>{<FaInstagram />}</li>
            <li>{<FaFacebookF />}</li>
            <li>{<FiYoutube />}</li>
            <li>{<FaWhatsapp />}</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-col gap-4 ">
          <h2 className="text-center text-xl text-gray-300">Our Newlatter</h2>
          <p>Dapatkan Informasi Terbaru Kami</p>
          <SearchBar title="Kirim" placeholder="pertanyaan" />
        </div>
      </div>

      <div className=" flex justify-center  bg-[rgb(20,53,89)] text-gray-300 text-[14px] h-14">
        <div>
          <span className="flex items-center justify-center ">
            <span className="mr-1">
              <AiOutlineCopyrightCircle />
            </span>
            Copyright IPTIJ 2023{" "}
          </span>
          <span className="flex text-center">
            Devloper by <span className="text-cyan-500 mx-1">Deki Saputra</span>
            | 1.1 version{" "}
          </span>
        </div>

        <div className="flex items-center ml-4 cursor-pointer">
          <FaLinkedin
            link
            rel="stylesheet"
            href="https://www.linkedin.com/in/jeki-saputra-ab6069274/"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
