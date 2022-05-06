import React from "react";
import { NavLink } from "react-router-dom";
import "./Productos.scss";

export const ProductosServicios = () => {
  return (
    <section className="productos-servicios mt-5 ">
      <div className="row">
        <div className="servicios col-12 col-md-4">
          <h3 className="fw-bold text-center mt-3">Productos </h3>{" "}
          <div className="detalles-servicios w-100 mt-4 d-flex flex-column aling-items-center justify-content-center">
            <img src="/productos.svg" alt="productos" />
            <div className="productos-servicios__descripcion mt-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis consequuntur magnam minima natus eum sint velit, blanditiis nihil numquam at odio commodi perferendis quis nulla ab, quod fugit tenetur? Labore.</p>
            </div>
          </div>
          <div className="mt-3 w-100 d-flex justify-content-center">
            <NavLink to="/productos">
          <button className="ver-mas" id="btn-ver-mas">
            <span className="ver-mas__circulo" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="boton-texto">Ver mas</span>
          </button>
        </NavLink>
          </div>
        </div>
        <div className="productos col-12 col-md-4">
          <h3 className="fw-bold text-center mt-3">Servicios </h3>{" "}
          <div className="detalles-productos w-100 mt-4 d-flex flex-column aling-items-center justify-content-center">
            <img src="/servicios1.svg" alt="servicios" />
            <div className="productos-servicios__descripcion mt-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis consequuntur magnam minima natus eum sint velit, blanditiis nihil numquam at odio commodi perferendis quis nulla ab, quod fugit tenetur? Labore.</p>
            </div>
            
          </div>
          <div className="mt-3 w-100 d-flex justify-content-center">
            <NavLink to="/servicios">
          <button className="ver-mas" id="btn-ver-mas">
            <span className="ver-mas__circulo" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="boton-texto">Ver mas</span>
          </button>
        </NavLink>
          </div>
        </div>
        <div className="aliados col-12 col-md-4">
          <h3 className="fw-bold text-center mt-3">Aliados </h3>{" "}
          <div className="detalles-aliados w-100 mt-4 d-flex flex-column aling-items-center justify-content-center">
            <img src="/aliados2.svg" alt="aliados" />
            <div className="productos-servicios__descripcion mt-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis consequuntur magnam minima natus eum sint velit, blanditiis nihil numquam at odio commodi perferendis quis nulla ab, quod fugit tenetur? Labore.</p>
            </div>
          </div>
          <div className="mt-3 w-100 d-flex justify-content-center">
            <NavLink to="/electronica87">
          <button className="ver-mas" id="btn-ver-mas">
            <span className="ver-mas__circulo" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="boton-texto">Ver mas</span>
          </button>
        </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
