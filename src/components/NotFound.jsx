import React, { useEffect } from "react";
import { scrollTop } from "../helpers/scrollTop";

export const NotFound = () => {
  useEffect(() => {
    scrollTop()
  }, [])
  
  return (
    <div className="container-not-found d-flex text-center flex-column justify-content-center mt-5 not-found-container">
      <h1>Pagina en construccion</h1>
      <img className="mt-5"src="./assets/images/aliados.svg" alt="notfount" />
    </div>
  );
};
