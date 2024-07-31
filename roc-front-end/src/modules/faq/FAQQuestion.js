const { QuestionMark, DownArrow } = require("assets/svgs");
const { useState } = require("react");

const FAQQuestion = ({ question, answer }) => {
  const [open, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!open);

  return (
    <div className="cursor-pointer">
      <div
        className="flex justify-between items-center rounded-xl border border-rocPurple-200"
        onClick={toggle}
      >
        <div className="flex items-center space-x-2 p-2 w-full">
          <div className="w-12">
            <QuestionMark />
          </div>
          <p className="text-lg font-semibold text-rocPurple-800 font-manrope w-[80%]">
            {question}
          </p>
        </div>
        <div className="h-full bg-rocBlue-100 w-20 py-8 md:py-6 flex justify-center items-center rounded-r-xl">
          <DownArrow className={open && "rotate-180"} />
        </div>
      </div>
      <div
        className={`max-h-0 overflow-hidden transition-max-height duration-300 ${
          open && "max-h-40"
        }`}
      >
        <p className="mt-2 text-rocBlack-100 font-manrope">{answer}</p>
      </div>
    </div>
  );
};

export default FAQQuestion;
