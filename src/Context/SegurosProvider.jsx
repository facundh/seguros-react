import React, { createContext, useContext } from 'react';

const SeguroContext = createContext();
export const SeguroConsumer = () => useContext(SeguroContext);

const SegurosProvider = ({children}) => {
    return (
        <SeguroContext.Provider>
            {children}
        </SeguroContext.Provider>
    )
}

export default SegurosProvider;
