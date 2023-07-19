/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import React from "react";
import { IoEyeSharp } from "react-icons/io5";

const Card2 = ({ image, tanggal, judul }) => (
  <div className="bg-slate-100 h-full rounded-xl mt-4  mb-4 flex items-center shadow-md   ">
    <img
      className="h-72 w-72 m-2 object-cover rounded-t-xl"
      src={image}
      alt="Gambar Berita"
    />
    <div className="m-4">
      <h2 className="text-xl cursor-pointer font-semibold text-cyan-700 ">
        {judul}
      </h2>

      <span className="text-lg text-gray-600  flex md:flex-row flex-col sm:items-center items-start  gap-2 ">
        {dayjs(tanggal).format("DD MMMM YYYY")} |<IoEyeSharp />
        230 Views
      </span>
    </div>
  </div>
);

export default Card2;
