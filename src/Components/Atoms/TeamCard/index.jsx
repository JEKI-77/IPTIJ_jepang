/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const TeamCard = ({ title, img, sosmed, jabatan }) => {
  return (
    <div className=" m-4 text-center  bg-slate-200 shadow-xl rounded-xl">
      <div>
        <img
          className=" h-52 w-full  object-cover rounded-t-xl"
          src={img}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="w-40 bg-gray-100 font-semibold rounded-full mt-2">
          {title}
        </span>
        <div className="bg-blue-300 w-full h-12 mt-3 rounded-b-lg ">
          <span className="w-40  ">{jabatan}</span>
          <span className="flex gap-2 justify-center">{sosmed}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
