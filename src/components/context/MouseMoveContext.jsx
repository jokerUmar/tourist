import { useState } from "react";
import { createContext } from "react";

export const MouseMOveContext = createContext()

export const MouseMoveProvider = ({children}) =>{

    const [moveMouse, setMoveMouse] = useState(false);


    return(
        <MouseMOveContext.Provider value={{moveMouse,setMoveMouse}}>
            {children}
        </MouseMOveContext.Provider>
    )

}