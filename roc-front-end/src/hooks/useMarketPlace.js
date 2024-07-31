import { useEffect, useState } from "react";
import { updateProperties } from "constants/properties.js";
import { getProperties } from "api/index.js";

const useMarketPlace = () => {
  const [marketPlaceNfts, setMarketPlaceNfts] = useState([]);
  const [highlightedMarketplace, setHighlightedMarketplace] = useState([]);
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setErrorFetching] = useState(false);

  const fetchNTFs = async () => {
    setLoading(true);
    try {
      const properties = await getProperties();
      const nfts = properties?.result?.nfts?.map((item, index) => ({
        ...item,
        type: "OPEN",
        location: "Dubai",
        ...updateProperties(
          parseInt(item?.tokenId),
          item?.media && item?.media[0]?.gateway
        ),
        collected: (
          (item?.rawMetadata?.tokensSold / item?.rawMetadata?.totalTokens) *
          100
        ).toFixed(2),
        price: item?.rawMetadata?.totalTokens * 10,
      }));

      setMarketPlaceNfts(nfts.slice(1));
      setHighlightedMarketplace(nfts[0]);
      setNfts(nfts);
      const dataToStore = {
        nfts: nfts.slice(1),
        highlightedMarketplace: nfts[0],
        allNts: nfts,
      };

      const currentTime = new Date().getTime();
      sessionStorage.setItem("marketPlaceData", JSON.stringify(dataToStore));
      sessionStorage.setItem("marketPlaceTimestamp", currentTime.toString());

      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      setErrorFetching(true);
    }
  };

  useEffect(() => {
    const storedData = sessionStorage.getItem("marketPlaceData");
    const storedTimestamp = sessionStorage.getItem("marketPlaceTimestamp");
    const currentTime = new Date().getTime();
    if (
      storedData &&
      storedTimestamp &&
      currentTime - parseInt(storedTimestamp) < 600000
    ) {
      const parsedData = JSON.parse(storedData);
      setMarketPlaceNfts(parsedData.nfts);
      setNfts(parsedData.allNts);
      setHighlightedMarketplace(parsedData.highlightedMarketplace);
    } else {
      fetchNTFs();
    }
  }, []);

  return { nfts, marketPlaceNfts, highlightedMarketplace, loading, isError };
};

export { useMarketPlace };
