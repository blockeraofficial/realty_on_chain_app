import { Download, OpenLink } from "assets/svgs";
import Status from "./Status";
import { CSVLink } from "react-csv";

const { Title } = require("components");

const transactions = [
  {
    id: 1,
    date: "15/08/2023",
    type: "CLAIM",
    detail: "ROC: Rent Claim to 0xfd...4621",
    link: "https://www.google.com",
  },

  {
    id: 1,
    date: "15/08/2023",
    type: "SELL",
    detail: "0xfd...4621 to 0xge...5787",
    link: "https://www.google.com",
  },

  {
    id: 1,
    date: "15/08/2023",
    type: "BUY",
    detail: "0xfd...4621 to ROC: Marketplace ",
    link: "https://www.google.com",
  },

  {
    id: 1,
    date: "15/08/2023",
    type: "STAKE",
    detail: "ROC: Marketplace to 0xfd...4621",
    link: "https://www.google.com",
  },
  {
    id: 1,
    date: "15/08/2023",
    type: "SWAP",
    detail: "Uniswap V3: Router 2 to 0xfd...4621",
    link: "https://www.google.com",
  },
];

const Transactions = () => {
  const onClickMore = (item) => {
    console.log("item", item);
  };
  return (
    <div className="space-y-4">
      <div className="flex justify-center md:justify-between items-center">
        <Title className={"py-3"}>{`MY TRANSACTIONS`}</Title>
        <CSVLink data={transactions}>
          <div className="rounded-full py-1 px-4 bg-rocBlue-100 items-center space-x-2 hidden md:flex cursor-pointer border border-[#1a54da] text-rocWhite-900 hover:bg-rocWhite-900 hover:text-rocBlack-100">
            {/*<Download /> */}
            <h6>DOWNLOAD .CSV</h6>
          </div>
        </CSVLink>
      </div>
      <div className="overflow-x-auto rounded-lg border-2 border-rocPurple-300">
        <table className="w-[900px] lg:w-full bg-rocWhite-300 border-collapse">
          <thead>
            <tr>
              <th className="py-2 text-center border-r-2 border-rocPurple-300 font-bold text-xl font-manrope">
                DATE
              </th>
              <th className="py-2 text-center border-r-2 border-rocPurple-300 font-bold text-xl font-manrope">
                TYPE
              </th>
              <th className="py-2 text-center border-r-2 border-rocPurple-300 font-bold text-xl font-manrope">
                DETAIL
              </th>
              <th className="py-2 text-center">SEE DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item) => {
              return (
                <tr key={item.id} className="border-t-2 border-rocPurple-300">
                  <td className="py-2 text-center border-r-2 border-rocPurple-300 font-bold font-manrope">
                    {item.date}
                  </td>
                  <td className="py-2 text-center border-r-2 border-rocPurple-300 flex justify-center">
                    <Status value={item.type} />
                  </td>
                  <td className="py-2 text-left px-4 border-r-2 border-rocPurple-300 text-rocPurple-800">
                    {item.detail}
                  </td>
                  <td className="py-2 text-center flex justify-center">
                    <div
                      className="text-rocWhite-900 rounded-full py-1 px-4 bg-rocBlue-100 flex space-x-2 items-center justify-center w-30 cursor-pointer border border-[#1a54da] text-rocWhite-900 hover:bg-rocWhite-900 hover:text-rocBlack-100"
                      onClick={() => onClickMore(item)}
                    >
                      <h6 className="font-manrope text-md">
                        More Info
                      </h6>
                      {/*<OpenLink /> */}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
