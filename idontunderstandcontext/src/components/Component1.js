import { useContext } from "react"
import { UserContext } from "../common/UserProvider"

export const Component1 = () =>{
    //using context
    const user = useContext(UserContext)
    return <div>{user}</div>
}