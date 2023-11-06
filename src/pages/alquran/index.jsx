/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Alquran = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useNavigate();

  useEffect(() => {
    axios
      .get(`https://quran-api.santrikoding.com/api/surah`)
      .then((response) => {
        const responseAPI = response.data;
        // const numberAyat = response.data;
        // setNumber(numberAyat);
        setData(responseAPI);
        console.log("nomor ayat", responseAPI);
        setIsLoading(true);
        // console.log("success", responseAPI);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="md:w-[80%] w-[90%] m-auto mb-8">
      <h1 className="font-semibold text-xl mt-10 mb-4  ml-10">Qur'an</h1>
      <ul className="grid md:grid-cols-2 md:gap-8  ">
        {isLoading ? (
          data?.map((info, index) => (
            <div
              onClick={() => router(`/detail/${info.nomor}`)}
              className=" flex justify-between border shadow-sm mb-3 md:mb-0  rounded-xl cursor-pointer h-28 items-center  "
              key={index}
            >
              <li className=" flex w-14 h-full bg-green-600 text-white font-semibold rounded-l-xl items-center justify-center ">
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
          ))
        ) : (
          <p>Loading .... </p>
        )}
      </ul>
    </div>
  );
};

export default Alquran;
