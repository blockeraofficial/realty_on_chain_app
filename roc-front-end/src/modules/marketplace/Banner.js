import { BannerRightImage } from "assets/images";

const imageURL =
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww";

const Banner = () => {
  return (
    <>
      <div className="block md:hidden relative h-64 sm:h-56 border border-rocPurple-800 bg-cover rounded-3xl bg-center bg-opacity-70 shadow-inner shadow-blur-md w-full overflow-hidden">
        <div className="absolute top-0 left-0 right-0 flex flex-col justify-between text-whiteOkane-900 px-8 py-4 space-y-4">
          <h6 className="text-rocPurple-800 font-bold font-manrope text-3xl sm:text-4xl text-center">
            Real Estate with Zero Hassle
          </h6>
          <div className="flex flex-col space-y-4 items-center justify-between">
            <h6 className="text-rocPurple-800 font-bold font-manrope text-xl">
              JUST AS EASY AS
            </h6>
            <div className="flex items-center space-x-2">
              <div className="border border-rocWhite-900 rounded-full flex space-x-2 items-center h-9 bg-rocPurple-700 bg-opacity-50 pr-4">
                <div className="rounded-full h-8 w-8 flex items-center justify-center text-rocWhite-900 bg-rocPurple-700 bg-opacity-50">
                  {1}
                </div>
                <h6 className="font-bold font-manrope text-rocWhite-900 text-xs">
                  {`Buy $USDT`}
                </h6>
              </div>
              <div className="border border-rocWhite-900 rounded-full flex space-x-2 items-center bg-rocPurple-700 bg-opacity-50 pr-4">
                <div className="rounded-full h-8 w-8 flex items-center justify-center text-rocWhite-900 bg-rocPurple-700 bg-opacity-50">
                  {2}
                </div>
                <h6 className="font-bold font-manrope text-rocWhite-900 text-xs">
                  {`Verify KYC`}
                </h6>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4 items-center justify-center">
            <div className="flex items-center space-x-2">
              <div className="border border-rocWhite-900 rounded-full flex space-x-2 items-center h-9 bg-rocPurple-700 bg-opacity-50 pr-4">
                <div className="rounded-full h-8 w-8 flex items-center justify-center text-rocWhite-900 bg-rocPurple-700 bg-opacity-50">
                  {3}
                </div>
                <h6 className="font-bold font-manrope text-rocWhite-900 text-xs">
                  {`Buy a property`}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-0 text-whiteOkane-900 pr-1 h-72 overflow-hidden">
          <img
            src={BannerRightImage}
            alt="banner"
            className="opacity-10 h-64"
          />
        </div>
      </div>
      <div className="hidden md:block relative h-28 bg-cover rounded-3xl bg-center bg-opacity-70 shadow-inner shadow-blur-md w-full overflow-hidden">
        <div
          className="h-full w-full bg-cover bg-center rounded-3xl"
          style={{ backgroundImage: `url(${imageURL})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r rounded-3xl from-rocBlue-100 from-5% via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 text-whiteOkane-900 px-8 py-3 space-y-2">
          <h6 className="text-rocBlack-100 font-bold text-4xl font-manrope">
            Real Estate with Zero Hassle
          </h6>
          <div className="flex space-x-4 items-center pt-0">
            <h6 className="text-rocWhite-900 font-bold font-manrope text-lg">
              JUST AS EASY AS
            </h6>
            <div className="flex items-center space-x-2">
              {[
                { id: 1, name: "Buy $USDT" },
                { id: 2, name: "Verify KYC" },
                { id: 3, name: "Buy a property" },
              ].map((item) => (
                <div
                  key={item.id}
                  className="border border-rocWhite-900 rounded-full flex space-x-2 items-center h-9 bg-rocPurple-700 bg-opacity-50 pr-4"
                >
                  <div className="rounded-full h-8 w-8 flex items-center justify-center text-rocWhite-900 bg-rocPurple-700 bg-opacity-50">
                    {item.id}
                  </div>
                  <h6 className="font-bold font-manrope text-rocWhite-900 text-xs">
                    {item.name}
                  </h6>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 text-whiteOkane-900 pr-0">
          <img src={BannerRightImage} alt="banner" className="h-28" />
        </div>
      </div>
    </>
  );
};

export default Banner;
