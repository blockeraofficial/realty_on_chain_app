import { NavLink } from "react-router-dom";
import { rocPurpleLogo } from "assets/images";
import { OkaneConnection, Excalamation, HandBurger } from "assets/svgs";
import { useWeb3 } from "hooks";

const Navbar = ({ toggle }) => {
  const { isConnected, address, open } = useWeb3();

  return (
    <div className="bg-white w-full rounded-full flex items-center justify-between p-2">
      <div className="hidden lg:flex space-x-2 items-center ml-3">
        <Excalamation />
        <h6 className="font-semibold text-rocBlack-100 font-manrope">
          Welcome to the Realty on Chain Testnet Alpha Platform - For demonstration purposes only!
        </h6>
      </div>
      <NavLink to={"/"} className={"block lg:hidden pl-2"}>
        <img src={rocPurpleLogo} alt="website-logo" className="h-11" />
      </NavLink>
      <div className="space-x-2 flex items-center">
        {isConnected ? (
          <div className="bg-rocPurple-300 px-1 lg:px-2 py-1 rounded-full cursor-pointer">
            <div
              className="flex items-center space-x-2"
              onClick={() => open({ view: "Account" })}
            >
              <p className="text- bg-white rounded-full px-4 font-manrope">
                {address.slice(0, 3) + "..." + address.slice(-5)}
              </p>
              <OkaneConnection />
            </div>
          </div>
        ) : (
          <button
            className="bg-rocPurple-300 px-4 lg:px-4 py-1 rounded-full text-rocWhite-900 font-manrope border border-[#1a54da] hover:bg-rocWhite-900 hover:text-rocBlack-100"
            onClick={() => open()}
          >
            Connect
          </button>
        )}
        <HandBurger
          onClick={toggle}
          className="cursor-pointer block lg:hidden"
        />
      </div>
    </div>
  );
};

export default Navbar;
