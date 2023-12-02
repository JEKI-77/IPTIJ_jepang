/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "../../Components/Atoms/Search";
import { FaSearch } from "react-icons/fa";
import dayjs from "dayjs";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import imgMekah from "../../assets/images/praytime/mekah.jpg";
import imgMasjid from "../../assets/images/praytime/masjid.jpeg";

const JadwalSholat = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Tokyo");
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [hijriah, setHijriah] = useState("");

  useEffect(() => {
    axios
      .get(
        ` https://api.aladhan.com/v1/timingsByCity?city=${city}&country=japan&method=8`
      )
      .then((res) => {
        const responseApi = res.data.data.timings;
        const date = res.data.data.date.gregorian;
        const hijriahDate = res.data.data.date.hijri;
        setHijriah(hijriahDate);
        setDate(date);
        setData(responseApi);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [city]);

  const cityHandler = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const onClickHandler = () => {
    setCity(search);
  };

  const handleKeyPress = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      setCity(search);
    }
  };

  return (
    <div className=" md:w-[80%]  m-auto mb-8">
      <Helmet>
        <title>IPTIJ | Waktu Sholat Jepang</title>
        <meta
          name="Waktu sholat di jepang dan sekitarnya"
          content="Halaman waktu sholat jepang"
        />
      </Helmet>
      {/* image */}
      <img
        className="w-full md:w-[80%] m-auto md:h-80 rounded-b-2xl -mt-[0.6px] object-cover  "
        src={imgMasjid}
        alt="mekah"
      />
      <div className="-mt-48 md:-mt-72">
        {/* title */}
        <h2 className="text-2xl font-semibold text-gray-200 text-center ">
          {t("waktuSholat")}
        </h2>
        <div className=" text-gray-200 font-semibold mb-8 text-sm  gap-4 flex justify-center items-center">
          <span>{date.date}</span>
        </div>
      </div>

      <SearchBar
        onKeyPress={handleKeyPress}
        icon={<FaSearch />}
        onChange={cityHandler}
        onClick={onClickHandler}
        placeholder="cari kota"
      />

      <div className="flex gap-3 flex-col w-[80%] md:w-[40%] mt-2 md:mt-24 m-auto">
        <div className=" mt-4 text-center ">
          <h1 className="text-xl text-start text-gray-200 ">
            <span className="font-semibold "> {t("kota")}</span> :{" "}
            {city || "Tokyo"}
          </h1>
        </div>
        <div className="bg-slate-50 gap-9 flex  rounded-full px-4 py-3 shadow-md text-gray-800  ">
          <span className=" font-semibold">Subuh </span>{" "}
          {data ? data.Fajr : <p>loading...</p>}
        </div>
        <div className="bg-slate-50 gap-12 flex  rounded-full px-4 py-3 shadow-md text-gray-800   ">
          <span className=" font-semibold">Fajar </span> {data.Sunrise}
        </div>
        <div className="bg-slate-50 gap-8 flex  rounded-full px-4 py-3 shadow-md text-gray-800    ">
          <span className=" font-semibold"> Dzuhur</span> {data.Dhuhr}
        </div>
        <div className="bg-slate-50 gap-11 flex  rounded-full px-4 py-3 shadow-md text-gray-800    ">
          <span className=" font-semibold">Ashar</span> {data.Asr}
        </div>
        <div className="bg-slate-50 gap-9 flex  rounded-full px-4 py-3 shadow-md  text-gray-800   ">
          <span className=" font-semibold">Magrib</span> {data.Maghrib}
        </div>
        <div className="bg-slate-50 gap-14 flex  rounded-full px-4 py-3 shadow-md text-gray-800   ">
          <span className=" font-semibold">Isya</span> {data.Isha}
        </div>
      </div>
    </div>
  );
};

export default JadwalSholat;
