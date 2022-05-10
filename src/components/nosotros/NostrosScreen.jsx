import React from "react";
import { Nosotros } from "./Nosotros";

export const NostrosScreen = () => {
  return (
    <>
      <Nosotros mostrar={false} />
      <section className="corporativo mb-5">
        <div className="row mt-3 p-3">
          <h3 className="text-center fw-bold">MISIÓN</h3>
          <div className="coprporativo-imagen col-12 col-md-4 mt-3 d-flex justify-content-center">
            <img src="./assets/images/mision.svg" alt="mision" />
          </div>
          <div className="corporativo-descrpcion col-12 col-md-8 mt-3 d-flex align-items-center">
            <p>
              Somos aliados estratégicos de nuestros clientes, sirviendo con
              entrega, responsabilidad, compromiso y respeto, generando
              relaciones de confianza a largo plazo e innovando en soluciones
              con tecnología de vanguardia.
            </p>
          </div>
        </div>
        <div className="row mt-3 d-flex flex-md-row-reverse p-3">
          <h3 className="text-center fw-bold">VISIÓN</h3>
          <div className="coprporativo-imagen col-12 col-md-4 mt-3 d-flex justify-content-center">
            <img src="./assets/images/vision.svg" alt="vision" />
          </div>
          <div className="corporativo-descrpcion col-12 col-md-8 mt-3 d-flex align-items-center">
            <p>
              Alcanzar el reconocimiento como aliado estratégico en las
              soluciones de Tecnologías de la Información y las Comunicaciones
              de nuestros clientes, con el crecimiento apropiado soportado en la
              seriedad y cumplimiento de nuestro equipo de trabajo y
              consolidándonos como uno de los mejores integradores tecnológicos
              del sector.
            </p>
          </div>
        </div>
        <div className="row mt-3 p-3">
          <h3 className="text-center fw-bold">PRINCIPIOS Y VALORES</h3>
          <div className="coprporativo-imagen col-12 col-md-4 mt-3 d-flex justify-content-center">
            <img src="./assets/images/politicas.svg" alt="mision" />
          </div>
          <div className="corporativo-descrpcion col-12 col-md-8 mt-3 d-flex align-items-center">
            <p>
            Somos una empresa caracterizada por contar en nuestro equipo de
              trabajo un personal con una alta calidad humana y profesionales
              íntegros donde los valores principales que resaltan nuestros
              aliados y clientes son la honestidad, el cumplimiento,
              credibilidad, confianza y compromiso en los servicios y productos
              que ofrecemos.
            </p>
          </div>
        </div>
       
      </section>
    </>
  );
};
