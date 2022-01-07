import React, { useEffect, useState } from "react";
import { SeguroConsumer } from "../../Context/SegurosProvider";
import Resultado from "../Resultado/Resultado";
import Spinner from "../Spinner/Spinner";

const Cotizacion = () => {
  const { cotizado } = SeguroConsumer();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(cotizado).length){
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  }, [cotizado]);

 

  return (
    <>
      <div className=" bg-dark text-light w-50 mx-auto text-center py-3 rounded-3">
        {loading ? <Spinner /> :  <Resultado cotizado={cotizado} /> }
      </div>
    </>
  );
};

export default Cotizacion;
