import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const menuRef = useRef();

  const handleClick = () => {
    menuRef.current.ariaExpanded === "true" && menuRef.current.click();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fs-6 position-sticky">
      <div className="container-fluid container">
        <NavLink
          to="/hostsoporte/"
          className={` ${(navData) => (navData.isActive ? "" : "")}`}
          onClick={handleClick}
        >
          <img
            src="./assets/images/logoHostSoporte.png"
            alt="logoHostSoporte"
          />
        </NavLink>
        <button
          className="navbar-toggler p-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navBarHost"
          aria-controls="navBarHost"
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
        <div className="collapse navbar-collapse" id="navBarHost">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item  d-lg-flex align-items-lg-center ">
              <NavLink
                to="/hostsoporte/"
                className={`nav-link ${(navData) =>
                  navData.isActive ? "active" : ""}`}
                onClick={handleClick}
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item  d-lg-flex align-items-lg-center">
              <NavLink
                to="/hostsoporte/nosotros"
                className={`nav-link ${(navData) =>
                  navData.isActive ? "active" : ""}`}
                onClick={handleClick}
              >
                Sobre nosotros{" "}
              </NavLink>
            </li>
            <li className="nav-item dropdown d-lg-flex align-items-lg-center">
              <NavLink
                onClick={handleClick}
                className={`nav-link dropdown-toggle`}
                to="/hostsoporte/servicios"
              >
                Servicios
              </NavLink>
              <ul className="dropdown-menu bg-dark">
                <div className="fondo-menu">
                  <li>
                    <NavLink
                      onClick={handleClick}
                      to="/hostsoporte/servicios/detalle-1/#1"
                      className={`dropdown-item ${(navData) =>
                        navData.isActive ? "active" : ""}`}
                    >
                      Mantenimiento y reparaci??n de computadores
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleClick}
                      to="/hostsoporte/servicios/detalle-2/#2"
                      className={`dropdown-item ${(navData) =>
                        navData.isActive ? "active" : ""}`}
                    >
                      Cableado estructurado
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleClick}
                      to="/hostsoporte/servicios/detalle-3/#3"
                      className={`dropdown-item ${(navData) =>
                        navData.isActive ? "active" : ""}`}
                    >
                      Conectividad
                    </NavLink>
                  </li>
                  <li></li>
                  <li>
                    <NavLink
                      onClick={handleClick}
                      to="/hostsoporte/servicios/detalle-4/#4"
                      className={`dropdown-item ${(navData) =>
                        navData.isActive ? "active" : ""}`}
                    >
                      Zonas Wifi
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleClick}
                      to="/hostsoporte/servicios/detalle-5/#5"
                      className={`dropdown-item ${(navData) =>
                        navData.isActive ? "active" : ""}`}
                    >
                      Video-seguridad
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleClick}
                      to="/hostsoporte/servicios/detalle-6/#6"
                      className={`dropdown-item ${(navData) =>
                        navData.isActive ? "active" : ""}`}
                    >
                      Comunicaciones unificadas
                    </NavLink>
                  </li>
                </div>
              </ul>
            </li>
            <li className="nav-item dropdown d-lg-flex align-items-lg-center ">
              <NavLink
                onClick={handleClick}
                className={`nav-link dropdown-toggle ${(navData) =>
                  navData.isActive ? "active" : ""}`}
                to="/hostsoporte/productos"
              >
                Productos
              </NavLink>
              <div className="bg-dark"></div>
              <ul className="dropdown-menu bg-dark">
                <div className="fondo-menu">
                  <li>
                    <NavLink
                      onClick={handleClick}
                      to="/hostsoporte/productos/detalle-1/#1"
                      className={`dropdown-item ${(navData) =>
                        navData.isActive ? "active" : ""}`}
                    >
                      Computadores
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleClick}
                      to="/hostsoporte/productos/detalle-2/#2"
                      className={`dropdown-item ${(navData) =>
                        navData.isActive ? "active" : ""}`}
                    >
                      Perif??ricos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleClick}
                      to="/hostsoporte/productos/detalle-3/#3"
                      className={`dropdown-item ${(navData) =>
                        navData.isActive ? "active" : ""}`}
                    >
                      Software
                    </NavLink>
                  </li>
                </div>
              </ul>
            </li>

            <li className="nav-item  d-lg-flex align-items-lg-center">
              <NavLink
                onClick={handleClick}
                to="/hostsoporte/contacto"
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
