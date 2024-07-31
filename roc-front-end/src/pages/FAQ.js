import { QuestionMark, BuyHomeTag, BuyRocToken, Staking, AskToCommunity, WatchDemoVideo, MoreInfo } from "assets/svgs";
import { FAQQuestion, Tag } from "modules/faq";
import { useState } from "react";

const GENERAL_TAGS = [
  {
    id: 1,
    name: "How to buy an asset",
    SVG: () => <BuyHomeTag width={60} height = {60} />,
    tag: "https://medium.com/@realtyonchain/how-to-buy-an-asset-3a4ecc855d0b"
  },
  {
    id: 2,
    name: "How to buy $ROC token",
    SVG: () => <BuyRocToken width={65} height = {65} />,
    tag: "https://medium.com/@realtyonchain/how-to-buy-roc-tokens-4194041d2bbf"
  },
  {
    id: 3,
    name: "How staking works",
    SVG: () => <Staking width={60} height = {60} />,
    tag: "https://medium.com/@realtyonchain/how-staking-works-274c42a8c145"
  },
  {
    id: 4,
    name: "Ask community",
    SVG: () => <AskToCommunity width={60} height = {60} />,
    tag: "https://web.telegram.org/k/#@realtyonchain"
  },
  {
    id: 5,
    name: "Watch demo video",
    SVG: () => <WatchDemoVideo width={60} height = {60} />,
    tag: "https://www.rocplatform.online"
  },
  {
    id: 6,
    name: "Info about Blockera",
    SVG: () => <MoreInfo width={60} height = {60} />,
    tag: "https://www.blockera.online/"
  },
];

const FAQs = [
  {
    id: 1,
    question: "How can I buy real estate tokens step by step?",
    answer: "First you need to buy USDT, then you need to verify yourself via our platform, then you need to approve your USDT via clicking the approve button and lastly you can buy real estate tokens with respect to approved amount",
  },
  {
    id: 2,
    question: "Will I be the legal shareholder of the property after I buy real estate tokens?",
    answer: "After all the required USDT accumulated in the platform, we will buy the property from the owner and you will be the legal shareholder",
  },
  {
    id: 3,
    question: "How do you provide legal ownership via buying real estate tokens?",
    answer: "We prepare legal documents after we buy the real estate from its owner",
  },
  {
    id: 4,
    question: "What are the available paying options currently?",
    answer: "Currently we accept only USDT",
  },
  {
    id: 5,
    question: "How can I benefit from ROC tokens?",
    answer: "In the future, you will be able to buy assets with ROC tokens, you can stake ROC tokens to get USDT and ROC with interest.",
  },
  {
    id: 6,
    question: "I am not able to operate approve what should I do?",
    answer: "Just to make sure your approved amount is 0. Because if the approved amount is not 0, the USDT contract does not allow you to approve",
  },
  {
    id: 7,
    question: "Will I be able to get rent share of the property?",
    answer: "Once the whole money accumulated to buy the property, yes you will get rent that you can claim from your dashboard.",
  },
  {
    id: 8,
    question: "What if I want to sell my real estate tokens on the platforms such as OpenSea, Blue etc.. after I bought them?",
    answer: "You can however, the person that is buying the tokens must also be verified via our platform.",
  },
  {
    id: 9,
    question: "Where can I read ROC whitepaper?",
    answer: "From the following link ...",
  },
  {
    id: 10,
    question: "How is the project takes advantage of AI?",
    answer: "We select the best property locations that can bring most income and APR.",
  },
  {
    id: 11,
    question: "Can I see my property token on Opensea or any other platform that shows NFTs or SFTs?",
    answer: "After you bought real estate tokens yes you can!",
  },
  {
    id: 12,
    question: "How do you tokenize properties with ERC-1155?",
    answer: "We divide the real value of real estate properties to 10 and we set the price of each token to 10 USDT",
  },
  {
    id: 13,
    question: "Is there a maximum amount I can invest in a property",
    answer: "Yes. It is calculated as the real value of real estate in terms of USDT divided by 10. So each property has a maximum value of tokens that can be bought",
  },
  {
    id: 14,
    question: "Will I lose my money if the property is not fully funded within its listing period?",
    answer: "No we will refund your money to your web3 wallet! You can check the responsible function that does that refund in our smart contract!",
  },
  {
    id: 15,
    question: "Do I need to invest in cryptocurrency?",
    answer: "You need to buy cryptocurrency to your web3 wallet to be able to buy property tokens",
  },
  {
    id: 16,
    question: "How do I receive my interest?",
    answer: "Through APR, and rent income",
  },
  {
    id: 17,
    question: "Which documents are needed to verify myself?",
    answer: "Your id document/passport/driver license that shows your signature",
  },
];

const FAQPage = () => {
  const [searchText, setSearchText] = useState("");

  const searchedFAQs = searchText
    ? FAQs.filter(
        (item) =>
          item.question.toLowerCase().includes(searchText.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchText.toLowerCase())
      )
    : FAQs;

  return (
    <div className="space-y-6">
      <div className="p-4 md:p-6 text-center space-y-4">
        <h1 className="font-bold font-prompt text-3xl md:text-2xl lg:text-4xl text-rocPurple-800 font-prompt">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <div className="flex justify-center">
          <div className="relative rounded-full overflow-hidden w-full md:max-w-[880px]">
            <input
              type="text"
              className="w-full p-4 rounded-full border-2 border-rocWhite-300 focus:outline-none focus:border-rocPurple-300 font-manrope"
              placeholder="Type to ask us anything..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <QuestionMark />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {GENERAL_TAGS.map((item) => (
          <a href={item.tag} target="_blank" rel="noopener noreferrer">
          <Tag key={item.id} name={item.name} logo={item.SVG}/>
          </a>
        ))}
      </div>
      <div className="space-y-3">
        {searchedFAQs.map((item) => (
          <FAQQuestion
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
