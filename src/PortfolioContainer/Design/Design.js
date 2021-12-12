import React from "react";
import "./Design.css";
import bola from "../../assets/Design/bola.png";

function Design() {
  return (
    <div className="contenedor-design">
      <div className="design-padre row">
        <div className="container detalles-design col-6">
          <h1 className="encabezado-seccion">UI/UX Designer</h1>
          <p className="texto-seccion">
            ya pensare algo por ahora no estoy creativo x2 :(
            aaaaaaaaaaaabucleeebucleeebucleeebucleeebucleeebucleeebucleeebucleeebucleeebucleeebucleeebucleeebucleeebucleeebucleeebucleeebucleeebucleeebucleeebucleeebucleeebucleeebucleeebucleeebucleeebucleeebucleee
          </p>
        </div>
        <div className="container detalles-design col-6">
          <img className="bola" src={bola} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Design;
