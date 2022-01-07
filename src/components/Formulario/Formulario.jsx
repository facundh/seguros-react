import React, { useEffect, useState } from "react";
import { SeguroConsumer } from "../../Context/SegurosProvider";
import { getCarModel, getPrice, getYearArray } from "../../helper/Helper";
import Cotizacion from "../Cotizacion/Cotizacion";
import { Input } from "../UI/Input";
import { Select } from "../UI/Select";
import "./formulario.css";

const Formulario = () => {
  
  const [cotizacion, setCotizacion] = useState({
    tipo: "",
    marca: "",
    año:[],
    plan:""
  });

  const { marca, tipo, año, plan } = cotizacion;
  const {cotizado, seguroCotizado} = SeguroConsumer();
  // useEffect(() => {
  //   getPrice(2021, 'americano', 'premium')
  // })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCotizacion({
      ...cotizacion,
      [name]: value,
    });
  };

  const handleCotizar = (e) => {
    e.preventDefault();
    seguroCotizado(cotizacion);
    setCotizacion({
      tipo: "",
      marca: "",
      año: "",
      plan:""
    });

  }


  return (

    <>
    <div className="contenedor container w-50 m-auto my-2 rounded-3">
      <form className="container w-50 my-auto py-4" onSubmit={handleCotizar}>
        <h2 className="text-center text-light display-7 text-uppercase">
          Cotiza el seguro de tu Automovil
        </h2>
        <div className="row w-75 mx-auto text-white my-5  text-center">
          <Select
            className="col-md-12"
            label="Tipo"
            required={true}
            value={tipo}
            options={["americano", "europeo", "asiatico"]}
            // Recordar que el name siempre va en string
            name="tipo"
            onChange={handleInputChange}
          />
          <Select
            className="col-md-12"
            label="Marca"
            required={true}
            value={marca}
            options={getCarModel(tipo)}
            // Recordar que el name siempre va en string
            name="marca"
            onChange={handleInputChange}
          />
          <Select
            className="col-md-12"
            label="Año"
            required={true}
            value={año}
            options={getYearArray(2010)}
            // Recordar que el name siempre va en string
            name="año"
            onChange={handleInputChange}
          />
      <div className="my-5  mx-auto d-flex justify-content-center">
          <Input 
            className='form-check px-5 col-12 col-md-4'
            type='radio'
            name='plan'
            label='Basico'
            value={'basico'}
            labelClassName={'form-check-label'}
            inputClassName={'form-check-input'}
            onChange={handleInputChange}
          />
          <Input 
            className='form-check px-5 col-12 col-md-4'
            type='radio'
            name='plan'
            label='Medium'
            value={'premium'}
            labelClassName={'form-check-label'}
            inputClassName={'form-check-input'}
            onChange={handleInputChange}
          />
          <Input 
            className='form-check px-5 col-12 col-md-4'
            type='radio'
            name='plan'
            label='Premium'
            value={'premium'}
            labelClassName={'form-check-label'}
            inputClassName={'form-check-input'}
            onChange={handleInputChange}
          />
          </div>
         
          <Input 
            className='col-12'
            type='submit'
            name='plan'
            value={'Cotizar'}
            inputClassName={'btn btn-primary w-100 my-3'}
            
          />
        </div>
      </form>
    </div>

    {(Object.keys(cotizado).length > 0) && <Cotizacion />}
    </>
  );
};

export default Formulario;
