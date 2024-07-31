import { useState } from "react";

const Cookies = () => {
  const [isAllowed, setAllowed] = useState(
    !!localStorage.getItem("cookies_allowed") || false
  );

  const handleClick = () => {
    localStorage.setItem("cookies_allowed", true);
    setAllowed(true);
  };

  return (
    <>
      {!isAllowed && (
        <div className="fixed bottom-6 left-0 w-full flex items-center justify-center">
          <div className="rounded-2xl shadow-lg bg-gradient-to-r from-black to-rocPurple-700 px-8 py-6 pt-10 space-y-2 mx-4">
            <h2 className="text-xl font-semibold text-white">Cookie Policy</h2>
            <p className="text-white text-xs">
              We use cookies to improve your experience on our website. By
              continuing to use our site, you accept our use of cookies.
            </p>
            <p className="text-white text-xs">
              For more information on how we use cookies and how you can manage
              them, please read our Cookie Policy.
            </p>
            <div className="flex justify-end items-center space-x-2">
              <button
                className="bg-white border-none outline-none rounded-full px-2 py-1 text-xs font-bold"
                onClick={handleClick}
              >
                Decline
              </button>
              <button
                className="bg-white border-none outline-none rounded-full px-2 py-1 text-xs font-bold"
                onClick={handleClick}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookies;
