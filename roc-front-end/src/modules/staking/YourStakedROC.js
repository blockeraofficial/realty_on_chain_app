import { rocPurpleLogo } from "assets/images";

const YourStakedROC = ({ yourStakings }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {yourStakings?.map((item) => (
        <div
          key={item}
          className="bg-rocWhite-300 rounded-2xl w-full h-64 flex flex-col justify-between p-6"
        >
          <div className="flex space-x-3">
            <div className="bg-rocWhite-900 rounded-full flex justify-center items-center h-12 w-12 shadow-sm">
              <img src={rocPurpleLogo} alt="website-logo" className="h-8" />
            </div>
            <div className="">
              <h6 className="text-rocPurple-800 text-sm">Stake start</h6>
              <h6 className="text-md font-bold text-rocPurple-800">
                {item.dateAdded}
              </h6>
              <h6 className="text-rocPurple-800 text-sm">Stake end</h6>
              <h6 className="text-md font-bold text-rocPurple-800">
                {item.reedeemDate}
              </h6>
              <h6 className="text-rocPurple-700 text-lg">
                Available to Unstake
              </h6>
              <h6 className="text-rocPurple-800 text-xl font-bold">
                Staking APR {`${item.rate}%`}
              </h6>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div>
              <h6>Staked</h6>
              <h6 className="font-bold">{item.amount} TEST ROC</h6>
            </div>
            <button
              className={`border-none outline-none rounded-full px-4 py-1 text-white ${
                !item.canUnstake
                  ? "bg-[#808080] text-rocWhite-900 cursor-not-allowed"
                  : "bg-rocPurple-800"
              }`}
            >
              Unstake
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YourStakedROC;
