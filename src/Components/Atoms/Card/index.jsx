/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Card = ({ title, img }) => {
  return (
    <div className="bg-white m-2 p-4">
      <div>
        <img className="w-40 h-40 object-contain" src={img} alt="" />
      </div>
      <p className="w-40">{title}</p>
    </div>
  );
};

export default Card;
