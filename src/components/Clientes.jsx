import React, { useState } from "react";
import Slider from "react-slick";
import "./Clientes.scss";
export const Clientes = () => {
  const pathImagenes = [
    {
      path: "/clientes/logoFederacionCafeteros.png",
    },
    {
      path: "/clientes/logo-ucc.png",
    },
    {
      path: "/clientes/logoCasaMuseo.png",
    },
    {
      path: "/clientes/logoEden.png",
    },
   
    {
      path: "/clientes/logoFundacionParaTodos.png",
    },
    {
      path: "/clientes/logoMuseoAntioquia.png",
    },
    {
      path: "/clientes/logoNovoTechno.png",
    },
    {
      path: "/clientes/logoNutrition.png",
    },
    {
      path: "/clientes/logoSicro.png",
    },
    {
      path: "/clientes/logoTerron.png",
    },
    {
      path: "/clientes/logoUnSoloCorazon.png",
    },
    {
      path: "/clientes/MlogoMaIngenieros.png",
    },
  ];
  const [imagenesClientes] = useState(pathImagenes);

  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed:5000,
    dots:true,
    lazyLoad:true, 
    dotsClass: "slick-dots line-indicator",
    customPaging:(i)=><div style={{position:"absolute", width:"100%" ,top:-10,fontSize:16, opacity:0}}>{i}</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <>
     
      <section  className="clientes mt-3">
      <h2 className="text-center fw-bold">Nuestros Clientes</h2>
        <Slider className="my-5" {...settings}  >
          {imagenesClientes.map((image) => (
            <div className="container-img-cliente">
              <img key={image.path} src={image.path} alt={image.path} />
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};
