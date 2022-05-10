import React, { useEffect, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import Aos from "aos";
import { Clientes } from "../clientes/Clientes";
import { Nosotros } from "../nosotros/Nosotros";
import { ProductosServicios } from "./ProductosServicios";

export const InicioScreen = () => {
  useLayoutEffect(() => {
    const titulo = "¡Nuestra pasión es dar futuro a tu tecnología!";
    const tituloTmp = [...titulo];
    const h1 = document.querySelector(".hero h1");

    h1.innerHTML = "";
    const addText = () => {
      h1.innerHTML += tituloTmp.shift();
      tituloTmp.length === 0 && detenerInterval();
    };
    const interval = setInterval(addText, 30);
    const detenerInterval = () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-lg-5 d-flex flex-column justify-content-center hero mb-3">
          <h1>
            <span>&#160;</span>
          </h1>
          <p className="animate__animated animate__fadeInDown">
            ¡Quiere deshacerse de los problemas tecnológicos! ¡Solo llámanos!
          </p>
          <NavLink  to="/hostsoporte/contacto">
            <button id="custom-button">Contacto</button>
          </NavLink>
        </div>
        <div className="col-12 col-lg-7 py-3">
          <div data-aos="fade-left">
            <Slider
              className="contenedor-slider"
              autoplay={true}
              arrows={false}
            >
              <div className="contenedor-slider-img position-relative">
                <img src="./assets/images/img1.jpg" alt="" />
                <div className="position-absolute bottom-0 start-0 bg-dark opacity-50 py-md-2">
                  <h5 className="text-center text-light">Titulo</h5>
                  <p className="px-2 text-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore amet esse praesentium architecto ab beatae illum
                    aspernatur ex voluptate omnis maiores laudantium impedit
                    quam nemo, quod animi voluptas! Obcaecati, doloremque.
                  </p>
                </div>
              </div>
              <div className="contenedor-slider-img position-relative">
                <img src="./assets/images/img2.jpg" alt="" />
                <div className="position-absolute bottom-0 start-0 bg-dark opacity-50 py-md-2">
                  <h5 className="text-center text-light">Titulo</h5>
                  <p className="px-2 text-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore amet esse praesentium architecto ab beatae illum
                    aspernatur ex voluptate omnis maiores laudantium impedit
                    quam nemo, quod animi voluptas! Obcaecati, doloremque.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div data-aos="fade-left">
        <Nosotros mostrar={true}/>
      </div>
      <div data-aos="slide-right">
        <ProductosServicios />
      </div>
      <div data-aos="fade-down">
        <Clientes />
      </div>
    </div>
  );
};
