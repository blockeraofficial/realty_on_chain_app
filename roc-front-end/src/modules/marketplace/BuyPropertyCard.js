import { Tether } from "assets/images";
import { DollarStatusIcon } from "assets/svgs";
import { useWeb3 } from "hooks";

const BuyPropertyCard = ({
  onApprove,
  onBuyClick,
  approvedAmount,
  propertyTokens,
  setPropertyToken,
  isLoading,
  loadingType,
}) => {
  const { isConnected } = useWeb3();
  return (
    <div className="border-2 border-rocPurple-800 rounded-2xl">
      <div className="rounded-t-xl w-full h-12 bg-rocPurple-800 flex space-x-2 items-center justify-center">
        <DollarStatusIcon />
        <h6 className="font-bold font-manrope text-2xl text-rocWhite-900">
          Buy Property
        </h6>
      </div>
      <div className="p-4 flex flex-col space-y-6 mb-2">
        <div className="flex justify-center">
          <div className="relative rounded-xl overflow-hidden w-full md:max-w-[880px]">
            <input
              value={propertyTokens}
              onChange={(e) => setPropertyToken(e.target.value)}
              type="number"
              className="w-full p-4 rounded-xl border-2 border-rocPurple-300 focus:outline-none focus:border-rocPurple-300 font-manrope text-rocPurple-300"
              placeholder="TOTAL TO INVEST"
            />
          </div>
        </div>
        <div className="flex space-x-2 items-center">
          {isLoading ? (
            <p className="text-rocPurple-800 font-bold text-xl text-center flex justify-center w-full">
              {loadingType === "approval" ? "Approving ..." : "Minting ..."}
            </p>
          ) : (
            <>
              <button
                className={`font-bold w-full rounded-full py-2 ${
                  isConnected
                    ? "bg-rocBlue-100 text-rocWhite-900 border border-[#1a54da] hover:bg-rocWhite-900 hover:text-rocBlack-100"
                    : "bg-[#808080] text-rocWhite-900 cursor-not-allowed"
                }`}
                onClick={onApprove}
              >
                Approve
              </button>
              <button
                className={`font-bold w-full rounded-full py-2 ${
                  isConnected
                    ? "bg-rocBlue-100 text-rocWhite-900 border border-[#1a54da] hover:bg-rocWhite-900 hover:text-rocBlack-100"
                    : "bg-[#808080] text-rocWhite-900 cursor-not-allowed"
                }`}
                onClick={onBuyClick}
              >
                Buy
              </button>
            </>
          )}
        </div>
        <div className="w-full border-2 border-rocPurple-800 rounded-full relative flex h-[80px]">
          <div className="absolute -top-5 left-14 rounded-full flex space-x-2 items-center px-1 py-1 bg-rocWhite-900 text-rocPurple-800 ">
            <h6 className="text-lg font-bold whitespace-nowrap font-manrope">{`Approved Amount`}</h6>
          </div>
          <div className="px-4 flex justify-center items-center w-full">
            <h6 className="text-rocGreen-800 font-bold text-xl whitespace-nowrap">{`${
              isConnected ? approvedAmount : ""
            }`}</h6>
          </div>
        </div>
        <div className="w-full border-2 border-rocPurple-800 rounded-full relative flex h-[80px]">
          <div className="absolute -top-5 left-20 rounded-full flex space-x-2 items-center px-1 py-1 bg-rocWhite-900 text-rocPurple-800 ">
            <h6 className="text-lg font-bold whitespace-nowrap font-manrope">{`TOKEN PRICE`}</h6>
          </div>
          <div className="rounded-full bg-rocBlue-100 h-[76px] w-[75px] flex justify-center items-center">
            <img src={Tether} alt="tether" className="h-12" />
          </div>
          <div className="px-4 flex justify-center items-center">
            <h6 className="text-rocPurple-800 font-bold text-xl md:text-2xl">{`${10} USDT`}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPropertyCard;
