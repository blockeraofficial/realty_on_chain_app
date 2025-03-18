import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { okaneContractCredentials } from "constants/OkaneContractCredentials.js";
import {
  ConfigurationWrapper,
  LoadingContainer,
  StatisticCard,
  Title,
} from "components";
import { Properties, Transactions, Earnings } from "modules/dashboard";
import { Verified } from "assets/svgs";
import { useWeb3 } from "hooks";

const DashboardPage = () => {
  const { isConnected, address, walletProvider } = useWeb3();
  const [accountNfts, setAccountNfts] = useState([]);
  const [usdtBalance, setUsdtBalance] = useState();
  const [accountBalance, setAccountBalance] = useState();
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const contract_address =
    okaneContractCredentials[0]["sepoliaContractAddress"];

  const fetchNFTsByCollectionAndPerson = async (
    network,
    wallet,
    collection
  ) => {
    let nfts;
    const api_key = process.env.REACT_APP_ALCHEMY_API_KEY;
    const baseURL = `https://eth-${network}.g.alchemy.com/v2/${api_key}/getNFTs/`;
    var requestOptions = {
      method: "GET",
    };

    const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;
    nfts = await fetch(fetchURL, requestOptions)
      .then((data) => data.json())
      .then((response) => response.ownedNfts);
    setAccountNfts(nfts);
  };

  const fetchUsdtBalance = async () => {
    try {
      const sepoliaTetherContractAddress =
        okaneContractCredentials[0]["sepoliaTetherContractAddress"];

      const sepoliaTetherContractABI =
        okaneContractCredentials[0]["sepoliaTetherContractABI"];

      const provider = new ethers.providers.Web3Provider(walletProvider);
      const signer = provider.getSigner();
      const tetherContract = new ethers.Contract(
        sepoliaTetherContractAddress,
        sepoliaTetherContractABI,
        signer
      );
      const accountUsdt = await tetherContract.balanceOf(address);
      setUsdtBalance(
        Math.floor(parseInt(accountUsdt._hex, 16) * Math.pow(10, -18))
      );
    } catch (error) {
      console.log("error came while fetchUsdtBalance", error);
    }
  };
  const fetchSepoliaEthBalance = async () => {
    try {
      const balance = await walletProvider.request({
        method: "eth_getBalance",
        params: [address, "latest"],
      });
      setAccountBalance((parseInt(balance, 16) * Math.pow(10, -18)).toFixed(2));
    } catch (error) {
      console.log("error came while fetchSepoliaEthBalance", error);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        await fetchNFTsByCollectionAndPerson(
          "sepolia",
          address,
          contract_address
        );
        await fetchUsdtBalance();
        await fetchSepoliaEthBalance();
        setLoading(false);
      } catch (error) {
        console.log("error", error);
        setError(true);
        setLoading(false);
      }
    };
    if (isConnected && address) {
      fetchAllData();
    }

    /* eslint-disable-next-line */
  }, [isConnected, address]);

  return (
    <LoadingContainer
      isLoading={loading}
      isError={isError}
      errorMessage={"Error loading, please try again later"}
    >
      <div className="space-y-4 p-1 pb-10">
        <div className="flex justify-center md:justify-between items-center">
          <Title className={"py-3"}>{`DASHBOARD`}</Title>
          <div className="hidden md:flex border-2 border-rocBlue-100 rounded-full py-1 px-2 space-x-2  items-center justify-center bg-rocBlue-100 text-rocWhite-900">
            <Verified />
            <h6 className="text-sm font-manrope">VERIFIED</h6>
          </div>
        </div>
        <ConfigurationWrapper>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatisticCard
                title={"TOTAL TEST ETH BALANCE"}
                value={`${accountBalance || 0}`}
              />
              <StatisticCard
                title={"TOTAL TEST USDT BALANCE"}
                value={`${usdtBalance || 0}`}
              />
              <StatisticCard title={"TOTAL TEST ROC BALANCE"} value={`${0}`} />
              <StatisticCard
                title={"YOUR PROPERTIES"}
                value={accountNfts?.length || 0}
              />
            </div>
            <Properties accountNfts={accountNfts} />
            <Earnings />
            <Transactions />
          </div>
        </ConfigurationWrapper>
      </div>
    </LoadingContainer>
  );
};

export default DashboardPage;
