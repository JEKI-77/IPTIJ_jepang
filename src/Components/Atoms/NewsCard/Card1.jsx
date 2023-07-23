/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import React from "react";
import { IoEyeSharp } from "react-icons/io5";

const Card1 = ({ image, tanggal, judul, description }) => (
  <div className="bg-slate-300 md:h-[30rem] h-62 rounded-xl ">
    <img
      className="md:h-72 w-full  h-62   object-cover justify-center items-center rounded-t-xl"
      src={image}
      alt="Gambar Berita"
    />
    <div className="m-4">
      <span className="text-lg text-gray-600  flex md:flex-row flex-col sm:items-center items-start  gap-2 ">
        {dayjs(tanggal).format("DD MMMM YYYY HH:mm")}
      </span>
      <h2 className="md:text-xl text-[14px] cursor-pointer font-semibold line-clamp-3   ">
        {judul}{" "}
      </h2>

      <p className="text-xl cursor-pointer font-semibold ">{description}</p>
    </div>
    <span className=" ml-4 cursor-pointer text-cyan-900 font-semibold text-lg hover:text-amber-600">
      Readmore >>{" "}
    </span>
  </div>
);

export default Card1;
