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
    <div className="w-[80%] m-auto h-screen mt-8">
      <h2>JadwalSholat</h2>
      <SearchBar onChange={cityHandler} onClick={onClickHandler} title="Cari" />
      <div>
        <h1 className="text-xl"> {city}</h1>
        <div>{date.date}</div>
        <div>{hijriah.date}</div>
        <div>Subuh:{data.Fajr}</div>
        <div>Fajar:{data.Sunrise}</div>
        <div>Dzuhur:{data.Dhuhr}</div>
        <div>Ashar:{data.Asr}</div>
        <div>Magrib:{data.Maghrib}</div>
        <div>Isya:{data.Isha}</div>
      </div>
    </div>
  );
};

export default JadwalSholat;
