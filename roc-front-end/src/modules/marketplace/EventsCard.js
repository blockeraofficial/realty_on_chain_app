import { Events } from "assets/svgs";
import { Property, Star, Token, Document } from "assets/svgs/events";

const EventsCard = ({ property }) => {
  const events = [
    {
      id: 1,
      name: "Status : On sale",
      date: property?.onSale,
      logo: () => <Star />,
    },
    {
      id: 2,
      name: "Property listed",
      date: property?.propertyListed,
      logo: () => <Property />,
    },
    {
      id: 3,
      name: "Status: Upcoming",
      date: property?.upcoming,
      logo: () => <Star />,
    },
    {
      id: 4,
      name: "Token Created",
      date: property?.tokenCreated,
      logo: () => <Token />,
    },
    {
      id: 5,
      name: "Property registered",
      date: property?.propertyRegistered,
      logo: () => <Document />,
    },
  ];
  return (
    <div className="w-full border-2 border-rocPurple-800 rounded-3xl px-3 py-7 relative flex justify-center items-center">
      <div className="absolute -top-4 rounded-full flex space-x-2 items-center px-1 py-1 bg-rocWhite-300 text-rocPurple-800 ">
        <Events />
        <h6 className="text-lg font-bold whitespace-nowrap font-manrope">{`Events`}</h6>
      </div>
      <div className="space-y-3 w-full">
        {events.map((item) => {
          const Icon = item.logo;
          return (
            <div
              className="flex rounded-2xl border-2 border-rocPurple-800 h-20"
              key={item.id}
            >
              <div className="rounded-l-xl h-full bg-rocPurple-800 p-2 flex justify-center items-center w-16">
                <Icon />
              </div>
              <div className="w-full flex flex-col space-y-2 justify-center px-4">
                <h6 className="font-bold font-manrope text-lg text-rocPurple-800 text-left">
                  {item.name}
                </h6>
                <h6 className="font-light font-manrope text-md text-rocPurple-800 text-left">
                  {item.date}
                </h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventsCard;
