import { ExcalamationDark } from "assets/svgs";

import Chart from "react-apexcharts";

const chartData = {
  series: [
    {
      name: "",
      data: [50000, 40000, 20000, 34000, 55000, 20000, 34000],
    },
  ],
  options: {
    chart: {
      type: "area",
      stacked: true,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["#1a54d9"],
      width: 3,
    },
    xaxis: {
      type: "category",
      categories: ["APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT"],
    },
    legend: {
      show: false,
    },
    fill: {
      opacity: 0.5,
      colors: ["#ffffff"],
    },
  },
};

const TotalValue = () => {
  return (
    <div className="hidden lg:flex w-1/2 flex-col justify-between pb-4 bg-rocWhite-900 rounded-3xl border-2 border-rocPurple-800">
      <div className="bg-rocBlack-100 rounded-t-2xl">
        <h6 className="text-rocWhite-900 text-2xl font-bold text-center py-4 font-manrope">
          Total Value Locked
        </h6>
      </div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
      />
      <div className="flex items-center justify-center space-x-2">
        <ExcalamationDark />
        <h6 className="font-manrope text-rocRed-800">Value represented in USDT.</h6>
      </div>
    </div>
  );
};

export default TotalValue;
