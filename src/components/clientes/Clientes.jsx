import React from "react";
import Slider from "react-slick";
import { imagenesClientes } from "../../data/imaganesClientes";
import "./Clientes.scss";
export const Clientes = () => {

  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
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
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
         
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <>
      <section  className="clientes mt-5">
      <h2 className="text-center fw-bold">Nuestros clientes</h2>
        <Slider className="my-5" {...settings}  >
          {imagenesClientes.map((image) => (
            <div key={image.path} className="container-img-cliente">
              <img  src={image.path} alt={image.path} />
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};
