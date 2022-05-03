import React from "react";
import "./Nav.scss";
export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fs-6">
      <div className="container-fluid container">
        <a href="/#" className="navbar-brand">
          <img src="/logoHostSoporte.png" alt="" />
        </a>
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
              <a href="" className="nav-link active">
                Inicio
              </a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <a href="/#" className="nav-link">
                Servicios{" "}
              </a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <a href="/#" className="nav-link">
                Sobre nosotros{" "}
              </a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <a href="/#" className="nav-link">
                Contacto{" "}
              </a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <a className="nav-link nav-soporte" href="">
                <button id="custom-button">SOPORTE</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
