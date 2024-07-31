const PROPERTIES = {
  1: {
    area: 86,
    bedrooms: 1,
    bathrooms: 1,
    apr: 15,
    irr: 12,
    // images
    images: [
      "https://dubai-luxury.property/uploads/images/2021-08/36397ed90c409fbf3443407418241568.jpg",
      "https://manage.tanamiproperties.com/Gallery/723/Thumb/2385.jpg",
      "https://manage.tanamiproperties.com/Gallery/723/Thumb/2384.jpg",
    ],

    // events detail
    onSale: "08/09/2000",
    propertyListed: "08/09/2000",
    upcoming: "08/09/2000",
    tokenCreated: "08/09/2000",
    propertyRegistered: "08/09/2000",
    // video detail
    videoURL: "https://www.youtube.com/embed/t0vsGY3TtaI",

    // financial
    address:
      "Damac Residential Business Center - 34a Marasi Dr - Business Bay - Dubai - United Arab Emirates",
    totalInvestmentValue: "500,000",
    underlyingAssetPrice: "437,000",
    legalAndKYCFees: "15,000",
    totalReturns: 28.9,
    projectedAppreciation: 15,
    annualPercentageRate: 16.3,
    annualGrossRents: "47,880",
    propertyManagement: "7,182",
    utilities: "3,500",
    maintenanceReserve: "1,197",
    annualCastFlow: "35,000",
    monthlyCashFlow: "2,500",
    // paragraph details
    description: [
      `With its exceptional location, Avanti is your vantage point to get the most out of vibrant city life. Within the contemporary 15-storey tower, a wealth of state-of-the-art facilities create an experience beyond the ordinary. `,
      `Avanti stands close to the Burj area with the city’s main attractions close to hand, and access to the key highways mere moments away. This stylish tower isn’t just a perfect place to call home – complete with its tasteful neutral furnishings, equipped ki`,
    ],
    // location details
    lat: 25.176999,
    lng: 55.272736,
  },
  2: {
    area: 101,
    bedrooms: 2,
    bathrooms: 1,
    apr: 17,
    irr: 15,
    // images
    images: [
      "https://manage.tanamiproperties.com/Gallery/698/Thumb/6206.webp",
      "https://manage.tanamiproperties.com/Gallery/698/Thumb/6207.webp",
      "https://manage.tanamiproperties.com/Gallery/698/Thumb/6208.webp",
    ],
    // events detail
    onSale: "08/09/2000",
    propertyListed: "08/09/2000",
    upcoming: "08/09/2000",
    tokenCreated: "08/09/2000",
    propertyRegistered: "08/09/2000",
    // video detail
    videoURL: "https://www.youtube.com/embed/Rq2cSIGOFpw",
    // financial
    address: "395 Sheikh Zayed Rd - Dubai - United Arab Emirates",
    totalInvestmentValue: "750,000",
    underlyingAssetPrice: "675,000",
    legalAndKYCFees: "20,000",
    totalReturns: 25.3,
    projectedAppreciation: 15,
    annualPercentageRate: 15.2,
    annualGrossRents: "54,320",
    propertyManagement: "7,320",
    utilities: "4,500",
    maintenanceReserve: "1,350",
    annualCastFlow: "47,230",
    monthlyCashFlow: "3,000",
    // paragraph details
    description: [
      `Rising along Sheikh Zayed Road, overlooking Dubai Canal, AYKON City (Tower B) opens your world to luxury living in one of the most prestigious neighbourhoods in Dubai. `,
      `Be neighbours with landmarks and global luxury brands through a collection of luxury serviced apartments, complemented by world-class leisure experiences strung together at the podium level of AYKON City.`,
    ],
    // location details
    lat: 25.1842913,
    lng: 55.24771519999999,
  },
};

const updateProperties = (propertyId, firstImage) => {
  if (PROPERTIES[propertyId]) {
    return {
      ...PROPERTIES[propertyId],
      images: [firstImage, ...PROPERTIES[propertyId].images],
    };
  } else {
    return PROPERTIES[1];
  }
};

export { updateProperties };
