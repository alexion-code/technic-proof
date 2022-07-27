import React, { useContext, useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = (props: any) => {
  return (
    <div className="layout-component">
      <Header />
      <div
        className={`layout-component__content ${
          props?.className ? props?.className : ""
        }`}
      >
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
