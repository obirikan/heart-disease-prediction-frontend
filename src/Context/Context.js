import { createContext, useState } from "react";

export const Values=createContext()

const Context=({children})=>{
const [name,setname]=useState('')
const [result,setresult]=useState()
    return(
        <Values.Provider value={{
          name,
          setname,
          result,
          setresult
          }}> 
          {children}
        </Values.Provider>
    )
}

export default Context