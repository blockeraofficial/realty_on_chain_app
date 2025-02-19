import React from "react";

import { rocPurpleLogo } from "assets/images";
import {
  Dashboard,
  Marketplace,
  Staking,
  Auction,
  Verification,
  Oracles,
  Partners,
  // LLC,
  FAQ,
  Cross,
} from "assets/svgs/sidebar";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const LINKS1 = [
  {
    id: 1,
    title: "Marketplace",
    href: "/",
    SVG: () => <Marketplace />,
  },
  {
    id: 2,
    title: "Portfolio",
    href: "/dashboard",
    SVG: () => <Dashboard />,
  },
  {
    id: 3,
    title: "Auction",
    href: "/auction",
    SVG: () => <Auction />,
  },
  {
    id: 4,
    title: "Staking",
    href: "/staking",
    SVG: () => <Staking />,
  },
  {
    id: 5,
    title: "Verification",
    href: "/verification",
    SVG: () => <Verification />,
  },
  {
    id: 6,
    title: "Oracles",
    href: "/oracles",
    SVG: () => <Oracles />,
  },
];

const LINKS2 = [
  // {
  //   id: 1,
  //   title: "Model",
  //   href: "/model",
  //   SVG: () => <LLC />,
  // },
  {
    id: 2,
    title: "FAQ",
    href: "/faq",
    SVG: () => <FAQ />,
  },
  {
    id: 3,
    title: "Partners",
    href: "/partners",
    SVG: () => <Partners />,
  },
];

const NavigationSection = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (item) => {
    navigate(`${item.href}`);
    onClose();
  };

  return (
    <div className="space-y-10 px-3">
      <div className="flex flex-col justify-center items-center space-y-4">
        {LINKS1.map((item) => {
          const SVG = item.SVG;
          return (
            <div
              className={`${
                location.pathname === item.href
                  ? "flex items-center rounded-full cursor-pointer border border-rocBlue-100 text-rocBlue-100 w-full px-5 py-1 space-x-3"
                  : "flex items-center rounded-full cursor-pointer w-full px-5 py-1 space-x-3"
              }`}
              key={item.id}
              onClick={() => handleClick(item)}
            >
              <SVG />
              <h4 className="text-rocBlack-100 text-lg font-manrope">
                {item.title}
              </h4>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center space-y-4">
        {LINKS2.map((item) => {
          const SVG = item.SVG;
          return (
            <div
              className={`${
                location.pathname === item.href
                  ? "flex items-center rounded-full cursor-pointer border border-rocBlue-100 text-rocBlue-100 w-full px-5 py-1 space-x-3"
                  : "flex items-center rounded-full cursor-pointer w-full px-5 py-1 space-x-3"
              }`}
              key={item.id}
              onClick={() => handleClick(item)}
            >
              <SVG />
              <h4 className="text-rocBlack-100 text-lg font-manrope">
                {item.title}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Sidebar = ({ isOpen, toggle, onClose }) => {
  return (
    <>
      <div className="hidden lg:block space-y-10 w-64 min-h-[calc(100vh_-_1rem)] lg:min-h-[calc(100vh_-_2rem)] bg-white rounded-[20px] px-3 py-6">
        <NavLink
          to={"/"}
          className="flex space-x-3 items-center justify-center"
        >
          <img src={rocPurpleLogo} alt="website-logo" className="h-16" />
          <h1 className="font-bold text-3xl text-rocBlue-100 font-prompt">
            ROC
          </h1>
        </NavLink>
        <NavigationSection onClose={onClose} />
      </div>
      {isOpen && (
        <div className="fixed lg:hidden flex flex-col justify-between w-screen h-screen bg-white left-0 top-0 md:-left-3 z-10 py-10">
          <div className="space-y-10">
            <div className="flex space-x-2 justify-between items-center px-6">
              <NavLink
                to={"/"}
                className="flex space-x-3 items-center justify-center"
              >
                <img
                  src={rocPurpleLogo}
                  alt="website-logo"
                  className="h-16"
                />
                <h1 className="font-bold text-3xl text-rocBlue-100 font-prompt">
                  ROC
                </h1>
              </NavLink>
              <Cross onClick={toggle} className="cursor-pointer" />
            </div>
            <NavigationSection onClose={onClose} />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
