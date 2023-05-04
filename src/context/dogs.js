'use client';

import { createContext, useContext, useState } from 'react';

const DogsContext = createContext({})

export const DogsContextProvider = ({ children }) => {

    const [dogsInfo, setDogsInfo] = useState({
        dogs: []
    });

    return (
        <DogsContext.Provider value={{ dogsInfo, setDogsInfo }}>
            {children}
        </DogsContext.Provider>
    )
};

export const useDogsContext = () => useContext(DogsContext);