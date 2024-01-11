import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";

const HeaderFooter = () => {
  return (
    <>
      <Header />
      <div className="dash-Container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default HeaderFooter;
