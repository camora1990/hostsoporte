import { Carousel } from "antd";
import React, { useLayoutEffect } from "react";
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
        <div className="col-12 col-lg-5 d-flex flex-column justify-content-center hero">
          <h1>
            <span>&#160;</span>
          </h1>
          <p className="animate__animated animate__fadeInDown">
            ¡Quiere deshacerse de los problemas tecnológicos! ¡Solo llámanos!
          </p>
          <a>
            <button id="custom-button">Contacto</button>
          </a>
        </div>
        <div className="col-12 col-lg-7 mt-2">
          <Carousel autoplay={true}>
            <div>
              <h3 style={contentStyle}>imagen #1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>imagen #2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>imagen #3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>imagen #4</h3>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
