const Tag = ({ name, logo }) => {
  const Icon = logo;
  return (
    <div className="rounded-2xl border-2 border-rocPurple-800 flex flex-col md:flex-row space-x-0 space-y-2 md:space-y-0 md:space-x-2 items-center px-6 py-3 cursor-pointer">
      <Icon />
      <h6 className="border-rocPurple-800 text-sm md:text-2xl font-bold text-center font-manrope">
        {name}
      </h6>
    </div>
  );
};

export default Tag;
