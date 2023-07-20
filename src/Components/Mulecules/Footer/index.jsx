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
    <div className="bg-[rgb(20,53,89)] flex flex-col  ">
      <div className=" text-gray-400 md:flex md:justify-evenly justify-between m-4 bg-gray-500 w-full grid grid-cols-4 ">
        <div className="flex flex-col gap-2 mt-8">
          <h2 className="text-xl text-gray-300 mb-4">Kontak</h2>
          <p>Tokyoto, Meguro, nichome 2-3</p>
          <p>No Hp: 08383833</p>
          <p>Email: iptij@gmail.com</p>
        </div>
        <div className="flex flex-col gap-2 mt-8">
          <h2 className="text-xl text-gray-300 mb-4">Tentang kami</h2>
          <p>Tentang kami</p>
          <p>Tentang kami</p>
        </div>

        <div className="md:flex flex-col mt-8 gap-4  bg-slate-100    ">
          <h2 className="text-xl text-gray-300 mb-4">Sosial Media</h2>
          <ul className="flex  gap-4 text-xl ">
            <li>{<FaInstagram />}</li>
            <li>{<FaFacebookF />}</li>
            <li>{<FiYoutube />}</li>
            <li>{<FaWhatsapp />}</li>
          </ul>
        </div>
        <div className="mt-8 md:flex md:flex-col gap-4 col-span-2 ">
          <h2 className="text-center text-xl text-gray-300">Our Newlatter</h2>
          <p>Dapatkan Informasi Terbaru Kami</p>
          <SearchBar title="Kirim" placeholder="pertanyaan" />
        </div>
      </div>
      {/* copyright */}
      <div className=" md:flex mt-20 md:justify-center  bg-[rgb(20,53,89)] text-gray-300 text-[14px] h-14 bg-slate-600 ">
        <div>
          <span className="flex items-center justify-center ">
            <span className="mr-1">
              <AiOutlineCopyrightCircle />
            </span>
            Copyright IPTIJ 2023{" "}
          </span>
          <span className="flex text-center ">
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
