import { Timer } from "assets/svgs";
import { useEffect, useState } from "react";

const currentDate = new Date();
const futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 15);

const SaleTimer = ({ endDate, variant = "primary" }) => {
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const endTime = new Date(futureDate).getTime();
    const timeRemaining = endTime - now;

    if (timeRemaining <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining);
    }, 1000);

    return () => clearInterval(interval);
    /* eslint-disable-next-line */
  }, [endDate]);

  return (
    <div
      className={`w-full border-2 ${
        variant === "secondary"
          ? "border-rocPurple-700"
          : "border-rocPurple-800"
      } rounded-3xl px-3 py-7 relative flex justify-center items-center`}
    >
      <div
        className={`absolute -top-4 rounded-full flex space-x-2 items-center px-2 py-1 text-rocPurple-800 ${
          variant === "secondary"
            ? "text-rocPurple-700 bg-rocWhite-900"
            : "text-rocPurple-800 bg-rocWhite-300"
        }`}
      >
        <Timer />
        <h6
          className={`text-lg font-bold whitespace-nowrap font-manrope ${
            variant === "secondary"
              ? "text-rocPurple-700"
              : "text-rocPurple-800"
          }`}
        >{`Sale ends in:`}</h6>
      </div>
      <h6
        className={`text-xl font-bold whitespace-nowrap font-manrope ${
          variant === "secondary"
            ? "text-rocPurple-700"
            : "text-rocPurple-800"
        }`}
      >
        {`${timeRemaining.days}d : ${timeRemaining.hours}h : ${timeRemaining.minutes}m : ${timeRemaining.seconds}sec`}
      </h6>
    </div>
  );
};

export default SaleTimer;
