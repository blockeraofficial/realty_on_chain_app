import { DLDLogo, PropertyFinderLogo } from "assets/images";
import { OracleCard } from "modules/oracles";
import { Title } from "components";

const ORACLES = [
  {
    id: 1,
    logo: DLDLogo,
    name: "DXB INTERACT",
    description:
      "DXB interact is a helpful real estate tool used by both buyers and sellers in Dubai, as well as real estate professionals. Is powered by the Dubai Land Department, with the goal of creating full transparency in the Dubai real estate market.",
    website_url: "https://dxbinteract.com/",
  },
  {
    id: 2,
    logo: PropertyFinderLogo,
    name: "Property Finder",
    description:
      "Property Finder is a leading real estate portal covering the sales and rental marketplace with operations across Egypt, KSA, UAE, Bahrain, and Qatar. Connecting millions of property seekers with thousands of real estate professionals within the region.",
    website_url: "https://www.propertyfinder.ae/",
  },
];

const OraclesPage = () => {
  return (
    <div className="space-y-6 p-1">
        <Title
          className={"text-center md:text-left pt-2"}
        >ORACLES
        </Title>
      <div className="grid grid-col-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        {ORACLES.map((item) => (
          <OracleCard
            key={item.id}
            name={item.name}
            description={item.description}
            logo={item.logo}
            website_url={item.website_url}
          />
        ))}
      </div>
    </div>
  );
};

export default OraclesPage;
