import React, { createContext, useContext, useState } from "react";
import { getCarModel, getPrice, getYearArray } from "../helper/Helper";

const SeguroContext = createContext();
export const SeguroConsumer = () => useContext(SeguroContext);

const SegurosProvider = ({ children }) => {

    

    const [cotizado, setCotizado] = useState({});

    const seguroCotizado = (cotizacion) => {
        setCotizado( cotizacion);
    }


  return (
    <SeguroContext.Provider
      value={{ cotizado, seguroCotizado }}
    >
      {children}
    </SeguroContext.Provider>
  );
};

export default SegurosProvider;
