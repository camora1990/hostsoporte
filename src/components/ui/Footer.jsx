import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-dark p-md-5 mt-2">
      <div className="container text-light">
        <div className="row d-flex justify-content-evenly">
          <div className="col-12 col-lg-4 ">
            <img src="./assets/images/logoHostSoporteMediano.png" alt="" />
            <p className="mb-4">
              No seas tímido, cuéntanos tu proyecto y te ayudaremos a crearlo o
              a mejorarlo.
            </p>
            <NavLink to="/hostsoporte/contacto">
              <button id="custom-button">Contacto</button>
            </NavLink>
          </div>
          <div className="col-12 col-lg-4">
            <h4
              className="text-light mt-0 d-flex align-items-center"
              style={{ height: 100 }}
            >
              Información
            </h4>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-location-dot m-2"></i>
              <span>Calle 43 No 88 75 edificio San Francisco</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-user m-2"></i>
              <span>Carlos Andres Morales Sánchez</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-envelope m-2"></i>
              <span>Gerencia@hostsoporte.com</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-phone m-2"></i>
              <span>3188267630/3188267628</span>
            </div>
          </div>
          <hr className="mt-3" />
          <div className="row mt-2">
            <div className="col-12 ">
              <ul className="d-flex justify-content-center p-2">
                <li className="facebook">
                  {" "}
                  <a
                    href="https://www.facebook.com/host.soluciones"
                    target={"_blank"}
                  >
                    <i className="fa fa-facebook fa-1x"></i>
                  </a>
                </li>
                <li className="twitter">
                  <a href="https://twitter.com/?lang=es" target={"_blank"}>
                    <i className="fa fa-twitter fa-1x"></i>
                  </a>
                </li>
                <li className="instagram">
                  <a href="https://www.instagram.com/" target={"_blank"}>
                    <i className="fa fa-instagram fa-1x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
