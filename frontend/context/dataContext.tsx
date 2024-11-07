"use client"

import { createContext, useState } from "react";

export const dataContext = createContext<any>(null);

export const DataContextProvider = ({ children }:any) => {
    const [data,setData] = useState<any>(null)
    // const [playingSong, setPlayingSong] = useState<any>(null)
    const [search, setSearch] = useState<string>("")

    return (
        <dataContext.Provider value={{ data,setData,search,setSearch }}>
            {children}
        </dataContext.Provider>
    );
}
    