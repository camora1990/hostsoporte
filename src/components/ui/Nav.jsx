import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fs-6 position-sticky">
      <div className="container-fluid container">
        <NavLink to="/" className="navbar-brand">
          <img src="/logoHostSoporte.png" alt="logoHostSoporte" />
        </NavLink>
        <button
          className="navbar-toggler p-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="navMenu"
          onClick={(e) => {
            const menu = document.getElementById("navMenu");
            menu.classList.toggle("active");
            console.log(e);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item d-flex align-items-center ">
              <NavLink
                to="/"
                className={`nav-link ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item d-flex align-items-center">
              <NavLink
                to="/nosotros"
                className={`nav-link ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                Sobre nosotros{" "}
              </NavLink>
            </li>
            <li className="nav-item d-flex align-items-center">
              <a href="/#" className="nav-link">
                Servicios{" "}
              </a>
            </li>
            
            <li className="nav-item d-flex align-items-center">
              <NavLink
                to="/contacto"
                className={`nav-link ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                Contacto{" "}
              </NavLink>
            </li>
            <li className="nav-item d-flex align-items-center">
              <a className="nav-link nav-soporte" href="" target={"_blank"}>
                <button id="custom-button">SOPORTE</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
