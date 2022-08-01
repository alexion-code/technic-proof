import React from "react";
import logoWhite from "../../assets/logo/finetwork_ng.svg";
import logo2 from "../../assets/logo/logo2.png";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer-component">
      <div className="footer-component__row">
        <div className="footer-component__column-left">
          <img className="footer-logo" src={logoWhite} alt="footer logo" />
        </div>
        <div className="footer-component__column-center">
          <div className="footer-component__column-center-info">
            <span className="footer-component__column-center-info-up">
              Atención al cliente
            </span>
            <div className="footer-component__column-center-info-down">
              <span className="footer-component__column-center-info-left">
                De Lunes a Domingo desde las 9:00 hasta las 22:00h
              </span>
              <span className="footer-component__column-center-info-right">
                Te llamamos +
              </span>
            </div>
          </div>
        </div>
        <div className="footer-component__column-right">
          <img className="footer-logo2" src={logo2} alt="footer logo2" />
        </div>
      </div>
      <hr />
      <div className="footer-component__row">
        <div className="footer-component__row-nav">
          <a href="#">Aviso legal</a>
          <a href="#">Política de cookies</a>
          <a href="#">Política de privacidad</a>
          <a href="#">Términos y condiciones</a>
        </div>
        <span className="footer-component__row-copyright">
          © Finetword - All Rights Reserved. - 2020 || Servicios prestados por
          Vodafone Enabler España S.L.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
