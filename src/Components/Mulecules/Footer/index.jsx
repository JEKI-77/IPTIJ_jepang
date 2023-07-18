import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import SearchBar from "../../Atoms/Search";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-[rgb(20,53,89)] text-gray-400 h-60 flex justify-evenly  ">
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
          <h2 className="text-xl text-gray-300 mb-4"> Join Bersama Kami</h2>
          <ul className="flex gap-y gap-4 text-xl">
            <li>{<FaInstagram />}</li>
            <li>{<FaFacebookF />}</li>
            <li>{<FiYoutube />}</li>
            <li>{<FaWhatsapp />}</li>
          </ul>

          <SearchBar title="Kirim" placeholder="pertanyaan" />
        </div>
      </div>

      <div className=" flex justify-center bg-[rgb(20,53,89)] text-gray-400 text-sm ">
        <span className="flex text-center">Devloper by jeki saputra</span>
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
