import {
  Telegram,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Tiktok,
  Medium,
} from "assets/svgs";

import { useNavigate } from "react-router-dom";

const SOCIAL_LINKS = [
  {
    id: 1,
    name: "Twitter",
    src: "https://x.com/blockera_online",
    icon: () => <Twitter height={16} width={16} />,
  },
  {
    id: 2,
    name: "Telegram",
    src: "https://web.telegram.org/k/#@realtyonchain",
    icon: () => <Telegram height={20} width={20} />,
  },
  {
    id: 3,
    name: "Linkedin",
    src: "https://www.linkedin.com",
    icon: () => <Linkedin height={16} width={24} />,
  },
  {
    id: 4,
    name: "Youtube",
    src: "https://www.youtube.com/@blockera_online",
    icon: () => <Youtube height={22} width={22} />,
  },
  {
    id: 5,
    name: "Instagram",
    src: "https://www.instagram.com",
    icon: () => <Instagram height={20} width={20} />,
  },
  {
    id: 6,
    name: "Medium",
    src: "https://medium.com/@realtyonchain",
    icon: () => <Medium height={23} width={23} />,
  },
  {
    id: 7,
    name: "Tiktok",
    src: "https://www.tiktok.com/@blockera_online",
    icon: () => <Tiktok height={18} width={20} />,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`${item}`);
  };

  return (
    <div className="bg-rocBlack-200 w-full rounded-3xl md:rounded-full py-4 px-10 space-y-2">
      <div className="flex flex-col md:flex-row justify-end items-center md:justify-between">
        <h6 className="hidden md:block text-rocWhite-900 text-md font-bold">
          {`© 2024 Powered by Blockera LTD. All rights reserved.`}
        </h6>
        <h6 className="block md:hidden text-rocWhite-900 text-sm text-center font-manrope">
          {`© 2024 Powered by Blockera LTD.`}
        </h6>
        <h6 className="block md:hidden text-rocWhite-900 text-sm text-center font-manrope">
          All rights reserved.
        </h6>
        <div className="flex space-x-4 items-center mt-8 md:mt-0">
          {SOCIAL_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex pt-4 md:pt-0 justify-center md:justify-start space-x-4 text-white font-normal">
        <div
          className="cursor-pointer"
          onClick={() => handleClick("privacy-policy")}
        >
          Privacy Policy
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handleClick("terms-of-service")}
        >
          Terms of Service
        </div>
      </div>
    </div>
  );
};

export default Footer;
