import { Children, createContext, useState } from "react";

export const HiddenContext = createContext({});
export const HiddenProvider = ({children}) =>{
    const [hidden, stateChange] = useState(true)
const changeState = () =>{
    stateChange(!hidden)
}
return(
    <HiddenContext.Provider value={{hidden,changeState}}>
        {children}
    </HiddenContext.Provider>
)
}