import { LoadingContainer, Title } from "components";
import { AuctionCard } from "modules/auction";

const imageURL =
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww";

const auctions = [
  {
    id: 1,
    location: "Jumeriah Park, Dubai, UAE",
    image: imageURL,
    name: "#4523",
    price: "48,160",
    owned: "8.6%",
    percentage: "15% APR",
  },
  {
    id: 2,
    location: "Evergreen Street, Bali, Indonesia",
    image: imageURL,
    name: "#0520",
    price: "125,300",
    owned: "8.6%",
    percentage: "15% APR",
  },
  {
    id: 3,
    location: "Palms Road, Dubai, UAE",
    image: imageURL,
    name: "#0521",
    price: "1,500",
    owned: "8.6%",
    percentage: "15% APR",
  },
  {
    id: 4,
    location: "Evergreen Street, Bali, Indonesia",
    image: imageURL,
    name: "#0520",
    price: "125,300",
    owned: "8.6%",
    percentage: "15% APR",
  },
  {
    id: 5,
    location: "Evergreen Street, Bali, Indonesia",
    image: imageURL,
    name: "#0520",
    price: "225,300",
    owned: "8.6%",
    percentage: "15% APR",
  },
  {
    id: 6,
    location: "Evergreen Street, Bali, Indonesia",
    image: imageURL,
    name: "#0520",
    price: "125,300",
    owned: "8.6%",
    percentage: "15% APR",
  },
  {
    id: 7,
    location: "Jumeriah Park, Dubai, UAE",
    image: imageURL,
    name: "#4523",
    price: "48,160",
    owned: "8.6%",
    percentage: "15% APR",
  },
];

const AuctionPage = () => {
  return (
    <LoadingContainer
      isLoading={false}
      isError={true}
      errorMessage={"COMING SOON"}
    >
      <div className="space-y-6 p-1">
        <div className="flex justify-center md:justify-between items-center">
          <Title>{`AUCTION`}</Title>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {auctions.map((item) => (
            <AuctionCard
              key={item.id}
              name={item.name}
              location={item.location}
              image={item.image}
              owned={item.owned}
              percentage={item.percentage}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </LoadingContainer>
  );
};

export default AuctionPage;
