import { SampleLogo } from "assets/images";
import { Oracles } from "assets/svgs";

const OraclesCard = () => {
  return (
    <div className="w-full border-2 border-rocPurple-800 rounded-3xl px-3 py-7 relative flex justify-center items-center">
      <div className="absolute -top-4 rounded-full flex space-x-2 items-center px-1 py-1 bg-rocWhite-900 text-rocPurple-800 ">
        <Oracles />
        <h6 className="text-lg font-bold whitespace-nowrap font-manrope">{`ORACLES`}</h6>
      </div>
      <div className="flex space-x-2 justify-center items-center">
        <div className="relative border border-rocPurple-800 rounded-2xl">
          <div className="absolute flex justify-center items-center w-full mt-2">
            <button className="border-none outline-none font-manrope px-4 py-2 text-sm rounded-3xl bg-rocPurple-800 text-rocWhite-900 whitespace-nowrap">
              Management
            </button>
          </div>
          <img src={SampleLogo} alt="sample" className="rounded-3xl mt-8" />
        </div>
        <div className="relative border border-rocPurple-800 rounded-2xl">
          <div className="absolute flex justify-center items-center w-full mt-2">
            <button className="border-none outline-none font-manrope px-4 py-2 text-sm rounded-3xl bg-rocPurple-800 text-rocWhite-900 whitespace-nowrap">
              Legal
            </button>
          </div>
          <img src={SampleLogo} alt="sample" className="rounded-3xl mt-8" />
        </div>
      </div>
    </div>
  );
};

export default OraclesCard;
