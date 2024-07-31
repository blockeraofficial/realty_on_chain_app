import { LocationLight } from "assets/svgs";
import { Status } from "modules/marketplace";
import {
  Area,
  Bedroom,
  Bathroom,
  Question,
  LeftArrow,
  RightArrow,
} from "assets/svgs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MarketCard2 = ({
  id,
  location,
  title,
  type,
  bedrooms,
  bathrooms,
  sqft,
  sqm,
  apr,
  price,
  collected,
  images,
}) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  const onLeftClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (active === 0) {
      setActive(images.length - 1);
    } else {
      setActive(active - 1);
    }
  };
  const onRightClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (active === images.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  const onClickMarket = () => navigate(`/auction`);

  return (
    <div
      className="relative h-[420px] bg-cover rounded-2xl bg-center bg-opacity-70 shadow-inner shadow-blur-md w-full cursor-pointer"
      onClick={onClickMarket}
    >
      <div
        className="h-full w-full bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: `url(${images[active]})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b rounded-2xl from-transparent via-transparent to-rocPurple-100"></div>
      <div className="absolute top-0 left-0 right-0 text-whiteOkane-900">
        <div className="bg-rocPurple-800 bg-opacity-40  rounded-t-2xl space-y-2 p-2">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2 items-center">
              <LocationLight />
              <h6 className="text-white whitespace-nowrap truncate">
                {title}
                {", "}
                {location}
              </h6>
            </div>
            <Status value={type} />
          </div>
          <div className="border-2 border-rocWhite-900 rounded-full w-full flex items-center">
            <div className="flex items-center justify-center space-x-1 border-r-2 border-rocWhite-900 p-1 w-1/3">
              <Bedroom />
              <h6 className="text-white text-xs whitespace-nowrap truncate">{`${bedrooms} BEDROOMS`}</h6>
            </div>
            <div className="flex items-center justify-center space-x-1 border-r-2 border-white p-1 w-1/3">
              <Bathroom />
              <h6 className="text-white text-xs whitespace-nowrap truncate">{`${bathrooms} BATHROOMS`}</h6>
            </div>
            <div className="flex items-center justify-center space-x-1 p-1 w-1/3">
              <Area />
              <h6 className="text-white text-xs whitespace-nowrap truncate">
                {`${sqft}`}m<sup>2</sup>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-2 text-whiteOkane-900">
        <div className="space-y-1 p-2 pb-4">
          <div className="space-x-2 flex items-center">
            <h6 className="font-bold text-md text-rocPurple-800">{`${apr}% APR`}</h6>
            <Question />
          </div>
          <h2 className="text-rocGreen-800 text-4xl font-bold">{`${price} USDT`}</h2>
          <div className="space-y-1">
            <h4 className="text-rocPurple-800 font-bold">{`TOTAL COLLECTED: ${collected}%`}</h4>
            <div className="h-2 rounded-full w-full bg-rocPurple-800">
              <div
                className="h-2 rounded-full bg-rocBlue-100 font-bold"
                style={{ width: `${collected}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <LeftArrow className="cursor-pointer" onClick={onLeftClick} />
        <RightArrow className="cursor-pointer" onClick={onRightClick} />
      </div>
    </div>
  );
};

export default MarketCard2;
