import {
  Question,
  ResisdencyProof,
  Upload,
  Drag,
  IdentityProof,
  Verifier,
} from "assets/svgs";
import { Title } from "components";

const VerificationPage = () => {
  return (
    <div className="space-y-16">
      <div className="flex flex-col lg:flex-row justify-between items-center">
      <Title
          className={"text-center md:text-left pt-2"}
        >{`VERIFICATION`}
      </Title>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-rocWhite-300 rounded-2xl w-full flex flex-col items-center justify-center text-2xl text-rocPurple-800 font-bold space-y-8 p-8">
          <div className="flex space-x-4 items-center">
            <div className="flex justify-center items-center h-8 w-8 bg-rocPurple-800 text-rocWhite-900 rounded-full">
              1
            </div>
            <h6 className="text-lg font-bold text-rocPurple-800">
              PROOF OF RESIDENCY
            </h6>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex">
              <ResisdencyProof />
            </div>
            <div>
              <h6 className="text-sm">Submit either:</h6>
              <ul class="text-rocPurple-800 list-disc list-inside text-xs font-light font-manrope">
                <li>Bank Statement</li>
                <li>Service Bil</li>
                <li>Residency Permit</li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col items-center border-dashed w-full border-rocPurple-700 border-opacity-50 p-4 rounded-lg border-2 space-y-1">
            <div className="flex space-x-2">
              <Drag />
              <h6 className="text-rocPurple-700 text-opacity-50 font-bold text-sm">
                Drag and Drop here
              </h6>
            </div>
            <h6 className="text-rocPurple-700 text-opacity-50 font-bold text-xs">
              or
            </h6>
            <div className="rounded-full py-1 px-4 flex space-x-2 bg-rocPurple-700 bg-opacity-50 items-center">
              <Upload />
              <button className="text-rocWhite-900 text-sm font-normal border-none outline-none">
                Browse file
              </button>
            </div>
          </div>
        </div>
        <div className="bg-rocWhite-300 rounded-2xl w-full flex flex-col items-center justify-center text-2xl text-rocPurple-800 font-bold space-y-8 p-8">
          <div className="flex space-x-4 items-center">
            <div className="flex justify-center items-center h-8 w-8 bg-rocPurple-800 text-rocWhite-900 rounded-full">
              2
            </div>
            <h6 className="text-lg font-bold text-rocPurple-800">
              PROOF OF IDENTITY
            </h6>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex">
              <IdentityProof />
            </div>
            <div>
              <h6 className="text-sm">Submit either:</h6>
              <ul class="text-rocPurple-800 list-disc list-inside text-xs font-light font-manrope">
                <li>National ID</li>
                <li>Driver Licence</li>
                <li>Passport</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div class="flex flex-col justify-center items-center border-dashed w-full border-rocPurple-700 border-opacity-50 p-4 rounded-lg border-2 space-y-1">
              <h6 className="text-rocPurple-700 text-opacity-50 text-sm font-bold">
                Side A
              </h6>
              <div className="flex space-x-1 justify-center items-center">
                <Drag />
                <h6 className="text-rocPurple-700 text-opacity-50 font-bold text-xs w-16">
                  Drag and Drop here
                </h6>
              </div>
              <h6 className="text-rocPurple-700 text-opacity-50 font-bold text-xs">
                or
              </h6>
              <div className="rounded-full px-4 py-1 flex space-x-2 bg-rocPurple-700 bg-opacity-50 items-center ">
                <Upload />
                <button className="text-rocWhite-900 text-xs font-normal border-none outline-none whitespace-nowrap">
                  Browse file
                </button>
              </div>
            </div>
            <div class="flex flex-col justify-center items-center border-dashed w-full border-rocPurple-700 border-opacity-50 p-4 rounded-lg border-2 space-y-1">
              <h6 className="text-rocPurple-700 text-opacity-50 text-sm font-bold">
                Side B
              </h6>
              <div className="flex space-x-1 items-center justify-center">
                <Drag />
                <h6 className="text-rocPurple-700 text-opacity-50 font-bold text-xs w-16">
                  Drag and Drop here
                </h6>
              </div>
              <h6 className="text-rocPurple-700 text-opacity-50 font-bold text-xs">
                or
              </h6>
              <div className="rounded-full px-4 py-1 flex space-x-2 bg-rocPurple-700 bg-opacity-50 items-center ">
                <Upload />
                <button className="text-rocWhite-900 text-xs font-normal border-none outline-none whitespace-nowrap">
                  Browse file
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-rocWhite-300 rounded-2xl w-full flex flex-col items-center justify-center text-2xl text-rocPurple-800 font-bold space-y-8 py-8 px-12">
          <div className="flex space-x-4 items-center">
            <div className="flex justify-center items-center h-8 w-8 bg-rocPurple-800 text-rocWhite-900 rounded-full">
              3
            </div>
            <h6 className="text-lg font-bold text-rocPurple-800">
              SUBMIT & VERIFY ME
            </h6>
          </div>
          <Verifier />
          <button className="border-none outline-none w-full rounded-full text-rocWhite-900 bg-rocPurple-700 bg-opacity-50 py-2">
            SUBMIT DOCS
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <Question />
        <h6 className="font-bold font-manrope text-lg text-rocPurple-800">
          Beta version does not require verification!{" "}
        </h6>
      </div>
    </div>
  );
};

export default VerificationPage;
