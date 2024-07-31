import Title from "./Title";

const { useWeb3 } = require("hooks");

const ConfigurationWrapper = ({ children }) => {
  const { open, isConnected, isSepolia } = useWeb3();

  return (
    <>
      {!isSepolia || !isConnected ? (
        <div className="bg-rocWhite-300 w-full h-96 flex justify-center items-center rounded-2xl">
          {!isConnected && (
            <div className="space-y-4 flex flex-col items-center">
              <Title>Connect Wallet To View Details</Title>
              <button
                className="bg-rocPurple-700 px-4 py-1 rounded-full text-rocWhite-900 font-bold font-manrope border border-[#1a54da] hover:bg-rocWhite-900 hover:text-rocBlack-100"
                onClick={() => open()}
              >
                Connect
              </button>
            </div>
          )}
          {isConnected && !isSepolia && (
            <div className="space-y-4 flex flex-col items-center">
              <Title>You need to select the Sepolia Network</Title>
              <button
                className="bg-rocPurple-700 px-4 py-2 rounded-full text-rocWhite-900 font-bold font-manrope"
                onClick={() => open({ view: "Networks" })}
              >
                Click to change
              </button>
            </div>
          )}
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default ConfigurationWrapper;
