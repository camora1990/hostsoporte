import React from "react";
import { NavLink } from "react-router-dom";
import "./Nosostros.scss";

export const Nosotros = () => {
  return (
    <section className="row mt-5  nosotros pt-4">
      <h2 className="text-center mb-5 fw-bold">Sobre nosotros</h2>
      <div className="col-12 col-md-6 nosotros-contenedor-imagen mb-4">
        <img src="/nosotros.svg" alt="Nosotros" />
      </div>
      <div className="col-12 col-md-6 d-flex flex-column justify-content-around nosotros-contenedor-descripcion">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum magnam
          voluptatem ut necessitatibus in itaque distinctio voluptas adipisci
          aut nisi numquam atque, consequuntur quo. Enim culpa aspernatur earum
          laborum reprehenderit. Possimus voluptatum tenetur inventore sapiente
          odit, mollitia officiis voluptas doloremque cupiditate minima
          repellat. Blanditiis impedit, dolorum tempora perspiciatis suscipit
          animi, ex ab praesentium tempore sequi repudiandae recusandae illo,
          facere nostrum? Fugit blanditiis fuga eius praesentium, delectus
          ratione. Excepturi id alias repellendus molestias laborum repellat
          vitae assumenda quasi, ex ipsam, quia error sequi rem. Totam error
          iusto sed minus enim officia.
        </p>
        <NavLink to="/nosotros">
          <button className="ver-mas" id="btn-ver-mas">
            <span className="ver-mas__circulo" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="boton-texto">Ver mas</span>
          </button>
        </NavLink>
      </div>
    </section>
  );
};
