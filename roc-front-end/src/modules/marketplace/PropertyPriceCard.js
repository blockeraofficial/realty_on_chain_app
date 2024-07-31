import { PropertyDollar, PropertyPrice, Question } from "assets/svgs";

const PropertyPriceCard = ({ price, irr, apr, collected }) => {
  return (
    <div className="w-full border-2 border-rocPurple-800 rounded-3xl px-3 py-7 relative flex justify-center items-center">
      <div className="absolute -top-4 rounded-full flex space-x-2 items-center px-1 py-1 bg-rocWhite-300 text-rocPurple-800 ">
        <PropertyPrice />
        <h6 className="text-lg font-bold whitespace-nowrap font-manrope">{`PROPERTY PRICE`}</h6>
      </div>
      <div className="space-y-4">
        <div className="flex space-x-2 items-center justify-between">
          <h6 className="text-4xl font-bold text-rocGreen-800">
            {`${price || 0}`}
          </h6>
          <PropertyDollar />
        </div>
        <div className="flex space-x-2 items-center justify-between">
          <div className="flex space-x-2 items-center">
            <h6 className="font-bold font-manrope text-xl text-rocPurple-800">
              {`${apr || 0}% APR`}
            </h6>
            <Question />
          </div>
          <div className="flex space-x-2 items-center">
            <h6 className="font-bold font-manrope text-xl text-rocPurple-800">
              {`${irr || 0}% IRR`}
            </h6>
            <Question />
          </div>
        </div>
        <div className="space-y-1">
          <h4 className="text-rocPurple-800 font-bold">{`TOTAL COLLECTED: ${
            collected || 0
          }%`}</h4>
          <div className="h-2 rounded-full w-full bg-black">
            <div
              className="h-2 rounded-full bg-rocBlue-100 font-bold"
              style={{ width: `${collected || 0}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPriceCard;
