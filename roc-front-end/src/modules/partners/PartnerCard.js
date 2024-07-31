import React from "react";
import { Browser } from "assets/svgs";

const PartnerCard = ({
  logo,
  name,
  description,
  partner_since,
  website_url,
}) => {
  return (
    <div className="p-4 bg-rocWhite-300 space-y-6 rounded-2xl">
      <div className="bg-rocWhite-900 w-full py-8 px-2 flex justify-center items-center rounded-2xl">
        <img src={logo} alt={name} className="object-fill h-8 w-25" />
      </div>
      <h4 className="text-rocPurple-800 text-2xl font-bold font-manrope">
        {name}
      </h4>
      <p className="text-lg font-light text-rocPurple-800 text-justify h-64 lg:h-[400px] xl:h-72 font-manrope">
        {description}
      </p>
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h6 className="font-manrope">{`Partner Since : ${partner_since}`}</h6>
        </div>
        <a href={website_url} target="_blank" rel="noopener noreferrer">
          <div className="rounded-full px-4 py-1 flex space-x-2 items-center bg-rocPurple-300 text-rocWhite-900 border border-[#1a54da] hover:bg-rocWhite-900 hover:text-rocBlack-100">
            <h6 className="font-manrope font-bold whitespace-nowrap">
              View More
            </h6>
          </div>
        </a>
      </div>
    </div>
  );
};


export default PartnerCard;
