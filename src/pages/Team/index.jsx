/* eslint-disable react/jsx-key */
import React from "react";
import Card from "../../Components/Atoms/TeamCard";
import image from "../../assets/images/bannerbg.jpg";
import ketua from "../../assets/images/ketua.jpg";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import TeamIT from "../../assets/images/TeamIT.jpg";

const Team = () => {
  const sosmedIcon = [
    [<FaInstagram />, <FaFacebookF />, <FaWhatsapp />, <SlSocialTwitter />],
  ];

  const Profile = [
    {
      id: "1",
      name: "Deki Saputra",
      jabatan: "Team IT",
      image: TeamIT,
      sosmed: sosmedIcon,
    },
    {
      id: "2",
      name: "Ahmad Putra",
      jabatan: "Ketua Umum",
      image: ketua,
      sosmed: sosmedIcon,
    },
    {
      id: "3",
      name: "Budiyuno",
      jabatan: "Wakil Ketua",
      image: image,
      sosmed: sosmedIcon,
    },
    {
      id: "4",
      name: "Angel Putri",
      jabatan: "Sekretaris",
      image: image,
      sosmed: sosmedIcon,
    },
    {
      id: "5",
      name: "Angel Putri",
      jabatan: "Bandahara",
      image: image,
      sosmed: sosmedIcon,
    },
    {
      id: "6",
      name: "Angel Putri",
      jabatan: "Ketua Umum",
      image: image,
      sosmed: sosmedIcon,
    },
    {
      id: "7",
      name: "Angel Putri",
      jabatan: "Ketua Umum",
      image: image,
      sosmed: sosmedIcon,
    },
    {
      id: "8",
      name: "Angel Putri",
      jabatan: "Ketua Umum",
      image: image,
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
              img={data.image}
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
