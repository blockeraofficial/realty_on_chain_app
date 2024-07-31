import { ethers } from "ethers";
import { useWeb3 } from "hooks";
import { StakingWhite } from "assets/svgs";
import { StakingContractCredentials } from "constants/StakingContractCredentials";
import { useState } from "react";

const StakeNow = () => {
  const [value, setValue] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [selected, setSelected] = useState(0);
  const { isConnected, walletProvider, address } = useWeb3();

  const sepoliaOkaneTokenContractAddress =
    StakingContractCredentials[0]["sepoliaOkaneTokenContractAddress"];
  const sepoliaOkaneTokenContractABI =
    StakingContractCredentials[0]["sepoliaOkaneTokenContractABI"];

  const sepoliaStakingContractAddress =
    StakingContractCredentials[0]["sepoliaStakingContractAddress"];
  const sepoliaStakingContractABI =
    StakingContractCredentials[0]["sepoliaStakingContractABI"];

  const gasLimit = 400000;
  const gasPrice = ethers.utils.parseUnits("10", "gwei");

  const connectOkaneTokenContract = async () => {
    const provider = new ethers.providers.Web3Provider(walletProvider);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      sepoliaOkaneTokenContractAddress,
      sepoliaOkaneTokenContractABI,
      signer
    );
    return contract;
  };

  const connectStakingContract = async () => {
    const provider = new ethers.providers.Web3Provider(walletProvider);
    const signer = provider.getSigner();
    const tetherContract = new ethers.Contract(
      sepoliaStakingContractAddress,
      sepoliaStakingContractABI,
      signer
    );
    return tetherContract;
  };

  const fetchOkaneTokenAllowance = async () => {
    const provider = new ethers.providers.Web3Provider(walletProvider);
    const signer = provider.getSigner();
    const tetherContract = new ethers.Contract(
      sepoliaOkaneTokenContractAddress,
      sepoliaOkaneTokenContractABI,
      signer
    );
    let approvedValue = await tetherContract.allowance(
      address,
      sepoliaStakingContractAddress
    );
    approvedValue = parseInt(ethers.utils.formatEther(approvedValue));
    return approvedValue;
  };

  const approveOkaneTokenOnClick = async () => {
    try {
      setLoading(true);
      const approvedValue = await fetchOkaneTokenAllowance();
      if (parseInt(value) > parseInt(approvedValue)) {
        // const provider = new ethers.providers.Web3Provider(walletProvider);
        // const feeData = await provider.getFeeData();
        const okaneTokenContract = await connectOkaneTokenContract();
        const approval = await okaneTokenContract.approve(
          sepoliaStakingContractAddress,
          ethers.utils.parseEther(parseInt(value).toString()),
          { gasLimit, gasPrice }
          // {
          //   maxFeePerGas: new BigNumber(feeData.gasPrice.toString()),
          //   maxPriorityFeePerGas: new BigNumber(
          //     feeData.maxPriorityFeePerGas.toString()
          //   ),
          // }
        );
        await approval.wait();
      }
      const contract = await connectStakingContract();
      const secondParameterToPass = [2592000, 7776000, 15552000, 31557600];
      const staking = await contract.Stake(
        ethers.utils.parseEther(parseInt(value).toString()), // (You need to multiply 10 to the power of 18 probably)
        secondParameterToPass[selected],
        { gasLimit, gasPrice }
      );
      await staking.wait();
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:w-1/2 bg-rocWhite-300 rounded-3xl border-2 border-rocPurple-800 ">
      <div className="bg-rocPurple-800 rounded-t-2xl">
        <h6 className="text-rocWhite-300 text-md md:text-2xl font-bold text-center py-4 font-manrope">
          Stake Now
        </h6>
      </div>
      <div className="flex space-x-2 items-center p-4">
        <div className="bg-rocPurple-800 text-white text-lg flex justify-center items-center h-8 w-8 rounded-full font-manrope">
          1
        </div>
        <h6 className="text-rocPurple-800 text-lg font-manrope">
          Choose Vesting Time
        </h6>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2 w-full px-4">
        {["1 month / 1%", "3 month / 4%", "6 month / 7%", "1 year / 15%"].map(
          (item, index) => (
            <div
              key={index}
              className={`rounded-full w-full py-2 px-1 border-2 border-rocPurple-800 border-opacity-60 text-center text-rocPurple-800 font-bold text-xs font-manrope whitespace-nowrap cursor-pointer ${
                selected === index
                  ? "bg-rocPurple-800 text-rocWhite-900"
                  : "bg-rocWhite-900 text-rocPurple-800 "
              }`}
              onClick={() => setSelected(index)}
            >
              {item}
            </div>
          )
        )}
      </div>
      <div className="flex space-x-2 items-center p-4">
        <div className="bg-rocPurple-800 text-rocWhite-900 text-lg flex justify-center items-center h-8 w-8 rounded-full font-manrope">
          2
        </div>
        <h6 className="text-rocPurple-800 text-lg font-manrope">
          Choose Total Test $ROC to Stake
        </h6>
      </div>
      <div className="px-4 w-full">
        <input
          className="rounded-full w-full py-4 px-8 border-2 border-rocPurple-300 text-rocPurple-300 text-2xl font-manrope [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          placeholder="ENTER AMOUNT TO STAKE"
          value={value}
          onChange={(e) => {
            const inputValue = e.target.value;
            if (/^\d*\.?\d+$/.test(inputValue) || inputValue === "") {
              setValue(inputValue);
            }
          }}
          onWheel={(e) => e.preventDefault()}
          type="number"
        />
      </div>
      <div className="p-4">
        <div className="border-b border-rocPurple-700 pt-6"></div>
        <div className="w-full flex justify-between items-center">
          {["25%", "50%", "75%", "MAX"].map((item, index) => {
            return (
              <div
                className="py-2 px-4 bg-rocPurple-300 text-rocWhite-900 text-center rounded-full -mt-5 font-manrope"
                key={index}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex space-x-2 items-center p-4">
        <div className="bg-rocPurple-800 text-rocWhite-900 text-lg flex justify-center items-center h-8 w-8 rounded-full font-manrope">
          3
        </div>
        <button
          className={`w-full  flex items-center justify-center py-3 rounded-full text-rocWhite-900 ${
            isConnected && value && parseInt(value) > 0
              ? "bg-rocBlue-100 border border-[#1a54da] hover:bg-rocWhite-900 hover:text-rocBlack-100"
              : "bg-[#808080] text-rocWhite-900 cursor-not-allowed pointer-events-none "
          }`}
          onClick={approveOkaneTokenOnClick}
        >
          <div className={`flex items-center space-x-2 `}>
            {/* <StakingWhite /> */}
            <h6
              className={`font-bold text-lg font-manrope`}
            >
              {isLoading ? "Pending ..." : "Stake"}
            </h6>
          </div>
        </button>
      </div>
    </div>
  );
};

export default StakeNow;
