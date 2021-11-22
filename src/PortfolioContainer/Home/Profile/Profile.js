import React from "react";
import Typical from "react-typical";
import "./Profile.css";

function Profile() {
  return (
    <div className="contenedor-perfil">
      <div className="perfil-padre">
        <div className="detalles-perfil">
          <div className="colz">
            <div className="colz-icono">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="detalles-nombre-perfil">
            <span className="texto-primario">
              {""}
              Hello, I'm <span className="texto-remarcado"> Dani </span>
            </span>
          </div>
          <div className="detalles-perfil-funcion">
            <span className="texto-primario">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer💻",
                    1000,
                    "UI/UX Designer🪐",
                    1000,
                    "NFT Artist👾",
                    1000,
                  ]}
                />
              </h1>
              <span className="perfil-funcion-eslogan">
                esto es una prueba ya lo cambiare cuando piense algo.
              </span>
            </span>
          </div>
          <div className="opciones-perfil">
            <button className="btn btn-primario">
              {""}
              Contáctame {""}
            </button>
            <a href="#">
              <button className="btn btn-remarcado">testtt</button>
            </a>
          </div>
        </div>
        <div className="foto-perfil">
          <div className="foto-perfil-fondo"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
