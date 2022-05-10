import React from "react";
import { NavLink } from "react-router-dom";

export const Nosotros = ({ mostrar }) => {
  return (
    <section className="row mt-5  nosotros py-4 px-3">
      <h2 className="text-center mb-5 fw-bold">Sobre nosotros</h2>
      <div className="col-12 col-md-6 nosotros-contenedor-imagen mb-4">
        <img src="/assets/images/nosotros1.svg" alt="Nosotros" />
      </div>
      <div className="col-12 col-md-6 d-flex flex-column justify-content-around nosotros-contenedor-descripcion">
        <div className={`${mostrar ? "descripcion-nosotros" : ""}`}>
          <p>
            Los continuos cambios tecnológicos crean las necesidades actuales en
            soluciones TIC de cada cliente, nuestra empresa concentra todos sus
            recursos en la asesoría, diseño e implementación de las soluciones a
            la medida para potencializar sus proyectos con la utilización de las
            tecnologías de información, atendiendo sus requerimientos e
            inversiones en tecnología y convirtiéndolos en beneficios tangibles
            y productivos generando propuestas de valor para cada uno de
            nuestros clientes.
          </p>
          <h4 className="fw-bold">Historia</h4>
          <p>
            <br />
            <strong>HOST soluciones tecnológicas</strong>, somos una empresa
            fundada en 2013, creada para apoyar a las empresas y hogares,
            ofreciendo una variedad de servicios y soluciones tecnológicas de
            alta calidad, buscando así que se aumenten su productividad
            brindándoles las herramientas necesarias para dicho fin. Comenzamos
            como una empresa especializada en la venta, mantenimiento y
            reparación de equipos de cómputo, con el paso del tiempo entendimos
            que era suficiente si queríamos estar un escalón por encima de
            nuestros pares, así que nos dimos a la tarea de capacitar a nuestro
            personal para así incorporar a nuestro portafolio una serie de
            servicios que son fundamentales como lo son, redes de cableado
            estructurado, conectividad, zonas wifi, video seguridad,
            comunicaciones unificadas,{" "}
            <strong>
              <span>
                <NavLink to="/hostsoporte/servicios">aquí</NavLink>
              </span>
            </strong>{" "}
            puedes conocer más acerca de nuestros servicios.
          </p>
        </div>

        {mostrar && (
          <NavLink className="mt-3" to="/hostsoporte/nosotros">
            <button className="ver-mas" id="btn-ver-mas">
              <span className="ver-mas__circulo" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="boton-texto">Ver más</span>
            </button>
          </NavLink>
        )}
      </div>
    </section>
  );
};

Nosotros.defaultProps = {
  mostrar: true,
};
