import React from "react";
import { Browser, Broadcast } from "assets/svgs";

const OracleCard = ({ logo, name, description, website_url }) => {
  return (
    <div className="p-4 bg-rocWhite-300 space-y-6 rounded-2xl font-manrope w-full">
      <div className="flex flex-col md:flex-row space-x-0 space-y-4 md:space-y-4 md:space-x-4 h-full">
        <div className="space-y-4 w-full md:w-full flex flex-col justify-between">
          <div className="bg-rocWhite-900 h-64 w-full p-1 flex justify-center items-center rounded-2xl mb-4">
            <img src={logo} alt={name} className="w-32" />
          </div>
          <a href={website_url} target="_blank" rel="noopener noreferrer">
            <div className="text-white border border-[#1a54da] rounded-full px-4 py-2 space-x-2 items-center flex justify-center bg-rocBlue-100 hover:bg-rocWhite-900 hover:text-rocBlack-100">
            {/*  <Browser /> */}
              <h6>View More</h6>
            </div>
          </a>
        </div>
        <div className="w-full h-full flex flex-col justify-between">
          <div className="space-y-4">
            <h4 className="text-rocPurple-800 text-2xl font-bold">{name}</h4>
            <p className="text-md font-light text-rocPurple-800 text-justify">
              {description}
            </p>
          </div>
          <div className="flex justify-end w-full mb-4">
            <div className="flex justify-center items-center space-x-2 border border-rocGreen-800 bg-rocGreen-200 rounded-full px-2 py-1">
              <Broadcast />
              <h6 className="text-rocGreen-800 text-md">ONLINE</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OracleCard;
