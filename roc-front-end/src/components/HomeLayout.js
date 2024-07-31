import React, { useState } from "react";
import { Sidebar, Navbar, Footer } from "components";
import Cookies from "./Cookies";

const HomeLayout = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleSidebar = () => setOpen(!isOpen);
  const onCloseSidebar = () => setOpen(false);

  return (
    <div className="m-2 md:m-4 flex space-x-0 md:space-x-3 font-manrope">
      <Sidebar
        isOpen={isOpen}
        toggle={toggleSidebar}
        onClose={onCloseSidebar}
      />
      <div className="flex flex-col space-y-2 w-full min-h-[calc(100vh_-_1rem)] md:min-h-[calc(100vh_-_2rem)]">
        <Navbar toggle={toggleSidebar} />
        <div className="flex-1 mx-auto p-4 w-full lg:max-w-[1300px]">
          {children}
        </div>
        <Footer />
      </div>
      <Cookies />
    </div>
  );
};

export default HomeLayout;
