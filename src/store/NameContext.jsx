
import { createContext, useContext, useState } from "react";

const NameContext = createContext();

export const ContextProvider = ({children}) => {
  // Hier wird states deklariert
//   beispiele 
const [number, setNumber]=useState(3)

  // Hier Handler-functionen

  return (<NameContext.Provider value={{number,setNumber}}>
    {children}
    </NameContext.Provider>)
};

const store = () => useContext(NameContext);

export default store;
