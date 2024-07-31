import { BedroomDark, BathroomDark } from "assets/svgs";
import SaleTimer from "./SaleTimer";
import PropertyPriceCard from "./PropertyPriceCard";
import { useNavigate } from "react-router-dom";

const PropertDetail = ({
  id,
  price,
  apr,
  irr,
  bedrooms,
  bathrooms,
  area,
  collected,
}) => {
  const navigator = useNavigate();
  const handleNavigate = () => navigator(`/property/${id}`);
  return (
    <>
      <SaleTimer />
      <PropertyPriceCard
        price={price}
        apr={apr}
        irr={irr}
        collected={collected}
      />
      <button
        className="outline-none py-5 px-6 text-center text-rocWhite-900 bg-rocBlue-100 w-full rounded-full font-bold font-prompt text-3xl border border-[#1a54da] hover:bg-rocWhite-900 hover:text-rocBlack-100"
        onClick={handleNavigate}
      >
        BUY NOW
      </button>
      <div className="flex space-x-2">
        <div className="w-1/3 border border-rocPurple-800 rounded-2xl">
          <h6 className="rounded-t-2xl bg-rocPurple-800 text-rocWhite-900 w-full font-bold text-xs p-1 text-center whitespace-nowrap">
            BEDROOMS
          </h6>
          <div className="flex space-x-2 items-center p-2 justify-center">
            <BedroomDark />
            <h6 className="text-rocPurple-800 font-bold whitespace-nowrap">
              {bedrooms || 0}
            </h6>
          </div>
        </div>
        <div className="w-1/3 border border-rocPurple-800 rounded-2xl">
          <h6 className="rounded-t-2xl bg-rocPurple-800 text-rocWhite-900 w-full font-bold text-xs p-1 text-center">
            BATHROOMS
          </h6>
          <div className="flex space-x-2 items-center p-2 justify-center">
            <BathroomDark />
            <h6 className="text-rocPurple-800 font-bold whitespace-nowrap">
              {bathrooms || 0}
            </h6>
          </div>
        </div>
        <div className="w-1/3 border border-rocPurple-800 rounded-2xl">
          <h6 className="rounded-t-2xl bg-rocPurple-800 text-rocWhite-900 w-full font-bold text-xs p-1 text-center whitespace-nowrap">
            AREA
          </h6>
          <div className="flex space-x-2 items-center p-2 justify-center">
            <h6 className="text-rocPurple-800 font-bold whitespace-nowrap">
              {`${area || 0}`}m<sup>2</sup>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertDetail;
