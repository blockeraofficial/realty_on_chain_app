import React from "react";

const Title = ({ children, className }) => {
  return (
    <h1
      className={`font-bold font-prompt text-3xl md:text-2xl lg:text-4xl text-center text-rocPurple-800 ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
