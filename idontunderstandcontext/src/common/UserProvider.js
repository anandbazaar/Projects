import { createContext,useState } from "react";

//create context
export const UserContext = createContext()
//create provider
export const UserProvider = ({children}) =>{
    //create value
    const [user,setUser] = useState('james');
    return(
        //wrapping children with value
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

