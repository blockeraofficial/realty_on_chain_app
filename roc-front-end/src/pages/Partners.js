import { DamacLogo, BinghattiLogo, EmaarLogo } from "assets/images";
import { PartnerCard } from "modules/partners";

const PARTNERS = [
  {
    id: 1,
    logo: DamacLogo,
    name: "Damac Properties",
    description:
      "DAMAC Properties is part of DAMAC Group that has been shaping the Middle East's luxury real estate market since 1982, delivering iconic residential, commercial and leisure properties across the region and beyond.",
    partner_since: "24/06/2024",
    website_url: "https://promotions.damacproperties.com/",
  },
  {
    id: 2,
    logo: BinghattiLogo,
    name: "BINGHATTI",
    description:
      "Binghatti is one of the largest property developers and holding companies in the United Arab Emirates founded in 2008. Real estate developer Binghatti is well-known for its commitment to quality and innovation. With a deep understanding of the market and a commitment to delivering exceptional projects.",
    partner_since: "04/04/2024",
    website_url: "https://www.binghatti.com/",
  },
  {
    id: 3,
    logo: EmaarLogo,
    name: "EMAAR Properties",
    description:
      "Emaar Properties is one of the world’s most valuable and admired real estate development companies. With proven competencies in properties, shopping malls & retail and hospitality & leisure, Emaar shapes new lifestyles with a focus on design excellence, build quality and timely delivery.",
    partner_since: "24/05/2024",
    website_url: "https://www.emaar.com/",
  },
];

const PartnersPage = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-1">
      <h1 className="font-bold font-prompt text-3xl md:text-2xl lg:text-4xl text-rocPurple-800 font-prompt">{`PARTNERS`}</h1>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PARTNERS.map((item) => (
          <PartnerCard
            key={item.id}
            name={item.name}
            description={item.description}
            logo={item.logo}
            website_url={item.website_url}
            partner_since={item.partner_since}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnersPage;
