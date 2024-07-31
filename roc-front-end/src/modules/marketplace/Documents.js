import { Browser } from "assets/svgs";
import { Title } from "components";

const documents = [
  {
    id: 1,
    name: "DAO LLC",
    url: "https://sos.wyo.gov/business/startabusiness.aspx",
  },
  {
    id: 2,
    name: "Smart Contract",
    url: "https://sepolia.etherscan.io/address/0x9a10cA8bb91B9d3696A07f3AF948A750F4e5B390",
  },
];

const Documents = () => {
  return (
    <div className="space-y-3">
      <Title className={"pt-2 pb-4"}>DOCUMENTS</Title>
      <div className="space-y-4">
        {documents.map((item) => {
          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rocWhite-900 flex justify-between rounded-full bg-rocBlue-100 shadow py-3 px-4 items-center border border-[#1a54da] hover:bg-rocWhite-900 hover:text-rocBlack-100"
            >
              <div className="flex space-x-1 items-center">
                <h6 className="font-xl font-bold">
                  {item.name}
                </h6>
              </div>
              {/* <Browser /> */}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Documents;
