import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import { InicioScreen } from "../components/InicioScreen";
import { Nav } from "../components/ui/Nav";
import { Footer } from "../components/ui/Footer";
import { WhatsAppIcon } from "../components/ui/WhatsAppIcon";


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <div className="container">
          <WhatsAppIcon />
          <Routes>
            <Route path="/" element={<InicioScreen />} />
          </Routes>
        </div>
        <Footer />
      </>
    </BrowserRouter>
  );
};
