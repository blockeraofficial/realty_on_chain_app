import { Loading } from "assets/svgs";

const LoadingContainer = ({ isLoading, isError, errorMessage, children }) => {
  return (
    <>
      {isLoading ? (
        <div className="h-full w-full flex items-center justify-center">
          <Loading className="animate-spin" />
        </div>
      ) : (
        <>
          {isError ? (
            <div className="h-full w-full flex items-center justify-center">
              <h6 className="text-rocRed-800 text-center text-5xl font-bold">
                {errorMessage ||
                  "Sorry for inconvience, site is currently having some issues"}
              </h6>
            </div>
          ) : (
            <> {children}</>
          )}
        </>
      )}
    </>
  );
};

export default LoadingContainer;
