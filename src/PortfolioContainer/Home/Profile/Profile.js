import React from "react";
import Typical from "react-typical";
import "./Profile.css";

function Profile() {
  return (
    <div className="contenedor-perfil">
      <div className="perfil-padre">
        <div className="detalles-perfil">
          <div className="colz"></div>
          <div className="detalles-nombre-perfil">
            <span className="texto-primario">
              {""}
              Hola! Bienvenido a
              <span className="texto-remarcado"> Wiblyx </span>
            </span>
          </div>
          <div className="detalles-perfil-funcion">
            <span className="texto-primario">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Desarrollo web💻",
                    1000,
                    "Diseño gráfico🪐",
                    1000,
                    "SEO y marketing👾",
                    1000,
                    "Blockchain 👾",
                    1000,
                  ]}
                />
              </h1>
              <span className="perfil-funcion-eslogan">
                Empieza cualquier tipo de negocio ahora.
              </span>
            </span>
          </div>
          <div className="opciones-perfil">
            <button className="btn btn-primario">
              {""}
              Contáctanos {""}
            </button>
            <a href="#">
              <button className="btn btn-remarcado">Nuestro trabajo</button>
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
