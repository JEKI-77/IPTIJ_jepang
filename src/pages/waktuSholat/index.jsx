/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "../../Components/Atoms/Search";
import { FaSearch } from "react-icons/fa";
import dayjs from "dayjs";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import imgMasjid from "../../assets/images/praytime/masjid.jpeg";
import { indonesianDate, indonesianName } from "../../utils/jadwal-sholat";
import { coords } from "../../constants/locations";
import { citiesInJapan } from "../../data/prefecture";

const JadwalSholat = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Tokyo");
  const [search, setSearch] = useState("");
  const [hijriah, setHijriah] = useState("");
  const [MsgNotFound, setMsgNotFound] = useState("");

  // Memformat tanggal
  let d = new Date();
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = d.getFullYear();

  const [jadwalSholat, setJadwalSholat] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [coordinates, setCoordinates] = useState({
    latitude: coords.lat,
    longitude: coords.lng,
  });

  const [today, setToday] = useState(Number(dd));
  const [tanggal, setTanggal] = useState(indonesianDate());
  const [jam, setJam] = useState(indonesianDate(true));
  const [next, setNext] = useState({ name: "-", countDown: 0 });

  // Fetch jadwal sholat
  useEffect(() => {
    // Query string
    const query = new URLSearchParams({
      ...coordinates,
      method: 15,
    });
    const apiURL = `https://api.aladhan.com/v1/timings/${today}-${mm}-${yyyy}?${query}`;

    setLoading(true);
    fetch(apiURL)
      .then((res) => res.json())
      .then(({ data }) => {
        delete data.timings["Sunset"]; // Menghapus waktu sunset, karna Sunset === Maghrib
        setJadwalSholat(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [today, coordinates]);

  // Mengatur waktu tanggal, jam, hari ini.
  useEffect(() => {
    const tId = setTimeout(() => {
      setTanggal(indonesianDate());
      setJam(indonesianDate(true));

      // Sholat berikutnya.
      if (jadwalSholat) {
        if (jadwalSholat.timings) {
          // Mengambil sholat yang waktunya sudah paling dekat
          const times = Object.values(jadwalSholat.timings)
            .map((v) => new Date(`${yyyy}-${mm}-${dd}T${v}`).getTime())
            .map((v, i) => [
              Object.keys(jadwalSholat.timings)[i],
              v - Date.now(),
            ])
            .sort((a, b) => a[1] - b[1])
            .filter((v) => v[1] > 0);

          // Memperbarui tanggal jika jadwal hari ini sudah selesai
          if (times.length === 0) {
            setToday(Number(dd) + 1);
            setTanggal(indonesianDate(false, `${yyyy}-${mm}-${today}`));
          }

          // Mengatur countdown
          const distance = times[0][1];
          const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Memperbarui info sholat berikutnya
          setNext({
            name: times[0][0],
            countDown: `${(hours < 10 ? "0" : "") + hours}:${
              (minutes < 10 ? "0" : "") + minutes
            }:${(seconds < 10 ? "0" : "") + seconds}`,
          });
        }
      }
    }, 1000);

    return () => clearTimeout(tId);
  });

  // Mengatur waktu tanggal, jam, hari ini.
  useEffect(() => {
    const tId = setTimeout(() => {
      setTanggal(indonesianDate());
      setJam(indonesianDate(true));

      // Sholat berikutnya.
      if (jadwalSholat) {
        if (jadwalSholat.timings) {
          // Mengambil sholat yang waktunya sudah paling dekat
          const times = Object.values(jadwalSholat.timings)
            .map((v) => new Date(`${yyyy}-${mm}-${dd}T${v}`).getTime())
            .map((v, i) => [
              Object.keys(jadwalSholat.timings)[i],
              v - Date.now(),
            ])
            .sort((a, b) => a[1] - b[1])
            .filter((v) => v[1] > 0);

          // Memperbarui tanggal jika jadwal hari ini sudah selesai
          if (times.length === 0) {
            setToday(Number(dd) + 1);
            setTanggal(indonesianDate(false, `${yyyy}-${mm}-${today}`));
          }

          // Mengatur countdown
          const distance = times[0][1];
          const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Memperbarui info sholat berikutnya
          setNext({
            name: times[0][0],
            countDown: `${(hours < 10 ? "0" : "") + hours}:${
              (minutes < 10 ? "0" : "") + minutes
            }:${(seconds < 10 ? "0" : "") + seconds}`,
          });
        }
      }
    }, 1000);

    return () => clearTimeout(tId);
  });

  useEffect(() => {
    axios
      .get(
        `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=japan&method=8`
      )
      .then((res) => {
        const responseApi = res.data.data.timings;
        const hijriahDate = res.data.data.date.hijri;
        setHijriah(hijriahDate);
        setData(responseApi);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [city]);

  const cityHandler = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setMsgNotFound("");
  };

  const onClickHandler = () => {
    if (!citiesInJapan.some((city) => city.toLowerCase() === search)) {
      setMsgNotFound("Kota Tidak ditemukan");
    } else {
      setCity(search);
      setSearch("");
    }
  };

  const handleKeyPress = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      if (!citiesInJapan.some((city) => city.toLowerCase() === search)) {
        setMsgNotFound(`Kota Tidak ditemukan`);
      } else {
        setCity(search);
        setSearch("");
      }
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
        className="w-full md:w-[80%] m-auto h-72 md:h-80 rounded-b-2xl -mt-[0.6px] object-fill "
        src={imgMasjid}
        alt="mekah"
      />
      <div className="-mt-[16.6em] md:-mt-72">
        {/* title */}
        <h2 className="text-2xl font-semibold text-gray-200 text-center ">
          {t("waktuSholat")}
        </h2>
        <div className=" text-gray-200 font-semibold mb-8 text-sm  gap-4 flex justify-center items-center">
          <span>{tanggal}</span>
        </div>
      </div>
      {/* countdown */}
      <div className=" w-[90%] -mt-4 md:ml-[15%] flex mx-4 mb-4 text-gray-200 text-sm gap-2">
        <div>
          Berikutnya
          <strong className="text-2xl flex item-center">
            {next.countDown}
          </strong>
          menuju waktu
          <strong className="bg-orange-500 text-white font-bold px-3 rounded-lg">
            {indonesianName(next.name)}
          </strong>
        </div>
      </div>
      <SearchBar
        onKeyPress={handleKeyPress}
        icon={<FaSearch />}
        onChange={cityHandler}
        onClick={onClickHandler}
        placeholder="cari kota"
      />

      <div className="flex gap-3 flex-col w-[80%] md:w-[40%] mt-2 md:mt-8 m-auto">
        <div className=" mt-4 text-center ">
          <h1 className="text-xl text-start text-gray-200 ">
            <span className="font-semibold "> {t("kota")}</span> :
            {search ? MsgNotFound : city}
          </h1>
        </div>
        <div className="bg-slate-50 gap-9 flex  rounded-full px-4 py-2 shadow-md text-gray-800  ">
          <span className=" font-semibold">Subuh </span>
          {data ? data.Fajr : <p>loading...</p>}
        </div>
        <div className="bg-slate-50 gap-12 flex  rounded-full px-4 py-2 shadow-md text-gray-800   ">
          <span className=" font-semibold">Fajar </span> {data.Sunrise}
        </div>
        <div className="bg-slate-50 gap-8 flex  rounded-full px-4 py-2 shadow-md text-gray-800    ">
          <span className=" font-semibold "> Dzuhur</span> {data.Dhuhr}
        </div>
        <div className="bg-slate-50 gap-11 flex  rounded-full px-4 py-2 shadow-md text-gray-800    ">
          <span className=" font-semibold">Ashar</span> {data.Asr}
        </div>
        <div className="bg-slate-50 gap-9 flex  rounded-full px-4 py-2 shadow-md  text-gray-800   ">
          <span className=" font-semibold">Magrib</span> {data.Maghrib}
        </div>
        <div className="bg-slate-50 gap-14 flex  rounded-full px-4 py-2 shadow-md text-gray-800   ">
          <span className=" font-semibold ml-1">Isya</span> {data.Isha}
        </div>
      </div>
    </div>
  );
};

export default JadwalSholat;
