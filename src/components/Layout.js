import React from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <div className="sidebar">
          <SideNav />
        </div>
        {children}
      </div>
    </>
  );
};

export default Layout;
