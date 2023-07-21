/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import React from "react";
import { IoEyeSharp } from "react-icons/io5";

const Card2 = ({ image, tanggal, judul, description }) => (
  <div className="bg-slate-100 rounded-xl flex  items-center shadow-md   ">
    <img
      className="md:h-52 md:w-40 w-28 h-32   object-cover rounded-xl"
      src={image}
      alt="Gambar Berita"
    />
    <div className="m-4 flex flex-col">
      <h2 className="md:text-xl text-[14px] cursor-pointer font-semibold text-gray-800  ">
        {judul}
      </h2>
      <p className="text-xl cursor-pointer font-semibold ">{description}</p>

      <span className="md:text-lg text-sm text-gray-600  flex md:flex-row flex-col sm:items-center items-start  gap-2 ">
        {dayjs(tanggal).format("DD MMMM YYYY HH:mm")} WIB
      </span>
    </div>
  </div>
);

export default Card2;
