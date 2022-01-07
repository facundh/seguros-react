import React from "react";
import { getPrice } from "../../helper/Helper";

const Resultado = ( {cotizado} ) => {

const {plan, año, marca, tipo} = cotizado;
const result = getPrice(año,tipo,plan);
  return (
    <>
      <h3>El seguro que cotizaste</h3>
      <div className="d-flex justify-content-center">

      <ul style={{ listStyle:'none', margin:'auto', width:'90%'}}>
        <li className="text-dark bg-light border my-3">{año}</li>
        <li className="text-dark bg-light border my-3" >{marca}</li>
        <li className="text-dark bg-light border my-3">{plan}</li>
      </ul>
      </div>

      <h2>
          <p className=" text-danger">Total a pagar: U$D {result}</p>
      </h2>
    </>
  );
};

export default Resultado;
