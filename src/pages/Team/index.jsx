/* eslint-disable react/jsx-key */
import Card from "../../Components/Atoms/TeamCard";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";

const Team = () => {
  const sosmedIcon = [
    [<FaInstagram />, <FaFacebookF />, <FaWhatsapp />, <SlSocialTwitter />],
  ];

  const iconProfile = [<CgProfile />];

  const Profile = [
    {
      id: "1",
      name: "Anonim",
      jabatan: "Ketua ",
      profile: iconProfile,
      sosmed: sosmedIcon,
    },
    {
      id: "2",
      name: "Anonim",
      jabatan: "Ketua ",
      profile: iconProfile,
      sosmed: sosmedIcon,
    },
    {
      id: "3",
      name: "Anonim",
      jabatan: "Wakil Ketua",
      profile: iconProfile,
      sosmed: sosmedIcon,
    },
    {
      id: "4",
      name: "Anonim",
      jabatan: "Sekretaris",
      profile: iconProfile,
      sosmed: sosmedIcon,
    },
    {
      id: "5",
      name: "Anonim",
      jabatan: "Bandahara",
      profile: iconProfile,
      sosmed: sosmedIcon,
    },
    {
      id: "6",
      name: "Anonim",
      jabatan: "Ketua ",
      profile: iconProfile,
      sosmed: sosmedIcon,
    },
  ];

  return (
    <div className="mt-8 md:w-[90%] m-auto ">
      <div className="ml-5 ">
        <p className="text-3xl ">STRUKTUR</p>
        <p className="mt-4 text-lg">IPTIJ PERIODE 2022 - 2023</p>
      </div>

      <ul className=" grid md:grid-cols-4 grid-cols-2 mt-8 ">
        {Profile.map((data) => (
          <li key={data.id}>
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
