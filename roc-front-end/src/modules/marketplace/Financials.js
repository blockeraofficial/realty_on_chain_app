import { Title } from "components";

const Financials = ({ property }) => {
  return (
    <div className="block space-y-3">
      <Title>FINANCIALS</Title>
      <div className="bg-rocWhite-300 rounded-xl p-4 space-y-5">
        <div className="flex justify-between items-center">
          <h6 className="text-black text-lg font-bold">
            Total investment value:
          </h6>
          <h6 className="text-rocPurple-700 text-lg font-bold">{`$${property?.totalInvestmentValue}`}</h6>
        </div>
        <div className="flex justify-between items-center">
          <h6 className="text-black text-lg font-bold">
            Underlying asset price:
          </h6>
          <h6 className="text-rocPurple-700 text-lg font-bold">{`$${property?.underlyingAssetPrice}`}</h6>
        </div>
        <div className="flex justify-between items-center">
          <h6 className="text-black text-lg font-bold">
            Legal and KYC Fees (1.23%):
          </h6>
          <h6 className="text-rocPurple-700 text-lg font-bold">{`$${property?.legalAndKYCFees}`}</h6>
        </div>
        <div className="flex justify-between items-center">
          <h6 className="text-black text-lg font-bold">Total returns (IRR):</h6>
          <h6 className="text-rocPurple-700 text-lg font-bold">{`${property?.totalReturns}%`}</h6>
        </div>
        <div className="flex justify-between items-center">
          <h6 className="text-black text-lg font-bold">
            Projected Appreciation:
          </h6>
          <h6 className="text-rocPurple-700 text-lg font-bold">{`${property?.projectedAppreciation}%`}</h6>
        </div>
        <div className="flex justify-between items-center">
          <h6 className="text-black text-lg font-bold">
            Annual Percentage Rate (Rent):
          </h6>
          <h6 className="text-rocPurple-700 text-lg font-bold">{`${property?.annualPercentageRate}%`}</h6>
        </div>
        <div className="flex justify-between items-center">
          <h6 className="text-black text-lg font-bold">Annual gross rents:</h6>
          <h6 className="text-rocPurple-700 text-lg font-bold">{`$${property?.annualGrossRents}`}</h6>
        </div>
        <div className="flex justify-between items-center">
          <h6 className="text-black text-lg font-bold">Property management:</h6>
          <h6 className="text-rocPurple-700 text-lg font-bold">{`$${property?.propertyManagement}`}</h6>
        </div>
        <div className="flex justify-between items-center">
          <h6 className="text-black text-lg font-bold">Utilities:</h6>
          <h6 className="text-rocPurple-700 text-lg font-bold">{`$${property?.utilities}`}</h6>
        </div>
        <div className="flex justify-between items-center">
          <h6 className="text-black text-lg font-bold">Maintenance reserve:</h6>
          <h6 className="text-rocPurple-700 text-lg font-bold">{`$${property?.maintenanceReserve}`}</h6>
        </div>
        <div className="flex justify-between items-center">
          <h6 className="text-black text-lg font-bold">Annual cash flow:</h6>
          <h6 className="text-rocPurple-700 text-lg font-bold">{`$${property?.totalInvestmentValue}`}</h6>
        </div>
        <div className="flex justify-between items-center">
          <h6 className="text-black text-lg font-bold">Monthly cash flow:</h6>
          <h6 className="text-rocPurple-700 text-lg font-bold">{`$${property?.monthlyCashFlow}`}</h6>
        </div>
      </div>
    </div>
  );
};

export default Financials;
