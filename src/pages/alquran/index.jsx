/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useEffect, useState } from "react";

const Alquran = () => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState("");

  useEffect(() => {
    axios
      .get(`https://quran-api.santrikoding.com/api/surah/${number}`)
      .then((response) => {
        const responseAPI = response.data;
        const numberAyat = response.data
        setNumber(numberAyat);
        setData(responseAPI);
        console.log("nomor ayat", numberAyat);
        // console.log("success", responseAPI);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const detailAyatHandler = (e) => {
    e.preventDefault();
    console.log(number);
  };

  return (
    <div className="w-[80%] m-auto">
      <h1 className="font-semibold text-lg mt-10 ml-10">Qur'an</h1>
      <ul className="grid md:grid-cols-2 md:gap-8  ">
        {data.map((info, index) => (
          <div
            onClick={detailAyatHandler}
            className=" flex justify-between border shadow-sm mb-3 md:mb-0  rounded-xl cursor-pointer"
            key={index}
          >
            <li className=" flex w-14 bg-green-600 text-white font-semibold rounded-l-xl items-center justify-center">
              {info.nomor}
            </li>
            <li className="flex flex-col  text-start w-full ml-4">
              <span className="text-md font-semibold text-green-600">
                {info.nama_latin}
              </span>
              <span className="font-semibold text-sm mb-2"> {info.arti}</span>
              <span>{info.jumlah_ayat} ayat </span>
              <span>surah {info.tempat_turun}</span>
            </li>
            <li className="text-end mr-2 mt-4 font-semibold w-20 ">
              {info.nama}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Alquran;
