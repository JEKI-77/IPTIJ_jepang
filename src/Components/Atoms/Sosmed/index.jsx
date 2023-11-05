import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const Sosmed = () => {
  return (
    <div className=" text-2xl flex mr-20 items-center justify-center ">
      <ul className="flex gap-4 items-center">
        <a href="https://www.youtube.com/channel/UC5ZtHfwzGqnA6KHR1Vxn4aQ">
          <li>{<FiYoutube />}</li>
        </a>
        <a href="https://www.facebook.com/iptij.official">
          <li>{<FaFacebookF />}</li>
        </a>
        <a href="https://instagram.com/iptij.official?igshid=ejA4dGhwaW5nc2Vv">
          <li>{<FaInstagram />}</li>
        </a>
        <a href="mailto:iptijofficial22@gmail.com">
          <li>{<AiOutlineMail />}</li>
        </a>
      </ul>
    </div>
  );
};

export default Sosmed;
