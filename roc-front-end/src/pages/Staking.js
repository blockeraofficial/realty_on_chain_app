import {
  ConfigurationWrapper,
  StatisticCard,
  Title,
  LoadingContainer,
} from "components";
import { BuyRocToken } from "assets/svgs";
import {
  StakeNow,
  TokenPrices,
  TotalValue,
  YourStakedROC,
} from "modules/staking";
import { useEffect, useState } from "react";
import { useWeb3 } from "hooks";
import { StakingContractCredentials } from "constants/StakingContractCredentials";
import { ethers } from "ethers";

const convertAndFormatDate = (seconds) => {
  const newData = new Date(seconds * 1000);
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formattedDate = newData.toLocaleDateString("en-GB", options);
  return formattedDate;
};

const StakingPage = () => {
  const { isConnected, address, walletProvider } = useWeb3();
  const [yourStakings, setYourStakings] = useState([]);
  const [statistics, setStatistics] = useState({
    totalRewardValue: "",
    totalStakers: "",
    totalValueLocked: "",
    totalROCGenerated: "",
  });
  const [isLoading, setLoading] = useState(false);

  const sepoliaStakingContractAddress =
    StakingContractCredentials[0]["sepoliaStakingContractAddress"];
  const sepoliaStakingContractABI =
    StakingContractCredentials[0]["sepoliaStakingContractABI"];

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

  const fetchStakingStatistics = async () => {
    try {
      setLoading(true);
      const contract = await connectStakingContract();
      const dashboardStatistics = await contract.returnDashboardStatistics();
      setStatistics({
        totalRewardValue: parseInt(
          ethers.utils.formatEther(dashboardStatistics[0])
        ),
        totalStakers: parseInt(dashboardStatistics[1].toString()),
        totalValueLocked: parseInt(
          ethers.utils.formatEther(dashboardStatistics[2])
        ),
        totalROCGenerated: ethers.utils.formatEther(dashboardStatistics[3]),
      });
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const fetchStakedIds = async () => {
    try {
      setLoading(true);
      const contract = await connectStakingContract();
      let stakedIds = await contract.getOwnerStakeIds(address);
      stakedIds = stakedIds.map((item) => parseInt(item.toString()));
      const yourstakingData = [];
      for (let i = 0; i < stakedIds.length; i++) {
        const stakeId = stakedIds[i];
        const stakedData = await contract.getStakeDetails(stakeId);
        yourstakingData.push({
          id: stakeId,
          isReedeemed: stakedData?.is_reedemed,
          amount: parseInt(ethers.utils.formatEther(stakedData?.amount)),
          rate: parseInt(
            ethers.utils.formatEther(stakedData?.rate) * Math.pow(10, 18)
          ),
          totalPayout: ethers.utils.formatEther(stakedData?.total_payout),
          dateAdded: convertAndFormatDate(
            parseInt(
              ethers.utils.formatEther(stakedData?.date_added) *
                Math.pow(10, 18)
            )
          ),
          lockedDate: convertAndFormatDate(
            parseInt(
              ethers.utils.formatEther(stakedData?.locked_date) *
                Math.pow(10, 18)
            )
          ),
          reedeemDate: convertAndFormatDate(
            parseInt(
              ethers.utils.formatEther(stakedData?.reedem_date) *
                Math.pow(10, 18)
            )
          ),
          canUnstake:
            new Date(
              parseInt(
                ethers.utils.formatEther(stakedData?.reedem_date) *
                  Math.pow(10, 18)
              ) * 1000
            ) <= new Date(),
        });
      }
      setYourStakings(yourstakingData);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isConnected && address) {
      fetchStakingStatistics();
      fetchStakedIds();
    }
    /* eslint-disable-next-line */
  }, [isConnected, address]);

  return (
    <LoadingContainer
      isLoading={isLoading}
      isError={false}
      errorMessage={"Error loading staking data"}
    >
      <div className="space-y-6 p-1">
        <div className="flex justify-center md:justify-between items-center">
        <Title
          className={"text-center md:text-left pt-2"}
        >STAKING
        </Title>
        {/* 
          <div className="rounded-full py-2 px-4 bg-rocBlue-100 items-center space-x-2 hidden md:flex text-white cursor-pointer hover:bg-rocWhite-900 hover:text-rocBlack-100">
            <img src={BuyRocToken} alt="roc" className="h-6" />
            <h6 className="font-manrope">BUY ROC</h6>
          </div>
        */}
        </div>
      
        <ConfigurationWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatisticCard
              title={"TOTAL TEST ROC REWARD POOL"}
              value={`${statistics.totalRewardValue}`}
            />
            <StatisticCard
              title={"TOTAL TEST STAKERS"}
              value={`${statistics.totalStakers}`}
            />
            <StatisticCard
              title={"TVL (TOTAL TEST VALUE LOCKED)"}
              value={`$${parseFloat(statistics.totalValueLocked * 0.07).toFixed(
                2
              )}`}
            />
            <StatisticCard
              title={"TOTAL TEST $ROC GENERATED"}
              value={`${statistics.totalROCGenerated}`}
            />
          </div>
          <div className="flex space-x-4">
            <StakeNow />
            <TotalValue />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <Title className={"py-3"}>{`TOKEN PRICES`}</Title>
          </div>
          <TokenPrices />
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <Title className={"py-3"}>{`YOUR STAKED TEST $ROC`}</Title>
          </div>
          <YourStakedROC yourStakings={yourStakings} />
        </ConfigurationWrapper>
      </div>
    </LoadingContainer>
  );
};

export default StakingPage;
