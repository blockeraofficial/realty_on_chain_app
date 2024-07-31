import { LocationLight, LocationMap } from "assets/svgs";
import GoogleMapReact from "google-map-react";

const Map = ({ lat = 10.99835602, lng = 77.01502627, zoom = 5 }) => {
  return (
    <div className="relative h-[500px] w-full rounded-3xl border-2 border-rocPurple-800 overflow-hidden">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        }}
        defaultCenter={{ lat, lng }}
        defaultZoom={zoom}
      ></GoogleMapReact>
      <button className="absolute top-4 left-4 px-6 py-2 rounded-full bg-rocPurple-800 bg-opacity-80 flex space-x-2 items-center">
        <LocationLight />
        <h6 className="text-rocWhite-900 font-manrope">Location</h6>
      </button>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <LocationMap />
      </div>
    </div>
  );
};

export default Map;
