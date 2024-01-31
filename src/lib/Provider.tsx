"use client"

import React, { createContext, ReactNode, useContext, useState } from "react";

interface Props {
    children: ReactNode
}

interface IStates {
    sidemenu: boolean;
    setSidemenu: React.Dispatch<React.SetStateAction<boolean>>
}

const ccontext = createContext<IStates>({
    sidemenu: false,
    setSidemenu: () => { }
})

export const useCContext = () => useContext(ccontext);

export const PProvider = ({ children }: Props) => {
    const [sidemenu, setSidemenu] = useState<boolean>(false)

    return (
        <ccontext.Provider value={{ sidemenu, setSidemenu }}>{children}</ccontext.Provider>
    )
}