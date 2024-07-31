import { Tether } from "assets/images";
import { Home, LocationLight, Document, Briefcase } from "assets/svgs";

const AuctionCard = ({ name, image, location, price, owned, percentage }) => {
  return (
    <div className="relative h-80 bg-cover rounded-2xl bg-center bg-opacity-70 shadow-inner shadow-blur-md w-full">
      <div
        className="h-full w-full bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b rounded-2xl from-transparent via-transparent to-rocPurple-100"></div>
      <div className="absolute top-0 left-0 right-0 text-whiteOkane-900">
        <div className="bg-rocPurple-800 bg-opacity-80 rounded-t-2xl space-y-1 p-2">
          <div className="flex flex-col items-center justify-between space-y-2">
            <div className="flex space-x-2 items-center">
              <LocationLight />
              <h6 className="text-rocWhite-900 font-manrope">{location}</h6>
            </div>
            <div className="flex space-x-2 items-center">
              <Home />
              <h6 className="text-rocWhite-900 font-manrope">
                {`Property ${name}`}
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-2 text-whiteOkane-900">
        <div className="space-y-1 p-2 pb-4">
          <div className="flex space-x-2 items-center">
            <h2 className="text-rocPurple-800 font-bold text-center text-3xl whitespace-nowrap">{`VALUE :`}</h2>
            <div className="flex space-x-1 items-center">
              <img src={Tether} alt="tether" className="h-8" />
              <h2 className="text-rocPurple-800 font-bold text-center text-3xl whitespace-nowrap">{`${price}`}</h2>
            </div>
          </div>

          <div className="border-2 border-rocPurple-800 rounded-full w-full flex items-center">
            <div className="flex items-center justify-center space-x-1 border-r-2 border-rocPurple-800 p-1 w-1/2">
              <Document />
              <h6 className="text-rocPurple-800 text-xs font-bold font-manrope">
                {owned}
              </h6>
            </div>
            <div className="flex items-center justify-center space-x-1 p-1 w-1/2">
              <Briefcase />
              <h6 className="text-rocPurple-800 text-xs font-bold font-manrope">
                {percentage}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
