import { Carousel } from "antd";
import React, { useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import "./InicioScreen.scss";
const contentStyle = {
  height: "350px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export const InicioScreen = () => {
  useLayoutEffect(() => {
    const title = "¡Nuestra pasión es dar futuro a tu tecnología!";
    const title2 = [...title];
    const h1 = document.querySelector(".hero h1");

    h1.innerHTML = "";
    const addText = () => {
      h1.innerHTML += title2.shift();
      title2.length == 0 && detenerInterval();
    };
    const interval = setInterval(addText, 30);
    const detenerInterval = () => {
      clearInterval(interval);
    };
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
          <NavLink to="/contacto">
            <button id="custom-button">Contacto</button>
          </NavLink>
        </div>
        <div className="col-12 col-lg-7 py-3">
          <Carousel className="carrusel" autoplay={true} dotPosition={"top"}>
            <div className="w-100 carrusel-img position-relative">
              <img src="/img1.jpg" alt="" />
              <div className="position-absolute bottom-0 start-0 bg-dark opacity-50 py-md-2">
                <h5 className="text-center text-light">Titulo</h5>
                <p className="px-2 text-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore amet esse praesentium architecto ab beatae illum
                  aspernatur ex voluptate omnis maiores laudantium impedit quam
                  nemo, quod animi voluptas! Obcaecati, doloremque.
                </p>
              </div>
            </div>
            <div className="w-100 carrusel-img position-relative">
              <img src="/img2.jpg" alt="" />
              <div className="position-absolute bottom-0 start-0 bg-dark opacity-50 py-md-2">
                <h5 className="text-center text-light">Titulo</h5>
                <p className="px-2 text-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore amet esse praesentium architecto ab beatae illum
                  aspernatur ex voluptate omnis maiores laudantium impedit quam
                  nemo, quod animi voluptas! Obcaecati, doloremque.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
