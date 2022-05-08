import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
  const menuRef = useRef();
  const prueba = (navData)=>{
    debugger
    console.log(navData);
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fs-6 position-sticky">
      <div className="container-fluid container">
        <NavLink
          to="/"
          className={` ${(navData) => (navData.isActive ? "" : "")}`}
        >
          <img src="assets/images/logoHostSoporte.png" alt="logoHostSoporte" />
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
          ref={menuRef}
          onClick={(e) => {
            menuRef.current.classList.toggle("menu-active");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item  d-lg-flex align-items-lg-center ">
              <NavLink
                to="/"
                className={`nav-link ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item  d-lg-flex align-items-lg-center">
              <NavLink
                to="/nosotros"
                className={`nav-link ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                Sobre nosotros{" "}
              </NavLink>
            </li>
            <li className="nav-item dropdown d-lg-flex align-items-lg-center">
              <NavLink
                className={`nav-link dropdown-toggle`}
                to="/servicios"
              >
                Servicios
              </NavLink>
              <ul className="dropdown-menu bg-dark">
                <div className="fondo-menu">
                  <li>
                    <NavLink to="/servicios/detalle-1/#1" className={`dropdown-item ${(navData) =>
                  navData.isActive ? "active" : ""}`}>
                      Mantenimiento y reparación de computadores
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/servicios/detalle-2/#2" className={`dropdown-item ${(navData) =>
                  navData.isActive ? "active" : ""}`}>
                      Cableado estructurado
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/servicios/detalle-3/#3" className={`dropdown-item ${(navData) =>
                  navData.isActive ? "active" : ""}`}>
                      Conectividad
                    </NavLink>
                  </li>
                  <li></li>
                  <li>
                    <NavLink to="/servicios/detalle-4/#4" className={`dropdown-item ${(navData) =>
                  navData.isActive ? "active" : ""}`}>
                      Zonas Wifi
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/servicios/detalle-5/#5" className={`dropdown-item ${(navData) =>
                  navData.isActive ? "active" : ""}`}>
                      Video-seguridad
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/servicios/detalle-6/#6" className={`dropdown-item ${(navData) =>
                  navData.isActive ? "active" : ""}`}>
                      Comunicaciones unificadas
                    </NavLink>
                  </li>
                </div>
              </ul>
            </li>
            <li className="nav-item dropdown d-lg-flex align-items-lg-center ">
              <NavLink
                className={`nav-link dropdown-toggle ${(navData) =>
                  navData.isActive ? "active" : ""}`}
                to="/productos"
              >
                Productos
              </NavLink>
              <div className="bg-dark"></div>
              <ul className="dropdown-menu bg-dark">
                <div className="fondo-menu">
                  <li>
                    <NavLink to="/productos/detalle-1/#1" className={`dropdown-item ${(navData) =>
                  navData.isActive ? "active" : ""}`}>
                      Computadores
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/productos/detalle-2/#2"
                      className={`dropdown-item ${(navData) =>
                        navData.isActive ? "active" : ""}`}
              
                    >
                      Periféricos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/productos/detalle-3/#3" className={`dropdown-item ${(navData) =>
                  navData.isActive ? "active" : ""}`}>
                      Software
                    </NavLink>
                  </li>
                </div>
              </ul>
            </li>

            <li className="nav-item  d-lg-flex align-items-lg-center">
              <NavLink
                to="/contacto"
                className={`nav-link ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                Contacto{" "}
              </NavLink>
            </li>
            <li className="nav-item  d-lg-flex align-items-lg-center">
              <a className="nav-link nav-soporte" href="#" target={"_blank"}>
                <button id="custom-button">SOPORTE</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
