import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="contenedor-footer">
      <div className="footer-padre">
        <img
          src={require("../../../assets/Home/shape-bg.png").default}
          alt="no internet"
        ></img>
      </div>
    </div>
  );
}

export default Footer;
