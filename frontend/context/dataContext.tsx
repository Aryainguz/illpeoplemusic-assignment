"use client"

import { createContext, useState } from "react";

export const dataContext = createContext<any>(null);

export const DataContextProvider = ({ children }:any) => {
    const [data,setData] = useState<any>(null)

    return (
        <dataContext.Provider value={{ data,setData }}>
            {children}
        </dataContext.Provider>
    );
}
    