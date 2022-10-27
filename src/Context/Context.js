import { createContext, useState } from "react";

export const Values=createContext()

const Context=({children})=>{
  const[cart,setCart]=useState([])
    return(
        <Values.Provider value={{cart,setCart}}> 
          {children}
        </Values.Provider>
    )
}

export default Context