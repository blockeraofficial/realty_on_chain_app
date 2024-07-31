const StatisticCard = ({ title, value }) => {
  return (
    <div className="w-full border-2 border-rocPurple-700 md:border-rocPurple-800 rounded-2xl px-3 py-7 relative flex justify-center items-center">
      <div className="absolute -top-3 rounded-full px-2 py-1 bg-rocWhite-300 md:bg-rocPurple-800 text-rocPurple-700 md:text-white text-xs whitespace-nowrap font-manrope">
        {title}
      </div>
      <h6 className="text-4xl text-rocPurple-800 font-bold font-manrope">
        {value}
      </h6>
    </div>
  );
};

export default StatisticCard;
