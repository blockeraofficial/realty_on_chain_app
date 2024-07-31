import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LoadNFTs } from "../../redux/NFTs/NFTs";

const NFTsContainer = () => {
  const [currentStartToken, setCurrentStartToken] = useState("0");
  const currentContractAddress = "0x684Fd672EC2F10E8668ab430B1B582a2a0416270";
  const currentWithMetadata = "true";
  const currentLimit = "25";

  const [params, setParams] = useState({
    startToken: currentStartToken,
    contractAddress: currentContractAddress,
    withMetadata: currentWithMetadata,
    limit: currentLimit,
  });

  // const paginate = (currentStartToken) => {
  //   setCurrentStartToken(currentStartToken);
  //   setParams({
  //     startToken: parseInt((currentStartToken - 1) * 25),
  //     contractAddress: currentContractAddress,
  //     withMetadata: currentWithMetadata,
  //     limit: currentLimit,
  //   });
  // };

  const NFTs = useSelector((state) => state.nfts.nfts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadNFTs(params));
  }, [dispatch, params]);

  return (
    <div>
      <ul>
        {NFTs &&
          NFTs.map((nfts) => (
            <li className="each-nft">
              <img
                src={nfts && nfts.image.originalUrl}
                alt={nfts && nfts.image.originalUrl}
              />
              <div className="each-nft-content-detail">
                <h4>#{nfts.tokenId}</h4>
                <p>BORED APE</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NFTsContainer;
