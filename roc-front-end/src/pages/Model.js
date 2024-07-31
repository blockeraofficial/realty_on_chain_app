import { BmMap } from "assets/images";

const Paragraphs = [
  `The state of Wyoming has devised a unique set of regulations tailored 
  for DAOs. Under these regulations, Wyoming permits the establish-
  ment of a DAO as a Limited Liability Company (LLC) with specific at-
  tributes. The governance of a DAO LLC in Wyoming can be entrusted 
  to its members, akin to the traditional LLC model, in cases of member 
  management. Alternatively, in algorithmically managed DAO LLCs, de-
  cision-making resides within the smart contract, mirroring the conventional DAO setup where protocol-encoded rules guide choices. A noteworthy feature of the Wyoming-based DAO LLC is its provision for limiting 
  personal liability, ensuring that members are not held personally accountable for the LLC’s financial obligations or legal commitments.`,

  `A DAO LLC is also a great way to ensure the opinions of all investors 
  are considered. Each member within the DAO possesses the ability to 
  impact the organisation’s governance by presenting proposals during 
  the DAO’s all-inclusive membership gathering. Once a proposal is sub-
  mitted by a DAO member, all members are empowered to participate in 
  a vote that will decide its outcome.`,

  `The ROC platform will benefit from the pro crypto laws adopted in Wy-
  oming, each property that is sold will be owned and managed by a DAO 
  LLC incorporated in Wyoming. The individual investors of each asset will 
  form the basis of a DAO LLC, granting them ownership and the ability to 
  influence decisions. This process will be fully visible on the blockchain, 
  including key details such as the property title deed which will be held 
  by the DAO LLC.`,

  `When a user finds an asset they like on the ROC platform, they are 
  able to purchase tokens from as little as $10, a fee which will not include 
  any brokerage fees due to the blockchains ability to streamline archaic 
  processes found in traditional real estate investment. This enables our 
  users to transact efficiently and quickly without compromising on pro-
  tection as all assets will be insured and every purchase will be verifiable 
  on the blockchain.`,
];

const ModelPage = () => {
  return (
    <div className="space-y-6">
      <div className="p-4 md:p-6 text-center">
        <h1 className="font-bold font-prompt text-3xl md:text-2xl lg:text-4xl text-rocPurple-800 font-prompt">{`BUSINESS MODEL`}</h1>
      </div>
      <div className="rounded-2xl bg-rocWhite-300 p-4 space-y-4 font-manrope">
        {Paragraphs.map((item, index) => (
          <p
            key={index}
            className="text-lg font-light text-rocPurple-800 text-justify"
          >
            {item}
          </p>
        ))}
        {/* 
        <div className="flex justify-center items-center">
          <img src={BmMap} alt="illustration" />
        </div>
        */}
      </div>
    </div>
  );
};

export default ModelPage;
