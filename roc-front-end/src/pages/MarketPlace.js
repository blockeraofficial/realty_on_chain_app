import { MarketCard, MarketCard2, Banner, Slider } from "modules/marketplace";
import PropertDetail from "modules/marketplace/PropertyDetail";
import { LoadingContainer } from "components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMarketPlace } from "hooks";

const { Title } = require("components");

const imageURL1 =
  "https://dubai-property.investments/uploads/images/2023-02/42.jpg";

const image1URL2 =
  "https://www.propertyfinder.ae/property/3e3ecce855bb4597333ea8486114b1ff/1312/894/MODE/546fc2/10750709-858f3o.webp?ctr=ae";
const image1URL3 =
  "https://www.propertyfinder.ae/property/1c1aa36461e1bb02bda127e8fd1bc3e6/1312/894/MODE/43e3ac/10750709-2d861o.webp?ctr=ae";

const imageURL2 =
  "https://www.arabianbusiness.com/cloud/2022/11/09/Burj-Binghatti-2-922x1024.jpg";

const image2URL2 =
  "https://boulevard.co/wp-content/uploads/2023/06/jacob-co-residences-living-1.png";

const image2URL3 =
  "https://static.propsearch.ae/dubai-locations/burj-binghatti_xl356_xl.jpg";

const imageURL3 =
  "https://www.binghatti.com/wp-content/uploads/2022/09/mbr-mbl-Banner.png";

const image3URL2 =
  "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/515525284.webp?k=50fb899e8e1b948371a96cafd65fa2b941a7f66bce9bf41a9494b83c5b0ef74a&o=";

const image3URL3 =
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/368810282.jpg?k=65fd9aab6540d4da55f6ca5d5eb686cd04ada4a9a7063bb71910c713c4056733&o=&hp=1";

const auctionMarketplaces = [
  {
    id: 1,
    type: "SOLD",
    title: "Binghatti Crescent",
    location: "Dubai",
    images: [imageURL1, image1URL2, image1URL3],
    bedrooms: 2,
    bathrooms: 1,
    sqft: 2530,
    sqm: 235,
    apr: 14,
    area: 92,
    price: 300000,
    collected: 100,
  },
  {
    id: 2,
    type: "SOLD",
    title: "Burj Binghatti",
    location: "Dubai",
    images: [imageURL2, image2URL2, image2URL3],
    bedrooms: 2,
    bathrooms: 1,
    sqft: 2530,
    sqm: 235,
    apr: 20,
    price: 400000,
    area: 120,
    collected: 100,
  },
  {
    id: 3,
    type: "SOLD",
    title: "Millennium Binghatti",
    location: "Dubai",
    images: [imageURL3, image3URL2, image3URL3],
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1820,
    sqm: 169,
    apr: 16,
    price: 430000,
    area: 92,
    collected: 100,
  },
];

const MarketplacePage = () => {
  const { loading, isError, marketPlaceNfts, highlightedMarketplace } =
    useMarketPlace();
  const [filter, setFilter] = useState("all");
  const onChangeFilter = (filter) => setFilter(filter);
  const navigator = useNavigate();

  return (
    <LoadingContainer
      isLoading={loading}
      isError={isError}
      errorMessage={"Error loading, please try again later"}
    >
      <div className="space-y-6">
        <Title
          className={"text-center md:text-left pt-2"}
        >{`MARKETPLACE`}</Title>
        <div className="block md:flex flex-col md:flex-col lg:flex-row space-x-4 md:space-x-0 lg:space-x-4 space-y-0 md:space-y-6 lg:space-y-0 h-full rounded-2xl bg-rocWhite-300 p-2">
          <div className="h-full md:w-full lg:w-[68%] space-y-4">
            <Slider
              onClick={() =>
                navigator(`/property/${highlightedMarketplace?.tokenId}`)
              }
              title={highlightedMarketplace?.title}
              location={highlightedMarketplace?.location}
              images={
                highlightedMarketplace?.images || [
                  imageURL1,
                  imageURL2,
                  imageURL3,
                ]
              }
              type={highlightedMarketplace?.type}
            />
          </div>
          <div className="pt-10 md:pt-0 h-full md:w-full lg:w-[32%] space-y-6">
            <PropertDetail
              id={highlightedMarketplace?.tokenId}
              price={highlightedMarketplace?.price}
              irr={highlightedMarketplace?.irr}
              apr={highlightedMarketplace?.apr}
              bedrooms={highlightedMarketplace?.bedrooms}
              bathrooms={highlightedMarketplace?.bathrooms}
              area={highlightedMarketplace?.area}
              collected={highlightedMarketplace?.collected}
            />
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="hidden md:flex rounded-full space-x-4 bg-rocPurple-800 py-2 px-4 cursor-pointer">
            <h6
              className={`font-manrope font-bold ${
                filter === "all"
                  ? "text-rocBlue-300"
                  : "text-rocWhite-300"
              }`}
              onClick={() => onChangeFilter("all")}
            >
              ALL
            </h6>
            <h6
              className={`font-manrope font-bold ${
                filter === "open"
                  ? "text-rocBlue-300"
                  : "text-rocWhite-300"
              }`}
              onClick={() => onChangeFilter("open")}
            >
              OPEN
            </h6>
            <h6
              className={`font-manrope font-bold ${
                filter === "sold"
                  ? "text-rocBlue-300"
                  : "text-rocWhite-300"
              }`}
              onClick={() => onChangeFilter("sold")}
            >
              SOLD
            </h6>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-3">
          {marketPlaceNfts
            .filter(
              (item) => filter === "all" || item.type.toLowerCase() === filter.toLowerCase()
            )
            .map((item) => {
              return (
                <MarketCard
                  key={item?.tokenId}
                  id={item?.tokenId}
                  title={item?.title}
                  images={item?.images}
                  type={item?.type}
                  location={item?.location}
                  bedrooms={item?.bedrooms}
                  bathrooms={item?.bathrooms}
                  sqft={item?.area}
                  sqm={item?.sqm}
                  apr={item?.apr}
                  percentage={item?.percentage}
                  price={item?.price}
                  collected={item?.collected}
                />
              );
            })}
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0">
          <Title
            className={"text-center md:text-left py-3"}
          >{`Can’t find what you’re looking for?`}</Title>
          <div className="flex flex-col space-y-2 justify-center items-center rounded-2xl bg-rocBlue-100 py-3 px-6 cursor-pointer border border-[#1a54da] text-rocWhite-900 hover:bg-rocWhite-900 hover:text-rocBlack-100">
            <a href="/#auction" className="font-manrope">
              Buy directly from other investors
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-3">
          {auctionMarketplaces
            .filter(
              (item) => filter === "all" || item.type.toLowerCase() === filter.toLowerCase()
            )
            .map((item) => {
              return (
                <MarketCard2
                  key={item.id}
                  id={item.id}
                  images={item.images}
                  type={item.type}
                  title={item.title}
                  location={item.location}
                  bedrooms={item.bedrooms}
                  bathrooms={item.bathrooms}
                  sqft={item.area}
                  sqm={item.sqm}
                  apr={item.apr}
                  percentage={item.percentage}
                  price={item.price}
                  collected={item.collected}
                />
              );
            })}
        </div>
      </div>
    </LoadingContainer>
  );
};

export default MarketplacePage;
