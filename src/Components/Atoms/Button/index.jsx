/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Button = ({ title, ...rest }) => {
  return (
    <div className="bg-cyan-600 text-white text-sm px-4 py-1 rounded-full " >
      <button {...rest}>{title}</button>
    </div>
  );
};

export default Button;
