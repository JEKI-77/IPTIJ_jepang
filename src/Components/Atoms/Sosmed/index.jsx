import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const Sosmed = () => {
  return (
    <div className=" text-2xl flex mr-20 items-center justify-center ">
      <ul className="flex gap-4 items-center">
        <a href="https://api.whatsapp.com/send?phone=817016675994">
          <li>{<FaWhatsapp />}</li>
        </a>
        <a href="https://www.youtube.com/channel/UC5ZtHfwzGqnA6KHR1Vxn4aQ">
          <li>{<FiYoutube />}</li>
        </a>
        <a href="https://www.facebook.com/iptij.official">
          <li>{<FaFacebookF />}</li>
        </a>
        <a href="https://www.instagram.com/iptij.store/">
          <li>{<FaInstagram />}</li>
        </a>
      </ul>
    </div>
  );
};

export default Sosmed;
