import React from "react";
import { NavLink } from "react-router-dom";


export const ProductosServicios = () => {
  return (
    <section className="productos-servicios mt-5 ">
      <div className="row">
        <div className="servicios col-12 col-md-4 py-4">
          <h3 className="fw-bold text-center mt-3">Productos </h3>{" "}
          <div className="detalles-servicios w-100 mt-4 d-flex flex-column align-items-center justify-content-center">
            <img src="./assets/images/productos.svg" alt="productos" />
            <div className="productos-servicios__descripcion mt-3">
              <p>
                Contamos con la comercialización y distribución de computadores
                portátiles, de mesa, gaming y todo tipo de accesorios,
                periféricos, tecnología de video, sonido, software y mucho mas.{" "}
                <br />
                Encuentra en <strong>Host</strong> las mejores marcas.
              </p>
            </div>
          </div>
          <div className="mt-3 w-100 d-flex justify-content-center">
            <NavLink to="/productos">
              <button className="ver-mas" id="btn-ver-mas">
                <span className="ver-mas__circulo" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="boton-texto">Ver más</span>
              </button>
            </NavLink>
          </div>
        </div>
        <div className="productos col-12 col-md-4 py-4">
          <h3 className="fw-bold text-center mt-3">Servicios </h3>{" "}
          <div className="detalles-productos w-100 mt-4 d-flex flex-column align-items-center justify-content-center">
            <img src="./assets/images/servicios1.svg" alt="servicios" />
            <div className="productos-servicios__descripcion mt-3">
              <p>
                Ofrecemos soluciones oportunas de requerimientos e incidencias
                de los servicios informáticos y sistemas, así como a la
                detención de fallas, soporte he instalación de: <br />{" "}
                <strong>
                  Redes, servidores, PCs, impresoras, sistemas operativos,
                  software, cableado estructurado, conectividad, video
                  seguridad, comunicaciones unificadas.
                </strong>
              </p>
            </div>
          </div>
          <div className="mt-3 w-100 d-flex justify-content-center">
            <NavLink to="/servicios">
              <button className="ver-mas" id="btn-ver-mas">
                <span className="ver-mas__circulo" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="boton-texto">Ver más</span>
              </button>
            </NavLink>
          </div>
        </div>
        <div className="aliados col-12 col-md-4 py-4">
          <h3 className="fw-bold text-center mt-3">Aliados </h3>{" "}
          <div className="detalles-aliados w-100 mt-4 d-flex flex-column align-items-center justify-content-center">
            <img src="./assets/images/aliados2.svg" alt="aliados" />
            <div className="productos-servicios__descripcion mt-3">
              <p>
                Gracias a la alianza de <strong>HOST </strong>con{" "}
                <strong>ELECTRONICA LA 87</strong> préstamos servicios de
                mantenimiento y reparación de electrodomésticos de tu hogar o
                negocio.
              </p>
            </div>
          </div>
          <div className="mt-3 w-100 d-flex justify-content-center">
            <NavLink to="/electronica87">
              <button className="ver-mas" id="btn-ver-mas">
                <span className="ver-mas__circulo" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="boton-texto">Ver más</span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
