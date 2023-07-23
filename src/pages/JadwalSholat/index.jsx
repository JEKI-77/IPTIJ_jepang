import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import SearchBar from "../../Components/Atoms/Search";

const JadwalSholat = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Tokyo");
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [hijriah, setHijriah] = useState("");

  useEffect(() => {
    axios
      .get(
        ` http://api.aladhan.com/v1/timingsByCity?city=${city}&country=japan&method=8`
      )
      .then((res) => {
        const responseApi = res.data.data.timings;
        const date = res.data.data.date.gregorian;
        const hijriahDate = res.data.data.date.hijri;
        setHijriah(hijriahDate);
        setDate(date);
        setData(responseApi);
        console.log("tanggal", responseApi);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [city]);

  const cityHandler = (e) => {
    const value = e.target.value;
    setSearch(value);
    console.log(value);
  };

  const onClickHandler = () => {
    setCity(search);
    console.log("result", city);
  };

  return (
    <div className="w-[80%] m-auto mb-8 mt-8">
      <h2 className="text-3xl font-semibold text-gray-700  text-center ">
        Jadwal Sholat Jepang
      </h2>
      <div className=" text-gray-600 mb-8 text-sm  gap-4 flex justify-center items-center">
        <span>M {date.date}</span>
        <span>H {hijriah.date}</span>
      </div>

      <SearchBar onChange={cityHandler} onClick={onClickHandler} title="Cari" />
      <div className="flex gap-3 flex-col">
        <div className=" mt-4 text-center">
          <h1 className="text-xl">
            <span className="font-semibold"> Kota</span> : {city || "Tokyo"}
          </h1>
        </div>
        <div className="bg-slate-100  rounded-full px-4 py-3 shadow-md  ">
          <span className=" font-semibold">Subuh </span> {data.Fajr}
        </div>
        <div className="bg-slate-100  rounded-full px-4 py-3 shadow-md  ">
          <span className=" font-semibold">Fajar </span> {data.Sunrise}
        </div>
        <div className="bg-slate-100  rounded-full px-4 py-3 shadow-md  ">
          <span className=" font-semibold"> Dzuhur</span> {data.Dhuhr}
        </div>
        <div className="bg-slate-100  rounded-full px-4 py-3 shadow-md  ">
          <span className=" font-semibold">Ashar</span> {data.Asr}
        </div>
        <div className="bg-slate-100  rounded-full px-4 py-3 shadow-md  ">
          <span className=" font-semibold">Magrib</span> {data.Maghrib}
        </div>
        <div className="bg-slate-100  rounded-full px-4 py-3 shadow-md  ">
          <span className=" font-semibold">Isya</span> {data.Isha}
        </div>
      </div>
    </div>
  );
};

export default JadwalSholat;
