import { getTokenPrices } from "api";
import { OKANE, MATIC, USDC, USDT } from "assets/svgs/tokenPrices";

import { useEffect, useState } from "react";

const TokenPrices = () => {
  const [tokenPrices, setTokenPrices] = useState({
    okane: "-",
    matic: "-",
    usdt: "-",
    bitcoin: "-",
  });
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const tokenPrices = await getTokenPrices();
        setTokenPrices({
          okane: tokenPrices?.result?.okane,
          matic: tokenPrices?.result?.matic,
          usdt: tokenPrices?.result?.usdt,
          bitcoin: tokenPrices?.result?.bitcoin,
        });
      } catch (error) {
        setTokenPrices({
          okane: "-",
          matic: "-",
          usdt: "-",
          bitcoin: "-",
        });
      }
    };
    fetchPrices();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="w-full border-2 border-rocPurple-300 rounded-full relative flex justify-center items-center">
        <div className="w-full flex items-center">
          <div className="h-14 w-14 rounded-full bg-rocBlue-100 flex justify-center items-center">
            <OKANE />
          </div>
          <h6 className="font-bold text-2xl text-rocPurple-800 font-manrope text-center">
            {tokenPrices.okane}
          </h6>
        </div>
        <div className="absolute -top-3 rounded-full px-2 py-1 bg-rocWhite-300 text-rocPurple-700 text-xs whitespace-nowrap font-manrope">
          {`ROC`}
        </div>
      </div>
      <div className="w-full border-2 border-rocPurple-300 rounded-full relative flex justify-center items-center">
        <div className="w-full flex items-center">
          <div className="h-14 w-14 rounded-full bg-rocBlue-100 flex justify-center items-center">
            <MATIC />
          </div>
          <h6 className="font-bold text-2xl text-rocPurple-800 font-manrope text-center">
            {tokenPrices.matic}
          </h6>
        </div>
        <div className="absolute -top-3 rounded-full px-2 py-1 bg-rocWhite-300 text-rocPurple-700 text-xs whitespace-nowrap font-manrope">
          {`MATIC`}
        </div>
      </div>
      <div className="w-full border-2 border-rocPurple-300 rounded-full relative flex justify-center items-center">
        <div className="w-full flex items-center">
          <div className="h-14 w-14 rounded-full bg-rocBlue-100 flex justify-center items-center">
            <USDT />
          </div>
          <h6 className="font-bold text-2xl text-rocPurple-800 font-manrope text-center">
            {tokenPrices.usdt}
          </h6>
        </div>
        <div className="absolute -top-3 rounded-full px-2 py-1 bg-rocWhite-300  text-rocPurple-700 text-xs whitespace-nowrap font-manrope">
          {`USDT`}
        </div>
      </div>
      <div className="w-full border-2 border-rocPurple-300 rounded-full relative flex justify-center items-center">
        <div className="w-full flex items-center">
          <div className="h-14 w-14 rounded-full bg-rocBlue-100 flex justify-center items-center">
            <USDC />
          </div>
          <h6 className="font-bold text-2xl text-rocPurple-800 font-manrope text-center">
            {tokenPrices.bitcoin}
          </h6>
        </div>
        <div className="absolute -top-3 rounded-full px-2 py-1 bg-rocWhite-300 text-rocPurple-700 text-xs whitespace-nowrap font-manrope">
          {`Bitcoin`}
        </div>
      </div>
    </div>
  );
};

export default TokenPrices;
