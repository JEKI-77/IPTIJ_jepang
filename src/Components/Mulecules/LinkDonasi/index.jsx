import Link from "../../Atoms/Link";
import { LiaDonateSolid } from "react-icons/lia";
import { MdAppRegistration } from "react-icons/md";
const LinkDonasi = () => {
  return (
    <div className="mt-16 flex flex-col text-justify gap-4  ">
      <div className="flex  flex-col gap-2 mt-4 m-auto">
        <a href="https://api.whatsapp.com/send?phone=817016675994">
          <Link
            icon={<LiaDonateSolid />}
            backgroundColor="#0057e7"
            title="Donasi Untuk Dakwah IPTIJ"
          />
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSPvjh8Z2A4szaH5ZSUzPe-MQG2xjNAqWAj6u1MPnUq8G41A/viewform">
          <Link
            icon={<MdAppRegistration />}
            backgroundColor="#d62d20"
            title="Daftar menjadi pengurus"
          />
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScFI8vy-jE82vp1m5vjH-UbLsUL_OaCFs3BsZk_QftN-XhpJw/viewform">
          <Link
            icon={<MdAppRegistration />}
            backgroundColor="#ffa700"
            title="Registrasi Tahsin"
          />
        </a>
      </div>
    </div>
  );
};

export default LinkDonasi;
