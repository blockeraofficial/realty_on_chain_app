const typeClassName = (type) => {
  if (type === "CLAIM") {
    return "py-1 px-4 rounded-full border-2 border-rocPurple-700 text-rocPurple-700 bg-rocWhite-900 w-20 text-sm";
  } else if (type === "SELL") {
    return "py-1 px-4 rounded-full border-2 border-rocRed-800 text-rocRed-800 bg-rocRed-200 w-20 text-sm";
  } else if (type === "BUY") {
    return "py-1 px-4 rounded-full border-2 border-rocGreen-800 text-rocGreen-800 bg-rocGreen-200 w-20 text-sm";
  } else if (type === "STAKE") {
    return "py-1 px-4 rounded-full border-2 border-rocBlue-800 text-rocBlue-800 bg-rocBlue-200 w-20 text-sm";
  } else if (type === "SWAP") {
    return "py-1 px-4 rounded-full border-2 border-rocOrange-900 text-rocOrange-900 bg-rocOrange-300 w-20 text-sm";
  } else if (type === "OPEN") {
    return "py-1 px-2 rounded-full border-2 border-rocGreen-800 text-rocGreen-800 bg-rocGreen-200 text-sm";
  } else if (type === "SOLD") {
    return "py-1 px-2 rounded-full border-2 border-rocRed-800 text-rocRed-800 bg-rocRed-200 text-sm";
  }
};
const Status = ({ value }) => {
  const className = typeClassName(value);
  return <div className={className}>{value}</div>;
};

export default Status;
