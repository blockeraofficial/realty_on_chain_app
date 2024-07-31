import { DollarStatusIcon } from "assets/svgs";

const typeClassName = (type) => {
  if (type === "OPEN") {
    return "py-1 px-2 rounded-full border-2 border-rocGreen-800 text-rocGreen-800 bg-rocGreen-200 text-sm";
  } else if (type === "SOLD") {
    return "py-1 px-2 rounded-full border-2 border-rocRed-800 text-rocRed-800 bg-rocRed-200 text-sm";
  }
};

const renderIcon = (type) => {
  if (type) {
    return <DollarStatusIcon />;
  } else {
    return <DollarStatusIcon />;
  }
};

const Status = ({ value, showIcon }) => {
  const className = typeClassName(value);
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {showIcon && <>{renderIcon(value)}</>}
      <h6>{value}</h6>
    </div>
  );
};

export default Status;
