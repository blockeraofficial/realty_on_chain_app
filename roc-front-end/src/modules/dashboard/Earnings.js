import {
  ArrowLeft,
  ArrowRight,
  Desktop,
  ExcalamationDark,
  GraphDecreaseArrow,
  GraphIncreaseArrow,
} from "assets/svgs";
import { Title } from "components";
import { useState } from "react";
import Chart from "react-apexcharts";

const optionsDaily = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: "rounded",
      columnWidth: "55%",
    },
  },
  dataLabels: {
    enabled: true,
    position: "center",
  },
  xaxis: {
    categories: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
  },
  colors: ["#290E41", "#00E396", "#FEB019", "#FF4560"],
};

const seriesDaily = [
  {
    name: "Daily",
    data: [
      44, 55, 41, 67, 44, 55, 41, 67, 44, 55, 44, 55, 41, 67, 44, 55, 41, 67,
      44, 55, 44, 55, 41, 67, 44, 55, 41, 67, 44, 55,
    ],
  },
];

const optionsMonthly = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: "rounded",
      columnWidth: "55%",
    },
  },
  dataLabels: {
    enabled: true,
    position: "center",
  },
  xaxis: {
    categories: [
      "FEB",
      "MAR",
      "APR",
      "MAR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
  },
  colors: ["#1a54d9", "#00E396", "#FEB019", "#FF4560"],
};

const seriesMonthly = [
  {
    name: "Monthly",
    data: [44, 55, 41, 67, 44, 55, 41, 67, 44, 55, 41, 67],
  },
];

const optionsYearly = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: "rounded",
      columnWidth: "55%",
    },
  },
  dataLabels: {
    enabled: true,
    position: "center",
  },
  xaxis: {
    categories: [
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2023",
    ],
  },
  colors: ["#290E41", "#00E396", "#FEB019", "#FF4560"],
};

const seriesYearly = [
  {
    name: "Yearly",
    data: [44, 55, 41, 67, 44, 55, 41, 67, 44, 55],
  },
];

const chartTypes = ["Daily", "Monthly", "Yearly"];
const isEarningIncreasing = true;

const Earnings = () => {
  const [chartType, setChartType] = useState(chartTypes[1]);

  const onClickLeft = () => {
    const index = chartTypes.indexOf(chartType);
    setChartType(chartTypes[index - 1]);
  };
  const onClickRight = () => {
    const index = chartTypes.indexOf(chartType);
    setChartType(chartTypes[index + 1]);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center md:justify-between items-center">
        <Title className={"py-3"}>{`MY EARNINGS`}</Title>
      </div>
      <div className="hidden md:block bg-gray-200 rounded-lg p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="rounded-2xl px-2 flex flex-col items-center md:items-start justify-center space-y-1">
            <h6 className="font-bold text-lg font-manrope">
              TOTAL EARNED: $4520
            </h6>
            <div className="flex space-x-2 items-center">
              {isEarningIncreasing ? (
                <GraphIncreaseArrow />
              ) : (
                <GraphDecreaseArrow className="rotate-180" />
              )}
              <h6
                className={`${
                  isEarningIncreasing
                    ? "text-rocGreen-800"
                    : "text-rocRed-800"
                } font-manrope font-bold`}
              >
                65% FROM PREVIOUS MONTH
              </h6>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <ArrowLeft
              className={`cursor-pointer ${
                chartTypes.indexOf(chartType) === 0 &&
                "pointer-events-none opacity-50"
              }`}
              onClick={onClickLeft}
            />
            <h6 className="font-manrope w-16 text-center">{chartType}</h6>
            <ArrowRight
              className={`cursor-pointer ${
                chartTypes.indexOf(chartType) === chartTypes.length - 1 &&
                "pointer-events-none opacity-50"
              }`}
              onClick={onClickRight}
            />
          </div>
        </div>
        {chartType === chartTypes[0] && (
          <Chart
            options={optionsDaily}
            series={seriesDaily}
            type="bar"
            height="350"
            width="100%"
          />
        )}
        {chartType === chartTypes[1] && (
          <Chart
            options={optionsMonthly}
            series={seriesMonthly}
            type="bar"
            height="350"
            width="100%"
          />
        )}
        {chartType === chartTypes[2] && (
          <Chart
            options={optionsYearly}
            series={seriesYearly}
            type="bar"
            height="350"
            width="100%"
          />
        )}
        <div className="flex space-x-2 justify-center items-center">
          <ExcalamationDark />
          <h6 className="font-bold text-lg text-rocRed-800">
            Earnings represented in USDT. Projected revenue based on current
            holding properties.{" "}
          </h6>
        </div>
      </div>
      <div className="block md:hidden space-y-4">
        <div className="w-full rounded-2xl py-4 px-2 flex flex-col items-center justify-center space-y-1 border-2 border-rocGreen-800 bg-rocGreen-200">
          <h6 className="font-bold text-lg font-manrope">
            TOTAL EARNED: $4520
          </h6>
          <div className="flex space-x-2 items-center">
            {isEarningIncreasing ? (
              <GraphIncreaseArrow />
            ) : (
              <GraphDecreaseArrow className="rotate-180" />
            )}
            <h6
              className={`${
                isEarningIncreasing
                  ? "text-rocGreen-800"
                  : "text-rocRed-800"
              } font-manrope font-bold`}
            >
              65% FROM PREVIOUS MONTH
            </h6>
          </div>
        </div>
        <div className="w-full flex items-center space-x-4 justify-center rounded-2xl bg-rocPurple-700 bg-opacity-50 py-6 px-4">
          <Desktop />
          <h6 className="text-white font-bold text-xl font-manrope">
            View My Earnings Graph on Desktop
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
