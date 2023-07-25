/* eslint-disable react/jsx-key */
import Card from "../../Components/Atoms/TeamCard";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import icon from "../../assets/icon/personi_icon.png";
const Team = () => {
  const sosmedIcon = [
    [<FaInstagram />, <FaFacebookF />, <FaWhatsapp />, <SlSocialTwitter />],
  ];

  const Profile = [
    {
      id: "1",
      name: "Anonim",
      jabatan: "Ketua ",
      profile: icon,
      sosmed: sosmedIcon,
    },
    {
      id: "2",
      name: "Anonim",
      jabatan: "wakil Ketua ",
      profile: icon,
      sosmed: sosmedIcon,
    },
    {
      id: "3",
      name: "Anonim",
      jabatan: "Sekretaris",
      profile: icon,
      sosmed: sosmedIcon,
    },
    {
      id: "4",
      name: "Anonim",
      jabatan: "Bandahara",
      profile: icon,
      sosmed: sosmedIcon,
    },
    {
      id: "5",
      name: "Anonim",
      jabatan: "Media Informasi",
      profile: icon,
      sosmed: sosmedIcon,
    },
    {
      id: "5",
      name: "Anggota 240 + ",
      profile: icon,
    },
  ];

  return (
    <div className="mt-8 md:w-[90%] m-auto ">
      <div className="ml-5 ">
        <p className="text-3xl ">STRUKTUR</p>
        <p className="mt-4 text-lg">IPTIJ PERIODE 2022 - 2023</p>
      </div>
      {/* <div className="flex justify-center items-center h-screen">
        <p>Halaman dalam pengembangan</p>
      </div> */}
      <ul className=" grid md:grid-cols-4 grid-cols-2 mt-8 ">
        {Profile.map((data, id) => (
          <li key={id}>
            <Card
              img={data.profile}
              title={data.name}
              jabatan={data.jabatan}
              sosmed={data.sosmed}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
