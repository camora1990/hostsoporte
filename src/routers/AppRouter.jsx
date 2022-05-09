import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import { InicioScreen } from "../components/inicio/InicioScreen";
import { Nav } from "../components/ui/Nav";
import { Footer } from "../components/ui/Footer";
import { WhatsAppIcon } from "../components/ui/WhatsAppIcon";
import { NotFound } from "../components/NotFound";
import { NostrosScreen } from "../components/nosotros/NostrosScreen";


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <div className="container">
          <WhatsAppIcon />
          <Routes>
            <Route path="/hostsoporte/" element={<InicioScreen />} />
            <Route path="/" element={<InicioScreen />} />
            <Route path="/Nosotros" element={<NostrosScreen />} />
            <Route path="/*" element={<NotFound/>}/>
          </Routes>
        </div>
        <Footer />
        
      </>
    </BrowserRouter>
  );
};
