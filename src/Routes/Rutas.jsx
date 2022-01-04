import React from 'react'
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Cotizacion from '../pages/Cotizacion';
import Landing from '../pages/Landing';

const Rutas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/cotizacion' element={<Cotizacion />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas;





