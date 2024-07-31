import { useState } from "react";
import Status from "./Status";
import { LeftArrow, RightArrow } from "assets/svgs";

const Slider = ({ images, location, title, type, onClick }) => {
  const [active, setActive] = useState(0);

  const onLeftClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (active === 0) {
      setActive(images.length - 1);
    } else {
      setActive(active - 1);
    }
  };
  const onRightClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (active === images.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };
  const onImageClick = (index) => setActive(index);

  return (
    <div
      className="relative h-[370px] lg:h-[510px] bg-cover rounded-2xl bg-center bg-opacity-70 shadow-inner shadow-blur-md w-full cursor-pointer"
      onClick={() => onClick && onClick()}
    >
      <div
        className="h-full w-full bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: `url(${images[active]})` }}
      ></div>
      <div className="absolute top-0 left-0 right-0">
        <div className="bg-rocPurple-800 bg-opacity-40 rounded-t-2xl space-y-1 p-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2 items-center">
              <h6 className="text-rocWhite-900 font-manrope text-lg lg:text-3xl font-bold">
                {`${title}, ${location}`}
              </h6>
            </div>
            <Status value={type} showIcon />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-0 md:p-2">
        <div className="flex space-x-0 md:space-x-2 items-center justify-center">
          <LeftArrow
            className="cursor-pointer hidden md:block"
            onClick={onLeftClick}
          />
          <div className="flex space-x-2 justify-center bg-rocPurple-800 bg-opacity-80 rounded-b-2xl md:rounded-full px-3 py-2 w-full md:w-auto">
            {(images?.length > 6 ? images?.slice(0, 6) : images).map(
              (item, index) => {
                return (
                  <img
                    key={index}
                    src={item}
                    alt={`banner`}
                    className={`select-none w-10 h-10 md:w-16 md:h-16 rounded-full shadow-md object-cover cursor-pointer ${
                      index === active && "border-2 border-rocPurple-300"
                    }`}
                    onClick={() => onImageClick(index)}
                  />
                );
              }
            )}
          </div>
          <RightArrow
            className="cursor-pointer hidden md:block"
            onClick={onRightClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
