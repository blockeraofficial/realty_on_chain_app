import { ethers } from "ethers";
import { Desktop } from "assets/svgs";
import { Bedroom, Bathroom, YearBuilt, Area } from "assets/svgs/property";
import { LoadingContainer, Title } from "components";
import { useMarketPlace, useWeb3 } from "hooks";
import {
  Slider,
  Map,
  Financials,
  SaleTimer,
  PropertyPriceCard,
  BuyPropertyCard,
  OraclesCard,
  EventsCard,
  Documents,
  VideoPreview,
} from "modules/marketplace";
import { useParams } from "react-router-dom";
import { okaneContractCredentials } from "../constants/OkaneContractCredentials";
import { useEffect, useState } from "react";
import { DamacLogo } from "assets/images";

const imageURL1 =
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww";

const MarketPlaceDetailPage = () => {
  const [approvedAmount, setApprovedAmount] = useState();
  const [propertyTokens, setPropertyToken] = useState();
  const [isLoading, setLoading] = useState(false);
  const [loadingType, setLoadingType] = useState("");
  const params = useParams();
  const { nfts } = useMarketPlace();
  const { isConnected, walletProvider, address } = useWeb3();
  const marketplaceDetail = nfts.find((item) => item?.tokenId === params?.id);

  const sepoliaContractAddress =
    okaneContractCredentials[0]["sepoliaContractAddress"];
  const sepoliaContractABI = okaneContractCredentials[0]["sepoliaContractABI"];
  const sepoliaTetherContractAddress =
    okaneContractCredentials[0]["sepoliaTetherContractAddress"];
  const sepoliaTetherContractABI =
    okaneContractCredentials[0]["sepoliaTetherContractABI"];
  const gasLimit = 60000;

  useEffect(() => {
    if (isConnected && address) {
      fetchAllowance();
    }
    /* eslint-disable-next-line */
  }, [isConnected, address]);

  const connectOkaneContract = async () => {
    const provider = new ethers.providers.Web3Provider(walletProvider);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      sepoliaContractAddress,
      sepoliaContractABI,
      signer
    );
    return contract;
  };

  const connectTetherContract = async () => {
    const provider = new ethers.providers.Web3Provider(walletProvider);
    const signer = provider.getSigner();
    const tetherContract = new ethers.Contract(
      sepoliaTetherContractAddress,
      sepoliaTetherContractABI,
      signer
    );
    return tetherContract;
  };

  const approveOnClick = async () => {
    try {
      setLoading(true);
      setLoadingType("approval");
      const tetherContract = await connectTetherContract();
      const approval = await tetherContract.approve(
        okaneContractCredentials[0]["sepoliaContractAddress"],
        ethers.utils.parseEther((propertyTokens * 10).toString()),
        { gasLimit }
      );
      await approval.wait();
      await fetchAllowance();
      setLoading(false);
      setLoadingType("");
    } catch (e) {
      setLoading(false);
      setLoadingType("");
      console.log(e);
    }
  };

  const buyPropertyTokensOnClick = async () => {
    try {
      setLoading(true);
      setLoadingType("buy");
      const contract = await connectOkaneContract();
      const minting = await contract.mint(
        propertyTokens,
        window.location.href.slice(-1)
      );
      await minting.wait();
      setLoading(false);
      setLoadingType("");
    } catch (e) {
      setLoading(false);
      setLoadingType("");
      console.log(e);
    }
  };

  const fetchAllowance = async () => {
    const sepoliaContractAddress =
      okaneContractCredentials[0]["sepoliaContractAddress"];
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
    let approvedValue = await tetherContract.allowed(
      address,
      sepoliaContractAddress
    );
    approvedValue = parseInt(ethers.utils.formatEther(approvedValue));
    setApprovedAmount(`USDT ${approvedValue} (${approvedValue / 10} tokens)`);
  };

  return (
    <LoadingContainer
      isLoading={false}
      isError={false}
      errorMessage={"Error loading marketplace details data"}
    >
      <div className="flex flex-col lg:flex-row space-x-4 py-2">
        <div className="h-full w-full lg:w-[68%] space-y-8">
          <div className="hidden lg:flex justify-between items-center">
            <Title>DETAILS</Title>
            <h6 className="font-bold text-5xl font-prompt text-rocPurple-800">
              <img
                src={DamacLogo}
                alt={"Damac"}
                className="object-fill h-4.5 w-auto"
              />
            </h6>
          </div>
          <Slider
            title={marketplaceDetail?.title}
            location={marketplaceDetail?.location}
            images={marketplaceDetail?.images || [imageURL1]}
            type={marketplaceDetail?.type}
            hideTopBar
          />
          <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-2 space-y-6 lg:space-y-0 items-center">
            <div className="w-full border-2 border-rocPurple-800 rounded-xl px-3 py-7 relative flex justify-center items-center">
              <div className="absolute -top-4 rounded-3xl flex space-x-2 items-center px-8 lg:px-2 py-1 bg-rocPurple-800 text-rocWhite-900 ">
                <h6 className="text-sm lg:text-lg font-bold whitespace-nowrap font-manrope">{`BEDROOMS`}</h6>
              </div>
              <div className="flex space-x-2 items-center p-1 justify-center">
                <Bedroom />
                <h6 className="text-rocPurple-800 font-bold text-lg">{`${
                  marketplaceDetail?.bedrooms || 0
                }`}</h6>
              </div>
            </div>
            <div className="w-full border-2 border-rocPurple-800 rounded-xl px-3 py-7 relative flex justify-center items-center">
              <div className="absolute -top-4 rounded-3xl flex space-x-2 items-center px-8 lg:px-2 py-1 bg-rocPurple-800 text-rocWhite-900 ">
                <h6 className="text-sm lg:text-lg font-bold whitespace-nowrap font-manrope">{`BATHROOMS`}</h6>
              </div>
              <div className="flex space-x-2 items-center p-1 justify-center">
                <Bathroom />
                <h6 className="text-rocPurple-800 font-bold text-lg">{`${
                  marketplaceDetail?.bathrooms || 0
                }`}</h6>
              </div>
            </div>
            <div className="w-full border-2 border-rocPurple-800 rounded-xl px-3 py-7 relative flex justify-center items-center">
              <div className="absolute -top-4 rounded-3xl flex space-x-2 items-center px-8 lg:px-2 py-1 bg-rocPurple-800 text-rocWhite-900 ">
                <h6 className="text-sm lg:text-lg font-bold whitespace-nowrap font-manrope">{`AREA`}</h6>
              </div>
              <div className="flex space-x-2 items-center p-1 justify-center">
                <Area />
                <h6 className="text-rocPurple-800 font-bold text-lg whitespace-nowrap">
                  {`${marketplaceDetail?.area} sqft`}
                </h6>
              </div>
            </div>
            <div className="w-full border-2 border-rocPurple-800 rounded-xl px-3 py-7 relative flex justify-center items-center">
              <div className="absolute -top-4 rounded-3xl flex space-x-2 items-center px-8 lg:px-2 py-1 bg-rocPurple-800 text-rocWhite-900 ">
                <h6 className="text-sm lg:text-lg font-bold whitespace-nowrap font-manrope">{`YEAR BUILT`}</h6>
              </div>
              <div className="flex space-x-2 items-center p-1 justify-center">
                <YearBuilt />
                <h6 className="text-rocPurple-800 font-bold text-lg">{`${
                  marketplaceDetail?.yearBuilt || 2024
                }`}</h6>
              </div>
            </div>
          </div>
          <div className="block lg:hidden space-y-4">
            <SaleTimer variant="secondary" />
            <PropertyPriceCard
              apr={marketplaceDetail?.apr}
              price={marketplaceDetail?.price}
              irr={marketplaceDetail?.irr}
              percentage={marketplaceDetail?.percentage}
              collected={marketplaceDetail?.collected}
            />
            <BuyPropertyCard
              onApprove={approveOnClick}
              onBuyClick={buyPropertyTokensOnClick}
              approvedAmount={approvedAmount}
              propertyTokens={propertyTokens}
              setPropertyToken={setPropertyToken}
              isLoading={isLoading}
              loadingType={loadingType}
            />
            <OraclesCard />
            <Documents />
          </div>
          <div className="rounded-2xl space-y-4 font-manrope">
            {marketplaceDetail?.description?.map((item, index) => {
              return (
                <p
                  key={index}
                  className="text-lg font-light text-rocPurple-800 text-justify"
                >
                  {item}
                </p>
              );
            })}
          </div>
          <VideoPreview url={marketplaceDetail?.videoURL} />
          <Financials property={marketplaceDetail} />
          <Map lat={marketplaceDetail?.lat} lng={marketplaceDetail?.lng} />
          <div className="w-full flex lg:hidden items-center space-x-4 justify-center rounded-2xl bg-rocPurple-700 bg-opacity-50 py-6 px-4">
            <Desktop />
            <h6 className="text-white font-bold text-xl font-manrope">
              View more on desktop
            </h6>
          </div>
        </div>
        <div className="hidden lg:block h-full w-full  lg:w-[32%] space-y-6">
          <SaleTimer variant="secondary" />
          <PropertyPriceCard
            apr={marketplaceDetail?.apr}
            price={marketplaceDetail?.price}
            irr={marketplaceDetail?.irr}
            percentage={marketplaceDetail?.percentage}
            collected={marketplaceDetail?.collected}
          />
          <BuyPropertyCard
            onApprove={approveOnClick}
            onBuyClick={buyPropertyTokensOnClick}
            approvedAmount={approvedAmount}
            propertyTokens={propertyTokens}
            setPropertyToken={setPropertyToken}
            isLoading={isLoading}
            loadingType={loadingType}
          />
          <OraclesCard />
          <EventsCard property={marketplaceDetail} />
          <Documents />
        </div>
      </div>
    </LoadingContainer>
  );
};

export default MarketPlaceDetailPage;
