import React from "react";
import logo from "../../assets/logo/finetwork_black.svg";
import "./header.scss";

const Header = () => {
  return (
    <header className="header-component">
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
        <div className="container-fluid">
          <img className="navbar-brand" src={logo} alt="logo" />
          <span className="navbar-text">Llámanos GRATIS al 1777</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
