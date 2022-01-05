import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SegurosProvider from "../Context/SegurosProvider";
import Cotizacion from "../pages/Cotizacion";
import Landing from "../pages/Landing";

const Rutas = () => {
  return (
    <BrowserRouter>
      <SegurosProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cotizacion" element={<Cotizacion />} />
        </Routes>
      </SegurosProvider>
    </BrowserRouter>
  );
};

export default Rutas;
